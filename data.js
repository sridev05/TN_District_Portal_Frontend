
const districts = [
  {
    name_en: "Ariyalur",
    name_ta: "அரியலூர்",
    url: "https://ariyalur.nic.in/",
    tagline: "Land of Cements",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ariyalur_District_Collectorate.jpg/300px-Ariyalur_District_Collectorate.jpg",
    description: "Ariyalur district came into existence on 23rd November 2007 by bifurcation from Perambalur district. Known for its cement factories and limestone deposits, it houses major cement manufacturing units like India Cements and Dalmia Cement.",
    area: "1,949 Sq.Km",
    population: "754,894",
    headquarters: "Ariyalur",
    taluks: "Ariyalur, Sendurai, Udayarpalayam",
    majorTowns: "Ariyalur, Sendurai, Udayarpalayam",
    languages: "Tamil (Official), English",
    literacy: "71.34%",
    attractions: "Gangaikonda Cholapuram, Kumbakonam Temples",
    economy: "Cement manufacturing, Agriculture, Limestone mining"
  },
  {
    name_en: "Chengalpattu",
    name_ta: "செங்கல்பட்டு",
    url: "https://chengalpattu.nic.in/",
    tagline: "Lake District of Tamil Nadu",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Chengalpattu_District_Collectorate.jpg/300px-Chengalpattu_District_Collectorate.jpg",
    description: "Chengalpattu district came into existence on 29th November 2019 when carved out from Kanchipuram district. Known for its numerous lakes, water bodies, and proximity to Chennai making it a major residential hub.",
    area: "2,944.989 Sq.Km",
    population: "2,556,244",
    headquarters: "Chengalpattu",
    taluks: "Chengalpattu, Cheyyur, Maduranthakam, Pallavaram, Tambaram, Thiruporur",
    majorTowns: "Chengalpattu, Tambaram, Chrompet, Pallavaram, Maduranthakam",
    languages: "Tamil (Official), English",
    literacy: "85.10%",
    attractions: "Vedanthangal Bird Sanctuary, Kelambakkam Beach, Kovalam Beach",
    economy: "IT Services, Manufacturing, Agriculture, Real Estate"
  },
  {
    name_en: "Chennai",
    name_ta: "சென்னை",
    url: "https://chennai.nic.in/",
    tagline: "Gateway of South India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Chennai_Ripon_Building.jpg/300px-Chennai_Ripon_Building.jpg",
    description: "Chennai is the capital and largest city of Tamil Nadu. Known as the 'Detroit of India' for its automobile industry and major IT hub. Home to numerous multinational corporations and cultural institutions.",
    area: "426 Sq.Km",
    population: "4,681,087",
    headquarters: "Chennai",
    taluks: "Chennai (North), Chennai (South), Chennai (Central)",
    majorTowns: "T. Nagar, Anna Nagar, Adyar, Velachery, OMR",
    languages: "Tamil (Official), English, Telugu, Malayalam",
    literacy: "90.18%",
    attractions: "Marina Beach, Fort St. George, Kapaleeshwarar Temple, Government Museum",
    economy: "IT Services, Automobile Manufacturing, Healthcare, Port Operations"
  },
  {
    name_en: "Coimbatore",
    name_ta: "கோயம்புத்தூர்",
    url: "https://coimbatore.nic.in/",
    tagline: "Manchester of South India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Coimbatore_Corporation_Building.jpg/300px-Coimbatore_Corporation_Building.jpg",
    description: "Known as the textile capital of South India, Coimbatore is one of the most industrialized cities in Tamil Nadu. Major hub for textiles, engineering, and information technology industries.",
    area: "7,469 Sq.Km",
    population: "3,458,045",
    headquarters: "Coimbatore",
    taluks: "Coimbatore (North), Coimbatore (South), Pollachi, Valparai, Sulur, Mettupalayam",
    majorTowns: "Coimbatore, Pollachi, Mettupalayam, Valparai, Tirupur",
    languages: "Tamil (Official), English, Malayalam, Kannada",
    literacy: "84.00%",
    attractions: "Marudhamalai Temple, Dhyanalinga Temple, Monkey Falls, Valparai Hill Station",
    economy: "Textiles, Engineering, IT Services, Agriculture, Tourism"
  },
  {
    name_en: "Cuddalore",
    name_ta: "கடலூர்",
    url: "https://cuddalore.nic.in/",
    tagline: "Sugar Bowl of Tamil Nadu",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cuddalore_Port.jpg/300px-Cuddalore_Port.jpg",
    description: "Cuddalore is a coastal district known for its sugar factories, fishing industry, and historic significance. Important port town with chemical and pharmaceutical industries.",
    area: "3,678 Sq.Km",
    population: "2,605,914",
    headquarters: "Cuddalore",
    taluks: "Cuddalore, Chidambaram, Kattumannarkoil, Kurinjipadi, Panruti, Tittagudi, Virudhachalam",
    majorTowns: "Cuddalore, Chidambaram, Virudhachalam, Panruti",
    languages: "Tamil (Official), English, Telugu",
    literacy: "76.52%",
    attractions: "Nataraja Temple Chidambaram, Silver Beach, Pichavaram Mangrove Forest",
    economy: "Chemical Industries, Sugar Manufacturing, Fishing, Agriculture"
  },
  {
    name_en: "Dharmapuri",
    name_ta: "தர்மபுரி",
    url: "https://dharmapuri.nic.in/",
    tagline: "Land of Mangoes and Silk",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Hogenakkal_Falls.jpg/300px-Hogenakkal_Falls.jpg",
    description: "Dharmapuri district came into existence on 2nd October 1965. Famous for mango cultivation, silk production, and the spectacular Hogenakkal waterfalls known as 'Niagara of India'.",
    area: "4,497.77 Sq.Km",
    population: "1,506,843",
    headquarters: "Dharmapuri",
    taluks: "Dharmapuri, Harur, Karimangalam, Nallampalli, Palacode, Pennagaram",
    majorTowns: "Dharmapuri, Harur, Palacode, Pennagaram",
    languages: "Tamil (Official), English, Kannada, Telugu",
    literacy: "68.54%",
    attractions: "Hogenakkal Falls, Theerthamalai Temple, Subramanya Siva Memorial",
    economy: "Agriculture (Mango, Silk), Sericulture, Tourism, Mining"
  },
  {
    name_en: "Dindigul",
    name_ta: "திண்டுக்கல்",
    url: "https://dindigul.nic.in/",
    tagline: "Land of Locks and Tannery",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Dindigul_Fort.jpg/300px-Dindigul_Fort.jpg",
    description: "Dindigul is famous for its lock manufacturing industry, leather tanning, and the historic Dindigul Fort built by Tipu Sultan. Also known for its unique biryani preparation.",
    area: "6,266.64 Sq.Km",
    population: "2,159,775",
    headquarters: "Dindigul",
    taluks: "Dindigul (East), Dindigul (West), Kodaikanal, Natham, Nilakkottai, Oddanchatram, Palani, Vedasandur",
    majorTowns: "Dindigul, Kodaikanal, Palani, Oddanchatram",
    languages: "Tamil (Official), English, Malayalam",
    literacy: "76.85%",
    attractions: "Kodaikanal Hill Station, Palani Murugan Temple, Dindigul Fort",
    economy: "Lock Manufacturing, Leather Industry, Tourism, Agriculture"
  },
  {
    name_en: "Erode",
    name_ta: "ஈரோடு",
    url: "https://erode.nic.in/",
    tagline: "Textile Valley of Tamil Nadu",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Erode_Collectorate.jpg/300px-Erode_Collectorate.jpg",
    description: "Erode is known for its textile industry, turmeric cultivation (largest market in Asia), and coconut production. Major center for readymade garments and knitwear.",
    area: "5,722 Sq.Km",
    population: "2,251,744",
    headquarters: "Erode",
    taluks: "Erode, Anthiyur, Bhavani, Gobichettipalayam, Kodumudi, Modakurichi, Perundurai, Sathyamangalam",
    majorTowns: "Erode, Gobichettipalayam, Bhavani, Sathyamangalam",
    languages: "Tamil (Official), English, Kannada",
    literacy: "73.88%",
    attractions: "Sathyamangalam Wildlife Sanctuary, Bhavani Sangameshwarar Temple, Vellode Bird Sanctuary",
    economy: "Textiles, Turmeric Trading, Coconut Processing, Agriculture"
  },
  {
    name_en: "Kallakurichi",
    name_ta: "கள்ளக்குறிச்சி",
    url: "https://kallakurichi.nic.in/",
    tagline: "Home of Agriculture",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Kallakurichi_Collectorate.jpg/300px-Kallakurichi_Collectorate.jpg",
    description: "Kallakurichi district was created on 12th November 2019 from Viluppuram district. Known for its agricultural productivity and scenic beauty with hills and valleys.",
    area: "3,530.58 Sq.Km",
    population: "1,347,204",
    headquarters: "Kallakurichi",
    taluks: "Kallakurichi, Chinnaselam, Kalvarayan Hills, Sankarapuram, Tirukoilur, Ulundurpet",
    majorTowns: "Kallakurichi, Sankarapuram, Tirukoilur, Ulundurpet",
    languages: "Tamil (Official), English, Telugu",
    literacy: "71.89%",
    attractions: "Kalvarayan Hills, Gomukhi Dam, Manimuthar Falls",
    economy: "Agriculture, Horticulture, Small Scale Industries, Tourism"
  },
  {
    name_en: "Kanchipuram",
    name_ta: "காஞ்சிபுரம்",
    url: "https://kanchipuram.nic.in/",
    tagline: "City of Thousand Temples",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Kailasanathar_Temple_Kanchipuram.jpg/300px-Kailasanathar_Temple_Kanchipuram.jpg",
    description: "Kanchipuram is one of the seven sacred cities (Sapta Puri) of Hinduism, famous for its ancient temples and world-renowned Kanchipuram silk sarees. Former capital of the Pallava dynasty.",
    area: "4,432 Sq.Km",
    population: "3,998,252",
    headquarters: "Kanchipuram",
    taluks: "Kanchipuram, Kundrathur, Sriperumbudur, Uthukottai, Walajabad",
    majorTowns: "Kanchipuram, Sriperumbudur, Oragadam, Maraimalai Nagar",
    languages: "Tamil (Official), English, Telugu",
    literacy: "79.36%",
    attractions: "Kamakshi Amman Temple, Ekambareswarar Temple, Varadharaja Perumal Temple",
    economy: "Silk Weaving, IT Services, Automobile Manufacturing, Agriculture"
  },
  {
    name_en: "Kanyakumari",
    name_ta: "கன்னியாகுமரி",
    url: "https://kanyakumari.nic.in/",
    tagline: "Land's End - Southernmost Tip of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Vivekananda_Rock_Memorial_Kanyakumari.jpg/300px-Vivekananda_Rock_Memorial_Kanyakumari.jpg",
    description: "Kanyakumari is the southernmost district of India where three seas meet - Arabian Sea, Bay of Bengal, and Indian Ocean. Famous for its sunrise and sunset views, and spiritual significance.",
    area: "1,672 Sq.Km",
    population: "1,870,374",
    headquarters: "Kanyakumari",
    taluks: "Agastheeswaram, Kalkulam, Thovalai, Vilavancode",
    majorTowns: "Kanyakumari, Nagercoil, Colachel, Padmanabhapuram",
    languages: "Tamil (Official), English, Malayalam",
    literacy: "91.75%",
    attractions: "Vivekananda Rock Memorial, Thiruvalluvar Statue, Padmanabhapuram Palace",
    economy: "Tourism, Fishing, Rubber Plantation, Spices, Handicrafts"
  },
  {
    name_en: "Karur",
    name_ta: "கரூர்",
    url: "https://karur.nic.in/",
    tagline: "Textile City of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Karur_Collectorate.jpg/300px-Karur_Collectorate.jpg",
    description: "Karur is globally known for its home textile industry, particularly bed linens, curtains, and furnishings that are exported worldwide. Ancient capital of the Chera dynasty.",
    area: "2,895.57 Sq.Km",
    population: "1,064,493",
    headquarters: "Karur",
    taluks: "Karur, Aravakurichi, Kadavur, Krishnarayapuram, Kulithalai",
    majorTowns: "Karur, Aravakurichi, Kulithalai, Krishnarayapuram",
    languages: "Tamil (Official), English",
    literacy: "75.57%",
    attractions: "Kalyana Pasupatheeswarar Temple, Mayanur Dam, Thirumurugananpandian Temple",
    economy: "Home Textiles, Handloom, Agriculture, Small Scale Industries"
  },
  {
    name_en: "Krishnagiri",
    name_ta: "கிருஷ்ணகிரி",
    url: "https://krishnagiri.nic.in/",
    tagline: "Land of Mangoes and Roses",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Krishnagiri_Dam.jpg/300px-Krishnagiri_Dam.jpg",
    description: "Krishnagiri is famous for mango cultivation (especially the Alphonso variety), floriculture, and granite quarrying. The district has numerous dams and is known for its pleasant climate.",
    area: "5,143 Sq.Km",
    population: "1,879,809",
    headquarters: "Krishnagiri",
    taluks: "Krishnagiri, Bargur, Denkanikottai, Hosur, Pochampalli, Shoolagiri, Uthangarai",
    majorTowns: "Krishnagiri, Hosur, Denkanikottai, Pochampalli",
    languages: "Tamil (Official), English, Kannada, Telugu",
    literacy: "71.46%",
    attractions: "Krishnagiri Dam, Rayakottai Fort, Kelevarapalli Dam",
    economy: "Horticulture (Mango), Floriculture, Granite Mining, Sericulture"
  },
  {
    name_en: "Madurai",
    name_ta: "மதுரை",
    url: "https://madurai.nic.in/",
    tagline: "Athens of the East",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Meenakshi_Amman_Temple_Madurai.jpg/300px-Meenakshi_Amman_Temple_Madurai.jpg",
    description: "Madurai is one of the oldest continuously inhabited cities in the world, famous for the magnificent Meenakshi Amman Temple. Known as the cultural capital of Tamil Nadu with rich literary and architectural heritage.",
    area: "3,741.73 Sq.Km",
    population: "3,038,252",
    headquarters: "Madurai",
    taluks: "Madurai (East), Madurai (West), Kalligudi, Melur, Peraiyur, Thirumangalam, Tiruparankundram, Usilampatti, Vadipatti",
    majorTowns: "Madurai, Melur, Usilampatti, Peraiyur",
    languages: "Tamil (Official), English",
    literacy: "81.56%",
    attractions: "Meenakshi Amman Temple, Thirumalai Nayakkar Mahal, Alagar Hills, Gandhi Memorial Museum",
    economy: "Tourism, Agriculture, Textiles, Small Scale Industries, Jasmine Cultivation"
  },
  {
    name_en: "Mayiladuthurai",
    name_ta: "மயிலாடுதுறை",
    url: "https://mayiladuthurai.nic.in/",
    tagline: "Temple Town of Tamil Nadu",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Mayuranathaswami_Temple_Mayiladuthurai.jpg/300px-Mayuranathaswami_Temple_Mayiladuthurai.jpg",
    description: "Mayiladuthurai district was carved out from Nagapattinam district on 24th March 2020. Known for its ancient temples, particularly the Mayuranathaswami Temple, and rich cultural heritage.",
    area: "1,166.57 Sq.Km",
    population: "918,356",
    headquarters: "Mayiladuthurai",
    taluks: "Mayiladuthurai, Kuthalam, Sirkazhi",
    majorTowns: "Mayiladuthurai, Sirkazhi, Kuthalam",
    languages: "Tamil (Official), English",
    literacy: "83.21%",
    attractions: "Mayuranathaswami Temple, Vaitheeswaran Koil, Sirkazhi Thoniappar Temple",
    economy: "Agriculture, Temple Tourism, Small Scale Industries, Handloom"
  },
  {
    name_en: "Nagapattinam",
    name_ta: "நாகப்பட்டினம்",
    url: "https://nagapattinam.nic.in/",
    tagline: "Port City Heritage",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Nagapattinam_Beach.jpg/300px-Nagapattinam_Beach.jpg",
    description: "Nagapattinam is a historic port city on the Coromandel Coast, known for its Buddhist heritage, fishing industry, and being one of the most affected areas during the 2004 tsunami.",
    area: "2,715.83 Sq.Km",
    population: "1,616,450",
    headquarters: "Nagapattinam",
    taluks: "Nagapattinam, Kilvelur, Thirukkuvalai, Vedaranyam",
    majorTowns: "Nagapattinam, Vedaranyam, Kilvelur, Thirukkuvalai",
    languages: "Tamil (Official), English",
    literacy: "79.81%",
    attractions: "Nagore Dargah, Point Calimere Wildlife Sanctuary, Danish Fort",
    economy: "Fishing, Salt Production, Agriculture, Port Activities, Tourism"
  },
  {
    name_en: "Namakkal",
    name_ta: "நாமக்கல்",
    url: "https://namakkal.nic.in/",
    tagline: "Egg City of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Namakkal_Fort_and_Temple.jpg/300px-Namakkal_Fort_and_Temple.jpg",
    description: "Namakkal is famous for its poultry industry, egg production, and transportation business. Known for the Namakkal Fort and Anjaneyar Temple carved out of a single rock.",
    area: "3,368.21 Sq.Km",
    population: "1,726,601",
    headquarters: "Namakkal",
    taluks: "Namakkal, Kolli Hills, Kumarapalayam, Mohanur, Paramathi-Velur, Rasipuram, Senthamangalam, Tiruchengode",
    majorTowns: "Namakkal, Tiruchengode, Rasipuram, Kolli Hills",
    languages: "Tamil (Official), English",
    literacy: "74.63%",
    attractions: "Kolli Hills, Namakkal Fort, Anjaneyar Temple, Siddhar Caves",
    economy: "Poultry Industry, Transportation, Agriculture, Egg Production"
  },
  {
    name_en: "Nilgiris",
    name_ta: "நீலகிரி",
    url: "https://nilgiris.nic.in/",
    tagline: "Queen of Hill Stations",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Ooty_Lake_Nilgiris.jpg/300px-Ooty_Lake_Nilgiris.jpg",
    description: "The Nilgiris (Blue Mountains) is the only hill district in Tamil Nadu, famous for Ooty (Udhagamandalam), tea plantations, and pleasant climate throughout the year.",
    area: "2,549.67 Sq.Km",
    population: "735,394",
    headquarters: "Udhagamandalam (Ooty)",
    taluks: "Udhagamandalam, Coonoor, Gudalur, Panthalur",
    majorTowns: "Ooty, Coonoor, Kotagiri, Gudalur",
    languages: "Tamil (Official), English, Malayalam, Kannada, Telugu",
    literacy: "85.20%",
    attractions: "Ooty Lake, Botanical Gardens, Nilgiri Mountain Railway, Doddabetta Peak",
    economy: "Tourism, Tea Plantation, Horticulture, Essential Oils"
  },
  {
    name_en: "Perambalur",
    name_ta: "பெரம்பலூர்",
    url: "https://perambalur.nic.in/",
    tagline: "Land of Sugarcane",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Perambalur_Collectorate.jpg/300px-Perambalur_Collectorate.jpg",
    description: "Perambalur district was formed on 30th September 1995. Known for sugarcane cultivation, cement industries, and rich historical heritage with several ancient temples.",
    area: "1,752.40 Sq.Km",
    population: "565,223",
    headquarters: "Perambalur",
    taluks: "Perambalur, Alathur, Kunnam, Veppanthattai",
    majorTowns: "Perambalur, Alathur, Kunnam, Veppanthattai",
    languages: "Tamil (Official), English",
    literacy: "69.34%",
    attractions: "Arulmigu Brahmapureeswarar Temple, Vayalur Murugan Temple, Pachamalai Hills",
    economy: "Sugar Industry, Cement Manufacturing, Agriculture, Small Scale Industries"
  },
  {
    name_en: "Pudukkottai",
    name_ta: "புதுக்கோட்டை",
    url: "https://pudukkottai.nic.in/",
    tagline: "Land of Temples and Arts",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Pudukkottai_Palace.jpg/300px-Pudukkottai_Palace.jpg",
    description: "Pudukkottai was a former princely state, known for its rich cultural heritage, classical music tradition, and ancient rock-cut temples. Famous for Bharatanatyam and Carnatic music.",
    area: "4,663 Sq.Km",
    population: "1,618,345",
    headquarters: "Pudukkottai",
    taluks: "Pudukkottai, Alangudi, Aranthangi, Avudaiyarkoil, Gandarvakottai, Iluppur, Karambakudi, Kulathur, Manamelkudi, Ponnamaravathi, Thirumayam, Viralimalai",
    majorTowns: "Pudukkottai, Aranthangi, Avudaiyarkoil, Gandarvakottai",
    languages: "Tamil (Official), English",
    literacy: "75.14%",
    attractions: "Sittanavasal Cave Paintings, Thirumayam Fort, Brahadambal Temple",
    economy: "Agriculture, Handicrafts, Cement Industry, Salt Production"
  },
  {
    name_en: "Ramanathapuram",
    name_ta: "இராமநாதபுரம்",
    url: "https://ramanathapuram.nic.in/",
    tagline: "Gateway to Rameswaram",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Ramanathaswamy_Temple_Rameswaram.jpg/300px-Ramanathaswamy_Temple_Rameswaram.jpg",
    description: "Ramanathapuram district is famous for the holy island of Rameswaram, one of the Char Dham pilgrimage sites. Known for its fisheries, salt production, and religious tourism.",
    area: "4,123.08 Sq.Km",
    population: "1,353,445",
    headquarters: "Ramanathapuram",
    taluks: "Ramanathapuram, Kadaladi, Kamuthi, Kilakarai, Mudukulathur, Paramakudi, Rameswaram, Tiruvadanai",
    majorTowns: "Ramanathapuram, Rameswaram, Paramakudi, Mudukulathur",
    languages: "Tamil (Official), English",
    literacy: "77.37%",
    attractions: "Ramanathaswamy Temple, Pamban Bridge, Dhanushkodi, A.P.J. Abdul Kalam House",
    economy: "Fishing Industry, Salt Production, Tourism, Seaweed Cultivation"
  },
  {
    name_en: "Ranipet",
    name_ta: "ராணிப்பேட்டை",
    url: "https://ranipet.nic.in/",
    tagline: "Leather Hub of South India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Ranipet_Collectorate.jpg/300px-Ranipet_Collectorate.jpg",
    description: "Ranipet district was carved out from Vellore district on 26th September 2019. Known for its leather industry, tanning, and footwear manufacturing. Major industrial hub.",
    area: "2,080.53 Sq.Km",
    population: "1,210,277",
    headquarters: "Ranipet",
    taluks: "Ranipet, Arcot, Sholinghur, Walajah",
    majorTowns: "Ranipet, Arcot, Walajah, Sholinghur",
    languages: "Tamil (Official), English, Telugu, Urdu",
    literacy: "75.08%",
    attractions: "Arcot Fort, Sholinghur Temple, Vellore Fort (nearby), Jalakandeswarar Temple",
    economy: "Leather Industry, Footwear Manufacturing, Engineering, Agriculture"
  },
  {
    name_en: "Salem",
    name_ta: "சேலம்",
    url: "https://salem.nic.in/",
    tagline: "Steel City of Tamil Nadu",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Salem_Steel_Plant.jpg/300px-Salem_Steel_Plant.jpg",
    description: "Salem is known as the 'Steel City' due to Salem Steel Plant. Famous for silver ornaments, mangoes, and textiles. Major industrial center with steel, textiles, and sago industries.",
    area: "5,245 Sq.Km",
    population: "3,482,056",
    headquarters: "Salem",
    taluks: "Salem, Attur, Edappadi, Gangavalli, Kadayampatti, Mettur, Omalur, Pethanayakanpalayam, Salem West, Sankari, Vazhapadi, Yercaud",
    majorTowns: "Salem, Mettur, Attur, Yercaud, Omalur",
    languages: "Tamil (Official), English, Kannada",
    literacy: "73.07%",
    attractions: "Yercaud Hill Station, Mettur Dam, Kiliyur Falls, Shevaroy Temple",
    economy: "Steel Industry, Textiles, Sago Manufacturing, Silver Ornaments, Tourism"
  },
  {
    name_en: "Sivaganga",
    name_ta: "சிவகங்கை",
    url: "https://sivaganga.nic.in/",
    tagline: "Land of Valor",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Sivaganga_Palace.jpg/300px-Sivaganga_Palace.jpg",
    description: "Sivaganga district is historically significant as the stronghold of freedom fighter Velu Nachiyar and Marudu Brothers. Known for its palaces, temples, and agricultural productivity.",
    area: "4,189.40 Sq.Km",
    population: "1,339,101",
    headquarters: "Sivaganga",
    taluks: "Sivaganga, Devakottai, Ilayankudi, Kalayarkoil, Karaikudi, Manamadurai, Singampunari, Thirupuvanam, Tirupathur",
    majorTowns: "Sivaganga, Karaikudi, Devakottai, Manamadurai",
    languages: "Tamil (Official), English",
    literacy: "79.49%",
    attractions: "Chettinad Mansions, Sivaganga Palace, Piranmalai Hills, Thirumayam Fort",
    economy: "Agriculture, Handloom, Chettinad Cuisine Industry, Handicrafts"
  },
  {
    name_en: "Tenkasi",
    name_ta: "தென்காசி",
    url: "https://tenkasi.nic.in/",
    tagline: "Gateway to Western Ghats",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Courtallam_Falls.jpg/300px-Courtallam_Falls.jpg",
    description: "Tenkasi district was formed on 4th November 2019 from Tirunelveli district. Famous for Courtallam (Kutralam) waterfalls, spice cultivation, and handloom textiles.",
    area: "5,444.63 Sq.Km",
    population: "1,407,627",
    headquarters: "Tenkasi",
    taluks: "Tenkasi, Alangulam, Kadayanallur, Sankaranainar Koil, Shenkottai, Sivagiri, Thiruvengadam, Veerakeralampudur",
    majorTowns: "Tenkasi, Sankaranainarkoil, Shenkottai, Kadayanallur",
    languages: "Tamil (Official), English, Malayalam",
    literacy: "81.96%",
    attractions: "Courtallam Falls, Agasthiyar Falls, Mundanthurai Tiger Reserve",
    economy: "Spice Cultivation, Handloom, Tourism, Agriculture, Forest Products"
  },
  {
    name_en: "Thanjavur",
    name_ta: "தஞ்சாவூர்",
    url: "https://thanjavur.nic.in/",
    tagline: "Rice Bowl of Tamil Nadu",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Brihadeeswara_Temple_Thanjavur.jpg/300px-Brihadeeswara_Temple_Thanjavur.jpg",
    description: "Thanjavur is the cultural capital of Tamil Nadu, home to the magnificent Brihadeeswara Temple (UNESCO World Heritage Site). Known as the 'Rice Bowl' due to fertile Cauvery delta.",
    area: "3,396.57 Sq.Km",
    population: "2,405,890",
    headquarters: "Thanjavur",
    taluks: "Thanjavur, Boothalur, Kumbakonam, Orathanadu, Papanasam, Pattukkottai, Peravurani, Thiruvaiyaru, Thiruvidaimarudur",
    majorTowns: "Thanjavur, Kumbakonam, Pattukkottai, Thiruvaiyaru",
    languages: "Tamil (Official), English, Telugu",
    literacy: "77.95%",
    attractions: "Brihadeeswara Temple, Thanjavur Palace, Saraswathi Mahal Library, Schwartz Church",
    economy: "Agriculture (Rice), Art and Crafts, Tourism, Classical Music and Dance"
  },
  {
    name_en: "Theni",
    name_ta: "தேனி",
    url: "https://theni.nic.in/",
    tagline: "Gateway to High Ranges",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Meghamalai_Hills_Theni.jpg/300px-Meghamalai_Hills_Theni.jpg",
    description: "Theni district came into existence on 31st October 1996. Known for cardamom cultivation, textile industry, and beautiful hill stations like Meghamalai.",
    area: "2,889.49 Sq.Km",
    population: "1,245,899",
    headquarters: "Theni",
    taluks: "Theni, Andipatti, Bodinayakanur, Periyakulam, Uthamapalayam",
    majorTowns: "Theni, Periyakulam, Bodinayakanur, Cumbum",
    languages: "Tamil (Official), English, Malayalam",
    literacy: "77.26%",
    attractions: "Meghamalai Hills, Suruli Falls, Kumbakkarai Falls, Vaigai Dam",
    economy: "Cardamom Cultivation, Textiles, Grapes, Hill Station Tourism"
  },
  {
    name_en: "Thoothukudi",
    name_ta: "தூத்துக்குடி",
    url: "https://thoothukudi.nic.in/",
    tagline: "Pearl City of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Thoothukudi_Port.jpg/300px-Thoothukudi_Port.jpg",
    description: "Thoothukudi (Tuticorin) is known as the 'Pearl City' for its pearl diving industry. Major port city with salt production, thermal power plant, and chemical industries.",
    area: "4,621.61 Sq.Km",
    population: "1,750,176",
    headquarters: "Thoothukudi",
    taluks: "Thoothukudi, Eral, Ettayapuram, Kayathar, Kovilpatti, Ottapidaram, Sattankulam, Srivaikuntam, Tiruchendur, Vilathikulam",
    majorTowns: "Thoothukudi, Kovilpatti, Tiruchendur, Ettayapuram",
    languages: "Tamil (Official), English",
    literacy: "86.16%",
    attractions: "Tiruchendur Murugan Temple, Roche Park, Kalakkad Wildlife Sanctuary",
    economy: "Port Operations, Salt Production, Pearl Diving, Chemical Industries, Thermal Power"
  },
  {
    name_en: "Tiruchirappalli",
    name_ta: "திருச்சிராப்பள்ளி",
    url: "https://tiruchirappalli.nic.in/",
    tagline: "Rock Fort City",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Rockfort_Temple_Trichy.jpg/300px-Rockfort_Temple_Trichy.jpg",
    description: "Tiruchirappalli (Trichy) is famous for the Rock Fort Temple, Srirangam Ranganathaswamy Temple (largest functioning Hindu temple), and as an educational hub with premier institutions.",
    area: "4,403.83 Sq.Km",
    population: "2,722,290",
    headquarters: "Tiruchirappalli",
    taluks: "Tiruchirappalli (East), Tiruchirappalli (West), Lalgudi, Manachanallur, Manapparai, Marungapuri, Musiri, Srirangam, Thottiam, Thurayur",
    majorTowns: "Tiruchirappalli, Srirangam, Lalgudi, Musiri",
    languages: "Tamil (Official), English, Telugu",
    literacy: "83.23%",
    attractions: "Rock Fort Temple, Sri Ranganathaswamy Temple, Jambukeswarar Temple, Kallanai Dam",
    economy: "Education Services, Engineering Industries, Agriculture, Tourism"
  },
  {
    name_en: "Tirunelveli",
    name_ta: "திருநெல்வேலி",
    url: "https://tirunelveli.nic.in/",
    tagline: "Oxford of South India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Nellaiappar_Temple_Tirunelveli.jpg/300px-Nellaiappar_Temple_Tirunelveli.jpg",
    description: "Tirunelveli is known as the 'Oxford of South India' due to its educational institutions. Famous for Halwa (sweet), ancient temples, and agricultural productivity.",
    area: "6,823.31 Sq.Km",
    population: "3,077,233",
    headquarters: "Tirunelveli",
    taluks: "Tirunelveli, Ambasamudram, Cheranmahadevi, Manur, Nanguneri, Palayankottai, Radhapuram",
    majorTowns: "Tirunelveli, Palayankottai, Ambasamudram, Cheranmahadevi",
    languages: "Tamil (Official), English, Malayalam",
    literacy: "82.50%",
    attractions: "Nellaiappar Temple, Agasthiyar Falls, Papanasam Falls, Kalakkad Mundanthurai Tiger Reserve",
    economy: "Agriculture, Education Services, Rice Mills, Handloom, Tourism"
  },
  {
    name_en: "Tirupattur",
    name_ta: "திருப்பத்தூர்",
    url: "https://tirupattur.nic.in/",
    tagline: "Leather Export Hub",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Tirupattur_Collectorate.jpg/300px-Tirupattur_Collectorate.jpg",
    description: "Tirupattur district was formed on 4th November 2019 from Vellore district. Known for leather exports, footwear manufacturing, and agricultural productivity.",
    area: "5,108.46 Sq.Km",
    population: "2,511,812",
    headquarters: "Tirupattur",
    taluks: "Tirupattur, Ambur, Natrampalli, Vaniyambadi",
    majorTowns: "Tirupattur, Ambur, Vaniyambadi, Natrampalli",
    languages: "Tamil (Official), English, Telugu, Urdu",
    literacy: "72.59%",
    attractions: "Yelagiri Hills, Jalagandeeswarar Temple, Ambur Fort, Vaniyambadi Mosque",
    economy: "Leather Industry, Footwear Exports, Agriculture, Horticulture"
  },
  {
    name_en: "Tiruppur",
    name_ta: "திருப்பூர்",
    url: "https://tiruppur.nic.in/",
    tagline: "Knitwear Capital of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Tiruppur_Textile_Industry.jpg/300px-Tiruppur_Textile_Industry.jpg",
    description: "Tiruppur is globally known as the 'Knitwear Capital of India', contributing significantly to the country's textile exports. Major hub for cotton knitwear and hosiery.",
    area: "5,186.34 Sq.Km",
    population: "2,479,052",
    headquarters: "Tiruppur",
    taluks: "Tiruppur (North), Tiruppur (South), Avinashi, Dharapuram, Kangeyam, Madathukulam, Palladam, Udumalpet",
    majorTowns: "Tiruppur, Dharapuram, Udumalpet, Avinashi",
    languages: "Tamil (Official), English, Telugu, Malayalam",
    literacy: "73.65%",
    attractions: "Amaravathi Crocodile Farm, Thirumoorthy Hills and Dam, Kodiveri Dam",
    economy: "Knitwear Manufacturing, Textile Exports, Dyeing Industries, Cotton Processing"
  },
  {
    name_en: "Tiruvallur",
    name_ta: "திருவள்ளூர்",
    url: "https://tiruvallur.nic.in/",
    tagline: "Gateway to Chennai",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Tiruvallur_Temple.jpg/300px-Tiruvallur_Temple.jpg",
    description: "Tiruvallur district surrounds Chennai and serves as its satellite town. Known for the Veeraraghavaswamy Temple and as a major residential and industrial hub.",
    area: "3,422.22 Sq.Km",
    population: "3,728,104",
    headquarters: "Tiruvallur",
    taluks: "Tiruvallur, Ambattur, Avadi, Gummidipundi, Pallipattu, Ponneri, Poonamallee, R.K. Pet, Tiruttani, Uthukottai",
    majorTowns: "Tiruvallur, Avadi, Ambattur, Poonamallee, Thiruttani",
    languages: "Tamil (Official), English, Telugu",
    literacy: "84.03%",
    attractions: "Veeraraghavaswamy Temple, Pulicat Lake, Thiruttani Temple, Veerapuram Bird Sanctuary",
    economy: "Manufacturing Industries, IT Services, Agriculture, Real Estate"
  },
  {
    name_en: "Tiruvannamalai",
    name_ta: "திருவண்ணாமலை",
    url: "https://tiruvannamalai.nic.in/",
    tagline: "Spiritual Capital of Tamil Nadu",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Arunachaleswarar_Temple_Tiruvannamalai.jpg/300px-Arunachaleswarar_Temple_Tiruvannamalai.jpg",
    description: "Tiruvannamalai is one of the Pancha Bhoota Stalams representing fire (Agni). Famous for Arunachaleswarar Temple, Ramana Maharshi Ashram, and the sacred Annamalai Hill.",
    area: "6,191.73 Sq.Km",
    population: "2,464,875",
    headquarters: "Tiruvannamalai",
    taluks: "Tiruvannamalai, Arni, Chengam, Chetpet, Jamunamarathur, Kalasapakkam, Kilpennathur, Polur, Thandrampet, Vandavasi, West Arani",
    majorTowns: "Tiruvannamalai, Arni, Polur, Vandavasi, Chengam",
    languages: "Tamil (Official), English, Telugu",
    literacy: "69.75%",
    attractions: "Arunachaleswarar Temple, Ramana Maharshi Ashram, Sathanur Dam, Gingee Fort",
    economy: "Agriculture, Spirituality Tourism, Groundnut Processing, Handloom"
  },
  {
    name_en: "Tiruvarur",
    name_ta: "திருவாரூர்",
    url: "https://tiruvarur.nic.in/",
    tagline: "Cultural Capital of Cauvery Delta",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Thyagarajaswamy_Temple_Tiruvarur.jpg/300px-Thyagarajaswamy_Temple_Tiruvarur.jpg",
    description: "Tiruvarur is renowned for the Thyagarajaswamy Temple and as the birthplace of Saint Thyagaraja, the great composer of Carnatic music. Known for classical music and dance traditions.",
    area: "2,377.63 Sq.Km",
    population: "1,264,277",
    headquarters: "Tiruvarur",
    taluks: "Tiruvarur, Kodavasal, Mannargudi, Nannilam, Needamangalam, Thiruthuraipoondi, Valangaiman",
    majorTowns: "Tiruvarur, Mannargudi, Thiruthuraipoondi, Needamangalam",
    languages: "Tamil (Official), English, Telugu",
    literacy: "77.28%",
    attractions: "Thyagarajaswamy Temple, Mannargudi Rajagopalaswamy Temple, Oduthurai",
    economy: "Agriculture (Rice), Classical Music, Handloom, Salt Production"
  },
  {
    name_en: "Vellore",
    name_ta: "வேலூர்",
    url: "https://vellore.nic.in/",
    tagline: "Fort City and Medical Hub",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Vellore_Fort.jpg/300px-Vellore_Fort.jpg",
    description: "Vellore is famous for the historic Vellore Fort, Christian Medical College (premier medical institution), and leather industry. Known for its educational and healthcare facilities.",
    area: "6,077.24 Sq.Km",
    population: "3,936,331",
    headquarters: "Vellore",
    taluks: "Vellore, Arakkonam, Gudiyatham, K.V. Kuppam, Katpadi, Pernambut",
    majorTowns: "Vellore, Katpadi, Gudiyatham, Arakkonam",
    languages: "Tamil (Official), English, Telugu, Urdu",
    literacy: "79.17%",
    attractions: "Vellore Fort, Golden Temple (Sripuram), Jalagandeeswarar Temple, Government Museum",
    economy: "Healthcare Services, Education, Leather Industry, Agriculture"
  },
  {
    name_en: "Viluppuram",
    name_ta: "விழுப்புரம்",
    url: "https://viluppuram.nic.in/",
    tagline: "Land of Handloom",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Viluppuram_Collectorate.jpg/300px-Viluppuram_Collectorate.jpg",
    description: "Viluppuram is known for its handloom industry, particularly cotton weaving. Important railway junction connecting Chennai to southern districts.",
    area: "7,194.21 Sq.Km",
    population: "3,458,873",
    headquarters: "Viluppuram",
    taluks: "Viluppuram, Gingee, Kandachipuram, Marakkanam, Melmalaiyanur, Olakkur, Tindivanam, Vanur, Vikravandi",
    majorTowns: "Viluppuram, Tindivanam, Gingee, Vikravandi",
    languages: "Tamil (Official), English, Telugu",
    literacy: "70.93%",
    attractions: "Gingee Fort, Thiruvakkarai Temple, Mailam Temple, Mamallapuram (nearby)",
    economy: "Handloom Industry, Agriculture, Railway Services, Salt Production"
  },
  {
    name_en: "Virudhunagar",
    name_ta: "விருதுநகர்",
    url: "https://virudhunagar.nic.in/",
    tagline: "Cracker City of India",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Virudhunagar_Collectorate.jpg/300px-Virudhunagar_Collectorate.jpg",
    description: "Virudhunagar is known as the 'Cracker City' for its fireworks industry. Also famous for match manufacturing, printing industry, and as the birthplace of several freedom fighters.",
    area: "4,234.33 Sq.Km",
    population: "1,942,288",
    headquarters: "Virudhunagar",
    taluks: "Virudhunagar, Aruppukottai, Kariapatti, Rajapalayam, Sattur, Sivakasi, Srivilliputtur, Tiruchuli, Vembakottai, Watrap",
    majorTowns: "Virudhunagar, Sivakasi, Rajapalayam, Srivilliputtur",
    languages: "Tamil (Official), English",
    literacy: "80.15%",
    attractions: "Grizzled Squirrel Wildlife Sanctuary, Andal Temple Srivilliputhur, Ayyanar Falls",
    economy: "Fireworks Industry, Match Manufacturing, Printing, Textiles, Agriculture"
  }
];

// 2. Enhanced function to render districts with detailed information
function renderDistricts(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error('Container not found:', containerId);
    return;
  }

  // Clear existing content
  container.innerHTML = '';

  districts.forEach((district, index) => {
    // Create main district card
    const districtCard = document.createElement('div');
    districtCard.className = 'district-card';
    districtCard.setAttribute('data-district', district.name_en.toLowerCase());

    // Create card content
    districtCard.innerHTML = `
      <div class="district-header">
        <div class="district-image-container">
          <img src="${district.image}" alt="${district.name_en} District" class="district-image" loading="lazy" />
          <div class="district-overlay">
            <h2 class="district-name-en">${district.name_en}</h2>
            <h3 class="district-name-ta">${district.name_ta} மாவட்டம்</h3>
            <p class="district-tagline">${district.tagline}</p>
          </div>
        </div>
      </div>
      
      <div class="district-content">
        <div class="district-description">
          <p>${district.description}</p>
        </div>
        
        <div class="district-stats">
          <div class="stat-grid">
            <div class="stat-item">
              <span class="stat-label">Area</span>
              <span class="stat-value">${district.area}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Population</span>
              <span class="stat-value">${district.population}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Headquarters</span>
              <span class="stat-value">${district.headquarters}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Literacy Rate</span>
              <span class="stat-value">${district.literacy}</span>
            </div>
          </div>
        </div>
        
        <div class="district-details">
          <div class="detail-section">
            <h4>Major Towns</h4>
            <p>${district.majorTowns}</p>
          </div>
          
          <div class="detail-section">
            <h4>Languages Spoken</h4>
            <p>${district.languages}</p>
          </div>
          
          <div class="detail-section">
            <h4>Major Attractions</h4>
            <p>${district.attractions}</p>
          </div>
          
          <div class="detail-section">
            <h4>Economy</h4>
            <p>${district.economy}</p>
          </div>
        </div>
        
        <div class="district-actions">
          <a href="${district.url}" target="_blank" class="official-website-btn">
            <i class="icon-external-link"></i>
            Visit Official Website
          </a>
          <button class="more-info-btn" onclick="toggleMoreInfo('${district.name_en.toLowerCase()}')">
            <i class="icon-info"></i>
            More Information
          </button>
        </div>
        
        <div class="district-more-info" id="more-info-${district.name_en.toLowerCase()}" style="display: none;">
          <div class="more-info-content">
            <div class="info-row">
              <span class="info-label">Taluks:</span>
              <span class="info-value">${district.taluks}</span>
            </div>
            <div class="info-row">
              <span class="info-label">District Code:</span>
              <span class="info-value">${String(index + 1).padStart(2, '0')}</span>
            </div>
            <div class="info-row">
              <span class="info-label">State:</span>
              <span class="info-value">Tamil Nadu</span>
            </div>
            <div class="info-row">
              <span class="info-label">Country:</span>
              <span class="info-value">India</span>
            </div>
          </div>
        </div>
      </div>
    `;

    container.appendChild(districtCard);
  });

  // Add summary statistics
  addSummaryStats(container);
}

// 3. Function to toggle more information
function toggleMoreInfo(districtName) {
  const moreInfoDiv = document.getElementById(`more-info-${districtName}`);
  const button = event.target.closest('.more-info-btn');
  
  if (moreInfoDiv.style.display === 'none' || moreInfoDiv.style.display === '') {
    moreInfoDiv.style.display = 'block';
    button.innerHTML = '<i class="icon-info"></i> Less Information';
  } else {
    moreInfoDiv.style.display = 'none';
    button.innerHTML = '<i class="icon-info"></i> More Information';
  }
}

// 4. Function to add summary statistics
function addSummaryStats(container) {
  const totalPopulation = districts.reduce((sum, district) => {
    return sum + parseInt(district.population.replace(/,/g, ''));
  }, 0);

  const totalArea = districts.reduce((sum, district) => {
    return sum + parseFloat(district.area.replace(/[^0-9.]/g, ''));
  }, 0);

  const avgLiteracy = districts.reduce((sum, district) => {
    return sum + parseFloat(district.literacy.replace('%', ''));
  }, 0) / districts.length;

  const summaryDiv = document.createElement('div');
  summaryDiv.className = 'summary-stats';
  summaryDiv.innerHTML = `
    <h2>Tamil Nadu Districts Summary</h2>
    <div class="summary-grid">
      <div class="summary-item">
        <span class="summary-number">${districts.length}</span>
        <span class="summary-label">Total Districts</span>
      </div>
      <div class="summary-item">
        <span class="summary-number">${totalPopulation.toLocaleString()}</span>
        <span class="summary-label">Total Population</span>
      </div>
      <div class="summary-item">
        <span class="summary-number">${totalArea.toFixed(0)}</span>
        <span class="summary-label">Total Area (Sq.Km)</span>
      </div>
      <div class="summary-item">
        <span class="summary-number">${avgLiteracy.toFixed(1)}%</span>
        <span class="summary-label">Average Literacy</span>
      </div>
    </div>
  `;

  container.prepend(summaryDiv);
}

// 5. Search and filter functionality
function initializeSearchAndFilter() {
  const searchInput = document.getElementById('district-search');
  const filterSelect = document.getElementById('district-filter');

  if (searchInput) {
    searchInput.addEventListener('input', function() {
      filterDistricts(this.value, filterSelect ? filterSelect.value : 'all');
    });
  }

  if (filterSelect) {
    filterSelect.addEventListener('change', function() {
      filterDistricts(searchInput ? searchInput.value : '', this.value);
    });
  }
}

// 6. Filter districts based on search and category
function filterDistricts(searchTerm, category) {
  const districtCards = document.querySelectorAll('.district-card');
  
  districtCards.forEach(card => {
    const districtName = card.querySelector('.district-name-en').textContent.toLowerCase();
    const districtContent = card.textContent.toLowerCase();
    
    const matchesSearch = districtName.includes(searchTerm.toLowerCase()) || 
                         districtContent.includes(searchTerm.toLowerCase());
    
    let matchesCategory = true;
    if (category !== 'all') {
      // Add category filtering logic based on your requirements
      // For example: tourism, industrial, coastal, hill station, etc.
    }
    
    if (matchesSearch && matchesCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// 7. Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Tamil Nadu Districts Portal Loading...');
  
  // Render districts
  renderDistricts('districts-container');
  
  // Initialize search and filter
  initializeSearchAndFilter();
  
  // Add scroll animations
  addScrollAnimations();
  
  console.log(`Loaded ${districts.length} districts successfully!`);
});

// 8. Scroll animations
function addScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe all district cards
  setTimeout(() => {
    const districtCards = document.querySelectorAll('.district-card');
    districtCards.forEach(card => {
      observer.observe(card);
    });
  }, 100);
}

// 9. Utility functions
const TamilNaduDistricts = {
  // Get district by name
  getDistrictByName: function(name) {
    return districts.find(district => 
      district.name_en.toLowerCase() === name.toLowerCase() ||
      district.name_ta === name
    );
  },

  // Get districts by region (you can customize this)
  getDistrictsByRegion: function(region) {
    // Add logic to categorize districts by region
    return districts.filter(district => {
      // Implement region-based filtering
      return true;
    });
  },

  // Get all district names
  getAllDistrictNames: function() {
    return districts.map(district => ({
      english: district.name_en,
      tamil: district.name_ta
    }));
  },

  // Export data as JSON
  exportData: function() {
    return JSON.stringify(districts, null, 2);
  }
};

// Make utility functions available globally
window.TamilNaduDistricts = TamilNaduDistricts;
