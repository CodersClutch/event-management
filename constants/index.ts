import { La_Belle_Aurore } from "next/font/google";

export const cards = [
  {
    url: "/one.png",
    alt: "comedy",
  },
  {
    url: "/two.png",
    alt: "book",
  },
  {
    url: "/three.png",
    alt: "retreat",
  },
];

export const categories = [
  {
    icon: "https://cdn-icons-png.flaticon.com/128/4994/4994482.png",
    Label: "All Ages",
    link: "/events/all-ages",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/15359/15359414.png",
    Label: "For Babies",
    link: "/",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/919/919482.png",
    Label: "Main Arena",
    link: "/",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/4416/4416815.png",
    Label: "Toddler Zone",
    link: "/",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/756/756648.png",
    Label: "Teen Hangouts",
    link: "/",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/12650/12650217.png",
    Label: "Education",
    link: "/",
  },
];


export const tabs = [
  'All', 'Activities & Attraction', 'Online', 'Today', 'This weekend',
];



export const eventsAll = [
  {
    id: "AAE-001",
    image: "https://img.freepik.com/free-psd/kitschy-colors-youtube-cover-template_23-2150544102.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    title: "Andante & Allegro Event",
    date: "Aug 1, 2025 at 8:00 AM",
    location: "1 American Dream Wy, East Rutherford, NJ",
    geolocation: {
      address: "1 American Dream Wy",
      city: "East Rutherford",
      state: "NJ",
      country: "USA",
      coordinates: "40.8198° N, 74.0743° W"
    },
    registrationDeadline: "2025-07-25",
    capacity: 5000,
    ageRange: { min: 6, max: 99 },
    price: 45,
    refundPolicy: "Full refund up to 7 days before event",
    duration: "6 hours",
    organizer: "Metro Events Group",
    description: `Experience a musical journey through time at our flagship family event. The Andante & Allegro Festival combines classical music education with modern interactive experiences. Professional musicians will guide participants through instrument petting zoos, rhythm workshops, and collaborative performances.

    Designed by Juilliard-trained educators, this event features special zones for different age groups while encouraging cross-generational participation. Evening culminates with a digital light show synchronized to live orchestral performance.`,
    moreEvents: [
      {
        title: "Family Symphony Night",
    
        date: "2025-11-05 18:30",
    
        price: 55,
    
        organizer: "Go Daddy Group First", // Replace with actual organizer name
    
        imageUrl:
          "https://img.freepik.com/premium-photo/business-executives-interacting-with-each-other-while-having-coffee_107420-73037.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid", // Replace with actual image URL or path in public directory
      },
    
      {
        title: "Rhythm Discovery Camp",
    
        date: "2025-12-10 10:00",
    
        price: 40,
    
        organizer: "Go Daddy Group First", // Replace with actual organizer name
    
        imageUrl:
          "https://img.freepik.com/premium-photo/business-people-interacting-with-each-other-table-seminar_13339-347003.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid", // Replace with actual image URL or path in public directory
      },
    ],
    mode: 'Online'
  },
  {
    id: "TTE-002",
    image: "https://img.freepik.com/premium-photo/happy-kids-with-balloons_13339-174411.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    title: "Triple Time Event",
    date: "Aug 15, 2025 at 8:00 AM",
    location: "999 Canada Pl, Vancouver, BC",
    geolocation: {
      address: "999 Canada Pl",
      city: "Vancouver",
      state: "BC",
      country: "Canada",
      coordinates: "49.2827° N, 123.1207° W"
    },
    registrationDeadline: "2025-08-08",
    capacity: 2000,
    ageRange: { min: 4, max: 12 },
    price: 25,
    refundPolicy: "No refunds within 72 hours",
    duration: "4 hours",
    organizer: "Kids Wonderland Inc.",
    description: `A three-phase developmental program combining physical activity, creative play, and social learning. The Triple Time structure includes guided obstacle courses, team-building challenges, and free exploration periods. 

    Certified child development specialists monitor progress while maintaining fun-first atmosphere. Includes hydration stations, first aid coverage, and photo service for parents. Rain date scheduled for following weekend.`,
    moreEvents: [
      {
        title: "Family Symphony Night",
    
        date: "2025-11-05 18:30",
    
        price: 55,
    
        organizer: "Go Daddy Group First", // Replace with actual organizer name
    
        imageUrl:
          "https://img.freepik.com/premium-photo/business-executives-interacting-with-each-other-while-having-coffee_107420-73037.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid", // Replace with actual image URL or path in public directory
      },
    
      {
        title: "Rhythm Discovery Camp",
    
        date: "2025-12-10 10:00",
    
        price: 40,
    
        organizer: "Go Daddy Group First", // Replace with actual organizer name
    
        imageUrl:
          "https://img.freepik.com/premium-photo/business-people-interacting-with-each-other-table-seminar_13339-347003.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid", // Replace with actual image URL or path in public directory
      },
    ],
    mode: 'In Person'

  },
  {
    id: "SFE-003",
    image: "https://img.freepik.com/premium-photo/cute-girl-posing-balloon-birthday-party_107420-33162.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    title: "Sterling Forest Event Planners",
    date: "Sep 1, 2025 at 8:00 AM",
    location: "42 Marine Parade, Southport QLD",
    geolocation: {
      address: "42 Marine Parade",
      city: "Southport",
      state: "QLD",
      country: "Australia",
      coordinates: "27.9667° S, 153.4000° E"
    },
    registrationDeadline: "2025-08-25",
    capacity: 150,
    ageRange: { min: 5, max: 10 },
    price: 35,
    refundPolicy: "50% refund up to 48 hours prior",
    duration: "3 hours",
    organizer: "Party Perfect Australia",
    description: `A three-phase developmental program combining physical activity, creative play, and social learning. The Triple Time structure includes guided obstacle courses, team-building challenges, and free exploration periods. 

    Certified child development specialists monitor progress while maintaining fun-first atmosphere. Includes hydration stations, first aid coverage, and photo service for parents. Rain date scheduled for following weekend.`,
    moreEvents: [
      {
        title: "Family Symphony Night",
    
        date: "2025-11-05 18:30",
    
        price: 55,
    
        organizer: "Go Daddy Group First", // Replace with actual organizer name
    
        imageUrl:
          "https://img.freepik.com/premium-photo/business-executives-interacting-with-each-other-while-having-coffee_107420-73037.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid", // Replace with actual image URL or path in public directory
      },
    
      {
        title: "Rhythm Discovery Camp",
    
        date: "2025-12-10 10:00",
    
        price: 40,
    
        organizer: "Go Daddy Group First", // Replace with actual organizer name
    
        imageUrl:
          "https://img.freepik.com/premium-photo/business-people-interacting-with-each-other-table-seminar_13339-347003.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid", // Replace with actual image URL or path in public directory
      },
    ],
    mode: 'Online'
  },
  {
    id: "HTE-004",
    image: "https://img.freepik.com/premium-photo/portrait-smiling-friends-standing-against-sky_1048944-20758704.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    title: "Highwood Terrace Event",
    date: "Sep 19, 2025 at 8:00 AM",
    location: "14900 Beck Rd, Plymouth, MI",
    geolocation: {
      address: "14900 Beck Rd",
      city: "Plymouth",
      state: "MI",
      country: "USA",
      coordinates: "42.3714° N, 83.4702° W"
    },
    registrationDeadline: "2025-09-12",
    capacity: 800,
    ageRange: { min: 16, max: 99 },
    price: 65,
    refundPolicy: "No refunds after registration",
    duration: "8 hours",
    organizer: "Great Lakes Events Co.",
    description: `A three-phase developmental program combining physical activity, creative play, and social learning. The Triple Time structure includes guided obstacle courses, team-building challenges, and free exploration periods. 

    Certified child development specialists monitor progress while maintaining fun-first atmosphere. Includes hydration stations, first aid coverage, and photo service for parents. Rain date scheduled for following weekend.`,
    moreEvents: [
      {
        title: "Family Symphony Night",
    
        date: "2025-11-05 18:30",
    
        price: 55,
    
        organizer: "Go Daddy Group First", // Replace with actual organizer name
    
        imageUrl:
          "https://img.freepik.com/premium-photo/business-executives-interacting-with-each-other-while-having-coffee_107420-73037.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid", // Replace with actual image URL or path in public directory
      },
    
      {
        title: "Rhythm Discovery Camp",
    
        date: "2025-12-10 10:00",
    
        price: 40,
    
        organizer: "Go Daddy Group First", // Replace with actual organizer name
    
        imageUrl:
          "https://img.freepik.com/premium-photo/business-people-interacting-with-each-other-table-seminar_13339-347003.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid", // Replace with actual image URL or path in public directory
      },
    ],
    mode: 'In Person'
  }
];




export const Foryou = [
  {
    id: "FY-100",
    image: "https://img.freepik.com/free-photo/children-playing-with-colorful-balloons_23-2150750458.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    title: "Lullaby Festival",
    date: "Nov 15, 2025 at 10:00 AM",
    location: "88 Harmony Park Rd, Austin, TX",
    geolocation: {
      address: "88 Harmony Park Rd",
      city: "Austin",
      state: "TX",
      country: "USA",
      coordinates: "30.2672° N, 97.7431° W"
    },
    registrationDeadline: "2025-11-01",
    capacity: 1200,
    ageRange: { min: 0, max: 5 },
    price: 15,
    refundPolicy: "Full refund up to 48 hours before",
    duration: "3 hours",
    organizer: "Tiny Tunes Collective",
    description: `Gentle introduction to music and sensory exploration for our youngest attendees. Features vibration floors for tactile rhythm experiences, floating bubble stations, and parent-child massage workshops. 

    Developmental experts present latest research on early auditory processing. Includes take-home sensory kit with textured toys and curated playlist. Nursing stations and stroller parking available throughout venue.`,
    moreEvents: [
      {
        title: "Family Symphony Night",
    
        date: "2025-11-05 18:30",
    
        price: 55,
    
        organizer: "Go Daddy Group First", // Replace with actual organizer name
    
        imageUrl:
          "https://img.freepik.com/premium-photo/business-executives-interacting-with-each-other-while-having-coffee_107420-73037.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid", // Replace with actual image URL or path in public directory
      },
    
      {
        title: "Rhythm Discovery Camp",
    
        date: "2025-12-10 10:00",
    
        price: 40,
    
        organizer: "Go Daddy Group First", // Replace with actual organizer name
    
        imageUrl:
          "https://img.freepik.com/premium-photo/business-people-interacting-with-each-other-table-seminar_13339-347003.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid", // Replace with actual image URL or path in public directory
      },
    ],
    mode: 'Online'

  },
  {
    id: "FY-101",
    image: "https://img.freepik.com/premium-photo/happy-kids-birthday-party_13339-174267.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    title: "STEM Explorer Camp",
    date: "Dec 5, 2025 at 9:30 AM",
    location: "200 Innovation Drive, San Jose, CA",
    geolocation: {
      address: "200 Innovation Drive",
      city: "San Jose",
      state: "CA",
      country: "USA",
      coordinates: "37.3382° N, 121.8863° W"
    },
    registrationDeadline: "2025-11-20",
    capacity: 300,
    ageRange: { min: 8, max: 14 },
    price: 75,
    refundPolicy: "50% refund before Nov 30",
    duration: "6-hour daily (3-day program)",
    organizer: "Future Innovators Academy",
    description: `Hands-on program exploring robotics, renewable energy, and coding fundamentals. Participants receive STEM kit with Arduino board and components for home projects. Daily challenges include building solar-powered vehicles and programming obstacle courses.

    Features guest lectures from NASA engineers and Silicon Valley developers. Final day showcase allows families to view student projects and attend career Q&A panel.`,
    moreEvents: [
      {
        title: "Family Symphony Night",
    
        date: "2025-11-05 18:30",
    
        price: 55,
    
        organizer: "Go Daddy Group First", // Replace with actual organizer name
    
        imageUrl:
          "https://img.freepik.com/premium-photo/business-executives-interacting-with-each-other-while-having-coffee_107420-73037.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid", // Replace with actual image URL or path in public directory
      },
    
      {
        title: "Rhythm Discovery Camp",
    
        date: "2025-12-10 10:00",
    
        price: 40,
    
        organizer: "Go Daddy Group First", // Replace with actual organizer name
    
        imageUrl:
          "https://img.freepik.com/premium-photo/business-people-interacting-with-each-other-table-seminar_13339-347003.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid", // Replace with actual image URL or path in public directory
      },
    ],
    mode: 'Online'

  }
];


export const Online = [
  {
    id: "OL-200",
    image: "https://img.freepik.com/free-photo/kids-online-learning-using-laptop_23-2150750466.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    title: "Virtual Art Adventure",
    date: "Oct 10, 2025 at 3:00 PM",
    location: "Online Event",
    geolocation: null,
    registrationDeadline: "2025-10-05",
    capacity: 500,
    ageRange: { min: 6, max: 12 },
    price: 20,
    refundPolicy: "Full refund anytime before event start",
    duration: "2-hour interactive session",
    organizer: "Digital Art Academy",
    description: `Interactive digital art program using cutting-edge web-based tools. Students collaborate on virtual murals while learning about color theory and digital illustration techniques. Includes live feedback from professional concept artists.

    Package includes mailed art supplies for hybrid learning. Final projects displayed in online gallery with printing/shipping options. Parent dashboard tracks progress and skill development metrics.`,
    moreEvents: [
      {
        title: "Family Symphony Night",
    
        date: "2025-11-05 18:30",
    
        price: 55,
    
        organizer: "Go Daddy Group First", // Replace with actual organizer name
    
        imageUrl:
          "https://img.freepik.com/premium-photo/business-executives-interacting-with-each-other-while-having-coffee_107420-73037.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid", // Replace with actual image URL or path in public directory
      },
    
      {
        title: "Rhythm Discovery Camp",
    
        date: "2025-12-10 10:00",
    
        price: 40,
    
        organizer: "Go Daddy Group First", // Replace with actual organizer name
    
        imageUrl:
          "https://img.freepik.com/premium-photo/business-people-interacting-with-each-other-table-seminar_13339-347003.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid", // Replace with actual image URL or path in public directory
      },
    ],
    mode: 'Online'

  },
  {
    id: "OL-201",
    image: "https://img.freepik.com/premium-photo/happy-kids-birthday-party_13339-174267.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    title: "Global Coding Challenge",
    date: "Nov 20, 2025 at 10:00 AM",
    location: "Virtual Platform",
    geolocation: null,
    registrationDeadline: "2025-11-15",
    capacity: 1000,
    ageRange: { min: 10, max: 18 },
    price: 50,
    refundPolicy: "Full refund within 7 days of registration",
    duration: "5-day competition",
    organizer: "Code World Initiative",
    description: `Global competition testing algorithmic thinking and problem-solving skills. Participants tackle real-world challenges like traffic optimization and environmental modeling. Features daily code reviews and mentorship sessions.

    Winners receive scholarships and internship opportunities. Multi-language support available. Requires basic Python/JavaScript knowledge. Practice materials provided post-registration.`,
    moreEvents: [
      {
        title: "Family Symphony Night",
    
        date: "2025-11-05 18:30",
    
        price: 55,
    
        organizer: "Go Daddy Group First", // Replace with actual organizer name
    
        imageUrl:
          "https://img.freepik.com/premium-photo/business-executives-interacting-with-each-other-while-having-coffee_107420-73037.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid", // Replace with actual image URL or path in public directory
      },
    
      {
        title: "Rhythm Discovery Camp",
    
        date: "2025-12-10 10:00",
    
        price: 40,
    
        organizer: "Go Daddy Group First", // Replace with actual organizer name
    
        imageUrl:
          "https://img.freepik.com/premium-photo/business-people-interacting-with-each-other-table-seminar_13339-347003.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid", // Replace with actual image URL or path in public directory
      },
    ],
    mode: 'Online'

  }
];


export const Today = [
  {
    id: "TD-300",
    image: "https://img.freepik.com/free-photo/kids-science-experiment_23-2150750462.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    title: "Sunrise Science Fair",
    date: "Oct 25, 2025 at 9:00 AM",
    location: "100 Discovery Lane, Miami, FL",
    geolocation: {
      address: "100 Discovery Lane",
      city: "Miami",
      state: "FL",
      country: "USA",
      coordinates: "25.7617° N, 80.1918° W"
    },
    registrationDeadline: "2025-10-20",
    capacity: 300,
    ageRange: { min: 7, max: 14 },
    price: 30,
    refundPolicy: "Full refund up to 24 hours before",
    duration: "4 hours",
    organizer: "Young Inventors Network",
    description: `Interactive science fair featuring 30+ hands-on stations covering physics, chemistry, and biology. Highlights include liquid nitrogen demonstrations, VR anatomy exploration, and citizen science projects. 

    Judging categories for different age groups with prizes from local tech companies. Safety-certified staff at all experiment stations. Parent lounge features live stream of activities and science café talks.`,
    moreEvents: [
      {
        title: "Family Symphony Night",
    
        date: "2025-11-05 18:30",
    
        price: 55,
    
        organizer: "Go Daddy Group First", // Replace with actual organizer name
    
        imageUrl:
          "https://img.freepik.com/premium-photo/business-executives-interacting-with-each-other-while-having-coffee_107420-73037.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid", // Replace with actual image URL or path in public directory
      },
    
      {
        title: "Rhythm Discovery Camp",
    
        date: "2025-12-10 10:00",
    
        price: 40,
    
        organizer: "Go Daddy Group First", // Replace with actual organizer name
    
        imageUrl:
          "https://img.freepik.com/premium-photo/business-people-interacting-with-each-other-table-seminar_13339-347003.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid", // Replace with actual image URL or path in public directory
      },
    ],
    mode: 'Online'

  }
];

export const Weekend = []