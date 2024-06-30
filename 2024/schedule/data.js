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
    title: "Breakfast and Expo time",
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
  {
    duration: "12:30 - 13:00",
    hasMany: true,
    sessions: [
      {
        title: "End-to-end testing with Selenium and Python.",
        room: "Pacific Hall",
        speaker: "Victoria Mutai",
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
    room: "Innovation Floor",
    duration: "14:00 - 14:30",
  },
  {
    duration: "14:30 - 15:00",
    hasMany: true,
    sessions: [
      {
        title:
          "Dive into the world of Explainable AI (XAI) with Python, exploring how to make AI models transparent and understandable, fostering trust and ethical use in AI applications.",
        room: "Pacific Hall",
        speaker: "Brayan Mwanyumba",
      },
      {
        title: "Click It & Script It: Automating Your Desktop with PyAutoGUI",
        room: "Innovation Floor",
        speaker: "Collins Mesue",
      },
      {
        title: "Data to Dialogue: develop an end-to-end RAG application.",
        room: "Volta Room",
        speaker: "Bethany Jepchumba",
      },
      {
        title: "Pulitzer Center Sponsor Workshop",
        room: "Video Conference Room",
      },
    ],
  },
  {
    duration: "15:00 - 15:30",
    hasMany: true,
    sessions: [
      {
        title: "Efficient Integration Testing using TestContainers.",
        room: "Pacific Hall",
        speaker: "Sameer Shukla",
      },
    ],
  },
  {
    duration: "15:30 - 16:00",
    hasMany: true,
    sessions: [
      {
        title: "Revolutioned. Whats New in Python 3.10",
        room: "Pacific Hall",
        speaker: "Allan Kiche",
      },
      {
        title:
          "Leveraging Kafka Streams: Real-time Logging and Monitoring for Django Application.",
        room: "Innovation Floor",
        speaker: "Okot Daniel",
      },
      {
        title: "Introduction to Computer Vision in Python.",
        room: "Volta Room",
        speaker: "Baker Sentamu",
      },
    ],
  },
  {
    duration: "16:00 - 16:30",
    hasMany: true,
    sessions: [
      {
        title: "Beginner's Guide to Data Orchestration with Apache Airflow.",
        room: "Pacific Hall",
        speaker: "Okumu Justine",
      },
    ],
  },
  {
    title: "Closing Keynote",
    duration: "16:30 - 17:30",
    room: "Innovation Floor",
  },
  {
    title: "Announcements and Closing",
    room: "Innovation Floor",
    duration: "17:30 - 18:00",
  },
];

export const PYCON_DAY4_SCHEDULE = [
  {
    title: "Breakfast and Expo time",
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
        title: "Deploying Python on Serverless Infrastructure for Free.",
        room: "Pacific Hall",
        speaker: "Kayondo Edward",
      },
      {
        title: "Build LLM-powered Web Apps with Django and Gemini API",
        room: "Innovation Floor",
        speaker: "Wesley Kambale",
      },
      {
        title: "Guide to Test-Driven Development using PyTest",
        room: "Volta Room",
        speaker: "Doki Golder Sylivia",
      },
    ],
  },
  {
    duration: "11:30 - 12:00",
    hasMany: true,
    sessions: [
      {
        title:
          "Exploring Conversational AI: Crafting AI-Powered Django Apps with Gemini.",
        room: "Pacific Hall",
        speaker: "Hassan Bahati",
      },
    ],
  },
  {
    duration: "12:00 - 12:30",
    hasMany: true,
    sessions: [
      {
        title:
          "From Syntax to Solutions: Mastering Technical Writing for Developers.",
        room: "Pacific Hall",
        speaker: "Fanny Nyayic",
      },
      {
        title: "API 101 API fundamentals",
        room: "Innovation Floor",
        speaker: "Felix Jumason",
      },
      {
        title:
          "Integrating Python and Google Gemini: Crafting Cutting-Edge AI Applications",
        room: "Volta Room",
        speaker: "Julius Boakye",
      },
    ],
  },
  {
    duration: "12:30 - 13:00",
    hasMany: true,
    sessions: [
      {
        title:
          "Python in Web3: Libraries, Techniques, and Local Dev Challenges.",
        room: "Pacific Hall",
        speaker: "Oliseh Genesis",
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
    room: "Innovation Floor",
    duration: "14:00 - 14:30",
  },
  {
    duration: "14:30 - 15:00",
    hasMany: true,
    sessions: [
      {
        title: "Python for C2 (Command and Control) Operations.",
        room: "Pacific Hall",
        speaker: "Salim Abdella",
      },
      {
        title: "Crafting Ubiquity: A Model's Odyssey",
        room: "Innovation Floor",
        speaker: "Kayongo Johnson Brian",
      },
      {
        title: "Behind the scences of an Ads Prediction System",
        room: "Volta Room",
        speaker: "Bunmi Akinremi",
      },
    ],
  },
  {
    duration: "15:00 - 15:30",
    hasMany: true,
    sessions: [
      {
        title: "Building and Consuming APIs with Python.",
        room: "Pacific Hall",
        speaker: "Felix Jumason",
      },
    ],
  },
  {
    duration: "15:30 - 16:00",
    hasMany: true,
    sessions: [
      {
        title: "Django Rest Framework with J2J architecture.",
        room: "Pacific Hall",
        speaker: "Tumusiime Ezra",
      },
      {
        title: "Train & Debug A model with Responsible AI Dashboard",
        room: "Innovation Floor",
        speaker: "Anthony Byansi",
      },
      {
        title: "GitHub Sponsor  Student Workshop",
        room: "Volta Room",
        speaker: "Allan Kiche and Brayan Kai Mwanyumba",
      },
    ],
  },
  {
    duration: "16:00 - 16:30",
    hasMany: true,
    sessions: [
      {
        title: "Unlock Python's Potential: Serverless for Speed and Security.",
        room: "Pacific Hall",
        speaker: "Mirembe Rebecca Peace",
      },
    ],
  },
  {
    title: "Closing Keynote",
    duration: "16:30 - 17:30",
    room: "Innovation Floor",
  },
  {
    title: "Announcements and Closing",
    room: "Innovation Floor",
    duration: "17:30 - 18:00",
  },
];
export const PYCON_DAY5_SCHEDULE = [
  {
    title: "Breakfast and Expo time",
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
        title: "Python in Smart Contract development.",
        room: "Pacific Hall",
        speaker: "Jovan Mwesigwa",
      },
      {
        title: "Django Girls Workshop",
        room: "Innovation Floor",
        speaker: "Ann Namuli, Dorothy Kabarozi and Eva Nanyonga",
      },
      {
        title: "PyLadies Kampala Anniversary Workshop",
        room: "Volta Room",
        speaker: "Deoborah Lanyero and Monica Iyabo",
      },
    ],
  },
  {
    duration: "11:30 - 12:00",
    hasMany: true,
    sessions: [
      {
        title: "Python For The Web?.",
        room: "Pacific Hall",
        speaker: "Hussein Kizz",
      },
    ],
  },
  {
    duration: "12:00 - 12:30",
    hasMany: true,
    sessions: [
      {
        title:
          "Two of Yourself😃: How to Create a Digital A.I Clone to Double Your output!",
        room: "Pacific Hall",
        speaker: "Ssemujju Sharif",
      },
    ],
  },
  {
    duration: "12:30 - 13:00",
    hasMany: true,
    sessions: [
      {
        title:
          "Building the Future: Leveraging Tech Talent & AI for Sustainable Growth in Africa",
        room: "Pacific Hall",
        speaker: "Sodiq Akinjobi",
      },
    ],
  },
  {
    title: "Lunch Break",
    room: "Innovation Floor",
    duration: "13:00 - 14:00",
  },
  {
    duration: "14:00 - 14:30",
    hasMany: true,
    sessions: [
      {
        title: "Using the Power of AI in web applications",
        room: "Pacific Hall",
        speaker: "Ariyo Ahumuza",
      },
    ],
  },
  {
    duration: "14:30 - 15:00",
    hasMany: true,
    sessions: [
      {
        title: "Learning Python by solving programming problems",
        room: "Pacific Hall",
        speaker: "Zain Shabbir",
      },
    ],
  },
  {
    duration: "15:00 - 15:30",
    hasMany: true,
    sessions: [
      {
        title: "Analytics using Natural Language and LLMs",
        room: "Pacific Hall",
        speaker: "Josh Ndemenge",
      },
    ],
  },
  {
    duration: "15:30 - 16:00",
    hasMany: true,
    sessions: [
      {
        title: "Inside multimodal models",
        room: "Pacific Hall",
        speaker: "Bethany Jepchumba",
      },
    ],
  },
  {
    duration: "16:00 - 16:30",
    hasMany: true,
    sessions: [
      {
        title:
          "Python for Financial Data Analysis: Predicting Market Trends and Optimizing Investments",
        room: "Pacific Hall",
        speaker: "Abraham Imani Bahati",
      },
    ],
  },
  {
    title: "Closing Keynote",
    duration: "16:30 - 17:30",
    room: "Innovation Floor",
  },
  {
    title: "Announcements and Closing",
    room: "Innovation Floor",
    duration: "17:30 - 18:00",
  },
];
