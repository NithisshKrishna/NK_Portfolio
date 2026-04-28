const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Blogs",
    link: "#testimonials",
  },
  
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 8, suffix: "+", label: "AI/ML Solutions Developed" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 3, suffix: "+", label: "Production-Level Systems" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Programming Languages",
    desc: "• Python\n• R\n• SQL\n• Matlab\n• C++",
  },
  {
    imgPath: "/images/seo.png",
    title: "Data Analysis & Visualization",
    desc: "• Exploratory & Statistical Analysis\n• Tableau & Power BI\n• Excel, Matplotlib & Plotly",
  },
  {
    imgPath: "/images/seo.png",
    title: "Machine Learning & AI",
    desc: "• Feature Engineering\n• Deep Learning\n• Natural Language Processing\n• Time Series Analysis",
  },
  {
    imgPath: "/images/seo.png",
    title: "Libraries & Frameworks",
    desc: "• Pandas & NumPy\n• Scikit-learn\n• PyTorch & Keras\n• Django",
  },
  {
    imgPath: "/images/seo.png",
    title: "Databases & Tools",
    desc: "• PostgreSQL\n• Git\n• Docker",
  },
  {
    imgPath: "/images/seo.png",
    title: "Statistical & Predictive Modeling",
    desc: "• Statistical Methods\n• Predictive Modeling\n• Data-driven Insights\n• Model Evaluation",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },

];

const expCards = [
  {
    review: "International Software Systems Inc.",
    imgPath: "/images/ISSI.webp",
    logoPath: "/images/ISSI.webp",
    title: "AI & Machine Learning Intern",
    date: "March 2026 - Present",
    responsibilities: [
      "Enhancing the Professional Services Management System (PSMS) by integrating AI modules for automated resume parsing, semantic candidate matching, and intelligent query handling",
      "Implementing retrieval-augmented generation (RAG) pipelines with embeddings, FAISS, and LLMs to provide context-aware recommendations and human-readable explanations for staffing decisions.",
      "Extending Django backend and data models to support structured candidate data, real-time AI insights, and secure, scalable workflows while maintaining system reliability.",
    ],
  },
  {
    review: "International Software Systems Inc.",
    imgPath: "/images/ISSI.webp",
    logoPath: "/images/ISSI.webp",
    title: "Data Analysis Intern",
    date: "June 2025 - August 2025",
    responsibilities: [
      "Enhancing the Professional Services Management System (PSMS) by integrating AI modules for automated resume parsing, semantic candidate matching, and intelligent query handling",
      "Implementing retrieval-augmented generation (RAG) pipelines with embeddings, FAISS, and LLMs to provide context-aware recommendations and human-readable explanations for staffing decisions.",
      "Extending Django backend and data models to support structured candidate data, real-time AI insights, and secure, scalable workflows while maintaining system reliability.",
    ],
  },
  {
    review: "Engineering Monk",
    imgPath: "/images/EM.png",
    logoPath: "/images/EM.png",
    title: "Machine Learning Intern",
    date: "January 2023 - March 2023",
    responsibilities: [
      "Developed and optimized end-to-end machine learning pipelines, collaborating with cross-functional team members to integrate models into production-ready, real-world applications.",
      "Supported data preprocessing, model deployment, and project execution using Agile methodologies to improve workflow efficiency, collaboration, and timely delivery of machine learning solutions.",
      
    ],
  },
];

const eduCards = [
  {
    review: "State University of New York at Buffalo",
    imgPath: "/images/UB.png",
    logoPath: "/images/UB.png",
    title: "MS in Engineering Science - Data Science",
    date: "August 2024 - January 2026",
    responsibilities: [
  "Completed Master of Science in Engineering Science (Data Science) at University at Buffalo, gaining strong foundations in machine learning, data engineering, and AI systems",
  "Maintained a CGPA of 3.74/4.0 while applying data science and software engineering concepts through academic coursework and real-world projects"
   ],
  },
  {
    review: "Rajalakshmi Engineering College",
    imgPath: "/images/REC.png",
    logoPath: "/images/REC.png",
    title: "B.Tech in Artificial Intelligence and Machine Learning",
    date: "August 2020 - May 2024",
    responsibilities: [
  "Completed Bachelor of Technology in Artificial Intelligence and Machine Learning, building strong foundations in machine learning, deep learning, and data structures",
  "Maintained a CGPA of 8.85/10 while actively working on academic projects and applying AI/ML concepts to real-world problem-solving"
   ],
  },
];



const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Nithisshkrishna",
    mentions: "@nithissh683",
    review:
    "Ever wondered what's actually happening when ChatGPT answers you? It all comes down to one breakthrough technology — the Transformer. In my latest blog, I break down how it works using simple, everyday analogies. No jargon, no math — just clear explanations anyone can understand.<br><br/>Have a look — <a href=\"https://medium.com/@nithissh683/how-transformers-rewired-ai-the-architecture-behind-every-modern-llm-a4783a6f1900\" target=\"_blank\" rel=\"noreferrer\">click here</a>",
    imgPath: "/images/client1.png",
  },
  {
    name: "Nithisshkrishna",
    mentions: "@nithissh683",
    review:
      "A general AI knows a lot — but it doesn't know your business. So how do we fix that? In my second blog, I break down Fine-Tuning vs RAG in the simplest way possible, with real-life analogies anyone can understand. No tech background needed.<br><br/>Have a look — <a href=\"https://medium.com/@nithissh683/fine-tuning-vs-rag-two-ways-to-make-llms-actually-useful-2bb542acc771\" target=\"_blank\" rel=\"noreferrer\">click here</a>",
    imgPath: "/images/client1.png",
  },
  {
    name: "Nithisshkrishna",
    mentions: "@nithissh683",
    review:
      "Most people use AI like a search engine — and wonder why they get average answers. The secret? It's all in how you ask. In my third blog, I break down Prompt Engineering and Temperature in the simplest way possible so anyone can get better results from AI — starting today. <br><br/>Have a look — <a href=\"https://medium.com/@nithissh683/45d5719b2961\" target=\"_blank\" rel=\"noreferrer\">click here</a>",
    imgPath: "/images/client1.png",
  },
  /*{
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },*/
];

const socialImgs = [
  {
    name: "Github",
    imgPath: "/images/github.png",
    url: "https://github.com/NithisshKrishna",
  },
  {
    name: "medium",
    imgPath: "/images/medium.png",
    url: "https://medium.com/@nithissh683",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin (1) (2).png",
    url: "https://www.linkedin.com/in/nithisshkrishna/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  eduCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
