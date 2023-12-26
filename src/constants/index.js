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
    {
      name: ".NET",
      icon: net,
    },
    {
      name: "C#",
      icon: csharp,
    },
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
    {
      name: "TypeScript",
      icon: typescript,
    },
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
      title: "Software Developer",
      company_name: "Ambsan Tech",
      icon: ambsan,
      iconBg: "#383E56",
      date: "Aug 2022 - Aug 2023",
      points: [
        "Developing and maintaining web applications Backend using .NET and C#.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Boosted WebAPI reliability by implementing rigorous XUnit and Moq unit testing.",
        "Configured GitLab CI/CD pipelines for streamlined software delivery.",
      ],
    },
    {
      title: "Associate Software Developer",
      company_name: "Unikrew Solutions",
      icon: unikrew,
      iconBg: "#E6DEDD",
      date: "Jul 2021 - Aug 2022",
      points: [
        "Implemented .NET microservices in adherence to Agile and Scrum methodologies.",
        "Designed custom C# solutions.",
        "Configured CI/CD pipelines in Azure DevOps.",
        "Employed Docker for setting up development instances for new R&D task.",
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
        "I highly recommend Hassan, a top-notch .NET Developer. He excel in meeting user stories and acceptance criteria with meticulous precision. His ingenuity in finding workarounds for complex challenges is impressive. A valuable asset to any team!",
      name: "Saad Naseer",
      designation: "Associate Product Manager",
      company: "Ambsan Tech",
      image: saad,
    }
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };