export interface Project {
  slug: string
  number: string
  title: string
  status: string
  description: string
  liveUrl?: string
  githubUrl?: string
  technologies: string[]
  images: string[]
  features: {
    title: string
    description: string
  }[]
  story: {
    challenge: string
    approach: string
    building: string
    result: string
  }
}

export const projects: Project[] = [
  {
    slug: "drivelot",
    number: "01",
    title: "Drivelot",
    status: "In Development",
    description:
      "A SaaS platform for driving schools, built to simplify daily operations and bring everything into one place.",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React",
      "TypeScript",
      "MySQL",
      "Docker",
      "Azure",
    ],
    images: [
      "/public/projects/drivelot/Drivelot-1.png",
      "/public/projects/drivelot/Drivelot-2.png",
      "/public/projects/drivelot/Drivelot-3.png",
      "/public/projects/drivelot/Drivelot-4.png",
    ],
    features: [
      {
        title: "Multi-school SaaS",
        description:
          "The platform is designed to support multiple driving schools while keeping each school's data and workflows separated.",
      },
      {
        title: "Role-based access",
        description:
          "Different user roles provide access to the parts of the platform relevant to administrators, teachers and students.",
      },
      {
        title: "Student management",
        description:
          "Driving schools can manage students and their information directly within the platform.",
      },
      {
        title: "Authentication & security",
        description:
          "JWT-based authentication and role-based authorization protect the platform and its resources.",
      },
      {
        title: "School management",
        description:
          "Administrators can manage driving schools and control their active status within the SaaS platform.",
      },
      {
        title: "Scalable architecture",
        description:
          "The system is structured around a maintainable backend and frontend architecture designed for future expansion.",
      },
    ],
    story: {
      challenge:
        "The goal was to create a platform that could simplify everyday operations for driving schools and bring important workflows into one place.",
      approach:
        "I focused on understanding the actual business workflow first and then designed the system around the needs of administrators, teachers and students.",
      building:
        "I built the platform with a Spring Boot backend and React frontend. The backend handles authentication, authorization, users, schools and business logic, while the frontend provides the user interface for the different roles.",
      result:
        "The result is a scalable SaaS foundation designed to support multiple driving schools while keeping each school's data and workflows separated.",
    },
  },
  {
    slug: "sveabilar",
    number: "02",
    title: "Svea Bilar",
    status: "Live",
    description:
      "A booking platform for an automotive service company, built to manage online bookings and administration.",
    liveUrl: "https://www.xn--sveabilarochdck-dlb.se/",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React",
      "TypeScript",
      "MySQL",
      "Docker",
    ],
    images: [
      "/public/projects/sveabilar/Sveabilar-1.png",
      "/public/projects/sveabilar/Sveabilar-2.png",
      "/public/projects/sveabilar/Sveabilar-3.png",
      "/public/projects/sveabilar/Sveabilar-4.png",
    ],
    features: [
      {
        title: "Online booking",
        description:
          "Customers can select a service, date and available time directly through the website.",
      },
      {
        title: "Availability management",
        description:
          "The system manages available booking slots and prevents conflicting reservations.",
      },
      {
        title: "Admin dashboard",
        description:
          "Administrators can view and manage incoming bookings from one place.",
      },
      {
        title: "Service management",
        description:
          "The platform manages the services offered by the company and connects them to the booking flow.",
      },
      {
        title: "Email confirmations",
        description:
          "Customers automatically receive a confirmation email after completing a booking.",
      },
      {
        title: "Secure administration",
        description:
          "The administration interface is protected through authentication and role-based access.",
      },
    ],
    story: {
      challenge:
        "The goal was to create a simple way for customers to book automotive services online while giving the business a reliable way to manage bookings.",
      approach:
        "I focused on keeping the customer journey simple while building the system around the actual workflow of the business. The solution was designed from both the customer and administrator perspective.",
      building:
        "I built the application with a Spring Boot backend and React frontend. The backend handles bookings, services, availability, authentication and email confirmations, while the frontend provides the customer booking experience and administration interface.",
      result:
        "The result is a complete booking platform that connects the customer experience with the company's internal booking workflow and reduces the need for manual booking management.",
    },
  },
  {
    slug: "traffic-school",
    number: "03",
    title: "Traffic School Platform",
    githubUrl: "https://github.com/TrafficSchool-System",
    status: "Completed",
    description:
      "A complete platform for a driving school, built to manage students, payments and theory training in one place.",

    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "React",
      "JavaScript",
      "MySQL",
      "Docker",
    ],
    images: [
      "/public/projects/trafficschool/Trafficschool-1.png",
      "/public/projects/trafficschool/Trafficschool-2.png",
      "/public/projects/trafficschool/Trafficschool-3.png",
      "/public/projects/trafficschool/Trafficschool-4.png",
      "/public/projects/trafficschool/Trafficschool-3.png",
      "/public/projects/trafficschool/Trafficschool-4.png",
      "/public/projects/trafficschool/Trafficschool-5.png",
      "/public/projects/trafficschool/Trafficschool-6.png",
      "/public/projects/trafficschool/Trafficschool-7.png",
      "/public/projects/trafficschool/Trafficschool-8.png",
      "/public/projects/trafficschool/Trafficschool-9.png",
      "/public/projects/trafficschool/Trafficschool-10.png",
      "/public/projects/trafficschool/Trafficschool-11.png",
      "/public/projects/trafficschool/Trafficschool-12.png",
      "/public/projects/trafficschool/Trafficschool-13.png",
      "/public/projects/trafficschool/Trafficschool-14.png",
      "/public/projects/trafficschool/Trafficschool-15.png",
      "/public/projects/trafficschool/Trafficschool-16.png",



    ],
    features: [
      {
        title: "Students accounts",
        description:
          "Students can create an account, access their personal area and manage their learning activities.",
      },
      {
        title: "Theory training",
        description:
          "Students can practice theory questions by choosing specific categories based on what they want to study",
      },
      {
        title: "Theory tests",
        description:
          "Students can take theory tests designed to simulate a structured testing experience and track their results.",
      },
      {
        title: "Payments & access",
        description:
          "Students can register for available packages and gain access to the corresponding learning content after payment.",
      },
      {
        title: "Admin management",
        description:
          "Administrators can manage students, payments, packages, questions and other parts of the platform.",
      },
      {
        title: "Question management",
        description:
          "Theory questions can be imported from Excel files and managed within the system for use in training and tests.",
      },
    ],
    story: {
      challenge:
        "The customer needed a digital platform to manage students while giving them a simple way to study driving theory and prepare for their theory test.",
      approach:
        "I designed the system around two main user experiences. Students needed a simple learning environment, while administrators needed the tools to manage students, payments, packages and educational content.",
      building:
        "I built the platform with a Spring Boot backend and React frontend. The system handles authentication, student management, payments, packages, question management and theory training. Questions are imported from Excel files and stored in the database so they can be used throughout the learning experience.",
      result:
        "The result was a complete platform that connected student management, payments and theory education in one system, giving the driving school a centralized solution for its daily operations.",
    },
  },
]
