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
    rightBtn: null,
    logo: null,
    handleIconClick: () => scrollTo('home'),
    handleItemSelect: (menu) => scrollTo(menu.id),
}

export default header