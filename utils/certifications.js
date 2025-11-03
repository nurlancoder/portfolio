import { openLink } from "./methods"

const certifications = {
    heading:  `Certifications & Skills`,
    list: [
        {
            size: 1,
            title: 'Meta - Programming with JavaScript',
            platform: 'Issued: Jun 2025',
            link: '',
            date: 'Credential ID: PIB2VU8IRZK5',
            logo: '/assets/meta.png',
            aos: 'zoom-out-left'
        },
        {
            size: 1,
            title: 'IBM - Developing Front-End Apps with React',
            platform: 'Issued: May 2025',
            link: '',
            date: 'Credential ID: C6OY4VE74FJW',
            logo: '/assets/ibm.png',
            aos: 'zoom-out-right'
        },
        {
            size: 1,
            title: 'Meta - Introduction to Front-End Development',
            platform: 'Issued: May 2025',
            link: '',
            date: 'Credential ID: H14H5007HWID',
            logo: '/assets/meta.png',
            aos: 'zoom-out-left'
        },
    ],
    handleIconClick: openLink
}

export default certifications