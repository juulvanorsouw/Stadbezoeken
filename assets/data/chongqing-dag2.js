/* Chongqing — dag 2 — routedata */
var CHONGQING_DAG2_DATA = {
  meta: {
    title: "Chongqing dag 2: de buitenwijken, met taxi",
    subtitle: "Ciqikou vroeg in de ochtend, daarna het indoor bos van The Ring in Yubei",
    intro: "Deze dag vertrekt vanaf het hotel in Jiefangbei en ligt verder uit elkaar: vraagt dus om taxiritten. Ciqikou ligt zo'n 30 minuten ten westen van het hotel, The Ring (光环购物公园 Guanghuan, het winkelcentrum met het indoor bos — het 'O-park') ligt daarentegen in Yubei, zo'n 35-40 minuten verderop. Op de terugweg naar het hotel kun je voor een kwartier gratis omrijden langs Liziba/Kuixinglou, als bonus of tweede blik op het gebouw dat je dag 1 al zag. Download voor deze dag Didi (taxi-app, werkt met een buitenlandse betaalkaart) en Amap — Google Maps is in Chongqing onbetrouwbaar, zeker voor een adres als Guanghuan.",
    distanceKm: 47,
    durationMin: 335,
    stopCount: 4,
    startAddress: "S·island High Altitude River View Hotel, 43rd Floor, Xinhua International, No. 27 Minquan Road, Jiefangbei, Yuzhong District, Chongqing",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/e/e3/%E4%BA%BA%E5%A4%B4%E6%94%92%E5%8A%A8%E7%9A%84%E7%A3%81%E5%99%A8%E5%8F%A3.jpg",
    profile: "driving",
    travelMode: "driving"
  },
  stops: [
    {
      id: "hotel",
      name: "S·island High Altitude River View Hotel — startpunt",
      isMainStop: true,
      address: "43rd Floor, Xinhua International, No. 27 Minquan Road, Jiefangbei, Yuzhong District, Chongqing",
      lat: 29.5588, lng: 106.5728,
      walkTimeFromPrevious: null,
      image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Jiefangbei_CBD_20240721.jpg",
      imageCredit: "Wikimedia Commons",
      text1: "Ook deze dag vertrekt vanaf het hotel in Jiefangbei. Vandaag ga je verder de stad uit, dus de taxi staat al klaar voordat je goed en wel ontbeten hebt.",
      text2: "",
      praktisch: "Laat de taxi meteen doorrijden naar Ciqikou (± 30 min); ga liever niet eerst nog ergens anders langs, want hoe eerder je daar bent, hoe rustiger het nog is."
    },
    {
      id: "ciqikou",
      name: "Ciqikou Ancient Town (磁器口)",
      isMainStop: true,
      address: "Ciqikou, Shapingba District, Chongqing",
      lat: 29.5833, lng: 106.4466,
      walkTimeFromPrevious: "± 30 min met de taxi vanaf het hotel",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/%E4%BA%BA%E5%A4%B4%E6%94%92%E5%8A%A8%E7%9A%84%E7%A3%81%E5%99%A8%E5%8F%A3.jpg",
      imageCredit: "Wikimedia Commons",
      text1: "Dit riviergehucht aan de Jialing floreerde al in de Song-dynastie als haven voor de handel in porselein uit de omliggende ovens — vandaar de naam Ciqikou, zoiets als 'poorten van het porselein'. Tot ver in de 20e eeuw voeren hier jonken af en aan met zout, katoen en thee, en groeide het dorp uit tot een van de belangrijkste handelsposten aan de Jialing-rivier.",
      text2: "Het hele blok is tegenwoordig gerestaureerd tot een voetgangersgebied met steile trappenstraten, houten gevels en tientallen eetkraampjes — de in vet gebakken chenmahua (een gedraaide deegtwist) is het bekendste streekproduct. Op de heuveltop staat de boeddhistische Baolun-tempel, en aan het water liggen nog de oude aanlegsteigers.",
      praktisch: "Ga er vroeg in de ochtend heen — later op de dag en zeker in het weekend wordt het er snel erg druk. Reken op 2-3 uur."
    },
    {
      id: "the-ring-guanghuan",
      name: "The Ring / Guanghuan Shopping Park (光环购物公园) — het O-park",
      isMainStop: true,
      address: "Guanghuan Shopping Park, Yuanyang Subdistrict, Liangjiang New Area, Yubei, Chongqing",
      lat: 29.6531, lng: 106.5260,
      walkTimeFromPrevious: "± 35-40 min met de taxi vanaf Ciqikou",
      image: "https://upload.wikimedia.org/wikipedia/commons/1/19/%E9%87%8D%E5%BA%86%E5%85%89%E7%8E%AF%E8%B4%AD%E7%89%A9%E5%85%AC%E5%9B%AD%E5%86%85%E9%83%A8.jpg",
      imageCredit: "Wikimedia Commons",
      text1: "Guanghuan — in het Engels ook wel 'The Ring' of 'Halo Shopping Park' genoemd, vandaar de bijnaam 'O-park' — is een ringvormig winkelcentrum in het noordelijke stadsdeel Yubei, gebouwd rond een binnentuin die volledig is ingericht als tropisch regenwoud onder glas, met tientallen meters hoge bomen, een waterval en duizenden planten.",
      text2: "Het contrast tussen de felgroene, vochtige jungle binnen en de wolkenkrabbers van beton en glas erbuiten maakt dit tot een van de meest gefotografeerde winkelcentra van Chongqing — en een handige, overdekte plek om de hitte of regen even te ontvluchten tussen twee taxiritten door.",
      praktisch: "Let op: Google Maps heeft dit gebouw vaak niet goed staan. Zoek in Didi of Amap op 光环购物公园 (Guanghuan) om zeker te weten dat de taxi op de juiste plek uitkomt — de marker hierboven is bij benadering."
    },
    {
      id: "liziba-bonus",
      name: "Liziba / Kuixinglou — gratis bonusstop onderweg terug",
      isMainStop: true,
      address: "39 Liziba Zhengjie, Yuzhong District, Chongqing",
      lat: 29.5557, lng: 106.5339,
      walkTimeFromPrevious: "onderweg terug richting centrum, geen extra omweg van betekenis",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/A_train_of_Chongqing_Rail_Transit_Line_2_coming_through_a_residential_building_at_Liziba.jpg",
      imageCredit: "Wikimedia Commons",
      text1: "Dit is hetzelfde flatgebouw bij station Liziba dat je op dag 1 als Kuixinglou al zag: metrolijn 2 rijdt hier dwars door de zesde tot achtste verdieping van een woontoren. Omdat het min of meer op de route terug van Yubei naar het centrum ligt, is het de moeite waard om de chauffeur hier een kwartier te laten stoppen.",
      text2: "Een tweede keer langsgaan betekent ook een tweede kans om een trein precies op het juiste moment uit het gebouw te zien rijden, nu misschien met ander licht dan op dag 1.",
      praktisch: "Gratis en vrij kort te doen (± 15 min) vanaf het observatieplatform aan de overkant van de Jialing-rivier. Puur een bonus — sla deze stop gerust over als de dag al vol genoeg is. Vanaf hier is het nog maar een kleine taxirit terug naar het hotel."
    }
  ]
};
