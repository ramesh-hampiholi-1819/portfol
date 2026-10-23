import type { Project, SkillCategory, EducationItem, LearningItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  fullName: 'Ramesh Hampiholi',
  initials: 'RH',
  professionalTitle: 'Aspiring Software Developer | Python & AI Enthusiast',
  headline: 'Building Practical Solutions Through Code.',
  heroIntro:
    "I'm Ramesh Hampiholi, a BCA student passionate about software development, Python, artificial intelligence, and data-driven applications. I enjoy turning ideas into practical digital solutions and continuously improving my technical skills.",
  location: 'Gadag, Karnataka, India',
  email: 'rameshhampiholi10@gmail.com',
  githubUrl: 'https://github.com/ramesh-hampiholi-1819',
  linkedinUrl: 'https://www.linkedin.com/in/ramesh-hampiholi-289519381/',
  currentPortfolioUrl: 'https://ramesh-hampiholi-1819.github.io/portfolio/',
  university: 'Karnatak University Dharwad',
  degree: 'Bachelor of Computer Applications (BCA)',
  resumeFileName: 'resume.pdf',
};

export const ABOUT_INFO = {
  paragraphs: [
    "I am currently pursuing my Bachelor of Computer Applications (BCA) under Karnatak University Dharwad. My journey with technology began with an innate curiosity about how computer software operates behind the screen, which quickly grew into a dedicated discipline of writing clean code and building functional applications.",
    "Throughout my academic studies and self-directed programming, I have focused heavily on core software fundamentals, object-oriented programming with Python and Java, database design, and modern web application development. I believe that hands-on building is the most effective way to master engineering principles.",
    "I am particularly fascinated by artificial intelligence, data science, and analytical tools. From transforming raw datasets into interactive visual dashboards with Python and Streamlit to developing full-stack web portals, my goal is to consistently construct practical, reliable, and user-friendly software solutions while constantly learning from modern industry practices."
  ],
  keyAttributes: [
    { title: 'Education', value: 'BCA (Karnatak University Dharwad)' },
    { title: 'Location', value: 'Gadag, Karnataka, India' },
    { title: 'Core Interests', value: 'Python, AI, Data Science & Web Dev' },
    { title: 'Availability', value: 'Open for Internships & Projects' }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'programming',
    title: 'Programming Languages',
    description: 'Core languages used for algorithms, backend logic, and application development.',
    icon: 'Code2',
    skills: [
      { name: 'Python', category: 'programming' },
      { name: 'Java', category: 'programming' },
      { name: 'C', category: 'programming' },
      { name: 'JavaScript', category: 'programming' }
    ]
  },
  {
    id: 'web',
    title: 'Web Development',
    description: 'Modern frontend interfaces and server-side runtimes.',
    icon: 'Globe',
    skills: [
      { name: 'HTML5', category: 'web' },
      { name: 'CSS3', category: 'web' },
      { name: 'React', category: 'web' },
      { name: 'Node.js', category: 'web' }
    ]
  },
  {
    id: 'databases',
    title: 'Databases & Storage',
    description: 'Relational and document storage solutions for structured data.',
    icon: 'Database',
    skills: [
      { name: 'MySQL', category: 'databases' },
      { name: 'MongoDB', category: 'databases' },
      { name: 'Firebase', category: 'databases' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    description: 'Developer environments, version control, and interactive runtime platforms.',
    icon: 'Wrench',
    skills: [
      { name: 'Git', category: 'tools' },
      { name: 'GitHub', category: 'tools' },
      { name: 'VS Code', category: 'tools' },
      { name: 'Google Colab', category: 'tools' },
      { name: 'Streamlit', category: 'tools' }
    ]
  },
  {
    id: 'exploring',
    title: 'Currently Exploring & Deepening',
    description: 'Emerging technology areas under active study and practical experimentation.',
    icon: 'Compass',
    skills: [
      { name: 'Machine Learning Fundamentals', isExploring: true, category: 'exploring' },
      { name: 'Data Science & Analytics', isExploring: true, category: 'exploring' },
      { name: 'Generative AI & LLM Tools', isExploring: true, category: 'exploring' },
      { name: 'Data Visualization', isExploring: true, category: 'exploring' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'student-data-analysis',
    title: 'Student Data Analysis System',
    tagline: 'Python & Streamlit dashboard for academic performance visualization',
    description:
      'An analytical platform built with Python that processes student academic records from CSV datasets to uncover meaningful statistical trends, subject-wise correlations, and grade distributions.',
    problemSolved:
      'Manual evaluation of student marks is time-consuming and often misses systemic trends. This application automates statistical calculations and renders instant visual dashboards for educators.',
    keyFeatures: [
      'Interactive CSV data parsing and validation',
      'Automated calculation of averages, pass percentages, and score variance',
      'Interactive visual charts using Streamlit and data plotting libraries',
      'Custom filter parameters for subject-wise and cohort-level queries'
    ],
    techStack: ['Python', 'Streamlit', 'Pandas', 'Data Analysis', 'Data Visualization'],
    githubUrl: 'https://github.com/ramesh-hampiholi-1819/STUDENT-DATA-ANALYSIS',
    liveDemoUrl: 'https://student-data-analysis-v2.streamlit.app/',
    isFeatured: true,
    category: 'Data & AI',
    metricsOrHighlights: ['Live Streamlit App', 'CSV Engine', 'Statistical Insights']
  },
  {
    id: 'online-bus-pass',
    title: 'Online Bus Pass Management System',
    tagline: 'College transit portal for paperless pass application and record verification',
    description:
      'A structured web application designed to streamline student bus pass registrations, route validations, and administrative record keeping for student daily commutes.',
    problemSolved:
      'Replaced long physical queues and paper-based forms with a digital application system that organizes applicant records and accelerates verification.',
    keyFeatures: [
      'Student pass registration form with route selection',
      'Validation of student credentials and college identification',
      'Admin verification console for reviewing and issuing passes',
      'Searchable database records organized by route and semester'
    ],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'MySQL', 'Web Development'],
    githubUrl: 'https://github.com/ramesh-hampiholi-1819',
    isFeatured: false,
    category: 'Web Applications',
    metricsOrHighlights: ['College Transit', 'Database Backed', 'Workflow Automation']
  },
  {
    id: 'acms-portal',
    title: 'ACMS / UCMS Academic Portal',
    tagline: 'Comprehensive portal architecture for collegiate academic workflows',
    description:
      'An academic management system prototype engineered to support multi-role interaction between students, faculty members, coordinators, and college administrators.',
    problemSolved:
      'Addresses fragmented communication between departments by consolidating course details, student profiles, and administrative notices into a unified dashboard.',
    keyFeatures: [
      'Multi-role layout tailored for students, teachers, and coordinators',
      'Course information and timetable distribution modules',
      'Clean navigation architecture optimized for desktop and mobile access',
      'Extensible schema for attendance and grade book integration'
    ],
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Node.js', 'System Architecture'],
    githubUrl: 'https://github.com/ramesh-hampiholi-1819/college-management',
    isFeatured: false,
    category: 'Web Applications',
    metricsOrHighlights: ['Multi-Role Workflows', 'Student & Faculty Portal', 'Responsive UI']
  },
  {
    id: 'crack-the-code',
    title: 'Crack The Code — Logic & Cryptography Engine',
    tagline: 'Interactive Python puzzle engine and algorithmic code-breaking challenges',
    description:
      'A Python-based project implementing algorithmic puzzle generation, cipher transformations, and logic decoding mechanics.',
    problemSolved:
      'Creates an engaging environment for practicing programming problem-solving, understanding string manipulations, and learning encryption fundamentals.',
    keyFeatures: [
      'Algorithmic puzzle generation with variable difficulty levels',
      'Cipher encryption and decryption mechanics',
      'Interactive user prompt evaluation and validation logic',
      'Clean modular Python code with structured test cases'
    ],
    techStack: ['Python', 'Algorithms', 'Logic Design', 'Software Engineering'],
    githubUrl: 'https://github.com/ramesh-hampiholi-1819/CRACK-THE-CODE',
    isFeatured: false,
    category: 'Systems & Tools',
    metricsOrHighlights: ['Algorithmic Logic', 'Open Source', 'Python Core']
  },
  {
    id: 'file-share-app',
    title: 'Direct File Share Web App',
    tagline: 'Lightweight web utility for streamlined browser document exchange',
    description:
      'A focused web application enabling quick file transfers, drag-and-drop file inspection, and lightweight sharing across local networks.',
    problemSolved:
      'Provides a zero-friction tool to send and receive academic documents and project assets without requiring account creation.',
    keyFeatures: [
      'Drag-and-drop file upload with real-time size validation',
      'Clean metadata display including file type and byte count',
      'Accessible, clean user interface with instant download cues'
    ],
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Web APIs'],
    githubUrl: 'https://github.com/ramesh-hampiholi-1819/file-share-app',
    isFeatured: false,
    category: 'Web Applications',
    metricsOrHighlights: ['Browser File API', 'Lightweight', 'Zero Friction']
  },
  {
    id: 'c-programs-lab',
    title: 'C & Algorithms Laboratory',
    tagline: 'Hands-on repository of fundamental data structures and memory manipulation',
    description:
      'A comprehensive collection of C implementations covering foundational data structures, sorting algorithms, memory allocation, and algorithmic performance.',
    problemSolved:
      'Builds deep low-level computer science foundations by implementing core data structures without relying on high-level library abstractions.',
    keyFeatures: [
      'Manual pointer manipulation and dynamic memory allocation',
      'Implementations of search and sorting algorithms (Bubble, Insertion, Quick, Binary Search)',
      'Data structure implementations (Linked lists, Stacks, Queues)',
      'Console-based validation programs'
    ],
    techStack: ['C Language', 'Data Structures', 'Algorithms', 'Memory Management'],
    githubUrl: 'https://github.com/ramesh-hampiholi-1819/C-Programs',
    isFeatured: false,
    category: 'Systems & Tools',
    metricsOrHighlights: ['Low-Level Systems', 'Core CS Fundamentals', 'Algorithmic Rigor']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Karnatak University Dharwad',
    location: 'Dharwad / Gadag, Karnataka, India',
    period: '2023 – Present',
    description:
      'Comprehensive undergraduate program covering software development, computer architecture, database management systems, programming paradigms, and modern application engineering.',
    highlights: [
      'Core coursework in Python, Java, C Programming, and Object-Oriented Design',
      'Relational database architecture, SQL query design, and data normalization',
      'Operating systems, computer networks, and web development fundamentals',
      'Independent practical project development and analytical implementations'
    ]
  },
  {
    id: 'puc',
    degree: 'Pre-University Course (PUC)',
    institution: 'F. B. Pujar Government College, Shirahatti',
    location: 'Shirahatti, Karnataka, India',
    period: 'Completed',
    description:
      'Pre-university higher secondary education building strong analytical foundations in science, mathematics, and logical reasoning.',
    highlights: [
      'Strong quantitative reasoning and mathematical foundations',
      'Introduction to computer fundamentals and structured logic',
      'Preparation for collegiate computer application studies'
    ]
  },
  {
    id: 'jnv',
    degree: 'Secondary School Certificate (Class 10 / AISSE)',
    institution: 'Jawahar Navodaya Vidyalaya, Gadag (JNV)',
    location: 'Gadag, Karnataka, India',
    period: 'Completed',
    description:
      'Rigorous residential schooling under the premier Navodaya Vidyalaya Samiti system, fostering academic excellence, discipline, and scientific inquiry.',
    highlights: [
      'Premier national residential educational institution',
      'All India Secondary School Examination (CBSE curriculum)',
      'Foundation in mathematics, sciences, and holistic extracurricular participation'
    ]
  }
];

export const CURRENT_LEARNING: LearningItem[] = [
  {
    id: 'py-data',
    title: 'Python for Data Analysis',
    focus: 'Pandas, NumPy & Exploratory Data Analysis',
    description:
      'Mastering efficient dataframe transformations, handling missing data, statistical aggregations, and cleaning real-world datasets.',
    tags: ['Pandas', 'NumPy', 'EDA', 'Data Wrangling']
  },
  {
    id: 'ml-fundamentals',
    title: 'Machine Learning Fundamentals',
    focus: 'Supervised Learning & Model Evaluation',
    description:
      'Studying core algorithms including linear regression, logistic regression, decision trees, feature engineering, and cross-validation techniques.',
    tags: ['Scikit-Learn', 'Regression', 'Classification', 'Math for ML']
  },
  {
    id: 'ai-apps',
    title: 'AI Application Development',
    focus: 'LLM Integration & Interactive Prototypes',
    description:
      'Exploring how to connect modern generative AI APIs and language models to practical interfaces built with Streamlit and web frontends.',
    tags: ['Generative AI', 'Prompt Engineering', 'API Integration', 'Streamlit']
  },
  {
    id: 'frontend',
    title: 'Modern Frontend Architecture',
    focus: 'React Ecosystem & Type-Safe UI',
    description:
      'Refining modern component design, TypeScript typing patterns, responsive CSS layout systems, and interactive user experiences.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Accessible UX']
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    focus: 'Problem Solving & Algorithmic Complexity',
    description:
      'Continuously practicing computational problem solving, analyzing Big-O time and space complexity, and implementing linear and tree structures.',
    tags: ['Data Structures', 'Algorithms', 'Time Complexity', 'Problem Solving']
  }
];
