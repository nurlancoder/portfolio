import { openLink } from "./methods"

const handleIconClick = (icon) => {
    const links = {
        'github': 'https://github.com/nurlancoder',
        'instagram': 'https://www.instagram.com/nurlan.mmdli?igsh=MWRldjUwNDZyNzEzdA%3D%3D&utm_source=qr',
        'twitter': '#',
        'linkedin': 'https://www.linkedin.com/in/nurlan-mammadli-b6a55b308',
    }
    openLink(links[icon])
}

const sideElements = {
    emailButton: {
        label: 'nurlanmammadli2@gmail.com',
        onClick: () => openLink('mailto:nurlanmammadli2@gmail.com?subject=Hello')
    },
    handleIconClick,
}

export default sideElements