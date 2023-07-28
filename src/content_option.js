import chatifyImg from "./assets/images/chatifyImg.png";
import ieeeImg from "./assets/images/ieeeImg.png";
import slsImg from "./assets/images/slsImg.png";

const logotext = "ARYAN RAI.";
const meta = {
    title: "Personal Portfolio",
    description:
        "Greetings! I'm Aryan Rai, a B. Tech student at Vellore Institute of Technology, AP. In my leisure time, I thrive on creative problem-solving and design pursuits. I am deeply passionate about developing web applications with real-world applications. What truly excites me is delving into the fascinating realms of Artificial Intelligence and Machine Learning, and I am eagerly driven to expand my expertise in this field.",
};

const introdata = {
    title: "I’m Aryan Rai",
    animated: {
        first: "A Full Stack Web Developer.",
        second: "A UI / UX Designer.",
        third: "A Machine Learning Enthusiast.",
    },
    description: "I'm a Fourth-Year B.Tech Computer Science student at Vellore Institute of Technology, Amaravati, specializing in Frontend and Backend Development. Skilled in React.js and Express.js, I build web applications that are appealing and responsive",
    your_img_url: "../src/assets/images/IMG_4120.jpg",
};

const dataabout = {
    title: "A Bit About Myself",
    aboutme:
        "Hello there! I'm Aryan Rai, a student currently pursuing B. Tech at Vellore Institute of Technology, AP. In my free time, I love engaging in creative problem solving and designing. Developing practical web applications is a passion of mine. I am particularly enthusiastic about exploring the possibilities of Artificial Intelligence and Machine Learning, and I'm eagerly looking forward to expanding my knowledge in this field.",
};
const worktimeline = [{
        jobtitle: "IEEE Student Chapter | Associate Web Developer",
        where: "Vellore Intitute of Technology, AP",
        date: "2023",
    },
    {
        jobtitle: "ElhiTech | Full Stack Web Development Intern",
        where: "Hyderabad",
        date: "2022",
    },
    {
        jobtitle: "Kuge Gemu Club | Frontend Web Developer",
        where: "Vellore Intitute of Technology, AP",
        date: "2021",
    },
];

const skills = [{
        name: "JAVA",
        value: 90,
    },
    {
        name: "Python",
        value: 70,
    },
    {
        name: "Javascript",
        value: 80,
    },
    {
        name: "React",
        value: 90,
    },
    {
        name: "Node.js",
        value: 85,
    },
];

const services = [
    {
        title: "Front-End Web Development",
        description:
            "As a frontend web developer, my primary objective is to craft visually stunning and responsive websites with exceptional UI/UX designs. I possess expertise in various technologies, including HTML, CSS, JavaScript, React.js, SCSS, and Figma. With a keen attention to detail and a strong understanding of user-centered design principles, I strive to create clean and intuitive interfaces. By leveraging my skills, I aim to provide an immersive browsing experience that captivates users and leaves a lasting impression.",
    },
    {
        title: "Back-End Web Development",
        description:
            "As a backend developer, I excel in utilizing Node.js, Express.js, MongoDB, PostgreSQL, and other relevant technologies. My expertise lies in server-side development, database management, API creation, security implementation, performance optimization, collaboration with frontend developers, testing, debugging, and ensuring scalability. With a strong command over these skills, I build efficient web applications that seamlessly integrate the frontend and backend components. I prioritize security, performance, and reliability, resulting in robust and high-performing solutions.",
    },
    {
        title: "UI / UX Design",
        description:
            "As a frontend web developer, I'm passionate about crafting stunning and captivating user interfaces. With expertise in Figma and WordPress, I design websites and mobile applications in my free time. I continuously seek to enhance my skills and knowledge, aiming to create unforgettable user experiences. Excited to grow further in my journey, I'm dedicated to delivering exceptional frontend development and UI/UX design.",
    },
];

const dataportfolio = [
    {
        img: chatifyImg,
        description: "A Chat App made using MERN Stack giving one to one user chat capability and more.",
        link: "https://aryan-rai.me/chatify-frontend/",
    },
    {
        img: ieeeImg,
        description: "A Static Webpage made for IEEE Student Chapter used in a Hackathon.",
        link: "https://aryan-rai.me/ieee_frontend/",
    },
    {
        img: slsImg,
        description: "A Dashboard made for an IOT based Library Solution that offers realtime noise monitoring.",
        link: "https://aryan-rai.me/SonicLibrarySystem/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "aryanrai2304@gmail.com",
    YOUR_FONE: "+91 8960710632",
    description:
        "Contact me to connect and collaborate! Whether you have a question, a partnership opportunity, or just want to say hello, I'm here to listen. Let's discuss web development, design, and exciting tech trends. I look forward to hearing from you and exploring new possibilities together!",
    // creat an emailjs.com account
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/aryanX23",
    facebook: "https://facebook.com",
    linkedin: "https://www.linkedin.com/in/aryan-rai-92b184228/",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
