export const EventData = [
  {
    _id: "65a2f8d9c72e4c8b3a2b1001",
    title: "AI & Future Tech Summit 2025",
    description:
      "A summit discussing AI advancements, ethics, and future applications.",
    location: "San Francisco Tech Center",
    schedule: {
      start: "2025-07-10T09:00:00.000Z",
      end: "2025-07-11T17:00:00.000Z",
    },
    registrationDeadline: "2025-07-05T23:59:59.000Z",
    createdBy: {
      _id: "65a3e567c72e4c8b3a2b2001",
      name: "John Doe",
      email: "johndoe@example.com",
      role: "Admin",
    },
    maxParticipants: 200,
    registeredUsers: [
      {
        _id: "65a4e678c72e4c8b3a2b3001",
        name: "Alice Johnson",
        email: "alicej@example.com",
        registeredAt: "2025-06-20T14:30:00.000Z",
        checkInStatus: false,
        role: "participant",
      },
      {
        _id: "65a4e789c72e4c8b3a2b3002",
        name: "Bob Smith",
        email: "bobsmith@example.com",
        registeredAt: "2025-06-22T10:15:00.000Z",
        checkInStatus: false,
        role: "VIP",
      },
    ],
    waitlist: [
      {
        _id: "65a4e890c72e4c8b3a2b3003",
        name: "Charlie Brown",
        email: "charlieb@example.com",
        joinedAt: "2025-06-25T18:45:00.000Z",
      },
    ],
    status: "upcoming",
    isPublished: true,
    canceledReason: null,
    notifications: {
      sendReminders: true,
      reminderTimes: ["2025-07-08T09:00:00.000Z", "2025-07-09T12:00:00.000Z"],
    },
    createdAt: "2025-06-01T08:00:00.000Z",
  },
  {
    _id: "65a2f8d9c72e4c8b3a2b1001",
    title: "AI & Future Tech Summit 2025",
    description:
      "A summit discussing AI advancements, ethics, and future applications.",
    location: "San Francisco Tech Center",
    schedule: {
      start: "2025-07-10T09:00:00.000Z",
      end: "2025-07-11T17:00:00.000Z",
    },
    registrationDeadline: "2025-07-05T23:59:59.000Z",
    createdBy: {
      _id: "65a3e567c72e4c8b3a2b2001",
      name: "John Doe",
      email: "johndoe@example.com",
      role: "Admin",
    },
    maxParticipants: 200,
    registeredUsers: [
      {
        _id: "65a4e678c72e4c8b3a2b3001",
        name: "Alice Johnson",
        email: "alicej@example.com",
        registeredAt: "2025-06-20T14:30:00.000Z",
        checkInStatus: false,
        role: "participant",
      },
      {
        _id: "65a4e789c72e4c8b3a2b3002",
        name: "Bob Smith",
        email: "bobsmith@example.com",
        registeredAt: "2025-06-22T10:15:00.000Z",
        checkInStatus: false,
        role: "VIP",
      },
    ],
    waitlist: [
      {
        _id: "65a4e890c72e4c8b3a2b3003",
        name: "Charlie Brown",
        email: "charlieb@example.com",
        joinedAt: "2025-06-25T18:45:00.000Z",
      },
    ],
    status: "ongoing",
    isPublished: true,
    canceledReason: null,
    notifications: {
      sendReminders: true,
      reminderTimes: ["2025-07-08T09:00:00.000Z", "2025-07-09T12:00:00.000Z"],
    },
    createdAt: "2025-06-01T08:00:00.000Z",
  },
  {
    _id: "65a2f8d9c72e4c8b3a2b1002",
    title: "Cybersecurity Conference 2025",
    description: "A deep dive into modern cybersecurity threats and solutions.",
    location: "New York Convention Center",
    schedule: {
      start: "2025-08-15T10:00:00.000Z",
      end: "2025-08-16T18:00:00.000Z",
    },
    registrationDeadline: "2025-08-10T23:59:59.000Z",
    createdBy: {
      _id: "65a3e567c72e4c8b3a2b2002",
      name: "Emily Watson",
      email: "emilyw@example.com",
      role: "Admin",
    },
    maxParticipants: 150,
    registeredUsers: [
      {
        _id: "65a4e678c72e4c8b3a2b3004",
        name: "David Lee",
        email: "davidl@example.com",
        registeredAt: "2025-07-10T12:00:00.000Z",
        checkInStatus: false,
        role: "participant",
      },
    ],
    waitlist: [],
    status: "upcoming",
    isPublished: true,
    canceledReason: null,
    notifications: {
      sendReminders: true,
      reminderTimes: ["2025-08-14T09:00:00.000Z"],
    },
    createdAt: "2025-07-05T08:00:00.000Z",
  },
  {
    _id: "65a2f8d9c72e4c8b3a2b1003",
    title: "Blockchain Summit",
    description:
      "Discussing the future of decentralized finance and blockchain tech.",
    location: "Los Angeles Crypto Hub",
    schedule: {
      start: "2025-09-20T09:00:00.000Z",
      end: "2025-09-21T17:00:00.000Z",
    },
    registrationDeadline: "2025-09-15T23:59:59.000Z",
    createdBy: {
      _id: "65a3e567c72e4c8b3a2b2003",
      name: "Michael Jordan",
      email: "mjordan@example.com",
      role: "Admin",
    },
    maxParticipants: 100,
    registeredUsers: [],
    waitlist: [],
    status: "completed",
    isPublished: false,
    canceledReason: null,
    notifications: {
      sendReminders: false,
      reminderTimes: [],
    },
    createdAt: "2025-08-01T08:00:00.000Z",
  },
  {
    _id: "65a2f8d9c72e4c8b3a2b1002",
    title: "Cybersecurity Conference 2025",
    description: "A deep dive into modern cybersecurity threats and solutions.",
    location: "New York Convention Center",
    schedule: {
      start: "2025-08-15T10:00:00.000Z",
      end: "2025-08-16T18:00:00.000Z",
    },
    registrationDeadline: "2025-08-10T23:59:59.000Z",
    createdBy: {
      _id: "65a3e567c72e4c8b3a2b2002",
      name: "Emily Watson",
      email: "emilyw@example.com",
      role: "Admin",
    },
    maxParticipants: 150,
    registeredUsers: [
      {
        _id: "65a4e678c72e4c8b3a2b3004",
        name: "David Lee",
        email: "davidl@example.com",
        registeredAt: "2025-07-10T12:00:00.000Z",
        checkInStatus: false,
        role: "participant",
      },
    ],
    waitlist: [],
    status: "canceled",
    isPublished: true,
    canceledReason: null,
    notifications: {
      sendReminders: true,
      reminderTimes: ["2025-08-14T09:00:00.000Z"],
    },
    createdAt: "2025-07-05T08:00:00.000Z",
  },
  {
    _id: "65a2f8d9c72e4c8b3a2b1002",
    title: "Cybersecurity Conference 2025",
    description: "A deep dive into modern cybersecurity threats and solutions.",
    location: "New York Convention Center",
    schedule: {
      start: "2025-08-15T10:00:00.000Z",
      end: "2025-08-16T18:00:00.000Z",
    },
    registrationDeadline: "2025-08-10T23:59:59.000Z",
    createdBy: {
      _id: "65a3e567c72e4c8b3a2b2002",
      name: "Emily Watson",
      email: "emilyw@example.com",
      role: "Admin",
    },
    maxParticipants: 150,
    registeredUsers: [
      {
        _id: "65a4e678c72e4c8b3a2b3004",
        name: "David Lee",
        email: "davidl@example.com",
        registeredAt: "2025-07-10T12:00:00.000Z",
        checkInStatus: false,
        role: "participant",
      },
    ],
    waitlist: [],
    status: "upcoming",
    isPublished: true,
    canceledReason: null,
    notifications: {
      sendReminders: true,
      reminderTimes: ["2025-08-14T09:00:00.000Z"],
    },
    createdAt: "2025-07-05T08:00:00.000Z",
  },
];
