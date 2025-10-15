// Mock data for Abdulrahman Kharzoum's portfolio
export const portfolioData = {
  personal: {
    name: "Abdulrahman Kharzoum",
    title: "Flutter Developer | AI Automation Specialist",
    tagline: "Flutter Dev | AI Automation Workflows Dev n8n | Bachelor of Science in Information Technology Engineering",
    email: "abdalrahman.kharzoum@gmail.com",
    phone: "+963936854969",
    location: "Damascus, Syria",
    linkedin: "https://www.linkedin.com/in/abdulrahman-kharzoum-9040bb20a",
    github: "https://github.com/abdulrahman-kharzoum",
    summary: "Recent Computer Science graduate with hands-on experience in Flutter mobile development and 1 year specializing in AI automation using n8n. Successfully completed multiple academic projects and eager to apply technical skills to real-world challenges."
  },

  skills: {
    mobile: ["Flutter", "Dart", "State Management (BLoC, Cubit, Provider, Riverpod)", "Firebase", "Google Maps Integration"],
    ai: ["n8n Automation", "AI Workflows", "RAG Systems", "API Integration"],
    web: ["Three.js", "JavaScript", "3D Web Development"],
    backend: ["Python", "API Development", "Database Management"],
    tools: ["Git", "Firebase", "Pusher", "Google Drive/Dropbox Integration"]
  },

  experience: [
    {
      id: 1,
      role: "Automation Engineer",
      company: "clikview",
      location: "Dubai, United Arab Emirates",
      duration: "April 2024 - Present",
      period: "1 year 6 months",
      type: "AI Automation",
      achievements: [
        "Designed and implemented AI-powered automation workflows using n8n",
        "Architected and deployed RAG (Retrieval-Augmented Generation) systems",
        "Developed extensive automation for Google Drive and Dropbox",
        "Managed end-to-end self-hosting of n8n on servers",
        "Improved data management efficiency across multiple platforms"
      ],
      technologies: ["n8n", "AI Automation", "RAG Systems", "Google Drive API", "Dropbox API"],
      liveDemo: "https://clikview.com/gpt",
      icon: "🤖"
    }
  ],

  projects: [
      {
      id: 1,
      title: "NeverMiss AI – AI-Powered Productivity Platform",
      duration: "10/02/2025 - 10/13/2025",
      type: "AI Automation",
      description: "Full-stack AI assistant integrating Gmail, Google Calendar, and Tasks with voice interaction, meeting transcription, and secure token management.",
      achievements: [
        "Integrated Google Workspace APIs (Gmail, Calendar, Tasks) with a custom OAuth 2.0 flow and secure token refresh mechanism.",
        "Designed stateless N8N workflow architecture to enable multi-user support and dynamic handling of user-specific OAuth tokens.",
        "Implemented end-to-end encryption for sensitive user data stored in MongoDB using Fernet.",
        "Developed bidirectional voice interaction using Web Speech API and automated meeting transcription via Fireflies API."
      ],
      technologies: ["React", "Python (FastAPI)", "MongoDB (Motor)", "N8N", "Google Gemini AI", "Firebase Auth", "OAuth 2.0", "Fernet", "Fireflies API"],
      github: "",
      liveDemo: "https://smartchat-ai-14.emergent.host",
      image: "/intergrations .png",
      category: "web3d"
    },
    {
      id: 2,
      title: "Charity Mobile App",
      duration: "November 2024 - September 2025",
      type: "Flutter Development",
      description: "Comprehensive charity management application with instant aid requests and educational management system",
      achievements: [
        "Implemented services section for managing instant aid requests and viewing aid history",
        "Built robust education management system for course enrollment and progress tracking",
        "Automated API integration using w_builder package, reducing boilerplate code by 50%",
        "Streamlined feature development with single JSON configuration files"
      ],
      technologies: ["Flutter", "flutter_bloc", "get_it", "Firebase Messaging", "w_builder"],
      github: "https://github.com/abdulrahman-kharzoum/charity-flutter-app.git",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
      category: "mobile"
    },
    {
      id: 3,
      title: "HomyKitchen Mobile App",
      duration: "June 2024 - September 2024", 
      type: "Flutter Development",
      description: "Social media platform for home cooks to share recipes and connect with food enthusiasts",
      achievements: [
        "Developed social media features including like, comment, and share functionality",
        "Created compelling visual content showcasing homemade dishes",
        "Enhanced user engagement through community interaction features",
        "Boosted visibility for local home kitchens"
      ],
      technologies: ["Flutter", "Social Media Integration", "Media Handling", "Real-time Features"],
      github: "https://github.com/abdulrahman-kharzoum/homey_kitchen.git",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      category: "mobile"
    },
    {
      id: 4,
      title: "EduCloud Mobile App",
      duration: "May 2023 - August 2023",
      type: "Flutter Development", 
      description: "School management system facilitating communication between educational institutions and parents",
      achievements: [
        "Developed comprehensive school-parent communication platform",
        "Implemented real-time student performance evaluation system",
        "Created real-time bus tracking feature for enhanced child safety",
        "Integrated robust notification system using Pusher for timely updates"
      ],
      technologies: ["Flutter", "Google Maps", "Pusher", "Real-time Notifications", "GPS Tracking"],
      github: "https://github.com/abdulrahman-kharzoum/eduCloud_mobile.git",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop",
      category: "mobile"
    },
    {
      id: 5,
      title: "Blimp Simulation Web App",
      duration: "August 2023 - September 2023",
      type: "3D Web Development",
      description: "Immersive web-based simulation of blimp environment using advanced 3D technologies",
      achievements: [
        "Created visually engaging 3D blimp simulation experience", 
        "Implemented realistic 3D environments with dynamic elements",
        "Developed day/night cycle with changing atmospheric conditions",
        "Built interactive sky, sea, and mountain landscapes"
      ],
      technologies: ["Three.js", "JavaScript", "3D Modeling", "WebGL", "Animation"],
      github: "https://github.com/BAHAA-THE-KING/Airship.git",
      image: "/blimp_project.png",
      demoVideo: "https://www.facebook.com/share/v/19DgjbW8Tp/",
      category: "web3d"
    }
  
  ],

  education: {
    degree: "Bachelor of Science in Information Technology Engineering",
    university: "Damascus University",
    location: "Damascus, Syria", 
    duration: "2020 - 2025",
    graduation: "September 2025",
    gpa: "Excellent"
  },

  languages: [
    { language: "Arabic", level: "Native" },
    { language: "English", level: "B2 - Upper Intermediate" }
  ],

  certifications: [
    "Flutter Development Certification",
    "AI Automation Specialist",
    "Three.js 3D Development"
  ]
};

export default portfolioData;