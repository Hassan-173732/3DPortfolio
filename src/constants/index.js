import {
    mobile,
    backend,
    database,
    creator,
    cloud,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    net,
    csharp,
    sql,
    tailwind,
    nodejs,
    mongodb,
    git,
    frontend,
    figma,
    docker,
    meta,
    unikrew,
    tesla,
    shopify,
    carrent, 
    jobit,
    tripguide,
    threejs,
    ambsan,
    ahmedali,
    hasanhaider,
    saad
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Database Expert",
      icon: database,
    },
    {
      title: "Cloud Developer",
      icon: cloud,
    }

  ];
  
  const technologies = [
    /* {
      name: ".NET",
      icon: net,
    },
    {
      name: "C#",
      icon: csharp,
    }, */
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    /* {
      name: "TypeScript",
      icon: typescript,
    }, */
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "git",
      icon: git,
    },

    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Ambsan Tech",
      icon: ambsan,
      iconBg: "#383E56",
      date: "Aug 2022 - Aug 2023",
      points: [
        "Implemented and optimized front-end code for web applications, harnessing HTML, CSS, and React.js.",
        "Performed unit testing using Jest to ensure code quality and reliability.",
        "Worked closely with UX/UI designers to implement visually appealing and intuitive features.",
        "Participated in GitLab code reviews to enhance code quality and collaboration.",
        "Contributed to backend development using .NET and C#.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Freelance Contract",
      icon: unikrew,
      iconBg: "#E6DEDD",
      date: "Jul 2021 - Aug 2022",
      points: [
        "Developed and maintained React components to create dynamic and responsive user interfaces.",
        "Utilized Node.js and Express.js to architect and maintain RESTful APIs.",
        "Debugged and resolved issues related to browser compatibility, performance, and responsiveness.",
        "Collaborated with international cross-functional teams to analyze project requirements and translate them into technical specifications.",
      ],
    }
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "Hassan Azhar is an excellent resource with a knack of picking up new technologies and ideas early and effectively. His understanding of core programming concepts along with grasping the actual problem at hand are both exceptional. During his time at Unikrew, Hassan managed to pull of numerous complex tasks in an efficient manner. Hasan will undoubtedly thrive at whatever place and technology he choses to work with.",
      name: "Ahmed Ali",
      designation: "Principal Software Engineer",
      company: "Unikrew Solutions",
      image: ahmedali,
    },
    {
      testimonial:
        "I have worked with Hassaan for around a year and his creativity and problem solving skills have always impressed me. His in-depth analysis of every single one of his tasks and planned execution of each task sets him apart from regular developers. His expertise in .Net has helped the firm a lot. Any company would be lucky to have him.",
      name: "Hasan Haider",
      designation: "Senior Software Engineer",
      company: "Ambsan Tech",
      image: hasanhaider,
    },
    {
      testimonial:
        "I highly recommend Hassan, developer. He excel in meeting user stories and acceptance criteria with meticulous precision. His ingenuity in finding workarounds for complex challenges is impressive. A valuable asset to any team!",
      name: "Saad Naseer",
      designation: "Associate Product Manager",
      company: "Ambsan Tech",
      image: saad,
    }
  ];
  
  const projects = [
    {
      name: "3D Porfolio",
      description:
        "Transformed the traditional portfolio into a dynamic 3D showcase, blending innovation with design. Featuring interactive models and seamless animations, it captures the essence of my skills and passion in a visually engaging experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Hassan-173732/3DPortfolio",
    }
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };