import { openLink } from "./methods"

const contact = {
    label: `Get In Touch`,
    heading: `Let's Work Together`,
    description: `I'm open for new opportunities – especially ambitious or large projects. However, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!.`,
    contactInfo: {
        location: 'Baku Ekonomic Zone, Azerbaijan',
        email: 'nurlanmammadli2@gmail.com',
        phone: '+994 51 999 50 90',
        workingHours: 'Open to work: Frontend Developer roles'
    },
    button: {
        label: 'Say Hello',
        onClick: () => openLink('mailto:nurlanmammadli2@gmail.com?subject=Hello')
    },
    designAndBuiltBy: '© 2025 Nurlan Mammadli. All Rights Reserved.',
    handleBuiltByClick: () => openLink('https://github.com/nurlancoder')
}

export default contact
