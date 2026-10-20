/* Chongqing — dag 1 — routedata */
var CHONGQING_DAG1_DATA = {
  meta: {
    title: "Chongqing dag 1: alles op het schiereiland (Yuzhong)",
    subtitle: "Volkshal, Kuixinglou, Jiefangbei, de kabelbaan en Hongya Cave — op volgorde van licht",
    intro: "Deze dag vertrekt vanaf het hotel in Jiefangbei. De Volkshal, Kuixinglou (het flatgebouw bij Liziba), Jiefangbei zelf, de kabelbaan over de Yangtze en Hongya Cave liggen allemaal binnen een paar kilometer van elkaar op het schiereiland Yuzhong. Vanaf het hotel pak je een taxi naar de Volkshal; van de Volkshal naar Kuixinglou is ook een taxirit, de rest is te lopen (of te overbruggen met metrolijn 2, die toevallig ook door het gebouw bij Liziba rijdt) en voert je vanzelf terug langs het hotel. De volgorde hieronder is gekozen op licht: de kabelbaan rond zonsondergang (eind oktober zo rond 18:15 uur), en daarna Hongya Cave zodra de verlichting aangaat, rond 20:00 uur. Val je op een zaterdag in de stad, dan kun je aansluitend vanaf Raffles City/Chaotianmen de droneshow meepikken — ook dat ligt weer op loopafstand van het hotel.",
    distanceKm: 11,
    durationMin: 340,
    stopCount: 7,
    startAddress: "S·island High Altitude River View Hotel, 43rd Floor, Xinhua International, No. 27 Minquan Road, Jiefangbei, Yuzhong District, Chongqing",
    heroImage: "https://upload.wikimedia.org/wikipedia/commons/6/64/202308_Hongya_Cave_at_night_from_Qiansimen_Bridge.jpg",
    profile: "foot",
    travelMode: "walking"
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
      text1: "Dit dagprogramma vertrekt vanaf het hotel, hoog in het Xinhua International-gebouw midden in Jiefangbei — meteen een handige uitvalsbasis, want drie van de latere stops van vandaag (Jiefangbei zelf, de kabelbaan en Hongya Cave) liggen allemaal op loopafstand hiervandaan.",
      text2: "",
      praktisch: "Pak vanaf het hotel een taxi naar de Volkshal om de dag te beginnen (± 10-15 min). Later op de dag, na Jiefangbei, kun je het hotel desgewenst tussendoor weer aandoen."
    },
    {
      id: "peoples-auditorium",
      name: "Volkshal en Volksplein (人民大礼堂)",
      isMainStop: true,
      address: "People's Square, Renmin Road, Yuzhong District, Chongqing",
      lat: 29.5643, lng: 106.5504,
      walkTimeFromPrevious: "± 10-15 min met de taxi vanaf het hotel",
      image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Chongqing_Great_Hall_of_the_People_20240721_135702.jpg",
      imageCredit: "Wikimedia Commons",
      text1: "Deze immense hal met zijn groene, trapsgewijze koepel werd tussen 1951 en 1954 gebouwd in opdracht van maarschalk He Long, als vergaderzaal voor het stadsbestuur en herdenkingsplek voor de troepen die in de regio waren gesneuveld. Het ontwerp combineert een westerse koepelconstructie met de vormentaal van Ming- en Qing-paleizen; de Tempel van de Hemel in Peking was een duidelijke inspiratiebron.",
      text2: "Met een doorsnede van zo'n 46 meter en plaats voor enkele duizenden mensen was het bij de opening een van de grootste overdekte zalen van Azië. Vóór de hal ligt het Volksplein, een van de grootste pleinen van de stad, waar 's avonds buurtbewoners dansen, vliegeren en naar de fonteinen komen kijken.",
      praktisch: "Het plein is gratis en altijd open; de hal zelf is meestal alleen tijdens evenementen toegankelijk. Begin hier 's ochtends of vroeg in de middag, er is nog een flink dagprogramma te gaan."
    },
    {
      id: "kuixinglou-liziba",
      name: "Kuixinglou — de flat waar de metro doorheen rijdt (李子坝)",
      isMainStop: true,
      address: "39 Liziba Zhengjie, Yuzhong District, Chongqing",
      lat: 29.5557, lng: 106.5339,
      walkTimeFromPrevious: "± 10-15 min met de taxi vanaf de Volkshal",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/A_train_of_Chongqing_Rail_Transit_Line_2_coming_through_a_residential_building_at_Liziba.jpg",
      imageCredit: "Wikimedia Commons",
      text1: "Chongqing is zo heuvelachtig en dichtbebouwd dat de stad voor lijn 2 van haar light rail dwars door een woonblok moest bouwen: bij station Liziba rijden de treinen zo de zesde tot achtste verdieping van Kuixinglou in en uit, een negentien verdiepingen tellend flatgebouw. Voor wie op straatniveau instapt, voelt het alsof de trein ergens rond de 22e etage de lucht in rijdt — vandaar de bijnaam die onder reizigers is ontstaan.",
      text2: "Het gebouw combineert sinds de opening in 2004-2005 gewoon wonen met het metrostation: bewoners en passagiers delen dezelfde entree, en de trein dendert zo'n beetje door iemands achtertuin. Het is een van de bekendste voorbeelden van hoe Chongqing zijn beroemde '8D'-stadslandschap gebruikt, waarin wegen, metro's en gebouwen op en door elkaar heen lopen.",
      praktisch: "Het beste zicht op de doorrijdende trein is gratis, vanaf het observatieplatform aan de overkant van de Jialing-rivier. Neem de tijd: de treinen rijden maar om de paar minuten."
    },
    {
      id: "jiefangbei",
      name: "Jiefangbei (解放碑)",
      isMainStop: true,
      address: "Jiefangbei Pedestrian Street, Yuzhong District, Chongqing",
      lat: 29.5585, lng: 106.5767,
      walkTimeFromPrevious: "± 50-60 min lopen vanaf Kuixinglou, of ~10 min met metrolijn 2 naar Linjiangmen/Xiaoshizi",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/%E9%87%8D%E5%BA%86%E8%A7%A3%E6%94%BE%E7%A2%91.jpg",
      imageCredit: "Wikimedia Commons",
      text1: "Dit witte gedenkteken midden in het drukste winkelgebied van Chongqing werd in 1947 opgericht ter ere van de overwinning in de Tweede Chinees-Japanse Oorlog, op de plek van een eerdere, houten luchtalarmtoren uit de oorlogsjaren. Jiefangbei betekent letterlijk 'Bevrijdingsmonument', en gaf zijn naam aan het hele winkel- en zakendistrict eromheen.",
      text2: "Rond het monument ligt een van de drukste voetgangersgebieden van China, met winkelstraten, warenhuizen en de ondergrondse ringweg die het hele verkeer onder de pleinen door leidt. 's Avonds gaan de neonreclames en schermen aan en wordt het een van de levendigste plekken van de stad.",
      praktisch: "Prima plek om wat te eten of te shoppen voordat je verder trekt naar de kabelbaan en Hongya Cave, die allebei op loopafstand liggen."
    },
    {
      id: "yangtze-cableway",
      name: "Kabelbaan over de Yangtze (长江索道)",
      isMainStop: true,
      address: "151 Xinhua Road, Yuzhong District, Chongqing",
      lat: 29.5580, lng: 106.5844,
      walkTimeFromPrevious: "± 10 min lopen vanaf Jiefangbei",
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/%E9%87%8D%E5%BA%86%E9%95%BF%E6%B1%9F%E7%B4%A2%E9%81%93_-_Chongqing_Yangtze_River_Cableway_-_2015.04_-_panoramio.jpg",
      imageCredit: "Wikimedia Commons",
      text1: "Deze kabelbaan over de Yangtze werd in 1987 geopend als eerste passagierskabelbaan over de rivier, in een tijd dat er op deze plek nog geen brug lag. Toen diende hij vooral als woon-werkverbinding tussen de oevers; met de komst van bruggen en metrolijnen verloor hij die functie, maar werd hij juist populair als attractie.",
      text2: "De cabines hangen aan kabels tussen het noordelijke station hier bij Xinhua Road en het zuidelijke station in Nan'an, en bieden onderweg een panorama over de rivier, de wolkenkrabbers van Yuzhong en de bruggen eromheen. Plan je bezoek rond zonsondergang (eind oktober ongeveer 18:15 uur) voor het mooiste licht.",
      praktisch: "Koop de tickets vooraf online: rond zonsondergang loopt de rij voor de kassa op tot wel een uur. Eén overtocht is genoeg, heen en weer hoeft niet."
    },
    {
      id: "hongya-cave",
      name: "Hongya Cave (洪崖洞)",
      isMainStop: true,
      address: "88 Binjiang Road, Jialing River, Yuzhong District, Chongqing",
      lat: 29.5651, lng: 106.5753,
      walkTimeFromPrevious: "± 15 min lopen vanaf de kabelbaan",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/be/Hongya_Cave_31411-Chongqing_%2830793864588%29.jpg",
      imageCredit: "Wikimedia Commons",
      text1: "Hongyadong is een elf verdiepingen hoog complex van traditionele diaojiaolou — huizen op palen — gebouwd tegen de steile oever waar de Jialing in de Yangtze uitmondt. Op deze plek stond al sinds de Ming-dynastie een dorp met dit type palenhuizen; de huidige, sterk uitvergrote versie werd tussen 2004 en 2006 neergezet als winkel-, horeca- en hotelcomplex, met de oude optakhuizen als inspiratiebron.",
      text2: "Omdat het gebouw tegen de helling op is gestapeld, loop je via de bovenste ingang aan de straatkant naar binnen en kom je via roltrappen en passages onderaan bij de rivier weer naar buiten. Rond 20:00 uur gaat de verlichting van alle verdiepingen aan, wat Hongyadong tot een van de meest gefotografeerde plekken van Chongqing maakt — kom dus net voor die tijd aan om het moment zelf mee te maken.",
      praktisch: "Gratis toegankelijk. Het is er 's avonds erg druk, houd rekening met volle roltrappen en gangen."
    },
    {
      id: "raffles-city-optioneel",
      name: "Raffles City / Chaotianmen — optioneel, droneshow op zaterdag",
      isMainStop: true,
      address: "Chaotianmen, Xinhua Road, Yuzhong District, Chongqing",
      lat: 29.5676, lng: 106.5831,
      walkTimeFromPrevious: "± 10-15 min lopen vanaf Hongya Cave",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Raffles_City_Chongqing_from_Yangtze_River.jpg",
      imageCredit: "Wikimedia Commons",
      text1: "Op de landtong van Chaotianmen, waar de Yangtze en de Jialing samenkomen, bouwde architect Moshe Safdie acht torens die via een ruim 300 meter lange, horizontale 'brug' op zo'n 250 meter hoogte met elkaar zijn verbonden: The Crystal, boven op een winkelcentrum van meer dan 200.000 vierkante meter.",
      text2: "Deze stop is alleen de moeite waard als extra: op zaterdagavond wordt er vanaf Chaotianmen regelmatig een droneshow boven de rivier gevlogen. Val je op een zaterdag in Chongqing en heb je na Hongya Cave nog energie over, dan is dit een mooie, korte afsluiter van de avond.",
      praktisch: "Check vooraf (bijvoorbeeld via Amap of lokale social media) of de droneshow die avond ook echt plaatsvindt — het is geen vaste, dagelijkse voorstelling."
    }
  ]
};
