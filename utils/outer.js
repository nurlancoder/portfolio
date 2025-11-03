import { openLink } from "./methods"

const outer = {
    title1:  `Hi, I'm`,
    title2: 'Nurlan Mammadli,',
    decrypTexts: [
        '#OPEN_TO_WORK',
        'Frontend Developer',
        'I build beautiful websites',
        'A Tech Enthusiast',
        'I create digital experiences',
        'A Problem Solver',
    ],
    desciption: `Front-End Developer with hands-on experience in building responsive and user-centered web applications using modern technologies. Skilled in developing interactive interfaces with React.js, Next.js, TypeScript, and Tailwind CSS. Demonstrated ability to integrate APIs, manage application state with Redux Toolkit, and optimize performance for seamless user experiences. Strong background in information security enables secure and efficient front-end solutions. Passionate about continuous learning, innovation, and delivering high-quality code in collaborative environments.`,
    button: {
        label: 'Hire Me!',
        onClick: () => openLink('https://www.linkedin.com/in/nurlan-mammadli-b6a55b308')
    }
}

export default outer
