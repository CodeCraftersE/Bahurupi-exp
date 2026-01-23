import { Region, Location, Badge, MasterQuizQuestion } from '../types';

export const MASTER_QUIZ_DATA: MasterQuizQuestion[] = [
  {
    id: 'mq1',
    question: "Which Bengal town is famously associated with the term 'French Riviera of the East'?",
    options: ["Kolkata", "Chandannagar", "Bandel", "Digha"],
    correctAnswer: 1,
    difficulty: 'Medium',
    factoid: "Chandannagar was a French colony until 1950, and its 'Strand' riverside is often compared to French promenades."
  },
  {
    id: 'mq2',
    question: "The 'Baluchari' saree, known for its intricate depictions of mythological scenes, originated in which district?",
    options: ["Bankura", "Murshidabad", "Nadia", "Hooghly"],
    correctAnswer: 1,
    difficulty: 'Expert',
    factoid: "While Bankura (Bishnupur) is the current hub, Baluchari originally originated in Baluchar village in Murshidabad."
  },
  {
    id: 'mq3',
    question: "Which of these is the literal meaning of 'Kolkata'?",
    options: ["The land of Kali", "The field of lime (Chuna)", "Place of the goddess", "The delta mouth"],
    correctAnswer: 1,
    difficulty: 'Expert',
    factoid: "It is believed to be derived from 'Kolikata', which likely stems from 'Khal' (canal) and 'Katta' (dug), or linked to the word for lime (Kalikata)."
  },
  {
    id: 'mq4',
    question: "In the context of the Bengal Famine and literature, who wrote 'Pather Panchali'?",
    options: ["Rabindranath Tagore", "Satyajit Ray", "Bibhutibhushan Bandyopadhyay", "Sarat Chandra"],
    correctAnswer: 2,
    difficulty: 'Medium',
    factoid: "Bibhutibhushan Bandyopadhyay's masterpiece captures the essence of rural Bengal like no other."
  },
  {
    id: 'mq5',
    question: "Which Nobel Laureate from Bengal founded the 'Visva-Bharati' University?",
    options: ["Amartya Sen", "Rabindranath Tagore", "Mother Teresa", "Abhijit Banerjee"],
    correctAnswer: 1,
    difficulty: 'Easy',
    factoid: "Rabindranath Tagore founded Visva-Bharati in Santiniketan as an experimental school in 1901."
  },
  {
    id: 'mq6',
    question: "What is the traditional art of floor painting in Bengal called?",
    options: ["Rangoli", "Alpona", "Madhubani", "Pattachitra"],
    correctAnswer: 1,
    difficulty: 'Easy',
    factoid: "Alpona is the traditional folk art of Bengal, usually made during festivals like Lakshmi Puja."
  },
  {
    id: 'mq7',
    question: "Which iconic bridge in Kolkata is a 'Cantilever' bridge with no pillars in the river bed?",
    options: ["Vidyasagar Setu", "Howrah Bridge (Rabindra Setu)", "Vivekananda Setu", "Bally Bridge"],
    correctAnswer: 1,
    difficulty: 'Medium',
    factoid: "Howrah Bridge is one of the busiest cantilever bridges in the world, connecting Kolkata and Howrah."
  },
  {
    id: 'mq8',
    question: "The Sundarbans, the world's largest mangrove forest, is named after which tree?",
    options: ["Sal", "Sundari", "Teak", "Banyan"],
    correctAnswer: 1,
    difficulty: 'Easy',
    factoid: "Sundari (Heritiera fomes) trees provide the forest its name and are vital to its ecosystem."
  },
  {
    id: 'mq9',
    question: "Which district in West Bengal is world-famous for its 'Fazli' and 'Himsagar' mangoes?",
    options: ["Malda", "Murshidabad", "Nadia", "Birbhum"],
    correctAnswer: 0,
    difficulty: 'Easy',
    factoid: "Malda is the mango capital of Bengal, exporting thousands of tons of high-quality mangoes annually."
  },
  {
    id: 'mq10',
    question: "The 'Baul' music of Bengal is recognized by UNESCO as part of what?",
    options: ["World Heritage Site", "Intangible Cultural Heritage", "Memory of the World", "Biosphere Reserve"],
    correctAnswer: 1,
    difficulty: 'Medium',
    factoid: "Baul music is a unique folk tradition representing the spiritual and philosophical side of rural Bengal."
  },
  {
    id: 'mq11',
    question: "Which place is known as the 'Land of Red Soil' (Lal Matir Desh) in Bengal?",
    options: ["Darjeeling", "Birbhum", "Sundarbans", "Kolkata"],
    correctAnswer: 1,
    difficulty: 'Medium',
    factoid: "Birbhum's laterite soil gives it a distinct red appearance, famously celebrated in Santiniketan's culture."
  },
  {
    id: 'mq12',
    question: "Which Bengali scientist is known as the 'Father of Radio Science'?",
    options: ["Satyendra Nath Bose", "Jagadish Chandra Bose", "Prafulla Chandra Ray", "Meghnad Saha"],
    correctAnswer: 1,
    difficulty: 'Medium',
    factoid: "J.C. Bose pioneered the investigation of radio and microwave optics and was a polymath."
  },
  {
    id: 'mq13',
    question: "Which river is known as the 'Sorrow of Bengal' due to its frequent floods?",
    options: ["Hooghly", "Damodar", "Teesta", "Rupnarayan"],
    correctAnswer: 1,
    difficulty: 'Easy',
    factoid: "Historically, the Damodar River caused devastating floods, though dams have now controlled it."
  },
  {
    id: 'mq14',
    question: "Kolkata's Tram system, started in 1873, holds what distinction in Asia?",
    options: ["Fastest Trams", "Only operating Tram network", "Oldest operating Tram network", "Largest network"],
    correctAnswer: 2,
    difficulty: 'Medium',
    factoid: "The Kolkata Tram is the oldest operating electric tram system in Asia and a symbol of heritage."
  },
  {
    id: 'mq15',
    question: "Which Bengali author wrote the national song 'Vande Mataram'?",
    options: ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Michael Madhusudan Dutt", "Sarat Chandra"],
    correctAnswer: 1,
    difficulty: 'Easy',
    factoid: "Vande Mataram was first published in Bankim Chandra's novel 'Anandamath' in 1882."
  },
  {
    id: 'mq16',
    question: "Which city was the capital of British India until 1911?",
    options: ["Delhi", "Kolkata", "Mumbai", "Chennai"],
    correctAnswer: 1,
    difficulty: 'Easy',
    factoid: "Kolkata served as the center of British administration before the capital moved to New Delhi."
  },
  {
    id: 'mq17',
    question: "Which Bengal revolutionary is famously known as 'Bagha Jatin'?",
    options: ["Jatin Das", "Jatindranath Mukherjee", "Surya Sen", "Rash Behari Bose"],
    correctAnswer: 1,
    difficulty: 'Expert',
    factoid: "He earned the name after killing a tiger with a dhal (dagger) single-handedly."
  },
  {
    id: 'mq18',
    question: "The 'Chhau' dance of Purulia is characterized by the use of what?",
    options: ["Large Masks", "Long Sticks", "Fire", "Puppets"],
    correctAnswer: 0,
    difficulty: 'Medium',
    factoid: "Purulia Chhau is a vibrant martial folk dance where performers wear elaborate handcrafted masks."
  },
  {
    id: 'mq19',
    question: "Which place is the birthplace of Chaitanya Mahaprabhu?",
    options: ["Mayapur", "Nabadwip", "Tarapith", "Dakshineswar"],
    correctAnswer: 1,
    difficulty: 'Medium',
    factoid: "Nabadwip is a sacred town and the 15th-century birthplace of the Vaishnava saint."
  },
  {
    id: 'mq20',
    question: "The 'Victoria Memorial' was built using marble from which place?",
    options: ["Italy", "Makrana, Rajasthan", "Jabalpur", "Portugal"],
    correctAnswer: 1,
    difficulty: 'Medium',
    factoid: "It was built with the same white Makrana marble used for the Taj Mahal."
  },
  {
    id: 'mq21',
    question: "Which forest in North Bengal is famous for the 'Red Panda'?",
    options: ["Gorumara", "Jaldapara", "Singalila National Park", "Buxa Tiger Reserve"],
    correctAnswer: 2,
    difficulty: 'Expert',
    factoid: "Singalila is the highest national park in Bengal and a habitat for the rare Red Panda."
  },
  {
    id: 'mq22',
    question: "Who is known as the 'Father of Bengali Cinema'?",
    options: ["Satyajit Ray", "Hiralal Sen", "Ritwik Ghatak", "Mrinal Sen"],
    correctAnswer: 1,
    difficulty: 'Expert',
    factoid: "Hiralal Sen is credited with making India's first advertising films and early silent features."
  },
  {
    id: 'mq23',
    question: "The battle that established British rule in India (1757) happened where?",
    options: ["Buxar", "Plassey (Palashi)", "Panipat", "Haldighati"],
    correctAnswer: 1,
    difficulty: 'Easy',
    factoid: "The Battle of Plassey saw Robert Clive defeat Nawab Siraj-ud-Daulah, changing India's history."
  }
];

export const LOCATIONS: Location[] = [
  // --- NORTH BENGAL ---
  {
    id: 'nb-darjeeling',
    name: 'Darjeeling',
    bengaliName: 'দার্জিলিং',
    region: Region.NORTH_BENGAL,
    category: 'Nature',
    description: 'The "Queen of the Hills" famous for its tea gardens, the Toy Train, and breathtaking views of the Kanchenjunga range.',
    image: '/assets/places/Darjeeling.jpg',
    tags: ['Mountains', 'Tea', 'UNESCO'],
    quiz: {
      question: "Which UNESCO World Heritage site is located in Darjeeling?",
      options: ["Darjeeling Himalayan Railway", "Victoria Memorial", "Sunderbans", "Bishnupur Temples"],
      correctAnswer: 0
    }
  },
  {
    id: 'nb-kalimpong',
    name: 'Kalimpong',
    bengaliName: 'কালিম্পং',
    region: Region.NORTH_BENGAL,
    category: 'Nature',
    description: 'A serene hill station known for its colonial era-buildings, monasteries, and flower nurseries.',
    image: '/assets/places/kalimpong.jpg',
    tags: ['Orchids', 'Monastery', 'Hills'],
    quiz: {
      question: "What is Kalimpong famously known for globally?",
      options: ["Cactus and Orchids", "Tea leaves", "Silk", "Marble"],
      correctAnswer: 0
    }
  },
  {
    id: 'nb-dooars',
    name: 'Dooars (Gorumara & Jaldapara)',
    bengaliName: 'ডুয়ার্স',
    region: Region.NORTH_BENGAL,
    category: 'Nature',
    description: 'Floodplains and foothills of the eastern Himalayas, home to the One-Horned Rhino.',
    image: '/assets/places/dooars.jpg',
    tags: ['Wildlife', 'Rhino', 'Forest'],
    quiz: {
      question: "Which animal is the prime attraction of Jaldapara National Park?",
      options: ["Royal Bengal Tiger", "One-Horned Rhinoceros", "Snow Leopard", "Red Panda"],
      correctAnswer: 1
    }
  },
  {
    id: 'nb-mirik',
    name: 'Mirik',
    bengaliName: 'মিরিক',
    region: Region.NORTH_BENGAL,
    category: 'Nature',
    description: 'Famous for the Sumendu Lake, Mirik offers tranquil surroundings and orange orchards.',
    image: '/assets/places/mirik.jpg',
    tags: ['Lake', 'Orchards', 'Peaceful'],
    quiz: {
      question: "What is the name of the famous lake in Mirik?",
      options: ["Rabindra Sarobar", "Sumendu Lake", "Nakki Lake", "Tsomgo Lake"],
      correctAnswer: 1
    }
  },
  {
    id: 'nb-kurseong',
    name: 'Kurseong',
    bengaliName: 'কার্শিয়াং',
    region: Region.NORTH_BENGAL,
    category: 'Nature',
    description: 'The "Land of White Orchids", known for its pleasant weather and tea gardens.',
    image: '/assets/places/kurseong.jpg',
    tags: ['Orchids', 'Viewpoint', 'Hills'],
    quiz: {
      question: "What does 'Kurseong' mean in the Lepcha language?",
      options: ["Land of White Orchids", "Place of the Thunderbolt", "The Cold Place", "Village of Tea"],
      correctAnswer: 0
    }
  },
  {
    id: 'nb-sandakphu',
    name: 'Sandakphu',
    bengaliName: 'সান্দাকফু',
    region: Region.NORTH_BENGAL,
    category: 'Nature',
    description: 'The highest peak in West Bengal, offering views of four of the world\'s five highest peaks.',
    image: '/assets/places/sandakphu.jpg',
    tags: ['Trekking', 'Highest Peak', 'Everest View'],
    quiz: {
      question: "From Sandakphu, which of these peaks is visible?",
      options: ["Mount Everest", "Nanda Devi", "Mount Abu", "Anamudi"],
      correctAnswer: 0
    }
  },
  {
    id: 'nb-cooch-behar',
    name: 'Cooch Behar Palace',
    bengaliName: 'কোচবিহার রাজপ্রাসাদ',
    region: Region.NORTH_BENGAL,
    category: 'Heritage',
    description: 'A magnificent palace modeled after Buckingham Palace, reflecting the royal history of the Koch Dynasty.',
    image: '/assets/places/cooch-behar-palace.jpg',
    tags: ['Royal', 'Architecture', 'History'],
    quiz: {
      question: "Which European landmark inspired the architecture of Cooch Behar Palace?",
      options: ["Louvre Museum", "Buckingham Palace", "Versailles", "Colosseum"],
      correctAnswer: 1
    }
  },
  {
    id: 'nb-lava',
    name: 'Lava & Lolegaon',
    bengaliName: 'লাভা ও লোলেগাঁও',
    region: Region.NORTH_BENGAL,
    category: 'Nature',
    description: 'Famous for the canopy walk through old oak and cypress trees in the Neora Valley.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200',
    tags: ['Canopy Walk', 'Foggy', 'Neora Valley'],
    quiz: {
      question: "Which high-altitude walkway attraction is found in Lolegaon?",
      options: ["Glass Bridge", "Canopy Walk", "Ropeway", "Underwater Tunnel"],
      correctAnswer: 1
    }
  },

  // --- SOUTH BENGAL ---
  {
    id: 'sb-chandannagar',
    name: 'Chandannagar',
    bengaliName: 'চন্দননগর',
    region: Region.SOUTH_BENGAL,
    category: 'Heritage',
    description: 'A former French colony on the banks of the Hooghly, known for its unique French architecture.',
    image: '/assets/places/chandannagar.jpg',
    tags: ['French Heritage', 'Riverside', 'History'],
    quiz: {
      question: "Chandannagar was a colony of which European nation?",
      options: ["Britain", "Portugal", "France", "Netherlands"],
      correctAnswer: 2
    }
  },
  {
    id: 'sb-bandel',
    name: 'Bandel',
    bengaliName: 'ব্যান্ডেল',
    region: Region.SOUTH_BENGAL,
    category: 'Heritage',
    description: 'Home to the historic Bandel Church, one of the oldest Christian churches in West Bengal.',
    image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80&w=1200',
    tags: ['Church', 'Portuguese', 'History'],
    quiz: {
      question: "The historic Bandel Church was originally built by which group of settlers?",
      options: ["The French", "The Portuguese", "The British", "The Dutch"],
      correctAnswer: 1
    }
  },
  {
    id: 'sb-taki',
    name: 'Taki',
    bengaliName: 'টাকি',
    region: Region.SOUTH_BENGAL,
    category: 'Nature',
    description: 'A serene town on the Ichamati River, bordering Bangladesh. Famous for its Dashami idol immersion.',
    image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=1200',
    tags: ['River', 'Border', 'Dashami'],
    quiz: {
      question: "Which river flows through Taki, separating India and Bangladesh?",
      options: ["Hooghly", "Ichamati", "Ganga", "Teesta"],
      correctAnswer: 1
    }
  },
  {
    id: 'sb-bardhaman',
    name: 'Bardhaman',
    bengaliName: 'বর্ধমান',
    region: Region.SOUTH_BENGAL,
    category: 'Heritage',
    description: 'Historic city known for Curzon Gate, 108 Shiva Temples, and Sitabhog/Mihidana sweets.',
    image: '/assets/places/bardhaman.jpg',
    tags: ['Temples', 'Sweets', 'Palace'],
    quiz: {
      question: "Which of these famous Bengali sweets originated in Bardhaman?",
      options: ["Rosogolla", "Sitabhog", "Sondesh", "Laddu"],
      correctAnswer: 1
    }
  },
  {
    id: 'sb-kamarpukur',
    name: 'Kamarpukur & Jayrambati',
    bengaliName: 'কামারপুকুর ও জয়রামবাটী',
    region: Region.SOUTH_BENGAL,
    category: 'Spiritual',
    description: 'Birthplaces of Sri Ramakrishna Paramahansa and Sri Sarada Devi.',
    image: '/assets/places/kamarpukur-jairambati.jpg',
    tags: ['Spiritual', 'Ramakrishna', 'Peaceful'],
    quiz: {
      question: "Kamarpukur is the birthplace of which spiritual leader?",
      options: ["Swami Vivekananda", "Sri Ramakrishna Paramahansa", "Chaitanya Mahaprabhu", "Lokenath Brahmachari"],
      correctAnswer: 1
    }
  },
  {
    id: 'sb-deulti',
    name: 'Deulti',
    bengaliName: 'দেউলটি',
    region: Region.SOUTH_BENGAL,
    category: 'Nature',
    description: 'Village on the banks of Rupnarayan river, home to novelist Sarat Chandra Chattopadhyay\'s house.',
    image: '/assets/places/deulti.jpg',
    tags: ['Literature', 'Riverside', 'Village'],
    quiz: {
      question: "Which famous Bengali novelist\'s house is located in Deulti (Samtaber)?",
      options: ["Rabindranath Tagore", "Bankim Chandra", "Sarat Chandra Chattopadhyay", "Bibhutibhushan Bandyopadhyay"],
      correctAnswer: 2
    }
  },

  // --- WESTERN BENGAL ---
  {
    id: 'wb-bishnupur',
    name: 'Bishnupur',
    bengaliName: 'বিষ্ণুপুর',
    region: Region.WESTERN_BENGAL,
    category: 'Heritage',
    description: 'The land of terracotta temples and Baluchari sarees, once the capital of Malla kings.',
    image: '/assets/places/bishnupur.jpg',
    tags: ['Terracotta', 'History', 'Malla Kings'],
    quiz: {
      question: "What unique material is used for the intricate carvings on Bishnupur temples?",
      options: ["Marble", "Terracotta (burnt clay)", "Granite", "Wood"],
      correctAnswer: 1
    }
  },
  {
    id: 'wb-santiniketan',
    name: 'Santiniketan',
    bengaliName: 'শান্তিনিকেতন',
    region: Region.WESTERN_BENGAL,
    category: 'Heritage',
    description: 'The "Abode of Peace" founded by Rabindranath Tagore, seat of Visva-Bharati University.',
    image: '/assets/places/santiniketan.jpg',
    tags: ['Literature', 'Art', 'Tagore'],
    quiz: {
      question: "Who founded the Visva-Bharati University at Santiniketan?",
      options: ["Rabindranath Tagore", "Mahatma Gandhi", "Swami Vivekananda", "Subhas Chandra Bose"],
      correctAnswer: 0
    }
  },
  {
    id: 'wb-purulia',
    name: 'Purulia (Ajodhya Hills)',
    bengaliName: 'পুরুলিয়া (অযোধ্যা পাহাড়)',
    region: Region.WESTERN_BENGAL,
    category: 'Nature',
    description: 'Rugged hills and waterfalls, famous for the Chhau folk dance and tribal heritage.',
    image: '/assets/places/Purulia.jpg',
    tags: ['Hills', 'Chhau Dance', 'Tribal Culture'],
    quiz: {
      question: "Which mask-based folk dance originates from the Purulia region?",
      options: ["Bihu", "Kathak", "Chhau", "Sattriya"],
      correctAnswer: 2
    }
  },
  {
    id: 'wb-mukutmanipur',
    name: 'Mukutmanipur',
    bengaliName: 'মুকুটমণিপুর',
    region: Region.WESTERN_BENGAL,
    category: 'Nature',
    description: 'Located at the confluence of Kangsabati and Kumari rivers, featuring one of India\'s largest earthen dams.',
    image: '/assets/places/mukutmanipur.jpg',
    tags: ['Dam', 'Riverside', 'Serene'],
    quiz: {
      question: "Mukutmanipur is famous for its large ____ dam.",
      options: ["Concrete", "Earthen", "Steel", "Wooden"],
      correctAnswer: 1
    }
  },
  {
    id: 'wb-gangani',
    name: 'Garbeta (Gangani)',
    bengaliName: 'গড়বেতা (গঙ্গনী)',
    region: Region.WESTERN_BENGAL,
    category: 'Nature',
    description: 'Naturally formed red soil canyons on the banks of Shilabati river, known as the "Grand Canyon of Bengal".',
    image: '/assets/places/Garbeta(gangani).jpg',
    tags: ['Canyons', 'Red Soil', 'Nature'],
    quiz: {
      question: "Gangani is often referred to as the ____ of Bengal.",
      options: ["Niagara Falls", "Grand Canyon", "Amazon Forest", "Sahara Desert"],
      correctAnswer: 1
    }
  },
  {
    id: 'wb-jhargram',
    name: 'Jhargram',
    bengaliName: 'ঝাড়গ্রাম',
    region: Region.WESTERN_BENGAL,
    category: 'Heritage',
    description: 'A heritage gem surrounded by Sal and Mahua forests, featuring a majestic Royal Palace.',
    image: '/assets/places/jhargram.jpg',
    tags: ['Forest', 'Royal Palace', 'Tribal'],
    quiz: {
      question: "Jhargram is primarily known for its forests and its ____.",
      options: ["Tea gardens", "Royal Palace", "Floating market", "Snow peaks"],
      correctAnswer: 1
    }
  },

  // --- COASTAL & DELTA BENGAL ---
  {
    id: 'cd-sundarbans',
    name: 'Sundarbans',
    bengaliName: 'সুন্দরবন',
    region: Region.COASTAL_DELTA,
    category: 'Nature',
    description: 'The world\'s largest mangrove forest, home to the Royal Bengal Tiger and a UNESCO World Heritage site.',
    image: '/assets/places/sundarbans.jpg',
    tags: ['Tigers', 'Mangroves', 'UNESCO'],
    quiz: {
      question: "The Sundarbans is the world\'s largest forest of which type?",
      options: ["Rainforest", "Mangrove", "Coniferous", "Deciduous"],
      correctAnswer: 1
    }
  },
  {
    id: 'cd-digha',
    name: 'Digha',
    bengaliName: 'দিঘা',
    region: Region.COASTAL_DELTA,
    category: 'Coastal',
    description: 'Bengal\'s most popular sea resort, famous for its flat, hard beach and Casuarina trees.',
    image: '/assets/places/digha.jpg',
    tags: ['Beach', 'Seafood', 'Weekend Getaway'],
    quiz: {
      question: "Which of these is a characteristic feature of Digha beach?",
      options: ["Hard motorable sand", "Coral reefs", "Volcanic rocks", "White sand"],
      correctAnswer: 0
    }
  },
  {
    id: 'cd-mandarmani',
    name: 'Mandarmani',
    bengaliName: 'মন্দারমণি',
    region: Region.COASTAL_DELTA,
    category: 'Coastal',
    description: 'Seaside resort village known for having one of the longest motorable beaches in India.',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200',
    tags: ['Motorable Beach', 'Resorts', 'Privacy'],
    quiz: {
      question: "What is Mandarmani particularly famous for?",
      options: ["Its long motorable beach", "Tea hills", "Ancient temples", "Snow sports"],
      correctAnswer: 0
    }
  },
  {
    id: 'cd-tajpur',
    name: 'Tajpur',
    bengaliName: 'তাজপুর',
    region: Region.COASTAL_DELTA,
    category: 'Coastal',
    description: 'A secluded beach known for tranquility and the presence of millions of red crabs.',
    image: '/assets/places/tajpur.jpg',
    tags: ['Red Crabs', 'Quiet', 'Nature'],
    quiz: {
      question: "Millions of which colorful creatures are found on Tajpur beach?",
      options: ["Blue butterflies", "Red crabs", "Yellow fish", "Green turtles"],
      correctAnswer: 1
    }
  },
  {
    id: 'cd-bakkhali',
    name: 'Bakkhali',
    bengaliName: 'বকখালি',
    region: Region.COASTAL_DELTA,
    category: 'Coastal',
    description: 'Located on a deltaic island, featuring a unique S-shaped beach and windmills.',
    image: '/assets/places/bakkhali.jpg',
    tags: ['Island', 'S-Beach', 'Windmills'],
    quiz: {
      question: "Bakkhali beach has a unique shape resembling which letter?",
      options: ["U", "L", "S", "Z"],
      correctAnswer: 2
    }
  },
  {
    id: 'cd-gangasagar',
    name: 'Sagar Island (Gangasagar)',
    bengaliName: 'সাগর দ্বীপ (গঙ্গাসাগর)',
    region: Region.COASTAL_DELTA,
    category: 'Spiritual',
    description: 'A sacred island at the confluence of Ganga and Bay of Bengal, hosting the Gangasagar Mela.',
    image: '/assets/places/Sagar-Island.jpg',
    tags: ['Pilgrimage', 'Mela', 'Confluence'],
    quiz: {
      question: "Gangasagar Mela is held during which festival?",
      options: ["Holi", "Makar Sankranti", "Diwali", "Durga Puja"],
      correctAnswer: 1
    }
  },

  // --- CENTRAL BENGAL ---
  {
    id: 'cb-murshidabad',
    name: 'Murshidabad',
    bengaliName: 'মুর্শিদাবাদ',
    region: Region.CENTRAL_BENGAL,
    category: 'Heritage',
    description: 'The historic capital of Bengal during the Nawabi era, home to Hazarduari Palace.',
    image: '/assets/places/murshidabad.jpg',
    tags: ['Nawabi', 'History', 'Palace'],
    quiz: {
      question: "Hazarduari Palace in Murshidabad literally translates to a palace with how many doors?",
      options: ["100", "500", "1000", "2000"],
      correctAnswer: 2
    }
  },
  {
    id: 'cb-mayapur',
    name: 'Mayapur',
    bengaliName: 'মায়াপুর',
    region: Region.CENTRAL_BENGAL,
    category: 'Spiritual',
    description: 'Global headquarters of ISKCON, located at the heart of Nadia district.',
    image: '/assets/places/mayapur.jpg',
    tags: ['Spiritual', 'Temple', 'ISKCON'],
    quiz: {
      question: "Mayapur is the headquarters of which global spiritual organization?",
      options: ["Ramakrishna Mission", "ISKCON", "Art of Living", "Brahmo Samaj"],
      correctAnswer: 1
    }
  },
  {
    id: 'cb-nabadwip',
    name: 'Nabadwip',
    bengaliName: 'নবদ্বীপ',
    region: Region.CENTRAL_BENGAL,
    category: 'Spiritual',
    description: 'A holy town and center of Sanskrit learning, birthplace of Chaitanya Mahaprabhu.',
    image: '/assets/places/nabadwip.jpg',
    tags: ['Spiritual', 'Education', 'Chaitanya'],
    quiz: {
      question: "Which 15th-century spiritual leader was born in Nabadwip?",
      options: ["Sri Ramakrishna", "Chaitanya Mahaprabhu", "Lokenath Brahmachari", "Anandamayi Ma"],
      correctAnswer: 1
    }
  },
  {
    id: 'cb-plassey',
    name: 'Plassey (Palashi)',
    bengaliName: 'পলাশী',
    region: Region.CENTRAL_BENGAL,
    category: 'Heritage',
    description: 'The historic site of the Battle of Plassey (1757) which paved the way for British rule in India.',
    image: '/assets/places/plassey.jpg',
    tags: ['History', 'Battleground', 'Colonial'],
    quiz: {
      question: "In which year did the historic Battle of Plassey take place?",
      options: ["1757", "1857", "1764", "1947"],
      correctAnswer: 0
    }
  },
  {
    id: 'cb-malda',
    name: 'Malda (Gaur & Pandua)',
    bengaliName: 'মালদা (গৌড় ও পাণ্ডুয়া)',
    region: Region.CENTRAL_BENGAL,
    category: 'Heritage',
    description: 'Home to medieval capitals of Bengal with ruins like Adina Mosque and Bara Sona Mosque.',
    image: '/assets/places/malda.jpg',
    tags: ['Medieval', 'Mosque', 'Ruins'],
    quiz: {
      question: "Adina Mosque, once the largest in India, is located in which district?",
      options: ["Murshidabad", "Malda", "Nadia", "Birbhum"],
      correctAnswer: 1
    }
  },

  // --- KOLKATA & GREATER KOLKATA ---
  {
    id: 'kol-science-city',
    name: 'Science City',
    bengaliName: 'সায়েন্স সিটি',
    region: Region.KOLKATA,
    category: 'Urban',
    description: 'Largest science center in the Indian subcontinent, featuring space odyssey and time machine.',
    image: '/assets/places/science-city.jpg',
    tags: ['Science', 'Space', 'Education'],
    quiz: {
      question: "Which city houses the largest science center in the Indian subcontinent?",
      options: ["Delhi", "Mumbai", "Kolkata", "Bangalore"],
      correctAnswer: 2
    }
  },
  {
    id: 'kol-indian-museum',
    name: 'Indian Museum',
    bengaliName: 'ভারতীয় সংগ্রহালয়',
    region: Region.KOLKATA,
    category: 'Heritage',
    description: 'Oldest and largest museum in India, housing rare antiques and an Egyptian mummy.',
    image: '/assets/places/indian-museum.jpg',
    tags: ['Museum', 'Antiques', 'Oldest'],
    quiz: {
      question: "The Indian Museum in Kolkata, the oldest in India, was established in which year?",
      options: ["1814", "1947", "1857", "1905"],
      correctAnswer: 0
    }
  },
  {
    id: 'kol-st-pauls',
    name: 'St. Paul’s Cathedral',
    bengaliName: 'সেন্ট পলস ক্যাথিড্রাল',
    region: Region.KOLKATA,
    category: 'Heritage',
    description: 'An Anglican cathedral noted for its Indo-Gothic architecture and stained glass.',
    image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80&w=1200',
    tags: ['Cathedral', 'Indo-Gothic', 'Peaceful'],
    quiz: {
      question: "What architectural style is St. Paul\'s Cathedral built in?",
      options: ["Baroque", "Indo-Gothic", "Art Deco", "Modernist"],
      correctAnswer: 1
    }
  },
  {
    id: 'kol-kalighat',
    name: 'Kalighat Kali Temple',
    bengaliName: 'কালীঘাট কালী মন্দির',
    region: Region.KOLKATA,
    category: 'Spiritual',
    description: 'One of the 51 Shakti Peethas, dedicated to Goddess Kali, a major pilgrimage site.',
    image: '/assets/places/kalighat-kali-temple.jpg',
    tags: ['Temple', 'Shakti Peetha', 'Pilgrimage'],
    quiz: {
      question: "Kalighat is considered one of the ____ Shakti Peethas.",
      options: ["12", "51", "108", "7"],
      correctAnswer: 1
    }
  },
  {
    id: 'kol-jorasanko',
    name: 'Jorasanko Thakur Bari',
    bengaliName: 'জোড়াসাঁকো ঠাকুরবাড়ি',
    region: Region.KOLKATA,
    category: 'Heritage',
    description: 'Ancestral home of the Tagore family and birthplace of Rabindranath Tagore.',
    image: '/assets/places/jorasanko-thakurbari.jpg',
    tags: ['Tagore', 'Renaissance', 'Literature'],
    quiz: {
      question: "Jorasanko Thakur Bari is the ancestral home of which Nobel laureate?",
      options: ["Amartya Sen", "C.V. Raman", "Mother Teresa", "Rabindranath Tagore"],
      correctAnswer: 3
    }
  },
  {
    id: 'kol-botanical',
    name: 'Botanical Garden (Shibpur)',
    bengaliName: 'বোটানিক্যাল গার্ডেন',
    region: Region.KOLKATA,
    category: 'Nature',
    description: 'Famous for the Great Banyan Tree, which has one of the largest canopy covers in the world.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200',
    tags: ['Banyan Tree', 'Garden', 'Flora'],
    quiz: {
      question: "The Botanical Garden in Shibpur is famous for which giant tree?",
      options: ["Great Oak", "Great Banyan", "Sacred Fig", "Royal Palm"],
      correctAnswer: 1
    }
  },
  {
    id: 'kol-victoria',
    name: 'Victoria Memorial',
    region: Region.KOLKATA,
    category: 'Heritage',
    description: 'A large white marble building built in memory of Queen Victoria, now a museum and iconic symbol of Kolkata.',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&q=80&w=1200',
    tags: ['Museum', 'History', 'Kolkata'],
    quiz: {
      question: "What style of architecture is the Victoria Memorial built in?",
      options: ["Indo-Saracenic Revival", "Gothic", "Modernist", "Art Deco"],
      correctAnswer: 0
    }
  }
];

export const INITIAL_BADGES: Badge[] = [
  { id: 'explorer-1', name: 'Mangrove Scout', icon: '🐾', unlocked: false, criteria: 'Explore Coastal Bengal regions' },
  { id: 'heritage-1', name: 'Terracotta Titan', icon: '🏛️', unlocked: false, criteria: 'Visit 3 Heritage sites' },
  { id: 'foodie-1', name: 'Rosogolla King', icon: '🍯', unlocked: false, criteria: 'Explore Kolkata food trails' },
  { id: 'himalaya-1', name: 'Mountain Nomad', icon: '🏔️', unlocked: false, criteria: 'Explore 3 North Bengal locations' }
];
