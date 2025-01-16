import project1 from "../assets/projects/doctor.png";
import project2 from "../assets/projects/agency.png";
import project3 from "../assets/projects/new.png";
import project4 from "../assets/projects/newweb.png";

export const HERO_CONTENT = `I am a passionate front-end developer with a knack for crafting engaging and scalable web applications. With 9 months of hands-on experience, I have honed my skills in front-end technologies like React, JavaScript , Tailwind css or Bootstrap, Modern css And Html. My goal is to leverage my expertise to create innovative and intuitive user experiences that drive business growth and delight users.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. With 9 months of professional experience, I have worked with a variety of technologies, including React, JavaScript , Tailwind css or Bootstrap, Modern css, Html and modern UI frameworks. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year:` ${new Date().getFullYear()} - Present`,
    role: "React Developer",
    company: " Self-Learning Projects.",
    description: `Built multiple responsive web applications using React.js, including:
    E-Doctor website: An e-medical website provides online consultations, health product sales, and appointment scheduling. It ensures secure access to medical records and privacy for users.`,
    technologies: ["Javascript", "React.js", "Tailwind", "Framer-Motion"],
  },
  {
    year: "2024 - 2025",
    role: "Web Development Trainee",
    company: "[Hablu Programmer]",
    description: `Completed a professional course on Web Development, focusing on React.js, JavaScript (ES6), and HTML/CSS.Collaborated on group projects to create interactive websites with dynamic content.Learned industry-best practices, such as Git for version control and responsive web design principles.`,
    technologies: ["HTML", "CSS", "React", "JavaScript",  "Tailwind", "Bootstrap", "Next Js"],
  },
  {
    year: "2024 - 2025",
    role: "Front-End Developer ",
    company: "Group Project",
    description: `Participated in a group project at [Programming Center Name], where we built a library management system using React.js.Focused on making the application mobile-friendly using responsive design technique`,
    technologies: ["React", "Next js", "Tailwind", "Shadcn Ui"],
  },
  {
    year: "2021 - 2023",
    role: "Web Desiner",
    company: "Self-Learning",
    description: `Self-learned web design by creating responsive and user-friendly websites using HTML, CSS, and JavaScript. Focused on modern UI principles and cross-device compatibility.`,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
];

export const PROJECTS = [
  {
    title: "E-Medical BD Website",
    image: project1,
    description:
      "An e-medical website provides online consultations, health product sales, and appointment scheduling. It ensures secure access to medical records and privacy for users.",
      link:"https://doctorhomebd.netlify.app/" ,
    technologies: ["HTML", "CSS", "React", "Tailwind", "Framer-motion"],
  },
  {
    title: "ChillsBay Travel Website",
    image: project2,
    description:
      "ChillsBay Travel website offers personalized trip planning, seamless booking, and exclusive travel deals. Explore destinations effortlessly with our user-friendly and inspiring platform.",
      link:"https://full-stack-project-kappa.vercel.app/" ,
    technologies: ["HTML", "CSS", "React", "NextUi", "Tailwind"],
  },
  {
    title: "GoverningDocs Website",
    image: project3,
    description:
      "Our GoverningDocs website offers secure document management and easy access to essential governance materials. Designed for efficiency, it ensures seamless collaboration and compliance",
      link:"https://agency-nine-liard.vercel.app/" ,
      
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Creative For You Website",
    image: project4,
    description:
      "Our crafted websites are fast-loading, mobile-friendly, and fully customizable. With top-notch design and modern technology, it will elevate your brand to the next level.",
      link: "https://creativeyou.netlify.app/",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
];

export const CONTACT = {
  address: "244 Banani, Dhaka, Bangladesh ",
  phoneNo: "+880 01949219333",
  email: "sheikhhashibubalam758@gmail.com",
};
