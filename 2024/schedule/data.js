export const Tabs = [
  { id: 1, title: "Day 1 (9th October)" },
  { id: 2, title: "Day 2 (10th October)" },
  { id: 3, title: "Day 3 (11th October)" },
  { id: 4, title: "Day 4 (12th October)" },
  { id: 5, title: "Day 5 (13th October)" },
];

export const PYCON_DAY1_SCHEDULE = [
  {
    title: "Breakfast and Expo time",
    duration: "7:00 - 10:00",
    room: "Innovation Floor",
  },
  {
    title: "Welcome and PyCon Official Opening Address",
    duration: "10:00 - 11:00",
    room: "Innovation Floor",
  },
  {
    title: "Plenary Address from Government Official",
    duration: "11:00 - 12:00",
    room: "Innovation Floor",
  },
  {
    duration: "12:00 - 13:00",
    hasMany: true,
    sessions: [
      {
        title: "Pulitzer Center Sponsor Talk",
        room: "Pacific Hall",
      },
      {
        title: "Chaos Africa Sponsor Talk",
        room: "Innovation Floor",
      },
      {
        title:
          "Community Summit - Harnessing Collective Intelligence : Developing and Utilizing Data Science Communities. (Bernice Omiunu)",
        room: "Volta Room",
      },
      {
        title: "Open Source Sprints",
        room: "Video Conference Room",
      },
    ],
  },
  {
    title: "Lunch Break",
    room: "Innovation Floor",
    duration: "13:00 - 14:00",
  },
  {
    title: "Official Expo Hall Time",
    duration: "13:00 - 14:00",
  },
  {
    title: "Official Expo Hall Time",
    room: "Innovation Floor",
    duration: "13:00 - 14:00",
  },
  {
    title: "Open Source Panel Session",
    room: "Innovation Floor",
    duration: "14:00 - 15:00",
  },
  {
    duration: "15:00 - 16:00",
    hasMany: true,
    sessions: [
      { title: "Crane Cloud Workshop", room: "Pacific Hall" },
      { title: "MTN MoMo Workshop", room: "Innovation Floor" },
      {
        title:
          "From Workshops to Masterminds: Building a thriving Python Community with the Python Ho User Group.",
        speaker: "Kafui Alordo",
        room: "Volta Room",
      },
    ],
  },
  {
    duration: "16:00 - 17:00",
    hasMany: true,
    sessions: [
      { title: "CEDAT Workshop", room: "Pacific Hall" },
      { title: "Stanbic Workshop", room: "Innovation Floor" },
      {
        title:
          "Empowering Diverse Communities with Python: Insights from Mombasa, Kenya.",
        speaker: "Chris N. Achinga",
        room: "Volta Room",
      },
    ],
  },
  {
    title: "Closing Keynote",
    room: "Innovation Floor",
    duration: "17:00 - 18:00",
  },
  {
    title: "Announcements and Closing",
    room: "Innovation Floor",
    duration: "18:00 - 18:30",
  },
];

export const PYCON_DAY2_SCHEDULE = [
  {
    title: "Breakfast and Expo time",
    duration: "7:00 - 10:00",
    room: "Innovation Floor",
  },
  {
    title: "State of the Community Address",
    duration: "10:00 - 11:00",
    room: "Innovation Floor",
  },
  {
    title: "Opening Keynote",
    duration: "11:00 - 12:00",
    room: "Innovation Floor",
  },
  {
    duration: "12:00 - 13:00",
    hasMany: true,
    sessions: [
      {
        title: "Microsoft  Sponsor Talk",
        room: "Pacific Hall",
      },
      {
        title: "All Open Source Africa Workshop",
        room: "Innovation Floor",
      },
    ],
  },
  {
    title: "Lunch Break",
    room: "Innovation Floor",
    duration: "13:00 - 14:00",
  },
  {
    title: "Diversity and Inclusion Panel",
    room: "Innovation Floor",
    duration: "14:00 - 15:00",
  },
  {
    hasMany: true,
    duration: "15:00 - 16:00",
    sessions: [
      {
        room: "Pacific Hall",
        title: "Posit Workshop",
      },
      { title: "FundiBots Workshop", room: "Innovation Floor" },
    ],
  },
  {
    hasMany: true,
    duration: "16:00 - 17:00",
    sessions: [
      {
        room: "Pacific Hall",
        title: "Policy Workshop",
      },
      { title: "DataLadies Workshop", room: "Innovation Floor" },
    ],
  },
  {
    title: "Career Panel",
    duration: "17:00 - 18:00",
    room: "Innovation Floor",
  },
  {
    title: "Announcements and Closing",
    room: "Innovation Floor",
    duration: "18:00 - 18:30",
  },
];

export const PYCON_DAY3_SCHEDULE = [
  {
    title: "Breakfast and Registration",
    duration: "7:00 - 10:00",
    room: "Innovation Floor",
  },
  {
    title: "Opening Keynote",
    duration: "10:00 - 11:00",
    room: "Innovation Floor",
  },
  {
    duration: "11:00 - 11:30",
    hasMany: true,
    sessions: [
      {
        title:
          "Web: FastDjango: Conjuring Powerful APIs with the Sorcery of Django Ninja",
        room: "Pacific Hall",
        speaker: "Julius Boakye",
      },
      {
        title:
          "Building SMART Recommendation Systems in Python (Using intellikit)",
        room: "Innovation Floor",
        speaker: "Arthur Kakande",
      },
      {
        title: "Serving TensorFlow Models with FastAPI",
        room: "Volta Room",
        speaker: "Wesley Kambale",
      },
    ],
  },
  {
    duration: "11:30 - 12:00",
    hasMany: true,
    sessions: [
      {
        title: "Full Stack Python Web Dev? Introducing Reflex",
        room: "Pacific Hall",
        speaker: "Ssali Jonathan Kiggundu",
      },
    ],
  },
  {
    duration: "12:00 - 12:30",
    hasMany: true,
    sessions: [
      {
        title:
          "Core Principles: Exploring Asynchronous IO Patterns in Python: Strategies for Enhanced Performance and Scalability.",
        room: "Pacific Hall",
        speaker: "Angufibo Lincoln",
      },
      {
        title: "Explainable AI with Python",
        room: "Innovation Floor",
        speaker: "Brayan Mwanyumba",
      },
      {
        title:
          "Python with Kafka: Get started on modern stream processing with Python",
        room: "Volta Room",
        speaker: "Mark Lubega",
      },
    ],
  },
];

export const PYCON_DAY4_SCHEDULE = [];
export const PYCON_DAY5_SCHEDULE = [];
