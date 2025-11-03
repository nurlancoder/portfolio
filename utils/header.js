import { openLink, scrollTo } from "./methods";


const header = {
    menus: [
        { title: 'Home', id: 'home' },
        { title: 'About', id: 'my-self' },
        { title: 'Experience', id: 'experience' },
        { title: 'Portfolio', id: 'my-work' },
        { title: 'References', id: 'reviews' },
        { title: 'Skills', id: 'certifications' },
        { title: 'Contact', id: 'contact' },
    ],
    rightBtn: {
        label: 'Curriculum Vitae | CV',
        onClick: () => openLink('https://drive.google.com/uc?export=download&id=1073Ps6ap2r7oUT5UFLeXuf2Dqei5Igkj')
    },
    logo: null,
    handleIconClick: () => scrollTo('home'),
    handleItemSelect: (menu) => scrollTo(menu.id),
}

export default header