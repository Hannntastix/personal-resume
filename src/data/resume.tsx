import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "M.Raihan Athalah Ilham",
  initials: "rey",
  url: "https://dillion.io",
  location: "Bandar Lampung, Lampung Indonesia",
  locationLink: " ",
  description:
    "An undergraduate student of Informatics Engineering at Institut Teknologi Sumatera, class of 2022.",
  summary:
    " Actively participates in organizations and bootcamps outside of campus. Possesses skills in designing front-end websites using HTML, CSS, and JavaScript. Interested in developing skills in the field of Web Development.",
  avatarUrl: "/profile.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "C++",
    "Typescript",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://github.com/Hannntastix?tab=repositories", icon: CodeIcon, label: "Projects" },
  ],
  contact: {
    email: "rehan121203@gmail.com",
    tel: "+6281237460035",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Hannntastix",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mraihan-athalah/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com/@raihanathalah764?si=sCBm3msxzhPdSQuu",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Digistar Class 2024 By Telkom indonesia",
      href: "https://class.digistartelkom.id/",
      badges: [],
      location: "Hybrid",
      title: "Class Manager",
      logoUrl: "/Logo Digistar Class (1) (2).png",
      start: "July 2024",
      end: "Present",
      description:
        "Collaborated to promote the Digistar Class 2024 program to the public, resulting in a total of 12,176 applicants. Managed soft skill classes and Hacker-Front End classes within the Digistar Class 2024 program. Provided guidance to 10 participants throughout the duration of the Digistar Class 2024 program. Organized mentoring schedules for each class session of the Digistar Class 2024 program.",
    },
    {
      company: "Transfornation.Id",
      badges: [],
      href: " ",
      location: "Remote",
      title: "Video Editor",
      logoUrl: "/logo transfornation.png",
      start: "May 2024",
      end: "June 2024",
      description:
        "Developed innovative plans and concepts for video content to be used for marketing purposes. Collaborated with over 20 individuals from various divisions to organize a volunteer event in Lombok. Served as a committee member for the pre-event activities of the Lombok volunteer event, discussing and planning the event concepts. Updated and posted three posters and one promotional video on Instagram every week.",
    },
    {
      company: "AppFibr Corp",
      href: " ",
      badges: [],
      location: "Remote",
      title: "Software Creator & Sales and marketing specialist",
      logoUrl: "/logo appfibr.png",
      start: "May 2023",
      end: "November 2023",
      description:
        "Successfully developed a mobile application tailored to various user needs using the AppFibr web platform. Collaborated with four other developers to meet the company's requirements in mobile application development. Enhanced the design and layout of the mobile application, increasing the number of users by 20% each month. Designed mobile application content according to user preferences, particularly to promote users' businesses. Successfully created and designed a mobile application for over 400 users within seven months.",
    },
  ],
  education: [
    {
      school: "Institut Teknologi Sumatera",
      href: " ",
      degree: "Bachelor's Degree of Informatics Engineer",
      logoUrl: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Logo_ITERA.png",
      start: "2022",
      end: "Present",
    },
  ],
  projects: [
    {
      title: "CutieStuff",
      href: "https://cutiestuff.vercel.app/",
      dates: "June 2024 - July 2024",
      active: true,
      description:
        "This project aims to develop CutieStuff, an innovative and user-friendly website designed to offer customers the unique opportunity to purchase and customize phone cases using their favorite photos. The platform will provide an easy-to-navigate interface where users can effortlessly upload images, select case types, and create personalized designs that reflect their individual style and preferences. Whether it’s a cherished memory, a beloved pet, or a stunning landscape, CutieStuff will allow customers to turn their favorite moments into stylish and protective phone cases. The project will include key features such as easy customization with real-time previews, a variety of case types to choose from, high-quality printing for vibrant and durable designs, a user-friendly interface for a seamless experience, and secure payment options to ensure customer safety and convenience.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Kinde",
        "UploadThing",
      ],
      links: [
        {
          type: "Website",
          href: "https://cutiestuff.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: {
        src: "/cutiestuff.png",
        width: 800,
        height: 600,
      },
      video:
        "",
    },
    {
      title: "HannnAI",
      href: "https://hannn-ai.vercel.app/",
      dates: "June 2024 - Present",
      active: true,
      description:
        "We are excited to introduce HannnAI, now in version 2.0, supported by LLama. In this new version, we have significantly expanded the dataset used to train HannnAI, making it more extensive and diverse than ever before. Our goal with HannnAI is to provide a highly interactive and assistive AI for users through text-based conversations, and the improvements in version 2.0 have enhanced its capabilities to better serve this purpose.",
      technologies: [
        "Vite",
        "Javascript",
        "TailwindCSS",
        "React",
        "Flowbite React",
        "Groq API",
        "Kinde",
      ],
      links: [
        {
          type: "Website",
          href: "https://hannn-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Hannntastix/HannnAI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: {
        src: "/hannnai.png",
        width: 800,
        height: 600,
      },
      video: "",
    },
    {
      title: "Pokepedia",
      href: "https://pokepedia-rouge.vercel.app/",
      dates: "May 2024 - May 2024",
      active: true,
      description:
        "This website was created as a source of information about the data and statistics of each Pokémon. It provides detailed information on various aspects such as types, abilities, base stats, evolutions, and more. Users can search for specific Pokémon, compare their stats, and learn about their strengths and weaknesses. The platform is designed to be a comprehensive and user-friendly resource for Pokémon enthusiasts and trainers, offering insights and data to enhance their knowledge and gameplay experience.",
      technologies: [
        "Javascript",
        "TailwindCSS",
        "React",
        "Flowbite React",
        "Poke API",
      ],
      links: [
        {
          type: "Website",
          href: "https://pokepedia-rouge.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Hannntastix/Pokepedia",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: {
        src: "/pokepedia.png",
        width: 800,
        height: 600,
      },
      video: "",
    },
    {
      title: "Boorah",
      href: "https://hannntastix.github.io/Boorah./",
      dates: "April 2024 - May 2024",
      active: true,
      description:
        "This website offers an exceptional and user-friendly platform designed to inspire and guide users in finding their perfect holiday destination. It features a curated selection of stunning and beautiful holiday locations around the world. Each recommendation includes detailed information such as scenic views, local attractions, accommodation options, and travel tips to enhance the user’s travel experience. The site is fully responsive, ensuring a seamless browsing experience across all devices, whether on a desktop, tablet, or smartphone. Users can explore diverse destinations, read reviews, and access helpful travel resources, making it easier to plan their next unforgettable getaway.",
      technologies: [
        "HTML",
        "CSS",
        "Javascript",
      ],
      links: [
        {
          type: "Website",
          href: "https://hannntastix.github.io/Boorah./",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Hannntastix/Boorah.",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: {
        src: "/boorah.png",
        width: 800,
        height: 600,
      },
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Dukun VS Demit",
      dates: "April - May, 2024",
      location: "Bandar Lampung, Lampung",
      description:
        "This is a Final Project for Object Oriented Programming Subject. We Created this project using Python Pygame. In this Project i played a role as a programmer, in this project there were 2 roles, designer and programmer. We've done this project as a team with 6 members in it.",
      image:
        "./dvd.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TawakkalM/Koentji-Production",
        },
      ],
    },
    {
      title: "Task-Zen",
      dates: "April 12th - 29th, 2024",
      location: "Bandar Lampung, Lampung",
      description:
        "Task-zen is a user-friendly task management platform developed using the React JS framework. With its sleek interface, users can effortlessly create, organize, and track their to-do lists. The platform offers efficient task creation, real-time updates, and customization options to personalize task lists. Task-zen ensures cross-platform compatibility, allowing users to stay organized and productive across devices. Experience the convenience of task management with Task-zen and take control of your tasks like never before.",
      image:
        "./task-zen.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Hannntastix/Tasklist-react",
        },
        {
          title: "Website",
          icon: <Icons.globe className="size-3" />,
          href: "https://hannntastix.github.io/Tasklist-react/",
        },
      ],
    },
  ],
} as const;
