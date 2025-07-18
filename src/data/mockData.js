// src/data/mockData.js
import sigiriya from '../assets/pexels-srkportraits-10710561.jpg'
import ella from '../assets/pexels-genine-alyssa-pedreno-andrada-1263127-2403209.jpg'
import gall from '../assets/pexels-eslames1-32326657.jpg'
import yala from '../assets/pexels-buwanekab-17281950.jpg'
import kandy from '../assets/pexels-chathura-anuradha-subasinghe-599124-14041994.jpg'
import mirissa from '../assets/pexels-ollivves-1005417.jpg'
export const destinations = [
  {
    id: 1,
    name: "baththaramulla",
    location: "Central Province",
    category: "Historical",
    rating: 4.9,
    image: sigiriya,
    shortDescription: "Ancient rock fortress with stunning frescoes and panoramic views",
    description: "Sigiriya is an ancient rock fortress located in the northern Matale District near the town of Dambulla. It is a UNESCO World Heritage Site and one of the best-preserved examples of ancient urban planning. The site dates back to the reign of King Kasyapa (477 – 495 AD), who built his palace on top of this rock and decorated its sides with colorful frescoes.",
    highlights: [
      "Lion's Paw entrance",
      "Ancient frescoes",
      "Mirror Wall",
      "Water gardens",
      "Panoramic views from the summit"
    ],
    bestTime: "November to April",
    guidesAvailable: 12
  },
  {
    id: 2,
    name: "Ella",
    location: "Uva Province",
    category: "Nature",
    rating: 4.8,
    image: ella,
    shortDescription: "Scenic mountain town with waterfalls, tea plantations, and hiking trails",
    description: "Ella is a small town in the Badulla District of Uva Province, Sri Lanka. Surrounded by hills covered with cloud forests and tea plantations, the town has a cooler climate than surrounding lowlands. Ella has become a popular tourist destination due to its scenic beauty and hiking opportunities.",
    highlights: [
      "Ella Rock hike",
      "Nine Arch Bridge",
      "Ravana Falls",
      "Tea plantation tours",
      "Little Adam's Peak"
    ],
    bestTime: "January to March",
    guidesAvailable: 8
  },
  {
    id: 3,
    name: "Galle Fort",
    location: "Southern Province",
    category: "Cultural",
    rating: 4.7,
    image: gall,
    shortDescription: "Historic fortified city with Dutch colonial architecture",
    description: "Galle Fort is a UNESCO World Heritage Site, originally built by the Portuguese in the 16th century and then extensively fortified by the Dutch during the 17th century. It's a historical, archaeological and architectural heritage monument, which even after more than 400 years maintains a polished appearance, due to extensive reconstruction work done by Archaeological Department of Sri Lanka.",
    highlights: [
      "Dutch Reformed Church",
      "Galle Lighthouse",
      "Maritime Museum",
      "Old Dutch Hospital shopping precinct",
      "Fort ramparts walk"
    ],
    bestTime: "December to March",
    guidesAvailable: 15
  },
  {
    id: 4,
    name: "Yala National Park",
    location: "Southern Province",
    category: "Wildlife",
    rating: 4.8,
    image: yala,
    shortDescription: "Sri Lanka's most visited national park with leopards and elephants",
    description: "Yala National Park is the most visited and second largest national park in Sri Lanka. The park consists of five blocks, two of which are now open to the public, and also adjoining parks. The park is best known for its variety of wildlife and is important conservation area for many species.",
    highlights: [
      "Leopard sightings",
      "Elephant herds",
      "Bird watching (over 200 species)",
      "Ancient rock formations",
      "Coastal scenery"
    ],
    bestTime: "February to July",
    guidesAvailable: 10
  },
  {
    id: 5,
    name: "Kandy",
    location: "Central Province",
    category: "Cultural",
    rating: 4.6,
    image: kandy,
    shortDescription: "Sacred city with the Temple of the Tooth and cultural shows",
    description: "Kandy is a major city in Sri Lanka located in the Central Province. It was the last capital of the ancient kings' era of Sri Lanka. The city lies in the midst of hills in the Kandy plateau, which crosses an area of tropical plantations, mainly tea. Kandy is both an administrative and religious city and is also the capital of the Central Province.",
    highlights: [
      "Temple of the Sacred Tooth Relic",
      "Royal Botanical Garden",
      "Kandy Lake",
      "Cultural dance performances",
      "Traditional crafts markets"
    ],
    bestTime: "December to April",
    guidesAvailable: 18
  },
  {
    id: 6,
    name: "Mirissa Beach",
    location: "Southern Province",
    category: "Beach",
    rating: 4.7,
    image: mirissa,
    shortDescription: "Tropical paradise with whale watching and surfing",
    description: "Mirissa is a small town on the south coast of Sri Lanka, located in the Matara District of the Southern Province. It is approximately 150 kilometres south of Colombo and is situated at an elevation of 4 metres above sea level. Mirissa's beach and night life make it a popular tourist destination.",
    highlights: [
      "Whale watching tours",
      "Surfing lessons",
      "Coconut Tree Hill viewpoint",
      "Seafood restaurants",
      "Beach parties"
    ],
    bestTime: "November to April",
    guidesAvailable: 7
  }
];

export const guides = [
  {
    id: 1,
    name: "Nimal Perera",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4.9,
    reviews: 127,
    specialty: "Historical Sites & Culture",
    languages: ["English", "Sinhala", "Tamil"],
    location: "Colombo",
    experience: "8 years",
    hourlyRate: 25,
    maxGroupSize: 8,
    about: "As a licensed tour guide with a degree in history, I specialize in bringing Sri Lanka's rich cultural heritage to life. I've been guiding visitors through our ancient cities, temples, and historical sites for over 8 years. My tours combine historical facts with fascinating stories that you won't find in guidebooks.",
    certifications: [
      "National Tourist Guide License",
      "First Aid Certified",
      "Cultural Heritage Specialist"
    ],
    destinations: ["Sigiriya", "Anuradhapura", "Polonnaruwa", "Kandy", "Galle"]
  },
  {
    id: 2,
    name: "Priyanka Fernando",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4.8,
    reviews: 98,
    specialty: "Wildlife & Nature",
    languages: ["English", "Sinhala", "French"],
    location: "Yala",
    experience: "6 years",
    hourlyRate: 30,
    maxGroupSize: 6,
    about: "I'm a wildlife enthusiast and conservationist with a background in zoology. I've spent years exploring Sri Lanka's national parks and nature reserves, tracking animals and studying ecosystems. My tours focus on ethical wildlife viewing and environmental education. I can help you spot leopards, elephants, and hundreds of bird species while respecting their natural habitats.",
    certifications: [
      "Wildlife Conservation Certification",
      "Safari Guide License",
      "Bird Watching Specialist"
    ],
    destinations: ["Yala", "Wilpattu", "Sinharaja", "Udawalawe", "Horton Plains"]
  },
  {
    id: 3,
    name: "Rajiv Silva",
    photo: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5.0,
    reviews: 86,
    specialty: "Adventure & Hiking",
    languages: ["English", "Sinhala", "German"],
    location: "Ella",
    experience: "5 years",
    hourlyRate: 28,
    maxGroupSize: 10,
    about: "I'm a certified hiking guide and outdoor adventure specialist. I know every trail in the hill country and can customize hikes based on your fitness level and interests. From easy nature walks to challenging mountain treks, I'll ensure you experience the breathtaking beauty of Sri Lanka's highlands safely and memorably.",
    certifications: [
      "Wilderness First Responder",
      "Mountain Leader Certified",
      "Rock Climbing Instructor"
    ],
    destinations: ["Ella", "Adam's Peak", "Knuckles Range", "Horton Plains", "Nuwara Eliya"]
  },
  {
    id: 4,
    name: "Anjali Bandara",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4.9,
    reviews: 112,
    specialty: "Culinary & Local Experiences",
    languages: ["English", "Sinhala", "Spanish"],
    location: "Kandy",
    experience: "7 years",
    hourlyRate: 22,
    maxGroupSize: 6,
    about: "As a former chef and lifelong food enthusiast, I specialize in culinary tours and authentic local experiences. I'll take you beyond tourist spots to meet local artisans, participate in cooking classes, and taste authentic Sri Lankan cuisine. My tours offer a genuine connection with local communities and traditions.",
    certifications: [
      "Hospitality Management Degree",
      "Food Safety Certification",
      "Cultural Ambassador Program"
    ],
    destinations: ["Kandy", "Galle", "Colombo", "Negombo", "Matara"]
  },
  {
    id: 5,
    name: "Chamara Jayawardena",
    photo: "https://randomuser.me/api/portraits/men/41.jpg",
    rating: 4.7,
    reviews: 75,
    specialty: "Beaches & Water Sports",
    languages: ["English", "Sinhala", "Italian"],
    location: "Mirissa",
    experience: "4 years",
    hourlyRate: 35,
    maxGroupSize: 4,
    about: "I'm a certified diving instructor and surf coach who knows the southern coast like the back of my hand. Whether you want to learn surfing, go whale watching, explore coral reefs, or just relax on hidden beaches, I can create your perfect coastal experience. I prioritize safety while ensuring you have unforgettable ocean adventures.",
    certifications: [
      "PADI Dive Instructor",
      "Surfing Coach Certification",
      "Marine Life Specialist"
    ],
    destinations: ["Mirissa", "Unawatuna", "Hikkaduwa", "Trincomalee", "Arugam Bay"]
  },
  {
    id: 6,
    name: "Samantha Ratnayake",
    photo: "https://randomuser.me/api/portraits/women/52.jpg",
    rating: 4.8,
    reviews: 92,
    specialty: "Family Tours & Accessibility",
    languages: ["English", "Sinhala", "Japanese"],
    location: "Colombo",
    experience: "9 years",
    hourlyRate: 26,
    maxGroupSize: 12,
    about: "With extensive experience in family travel and accessible tourism, I specialize in creating enjoyable experiences for travelers of all ages and abilities. I understand the unique needs of families with children, seniors, and travelers with mobility challenges. My tours are engaging, educational, and paced for maximum comfort.",
    certifications: [
      "Child Care Certified",
      "Accessible Tourism Training",
      "Senior Travel Specialist"
    ],
    destinations: ["Colombo", "Galle", "Kandy", "Bentota", "Dambulla"]
  }
];

export const bookings = [];