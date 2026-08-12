/* ============================================================
   Stadsreizen — generieke route-engine
   Verwacht een globale variabele ROUTE_DATA (zie assets/data/*.js)
   ============================================================ */

(function () {
  "use strict";

  if (typeof ROUTE_DATA === "undefined") {
    console.error("ROUTE_DATA ontbreekt — data-bestand niet geladen.");
    return;
  }

  var data = ROUTE_DATA;
  var stops = data.stops;

  // ---------- DOM opbouwen: stop-lijst ----------

  var listEl = document.getElementById("stop-list");
  var mainStopCounter = 0;

  stops.forEach(function (stop, index) {
    if (stop.isMainStop) mainStopCounter++;
    stop._displayNumber = stop.isMainStop ? mainStopCounter : null;

    var li = document.createElement("li");
    li.className = "stop-card" + (stop.isMainStop ? "" : " enroute");
    li.id = "stop-" + stop.id;

    var mediaStyle = stop.image
      ? "background-image:url(&quot;" + stop.image + "&quot;)"
      : "background-image:linear-gradient(135deg,#234d3f,#16332a)";

    var badgeLabel = stop.isMainStop ? stop._displayNumber : "•";

    var credit = stop.imageCredit
      ? '<span class="stop-credit">' + stop.imageCredit + "</span>"
      : "";

    var metaLabel = stop.isMainStop
      ? (stop.walkTimeFromPrevious ? stop.walkTimeFromPrevious : "Start van de route")
      : "Onderweg";

    var mapsUrl =
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(stop.address || stop.name);

    li.innerHTML =
      '<div class="stop-media" style="' + mediaStyle + '">' +
        '<span class="stop-badge">' + badgeLabel + "</span>" +
        credit +
      "</div>" +
      '<div class="stop-content">' +
        '<div class="stop-kicker">' + metaLabel + "</div>" +
        "<h3>" + stop.name + "</h3>" +
        '<div class="stop-meta">' + (stop.address || "") + "</div>" +
        '<div class="stop-text">' +
          (stop.text1 ? "<p>" + stop.text1 + "</p>" : "") +
          (stop.text2 ? "<p>" + stop.text2 + "</p>" : "") +
        "</div>" +
        (stop.praktisch
          ? '<div class="stop-praktisch"><strong>Praktisch</strong>' + stop.praktisch + "</div>"
          : "") +
        '<div class="stop-links">' +
          '<a href="' + mapsUrl + '" target="_blank" rel="noopener">Open in Maps</a>' +
          '<button type="button" data-focus="' + stop.id + '">Toon op kaart</button>' +
        "</div>" +
      "</div>";

    listEl.appendChild(li);
  });

  // ---------- Kaart ----------

  var map = L.map("map", { zoomControl: true, scrollWheelZoom: true }).setView(
    [stops[0].lat, stops[0].lng],
    15
  );

  var streetLayer = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    { maxZoom: 19, attribution: "© OpenStreetMap-bijdragers" }
  ).addTo(map);

  var satLayer = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    { maxZoom: 19, attribution: "Esri, Maxar, Earthstar Geographics" }
  );

  var markers = {};
  var latlngs = [];

  stops.forEach(function (stop, index) {
    var isStart = index === 0;
    var iconClass = stop.isMainStop
      ? "leaflet-div-icon" + (isStart ? " start-marker" : "")
      : "leaflet-div-icon enroute-marker";
    var label = stop.isMainStop ? (isStart ? "S" : stop._displayNumber) : "";

    var icon = L.divIcon({
      className: iconClass,
      html: label,
      iconSize: stop.isMainStop ? [30, 30] : [20, 20],
    });

    var marker = L.marker([stop.lat, stop.lng], { icon: icon }).addTo(map);
    marker.bindPopup(
      "<strong>" + stop.name + "</strong><br>" + (stop.address || "")
    );
    marker.on("click", function () {
      focusStop(stop.id, false);
    });

    markers[stop.id] = marker;
    latlngs.push([stop.lat, stop.lng]);
  });

  var routeLine = null;

  function drawStraightRoute() {
    if (routeLine) map.removeLayer(routeLine);
    routeLine = L.polyline(latlngs, {
      color: "#b6862c",
      weight: 3,
      opacity: 0.75,
      dashArray: "1 8",
    }).addTo(map);
  }

  function drawOsrmRoute() {
    var coordStr = latlngs.map(function (p) { return p[1] + "," + p[0]; }).join(";");
    var url = "https://router.project-osrm.org/route/v1/foot/" + coordStr + "?overview=full&geometries=geojson";

    fetch(url)
      .then(function (r) {
        if (!r.ok) throw new Error("osrm-fout");
        return r.json();
      })
      .then(function (json) {
        if (!json.routes || !json.routes[0]) throw new Error("geen route");
        var coords = json.routes[0].geometry.coordinates.map(function (c) {
          return [c[1], c[0]];
        });
        if (routeLine) map.removeLayer(routeLine);
        routeLine = L.polyline(coords, {
          color: "#234d3f",
          weight: 4,
          opacity: 0.85,
        }).addTo(map);
      })
      .catch(function () {
        drawStraightRoute();
      });
  }

  drawStraightRoute();
  drawOsrmRoute();

  var bounds = L.latLngBounds(latlngs);
  map.fitBounds(bounds, { padding: [40, 40] });

  // ---------- Kaart-toolbar ----------

  var btnStreet = document.getElementById("btn-street");
  var btnSat = document.getElementById("btn-sat");
  var btnFit = document.getElementById("btn-fit");
  var btnGmaps = document.getElementById("btn-gmaps");
  var btnGeo = document.getElementById("btn-geo");
  var geoStatus = document.getElementById("geo-status");

  if (btnStreet) btnStreet.addEventListener("click", function () {
    map.removeLayer(satLayer);
    streetLayer.addTo(map);
    btnStreet.classList.add("active");
    btnSat.classList.remove("active");
  });

  if (btnSat) btnSat.addEventListener("click", function () {
    map.removeLayer(streetLayer);
    satLayer.addTo(map);
    btnSat.classList.add("active");
    btnStreet.classList.remove("active");
  });

  if (btnFit) btnFit.addEventListener("click", function () {
    map.fitBounds(bounds, { padding: [40, 40] });
  });

  if (btnGmaps) {
    var origin = stops[0].address || stops[0].name;
    var destination = origin;
    var waypoints = stops
      .slice(1, -1)
      .map(function (s) { return s.address || s.name; })
      .join("|");
    var gUrl =
      "https://www.google.com/maps/dir/?api=1&origin=" +
      encodeURIComponent(origin) +
      "&destination=" +
      encodeURIComponent(destination) +
      (waypoints ? "&waypoints=" + encodeURIComponent(waypoints) : "") +
      "&travelmode=walking";
    btnGmaps.href = gUrl;
  }

  var userMarker = null;
  var watchId = null;

  if (btnGeo) {
    btnGeo.addEventListener("click", function () {
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
        if (userMarker) { map.removeLayer(userMarker); userMarker = null; }
        geoStatus.querySelector("span").textContent = "Locatie staat uit";
        btnGeo.textContent = "Zet aan";
        return;
      }
      if (!navigator.geolocation) {
        geoStatus.querySelector("span").textContent = "Locatie niet beschikbaar in deze browser";
        return;
      }
      geoStatus.querySelector("span").textContent = "Locatie wordt opgehaald…";
      watchId = navigator.geolocation.watchPosition(
        function (pos) {
          var ll = [pos.coords.latitude, pos.coords.longitude];
          if (!userMarker) {
            userMarker = L.circleMarker(ll, {
              radius: 8,
              color: "#fff",
              weight: 2,
              fillColor: "#2b6ef2",
              fillOpacity: 1,
            }).addTo(map);
          } else {
            userMarker.setLatLng(ll);
          }
          geoStatus.querySelector("span").textContent = "Locatie actief";
          btnGeo.textContent = "Zet uit";
        },
        function () {
          geoStatus.querySelector("span").textContent = "Locatie kon niet worden bepaald";
        },
        { enableHighAccuracy: true, maximumAge: 5000 }
      );
    });
  }

  // ---------- Focus / highlight koppeling lijst <-> kaart ----------

  function focusStop(id, scrollList) {
    Object.keys(markers).forEach(function (key) {
      // no-op placeholder, kept for potential future marker styling by state
    });

    document.querySelectorAll(".stop-card.is-active").forEach(function (el) {
      el.classList.remove("is-active");
    });
    var card = document.getElementById("stop-" + id);
    if (card) {
      card.classList.add("is-active");
      if (scrollList) card.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    var marker = markers[id];
    if (marker) {
      map.panTo(marker.getLatLng(), { animate: true });
      marker.openPopup();
    }
  }

  listEl.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-focus]");
    if (!btn) return;
    focusStop(btn.getAttribute("data-focus"), false);
    document.getElementById("map").scrollIntoView({ behavior: "smooth", block: "start" });
  });
})();
