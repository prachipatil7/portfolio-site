const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://prachipatil7.github.io/portfolio-site',
  title: 'PP.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Prachi Patil',
  role: 'Machine Learning and AI Engineer',
  description:
    'I am a Master’s student in the Artificial Intelligence and Innovation program at Carnegie Mellon University with experience building and productionizing machine learning and agentic AI systems. My work spans from creating John Deere’s first agentic AI framework to co-founding Gumbo, a SaaS startup built on LLM-powered agentic search. I bridge deep ML research and applied product development, guided by the belief that great AI products require both rigorous engineering and thoughtful design.',
  resume: 'https://drive.google.com/file/d/1UVtMqnu8_6W6eeQS7t5wvbTdKL2Kz9Bo/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/prachi-patil-swe',
    github: 'https://github.com/prachipatil7',
  },
}

const projectCategories = {
  "Machine Learning + AI": [
    {
      name: 'Multimodal Diarization Model',
      subtitle: 'Lip-Focused Speaker Identification System',
      description:
        'Built and analyzed a lip-focused audiovisual diarization system, showing lip cues improve speaker identification and overlap over naïve baselines for active speaker detection in the wild.',
      // callToAction: 'Explore the multimodal diarization research.',
      stack: ['Computer Vision', 'Audio Processing', 'Speaker Diarization', 'Multimodal AI'],
      date: 'May 2025',
      backgroundImage: "/portfolio-site/assets/multimodal.png"
    },
    {
      name: 'In-Context Learning for Web Agents',
      subtitle: 'Adaptive Navigation Framework',
      description:
        'Developed a novel in-context learning framework that enables web agents to improve navigation by persistently updating a guidebook of strategies, boosting benchmark performance over standard prompting baselines.',
      // callToAction: 'Learn about the adaptive web agent framework.',
      stack: ['LLMs', 'In-Context Learning', 'Web Agents', 'Reinforcement Learning'],
      date: 'May 2025',
      backgroundImage: "/portfolio-site/assets/webarena.png"
    },
    {
      name: 'Patch-Based Attacks on AI-Image Detectors',
      subtitle: 'Adversarial Attack Framework',
      description:
        'Experimented with patch-based adversarial attacks that degrade CLIP-based AI-image detectors\' accuracy by targeting key image regions, achieving strong fool rates with minimal, less perceptible noise.',
      // callToAction: 'Discover the adversarial attack methodology.',
      stack: ['Adversarial ML', 'Computer Vision', 'CLIP', 'Security Research'],
      date: 'May 2025',
      backgroundImage: "/portfolio-site/assets/clip-adversarial.jpg"
    },
    {
      name: 'LLM Prompt Recovery',
      subtitle: 'Gold Medalist in Google\'s Kaggle Competition',
      description:
        'Won 13th place out of 2175 teams in  Google\'s LLM Prompt Recovery competition on Kaggle. Our strategy involved a genetic hill-climber and topic clustering to create custom adversarial attacks.',
      callToAction: 'Read more about this competition experience',
      stack: ['Genetic Algorithms', 'LLMs', 'BERTopic'],
      sourceCode: 'https://github.com/alexsaavedraa/Prompt-Recovery-Challenge',
      article: 'https://www.kaggle.com/competitions/llm-prompt-recovery',
      backgroundImage: "/portfolio-site/assets/boxplot.png",
      date: 'April 2024',
      // blogPost: {
      //   id: 'llm-prompt-recovery',
      //   title: 'The Art of Competitive Programming',
      //   subtitle: 'Why Kaggle competitions changed my approach to ML',
      //   contentFile: '3.md',
      //   date: '2024-09-08',
      //   readTime: '4 min read',
      //   tags: ['Kaggle', 'Competition', 'Genetic Algorithms', 'LLM']
      // }
    },
    {
      name: 'Machine-Based Theater',
      subtitle: 'The Singularity Show',
      description:
        'Put together a live improv show featuring AI-powered digital actors with audio streaming, speech-to-text, LLM invocations, text-to-speech, and real-time avatar animation.',
      callToAction: 'Read more about the show and early LLM systems.',
      stack: ['LLMs', 'JavaScript', 'Real-Time Systems'],
      article: 'https://www.mccormick.northwestern.edu/news/articles/2023/05/student-designed-avatar-makes-public-debut-at-panel-theatrical-production-is-next/',
      video: 'https://www.youtube.com/watch?v=ojLKauINic0&ab_channel=ChicagoInnovation',
      backgroundImage: "/portfolio-site/assets/avatar.png",
      date: 'May 2023',
      // blogPost: {
      //   id: 'machine-based-theater',
      //   title: 'Building LLM Systems at Scale',
      //   subtitle: 'Lessons learned from productionizing AI at John Deere',
      //   contentFile: '2.md',
      //   date: '2024-10-22',
      //   readTime: '5 min read',
      //   tags: ['LLM', 'Production AI', 'John Deere', 'Software Engineering']
      // }
    },
    {
      name: 'Ludobots: A Study',
      subtitle: 'Experiment on Genetic Algorithms',
      description:
        'Inspired by the popular online course on evolutionary robotics, r/ludobots, I used the resulting system to run an experiment on the effects of starting morphology on fitness growth rate.',
      callToAction: 'View the README for the methodology and results.',
      stack: ['Genetic Algorithms', 'Python', 'Physics Simulation'],
      sourceCode: 'https://github.com/prachipatil7/genetic-algorithm-ludobots',
      video: 'https://www.youtube.com/watch?v=FpmQrnR3f40&ab_channel=PrachiPatil',
      backgroundImage: "/portfolio-site/assets/ludobot.png",
      date: 'April 2023',
      // blogPost: {
      //   id: 'ludobots',
      //   title: 'Ludobots: A Study',
      //   subtitle: 'Effects of Starting Complexity on Genetic Algorithm Fitness Growth Results',
      //   contentFile: 'ludobots.md',
      //   date: '2023-04-01',
      //   readTime: '10 min read',
      //   tags: ['Genetic Algorithms', 'Python', 'Physics Simulation']
      // }
    }
  ],
  "Just for Fun": [
    {
      name: 'Plant2.0',
      subtitle: 'A Plant-Care Embedded System',
      description:
        'With a group of 4 Northwestern students, created and demonstrated a complete plant-care device including automatic watering and light intake, and light, soil moisture, temperature, and air humidity monitoring.',
      callToAction: 'View the source code and component list in the Github link.',
      stack: ['Embedded Systems', 'C', 'Microprocessors', 'Design'],
      sourceCode: 'https://github.com/prachipatil7/plant-monitoring-embedded-system/tree/main?tab=readme-ov-file',
      backgroundImage: "/portfolio-site/assets/plant.jpeg",
      date: 'March 2023'
    },
    {
      name: 'Game: Election Day',
      subtitle: 'LudumDare53 Game Jam',
      description:
        'In 48 hours, created all storyline, art, and code for a typing game called "Election Day". This was for the theme of "Delivery" and is all about proper delivery when giving an important speech.',
      callToAction: 'Play the game, check out the submission, or view the source code below!',
      stack: ['C#', 'Unity', 'Game Development', 'OOP'],
      sourceCode: 'https://github.com/prachipatil7/ludumdare53?tab=readme-ov-file',
      article: 'https://ldjam.com/events/ludum-dare/53/election-day',
      game: 'https://prachipatil7.itch.io/election-day',
      backgroundImage: "/portfolio-site/assets/election.png",
      date: 'April 2023'
    }, 
    {
      name: 'Game: Colordle',
      subtitle: 'A Color-Guessing Game',
      description:
        'My first-ever personal coding project, this is a simple, static webpage with a Wordle-inspired game for guessing the RGB values of a chosen color. Deployed using GitHub Pages.',
      callToAction: 'Play the game or look at the source code below!',
      stack: ['Javascript', 'CSS', 'HTML'],
      sourceCode: 'https://github.com/prachipatil7/colordle',
      game: 'https://prachipatil7.github.io/colordle/',
      backgroundImage: "/portfolio-site/assets/colordle.png",
      date: 'February 2022'
    }
  ]
}

// Keep projects array for backward compatibility
const projects = Object.values(projectCategories).flat();

const skills = [
    {category: "Programming Languages", skills: ["Python", "Java", "JavaScript", "C#", "C", "HTML/CSS"]},
    {category: "Frameworks", skills: ["Springboot", "React", "Node", "FastAPI", "Flask"]},
    {category: "AI, Machine Learning, and Data Science", skills: ["Pandas", "NumPy", "TensorFlow", "Scikit-Learn", "MLFlow", "Spark", "Databricks", "SQL"]},
    {category: "DevOps", skills: ["Git", "AWS", "Azure", "Docker", "Github Actions", "Jenkins", "Terraform"]},
]
const experience = [
     {
     position: "Data Science Intern",
     company: "Klaviyo - Agents & Foundations",
     points: [
       "Built an agentic website analysis system enabling 50% of cold-start customers for an AI marketing agent.",
       "Incorporated automatic visual branding into a LangGraph-based email creation system."
     ],
     dates: ["June 2025", "August 2025"],
     logo: "/portfolio-site/assets/klaviyo.jpg"
   },
     {
     position: "Chief Technology Officer",
     company: "Carnegie Mellon University Startup: Gumbo",
     points: [
       "Led a team of 5 in building a web-agent framework for automated spreadsheet population using internet data.",
       "Won Gebhardt Sandbox Fund and reached CMU Hack-A-Startup Competition finals."
     ],
     dates: ["November 2024", "July 2025"],
     logo: "/portfolio-site/assets/gumbo.png"
   },
  {
    position: "Software Engineer",
    company: "John Deere - Data & Analytics",
    points: [
      "Developed and productionized LLM systems to aid data exploration and hyper-personalized marketing",
      "Worked on recommendation algorithms to cultivate personalized eCommerce experiences."
    ],
    dates: ["August 2023", "Present"],
    logo: "https://i.pinimg.com/originals/28/6b/4e/286b4ecc9af91eb03bee1f3d970d5aa3.jpg"
  },
  {
    position: "Student Software Engineer",
    company: "John Deere - CVML & MLOps",
    points: [
      "Built and tested data enrichment capabilities for the internal LLM platform.",
      "Trained and troubleshot CVML models using Amazon Sagemaker to enhance mistake-proofing in over 60 factories."
    ],
    dates: ["September 2022", "August 2023"],
    logo: "https://i.pinimg.com/originals/28/6b/4e/286b4ecc9af91eb03bee1f3d970d5aa3.jpg"
  },
  {
    position: "Software Internship",
    company: "John Deere - Intelligent Solutions Group",
    points: [
      "Collected usage metrics from company-wide cloud accounts to forecast future usage.",
      "Compared AWS purchase history with company usage to create intelligent quarterly purchase recommendations, saving thousands of dollars per quarter."
    ],
    dates: ["June 2022", "September 2022"],
    logo: "https://i.pinimg.com/originals/28/6b/4e/286b4ecc9af91eb03bee1f3d970d5aa3.jpg"
  }
]
const education = [
  {
    university: "Carnegie Mellon University",
    school: "Language Technologies Institute",
    degrees: ["Master of Science in Artificial Intelligence and Innovation"],
    dates: ["August 2024", "Present"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUxA9bwVZYGb5LrF3Num5V4tjfos4ilcsxw&s"
  },
  {
    university: "Northwestern University",
    school: "Weinberg School of Arts and Sciences",
    degrees: ["B.A. in Computer Science", "B.S. in Cognitive Science", "Graduated Cum Laude (GPA 3.9/4.0)"],
    dates: ["August 2019", "June 2023"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv5m1efp-WOpYI6VnDuln-BbhzlnJrkgR3zw&s"
  }
]


const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'pspatil@andrew.cmu.edu',
}

const blogPosts = [
]

export { header, about, projects, projectCategories, skills, experience, education, contact, blogPosts }
