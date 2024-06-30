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
    duration: "13:00 - 14:00",
  },
  {
    title: "Official Expo Hall Time",
    duration: "13:00 - 14:00",
  },
  {
    title: "Official Expo Hall Time",
    duration: "13:00 - 14:00",
  },
  {
    title: "Open Source Panel Session",
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
    duration: "17:00 - 18:00",
  },
  {
    title: "Announcements and Closing",
    duration: "18:00 - 18:30",
  },
];

export const PYCON_DAY2_SCHEDULE = [
  {
    title: "Opening Keynote",
    duration: "09:00 - 10:00",
    speaker: "Stephen Senkomago Musoke",
  },
  {
    title: "Breakfast",
    duration: "10:00 - 11:00",
    speaker: "",
  },
  {
    title:
      "Python for Open Source Machine Learning Projects: Insights from Outreachy Internships",
    duration: "11:00 - 11:30",
    speaker: "Hellen Namulinda and Kirabo Kakopo Atuhurira",
    workshopTitle: "Django Girls Workshop",
    workshopSpeaker: "Dorothy Kabarozi .B. and Eva Nanyonga",
  },
  {
    title: "Word Embeddings: A Pythonic Delight",
    duration: "11:30 - 12:00",
    speaker: "Brayan Kai Mwanyumba",
    workshopTitle: "Django Girls Workshop",
    workshopSpeaker: "Dorothy Kabarozi .B. and Eva Nanyonga",
  },
  {
    title:
      "Harnessing the Power of Real-time Data Processing with Apache Beam and Python",
    duration: "12:00 - 12:30",
    speaker: "Mwangi Kabiru",
    workshopTitle: "Django Girls Workshop",
    workshopSpeaker: "Dorothy Kabarozi .B. and Eva Nanyonga",
  },
  {
    title: "Automation & Integration Using Python",
    duration: "12:30 - 13:00",
    speaker: "Wesley Kambale",
    workshopTitle: "Django Girls Workshop",
    workshopSpeaker: "Dorothy Kabarozi .B. and Eva Nanyonga",
  },

  {
    title: "Lunch break",
    duration: "13:00 - 14:00",
    speaker: "",
  },
  {
    title: "Panel Session (Diversity and Inclusion)",
    duration: "14:00 - 15:00",
    speaker: "",
    workshopTitle: "Django Girls Workshop",
    workshopSpeaker: "Dorothy Kabarozi .B. and Eva Nanyonga",
  },
  {
    title:
      "Using Python and Dash plotly to make interactive dashboard (virtual)",
    duration: "15:00 - 15:30",
    speaker: "Abdulhaq Adetunji Salako",
    workshopTitle: "Django Girls Workshop",
    workshopSpeaker: "Dorothy Kabarozi .B. and Eva Nanyonga",
  },
  {
    title:
      "Revolutionize Your Python Development with GitHub Copilot: Tips, Tricks, and Best Practices",
    duration: "15:30 - 16:00",
    speaker: "Olayinka Atobiloye",
    workshopTitle: "Django Girls Workshop",
    workshopSpeaker: "Dorothy Kabarozi .B. and Eva Nanyonga",
  },
  {
    title: "Closing Keynote",
    duration: "16:00 - 17:00",
    speaker: " Monica Oyugi",
  },
  {
    title: "Lightning Talks",
    duration: "17:00 - 17:30",
    speaker: "",
  },
  {
    title: "Outreachy 1000 Intern Celebrations",
    duration: "17:30 - 20:00",
    speaker: "",
  },
];

export const PYCON_DAY3_SCHEDULE = [
  {
    title: "Community Spotlight",
    duration: "09:00 - 10:00",
    speaker: "",
  },
  {
    title: "Breakfast",
    duration: "10:00 - 11:00",
    speaker: "",
  },
  {
    title:
      "Empowering Data Scientists: Unleashing the Potential of Azure Cloud Services (Virtual)",
    duration: "11:00 - 11:30",
    speaker: "Lorna Aine",
    workshopTitle:
      "Python for Robust Data Infrastructure: AirQo's Air Quality Monitoring in Africa",
    workshopSpeaker: "Noble Mutabazi, Richard Sserunjogi, Noah Nsimbe",
  },
  {
    title: "Machine Learning Experimentation with DVC and VS Code",
    duration: "11:30 - 12:00",
    speaker: "Gift Ojeabulu",
    workshopTitle:
      "Python for Robust Data Infrastructure: AirQo's Air Quality Monitoring in Africa",
    workshopSpeaker: "Noble Mutabazi, Richard Sserunjogi, Noah Nsimbe",
  },
  {
    title:
      "Python Custom Visuals in Power BI: Unleashing the Power of Data Visualization",
    duration: "12:00 - 12:30",
    speaker: "Allan Kiche",
    workshopTitle:
      "Python for Robust Data Infrastructure: AirQo's Air Quality Monitoring in Africa",
    workshopSpeaker: "Noble Mutabazi, Richard Sserunjogi, Noah Nsimbe",
  },
  {
    title: "The Art of Defensive programming",
    duration: "12:30 - 13:00",
    speaker: "Joylynn Kirui",
    workshopTitle:
      "Python for Robust Data Infrastructure: AirQo's Air Quality Monitoring in Africa",
    workshopSpeaker: "Noble Mutabazi, Richard Sserunjogi, Noah Nsimbe",
  },
  {
    title: "Lunch break",
    duration: "13:00 - 14:00",
    speaker: "",
    workshopTitle: "Pyladies Luncheon",
    workshopSpeaker: "Monica Iyabo",
  },
  {
    title: "Panel Session (Career Panel)",
    duration: "14:00 - 15:00",
    speaker: "",
  },
  {
    title: "Building and Influencing the Open Source Ecosystem",
    duration: "15:00 - 15:30",
    speaker: "Omotola Omotayo",
    workshopTitle: "How to create your own secure chat application",
    workshopSpeaker: "Bethany Jepchumba, Josh Ndemenge, Joylynn Kirui",
  },
  {
    title: "State of the Community Address",
    duration: "15:30 - 16:00",
    speaker: "Sumaiya Nalukwago and Lincoln Angufibo",
    workshopTitle: "How to create your own secure chat application",
    workshopSpeaker: "Bethany Jepchumba, Josh Ndemenge, Joylynn Kirui",
  },
  {
    title: "AI recommender systems to improve customer personalization",
    duration: "16:00 - 16:30",
    speaker: "Yvvon Jemmy",
    workshopTitle: "How to create your own secure chat application",
    workshopSpeaker: "Bethany Jepchumba, Josh Ndemenge, Joylynn Kirui",
  },
  {
    title: "Closing session for the Inaugural PyCon Uganda Conference",
    duration: "16:30 - 17:30",
    speaker: "Elijah Okello",
  },
];

export const PYCON_DAY4_SCHEDULE = [];
export const PYCON_DAY5_SCHEDULE = [];
