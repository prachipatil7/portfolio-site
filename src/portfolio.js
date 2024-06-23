const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://prachipatil7.github.io/portfolio-site',
  title: 'PP.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Prachi Patil',
  role: 'ML/AI Software Engineer',
  description:
    'I am a student in the Master of Science in Artificial Intelligence and Innovation Program at Carnegie Mellon University as well as a working Software Engineer at John Deere in the Data and Anlaytics division.',
  resume: 'https://drive.google.com/file/d/1UVtMqnu8_6W6eeQS7t5wvbTdKL2Kz9Bo/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/prachi-patil-swe',
    github: 'https://github.com/prachipatil7',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'LLM Prompt Recovery',
    subtitle: 'Gold Medalist in Google\'s Kaggle Competition',
    description:
      'Won 13th place out of 2175 teams in  Google\'s LLM Prompt Recovery competition on Kaggle. Our strategy involved a genetic hill-climber algorithm and topic clustering to create custom attacks for each cluster.',
    callToAction: 'Check out the README for a detailed walkthrough of our process.',
    stack: ['Genetic Algorithms', 'LLMs', 'BERTopic'],
    sourceCode: 'https://github.com/alexsaavedraa/Prompt-Recovery-Challenge',
    article: 'https://www.kaggle.com/competitions/llm-prompt-recovery',
    backgroundImage: "/portfolio-site/assets/boxplot.png"
  },
  {
    name: 'Machine-Based Theater',
    subtitle: 'The Singularity Show',
    description:
      'Put together a live improv show at Chicago\'s Annoyance theater featuring AI-powered digital actors with audio streaming, speech-to-text, LLM invocations, text-to-speech, and real-time avatar animation.',
    callToAction: 'Read the article on the project below, and watch our actor lead a panel on Generative AI!',
    stack: ['LLMs', 'JavaScript', 'Real-Time Systems'],
    article: 'https://www.mccormick.northwestern.edu/news/articles/2023/05/student-designed-avatar-makes-public-debut-at-panel-theatrical-production-is-next/',
    video: 'https://www.youtube.com/watch?v=ojLKauINic0&ab_channel=ChicagoInnovation',
    backgroundImage: "/portfolio-site/assets/avatar.png"
  },
  {
    name: 'Ludobots: A Study',
    subtitle: 'Experiment on Genetic Algorithms',
    description:
      'Inspired by the popular online course on evolutionary robotics, r/ludobots, I used the resulting system to run an experiment on the effects of starting morphology on fitness growth rate.',
    callToAction: 'View the README for a detailed explanation of methodology and results.',
    stack: ['Genetic Algorithms', 'Python', 'Physics Simulation'],
    sourceCode: 'https://github.com/prachipatil7/genetic-algorithm-ludobots',
    backgroundImage: "/portfolio-site/assets/ludobot.png"
  },
  {
    name: 'Plant2.0',
    subtitle: 'A Plant-Care Embedded System',
    description:
      'With a group of 4 Northwestern students, created and demonstrated a complete plant-care device including automatic watering and light intake, and light, soil moisture, temperature, and air humidity monitoring.',
    callToAction: 'View the source code and component list in the Github link.',
    stack: ['Embedded Systems', 'C', 'Microprocessors', 'Design'],
    sourceCode: 'https://github.com/prachipatil7/plant-monitoring-embedded-system/tree/main?tab=readme-ov-file',
    backgroundImage: "/portfolio-site/assets/plant.jpeg"
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
    backgroundImage: "/portfolio-site/assets/election.png"
  }, 
  {
    name: 'Game: Colordle',
    subtitle: 'A Color-Guessing Game',
    description:
      'My first-ever personal coding project, this is a Wordle inspired game for guessing the RGB values of a chosen color. Deployed using GitHub Pages',
    callToAction: 'Play the game or look at the source code below!',
    stack: ['Javascript', 'CSS', 'HTML'],
    sourceCode: 'https://github.com/prachipatil7/colordle',
    game: 'https://prachipatil7.github.io/colordle/',
    backgroundImage: "/portfolio-site/assets/colordle.png"
  }
]

const skills = [
    {category: "Pragramming Languages", skills: ["Python", "Java", "JavaScript", "C#", "C", "HTML/CSS"]},
    {category: "Frameworks", skills: ["Springboot", "React", "Node", "FastAPI", "Flask"]},
    {category: "AI, Machine Learning, and Data Science", skills: ["Pandas", "NumPy", "TensorFlow", "Spark", "Scikit-Learn", "MLFlow"]},
    {category: "DevOps", skills: ["Git", "AWS", "Azure", "Docker", "Github Actions", "Jenkins", "Terraform"]},
]
const experience = [
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
    dates: ["June 2022", "Semptember 2023"],
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

export { header, about, projects, skills, experience, education, contact }
