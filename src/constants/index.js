import {
  carrent,
  classeh,
  css,
  docker,
  email,
  git,
  github,
  html,
  javascript,
  jobit,
  yazdan,
  mohamad,
  kiyana,
  linkedin,
  mojalal,
  nextjs,
  phone,
  reactjs,
  redux,
  rivas,
  tailwind,
  threejs,
  tripguide,
  typescript,
  zustand,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'feedback',
    title: 'Feedback',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    label: 'Phone Number',
    title: '+98 939 967 1609',
    icon: phone,
  },
  {
    label: 'Email Address',
    title: 'amirreza.karim.modini@gmail.com',
    icon: email,
  },
  {
    label: 'GitHub',
    title: 'Amirreza-karimmodini',
    icon: github,
  },
  {
    label: 'LinkedIn',
    title: 'Amirreza-karimmodini',
    icon: linkedin,
  },
]

const technologies = [
  {
    name: 'Next JS',
    icon: nextjs,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'Redux',
    icon: redux,
  },
  {
    name: 'Zustand',
    icon: zustand,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
]

const experiences = [
  {
    title: 'FrontEnd Developer',
    company_name: 'Rivas System',
    icon: rivas,
    iconBg: '#fff',
    date: 'July 2023 – December 2023 - (6 mos) - Full-time',

    points: [
      'Built and maintained a custom LMS/CMS platform for schools using Next.js, handling educational content, assignments,and school operations.',
      'Implemented responsive and accessible layouts, ensuring seamless user experience across devices.',

      'Automated and digitized school administrative workflows, increasing operational efficiency.',

      'Collaborated with cross-functional teams to ensure scalability, performance, and maintainable codebase.',
    ],
  },
  {
    title: 'FrontEnd Developer',
    company_name: 'Mojalal',
    icon: mojalal,
    iconBg: '#000',
    date: 'February 2024 – June 2024 - (5 mos) - Full-time',
    points: [
      'Developed and maintained a real estate management platform using Next.js, implementing listings, filters, and propertymanagement tools.',
      'Designed scalable and intuitive user interfaces in collaboration with product managers and designers.',
      'Optimized front-end performance and responsiveness, improving load time by ~30%.',
      'Refactored legacy code and improved maintainability, contributing to faster feature development.',
    ],
  },
  {
    title: 'FrontEnd Developer',
    company_name: 'Classeh',
    icon: classeh,
    iconBg: '#E6DEDD',
    date: 'June 2024 – June 2025 - (13 mos) - Full-time',
    points: [
      'Built and maintained a custom LMS/CMS platform for schools using Next.js, handling educational content, assignments,and school operations.',
      'Implemented responsive and accessible layouts, ensuring seamless user experience across devices.',
      'Automated and digitized school administrative workflows, increasing operational efficiency.',
      'Collaborated with cross-functional teams to ensure scalability, performance, and maintainable codebase.',
    ],
  },
]

const testimonials = [
  {
    testimonial: 'I really enjoyed working with Amirreza. He’s curious, reliable, and always puts real thought into solving problems. You can count on him to get things done and be a solid teammate.',
    name: 'Kiana Nabipour',
    designation: 'Front-End Developer',
    link: 'https://www.linkedin.com/in/kiana-nb/',
    company: 'Classeh',
    image: kiyana,
  },
  {
    testimonial: 'Amirreza is genuinely curious and always enjoys digging into problems and figuring things out',
    name: 'Mohammad Farhadi',
    designation: 'Product Owner',
    link: 'https://www.linkedin.com/in/mohammad-farhadi-924b36154/',
    company: 'Classeh',
    image: mohamad,
  },
  {
    testimonial: 'Working with Amirreza was honestly a great experience. He’s detail-oriented, highly motivated, and easy to work with as a teammate. Any team would be lucky to have him.',
    name: 'Yazdan Qolami',
    designation: 'Front-End Team Lead',
    link: 'https://www.linkedin.com/in/yazdanqolami/',
    company: 'Classeh',
    image: yazdan,
  },
]

const projects = [
  {
    name: 'Car Rent',
    description: 'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description: 'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description: 'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
]

export { experiences, projects, services, technologies, testimonials }
