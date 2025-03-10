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
    link: "/events/babies",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/919/919482.png",
    Label: "Main Arena",
    link: "/events/arena",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/4416/4416815.png",
    Label: "Toddler Zone",
    link: "/events/toddler",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/756/756648.png",
    Label: "Teen Hangouts",
    link: "/events/teen-hangouts",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/128/12650/12650217.png",
    Label: "Education",
    link: "/events/education",
  },
];

export const tabs = [
  "All",
  "Activities & Attraction",
  "Online",
  "Today",
  "This weekend",
];

export const eventsAll = [
  {
    id: "AAE-001",
    image:
      "https://img.freepik.com/free-psd/kitschy-colors-youtube-cover-template_23-2150544102.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    title: "Andante & Allegro Event",
    date: "Aug 1, 2025 at 8:00 AM",
    location: "1 American Dream Wy, East Rutherford, NJ",
    geolocation: {
      address: "1 American Dream Wy",
      city: "East Rutherford",
      state: "NJ",
      country: "USA",
      coordinates: "40.8198° N, 74.0743° W",
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
    mode: "Online",
  },
  {
    id: "AAE-001",
    image:
      "https://img.freepik.com/free-psd/kitschy-colors-youtube-cover-template_23-2150544102.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    title: "Andante & Allegro Event",
    date: "Aug 1, 2025 at 8:00 AM",
    location: "1 American Dream Wy, East Rutherford, NJ",
    geolocation: {
      address: "1 American Dream Wy",
      city: "East Rutherford",
      state: "NJ",
      country: "USA",
      coordinates: "40.8198° N, 74.0743° W",
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
    mode: "Online",
  },
  {
    id: "TTE-002",
    image:
      "https://img.freepik.com/premium-photo/happy-kids-with-balloons_13339-174411.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    title: "Triple Time Event",
    date: "Aug 15, 2025 at 8:00 AM",
    location: "999 Canada Pl, Vancouver, BC",
    geolocation: {
      address: "999 Canada Pl",
      city: "Vancouver",
      state: "BC",
      country: "Canada",
      coordinates: "49.2827° N, 123.1207° W",
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
    mode: "In Person",
  },
  {
    id: "SFE-003",
    image:
      "https://img.freepik.com/premium-photo/cute-girl-posing-balloon-birthday-party_107420-33162.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    title: "Sterling Forest Event Planners",
    date: "Sep 1, 2025 at 8:00 AM",
    location: "42 Marine Parade, Southport QLD",
    geolocation: {
      address: "42 Marine Parade",
      city: "Southport",
      state: "QLD",
      country: "Australia",
      coordinates: "27.9667° S, 153.4000° E",
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
    mode: "Online",
  },
  {
    id: "HTE-004",
    image:
      "https://img.freepik.com/premium-photo/portrait-smiling-friends-standing-against-sky_1048944-20758704.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    title: "Highwood Terrace Event",
    date: "Sep 19, 2025 at 8:00 AM",
    location: "14900 Beck Rd, Plymouth, MI",
    geolocation: {
      address: "14900 Beck Rd",
      city: "Plymouth",
      state: "MI",
      country: "USA",
      coordinates: "42.3714° N, 83.4702° W",
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
    mode: "In Person",
  },
];

export const Foryou = [
  {
    id: "FY-100",
    image:
      "https://img.freepik.com/free-photo/children-playing-with-colorful-balloons_23-2150750458.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    title: "Lullaby Festival",
    date: "Nov 15, 2025 at 10:00 AM",
    location: "88 Harmony Park Rd, Austin, TX",
    geolocation: {
      address: "88 Harmony Park Rd",
      city: "Austin",
      state: "TX",
      country: "USA",
      coordinates: "30.2672° N, 97.7431° W",
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
    mode: "Online",
  },
  {
    id: "FY-101",
    image:
      "https://img.freepik.com/premium-photo/happy-kids-birthday-party_13339-174267.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    title: "STEM Explorer Camp",
    date: "Dec 5, 2025 at 9:30 AM",
    location: "200 Innovation Drive, San Jose, CA",
    geolocation: {
      address: "200 Innovation Drive",
      city: "San Jose",
      state: "CA",
      country: "USA",
      coordinates: "37.3382° N, 121.8863° W",
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
    mode: "Online",
  },
];

export const Online = [
  {
    id: "OL-200",
    image:
      "https://img.freepik.com/free-photo/kids-online-learning-using-laptop_23-2150750466.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
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
    mode: "Online",
  },
  {
    id: "OL-201",
    image:
      "https://img.freepik.com/premium-photo/happy-kids-birthday-party_13339-174267.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
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
    mode: "Online",
  },
];

export const Today = [
  {
    id: "TD-300",
    image:
      "https://img.freepik.com/free-photo/kids-science-experiment_23-2150750462.jpg?uid=R178129720&ga=GA1.1.1411535131.1738618804&semt=ais_hybrid",
    title: "Sunrise Science Fair",
    date: "Oct 25, 2025 at 9:00 AM",
    location: "100 Discovery Lane, Miami, FL",
    geolocation: {
      address: "100 Discovery Lane",
      city: "Miami",
      state: "FL",
      country: "USA",
      coordinates: "25.7617° N, 80.1918° W",
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
    mode: "Online",
  },
];

export const Weekend = [];

export const sponsors = [
  "https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/tp-spncr.png",
  "https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/tp-spncr2.png",
  "https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/tp-spncr3.png",
  "https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/tp-spncr4.png",
];

export const categories2 = [
  "All Categories",
  "Art",
  "Books",
  "Food",
  "Sports",
  "Films",
  "Awards",
  "Men",
  "Parties",
  "Technology",
  "Science",
  "Women",
  "Music",
  "Comedy",
  "Show",
];

export const eventList = [
  {
    id: 1,
    ticketId: "TICKET-001",
    ticketCatagory: "All Age & Family",
    author: "John Doe",
    time: "5 min ago",
    eventTime: "3:00 PM",
    profileImage:
      "https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/event-head.png",
    eventImage:
      "https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/event-main.jpg",
    eventName: "Tech Conference 2025",
    date: "June 16, 2025",
    location: "New York",
    tickets: "Available 26/100",
    ticketsSold: 26,
    totalTickets: 100,
    revenue: 0, // Free event, so revenue is 0
    sponsors: [
      "https://img.freepik.com/free-photo/confident-business-woman-portrait-smiling-face_53876-137693.jpg",
      "https://img.freepik.com/free-photo/casual-young-african-man-smiling-isolated-white_93675-128895.jpg",
      "https://img.freepik.com/free-photo/medium-shot-woman-relaxing-home_23-2150307065.jpg",
      "https://img.freepik.com/free-photo/confident-african-businesswoman-mockup-psd-smiling-closeup-portr_53876-143279.jpg",
    ],
    price: "Free",
    likes: 126,
    comments: 3,
    description:
      "Join industry leaders and innovators at Tech Conference 2025, where cutting-edge technologies, AI advancements, and networking opportunities await. Stay ahead in the world of technology!",
  },
  {
    id: 2,
    author: "Jane Smith",
    time: "1 hour ago",
    eventTime: "9:00 PM",
    profileImage:
      "https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/event-head.png",
    eventImage:
      "https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/event-main2.jpg",
    eventName: "Music Festival",
    date: "July 22, 2025",
    location: "Los Angeles",
    tickets: "Available 50/200",
    ticketsSold: 50,
    totalTickets: 200,
    revenue: 1000, // Assuming $20 per ticket
    sponsors: [
      "https://randomuser.me/api/portraits/men/22.jpg",
      "https://randomuser.me/api/portraits/women/30.jpg",
      "https://randomuser.me/api/portraits/men/45.jpg",
      "https://randomuser.me/api/portraits/women/58.jpg",
    ],
    price: "$20",
    likes: 250,
    comments: 10,
    description:
      "Experience an electrifying night of live music, featuring top artists and bands from around the world. Dance, sing, and enjoy the ultimate summer music festival in Los Angeles!",
  },
  {
    id: 3,
    author: "Alex Johnson",
    time: "3 days ago",
    eventTime: "12:00 PM",
    profileImage:
      "https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/event-head.png",
    eventImage:
      "https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/event-main3.jpg",
    eventName: "Startup Meetup",
    date: "August 5, 2025",
    location: "San Francisco",
    tickets: "Available 10/50",
    ticketsSold: 10,
    totalTickets: 50,
    revenue: 0, // Free event, so revenue is 0
    sponsors: [
      "https://randomuser.me/api/portraits/women/15.jpg",
      "https://randomuser.me/api/portraits/men/20.jpg",
      "https://randomuser.me/api/portraits/women/33.jpg",
      "https://randomuser.me/api/portraits/men/60.jpg",
    ],
    price: "Free",
    likes: 85,
    comments: 5,
    description:
      "Connect with startup founders, investors, and mentors in an inspiring environment. Discover the latest trends, pitch your ideas, and network with like-minded entrepreneurs.",
  },
  {
    id: 4,
    author: "Emily Davis",
    time: "2 hours ago",
    eventTime: "8:00 AM",
    profileImage:
      "https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/event-head.png",
    eventImage:
      "https://tyovent-html.tortoizthemes.com/tyovent/assets/images/events/event-main4.jpg",
    eventName: "Art Exhibition",
    date: "Sept 12, 2025",
    location: "Paris",
    tickets: "Sold Out",
    ticketsSold: 100, // Assuming all tickets are sold
    totalTickets: 100,
    revenue: 1500, // Assuming $15 per ticket
    sponsors: [
      "https://randomuser.me/api/portraits/men/40.jpg",
      "https://randomuser.me/api/portraits/women/50.jpg",
      "https://randomuser.me/api/portraits/men/35.jpg",
      "https://randomuser.me/api/portraits/women/61.jpg",
    ],
    price: "$15",
    likes: 340,
    comments: 20,
    description:
      "Immerse yourself in a world of creativity and artistic expression. This exhibition showcases works from renowned and emerging artists, bringing together a diverse range of styles and mediums.",
  },
];
