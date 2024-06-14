const projects = [
  {
    id: "ideabuddy",
    title: "Idea Buddy",
    projectName: "Idea Buddy",
    builtWith: "Built with NextJS, TailwindCSS & OpenAI API",
    githubRepoLink: "https://github.com/Mr-Georgie/ideabuddy",
    liveSiteLink: "https://idea-buddy-ai.vercel.app/",
    imageSource:
      "https://github.com/Mr-Georgie/Portfolio-v3/blob/main/public/static/images/ideabuddy.png?raw=true",
    projectDescription:
      "Idea Buddy is an intelligent and quick-thinking personal brainstorming partner designed to provide critical evaluation and feedback on ideas. \n In this project, I explored the OpenAI documentation which opened my eyes to the possibilities of AI-powered apps. \n I found out how the ChatGPT app uses tokens to communicate with OpenAI models. I also leveraged system prompts to customize the model to fit the purpose of the app.",
    category: ["responsive", "mvp", "next"],
  },
  {
    id: "portfolio-v2",
    title: "Portfolio v2",
    projectName: "Portfolio v2",
    builtWith: "Built with ReactJS & TailwindCSS",
    githubRepoLink: "https://github.com/Mr-Georgie/Portfolio",
    liveSiteLink: "https://georgeisiguzo.netlify.app/",
    imageSource:
      "https://github.com/Mr-Georgie/Portfolio-v3/blob/main/public/static/images/port.png?raw=true",
    projectDescription:
      "This was the second version of my web portfolio \n Built with ReactJS, TailwindCSS and Headless UI. It's mobile responsive and has the light/dark theme switch feature",
    category: ["responsive", "react"],
  },
  {
    id: "veliso",
    title: "Veliso Design",
    projectName: "Veliso Design",
    builtWith:
      "Built with ReactJS, SpringBoot, ResendAPI, Google Drive API & TailwindCSS",
    githubRepoLink: "https://github.com/doswin5/veliso-waitlist",
    liveSiteLink: "https://veliso-waitlist.vercel.app/",
    imageSource:
      "https://georgeisiguzo.netlify.app/static/media/veliso-waitlist.640b5d8764cec83fa352.gif",
    projectDescription:
      "Veliso Design is an African-based app library that is being created to help product designers design better products by providing them with implementable product designs of already existing real world apps. \n The designs that will be available on Veliso would include designs for mobile apps, websites and web apps. \n Building the backend API with SpringBoot and the Admin Dashboard with ReactJS. I also integrated Resend API for sending emails on the waitlist page ",
    category: ["responsive", "freelance", "mvp", "backend"],
  },
  {
    id: "mojaglobal",
    title: "Moja Global Community | Open Source",
    projectName: "Moja Global",
    builtWith: "Built with ReactJS & CSS",
    githubRepoLink:
      "https://github.com/moja-global/community-website/issues/344",
    liveSiteLink: "https://community.moja.global/",
    imageSource:
      "https://github.com/Mr-Georgie/Portfolio-v3/blob/main/public/static/images/moja.png?raw=true",
    projectDescription:
      "Moja Global is a not-for-profit, collaborative project that brings together a community of experts to develop open-source software that allows users to accurately and affordably estimate greenhouse gas emissions and removals from the AFOLU sector. \n I fixed a bug on the Hero Section of the landing page responsive for smaller screens. See the issue on GitHub here: https://github.com/moja-global/community-website/issues/344",
    category: ["opensource", "react", "responsive"],
  },
  {
    id: "big-sis-wedding",
    title: "Big Sis' Wedding!",
    projectName: "Big Sis' Wedding!",
    builtWith: "Built with ReactJS & TailwindCSS",
    githubRepoLink: "https://github.com/Mr-Georgie/wedding-template",
    liveSiteLink: "https://chinonso-weds-kester.netlify.app/",
    imageSource:
      "https://github.com/Mr-Georgie/wedding-template/blob/main/src/images/Screenshot%202024-01-16%20at%2018.39.07.png?raw=true",
    projectDescription:
      "Built one page website for my sister's wedding in 2022 to provide the guest with important details about the occassion. \n Guest can also download their invitation cards on the website",
    category: ["responsive", "volunteer"],
  },
  {
    id: "oguname",
    title: "Oguname.com",
    projectName: "Oguname.com",
    builtWith: "Built with HTML5, TailwindCSS, VueJS & Laravel ",
    githubRepoLink: "https://github.com/Mr-Georgie/ogunames-fe",
    liveSiteLink: "https://oguname.com",
    imageSource:
      "https://github.com/Mr-Georgie/Portfolio-v3/blob/main/public/static/images/ogu.png?raw=true",
    projectDescription:
      "OguName.com is a web-based project that aspires to promote the digital inclusion and the preservation of the gun language. The gun language is spoken by the Ogu people who are a native of the West Africa coast. \n This project aims to archive the personal names of people from the ogu culture and documents the meanings, and the roots of ogu names in English Language. \n I contributed in building the User Interface with a group of fellow volunteers before handing it over to the organizers to complete the project",
    category: ["responsive", "volunteer"],
  },
  {
    id: "badagryanaesthesia",
    title: "Badagry Anaesthesia",
    projectName: "Badagry Anaesthesia",
    builtWith: "Built with VueJS, Laravel, Bootstrap & TailwindCSS",
    githubRepoLink: "",
    liveSiteLink: "https://badagryanaesthesia.edu.ng/",
    imageSource:
      "https://georgeisiguzo.netlify.app/static/media/badagry-anaes.8a405617c57377f735df.png",
    projectDescription:
      "Developed a comprehensive web application for Badagry Anaesthesia, School of Anaesthetic in Lagos, Nigeria. I was solely responsible for crafting the user interface based on the client's Figma prototype, ensuring a seamless and intuitive experience. \n I Implemented key features including landing pages, login and signup, student dashboard, admin dashboard, and computer-based testing section. I utilized a tech stack consisting of HTML, CSS, Bootstrap CDN, and TailwindCSS for efficient and responsive design.",
    category: ["responsive", "freelance"],
  },
  {
    id: "movielibrary",
    title: "Movie Library",
    projectName: "Movie Library",
    builtWith: "Built with ReactJS, Vanilla CSS, ExpressJS & Gophie Web API",
    githubRepoLink: "https://github.com/Mr-Georgie/movie-library",
    liveSiteLink: "https://moviee-library.netlify.app/",
    imageSource:
      "https://github.com/Mr-Georgie/Portfolio/blob/main/src/images/movie-library.gif?raw=true",
    projectDescription:
      "As a movie lover, I built Movie Library in 2021 to allow me easily download movies from popular movie download sites with the click of a button.",
    category: ["responsive"],
  },
  {
    id: "portfolio v1",
    title: "Portfolio v1",
    projectName: "Portfolio v1",
    builtWith: "Built with ReactJS, Headless UI & TailwindCSS",
    githubRepoLink: "https://github.com/Mr-Georgie/Portfolio",
    liveSiteLink: "https://georgeisiguzo-v1.netlify.app/",
    imageSource:
      "https://github.com/Mr-Georgie/wedding-template/blob/main/src/images/Screenshot%202024-01-16%20at%2019.29.13.png?raw=true",
    projectDescription:
      "The first version of my web portfolio. \n I enjoyed building it as I got to practice conditional rendering in ReactJS and other ReactJS concepts I just learned",
    category: ["responsive"],
  },
];

export default projects;
