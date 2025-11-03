import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import ViewsTitle from '../../components/ViewsTitle';
import { Parallax } from 'react-scroll-parallax'
import LinkedIn from '../../components/SVGs/LinkedIn';
import Phone from '../../components/SVGs/Phone';
import Email from '../../components/SVGs/Email';
import { openLink } from '../../utils/methods';


const getAnimationData = ({
    index
}) => {
    const mod = index % 3;
    const translateY = {
        0: ['20%', '-10%'],
        1: ['15%', '-5%'],
        2: ['25%', '-15%']
    }
    const scale = {
        0: [0.9, 1],
        1: [0.85, 1],
        2: [0.9, 1]
    }
    const rotate = {
        0: [2, -2],
        1: [-1, 1],
        2: [1, -1]
    }
    const theme = {
        0: 'theme1',
        1: 'theme2',
        2: 'theme3'
    }
    return {
        translateY: translateY[mod],
        scale: scale[mod],
        rotate: rotate[mod],
        theme: theme[mod],
    }
}

const ReferenceCard = ({ name, phone, email, linkedin, linkedinUrl, index }) => {
    const cardRef = useRef()
    const [startScroll, setStartScroll] = useState(0)
    const [endScroll, setEndScroll] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    useEffect(() => {
        window.addEventListener("resize", setPositions);
        setTimeout(() => {
            setPositions()
        }, 3000);
    }, [])

    const setPositions = () => {
        const innerHeight = window.innerHeight;
        const currentRef = cardRef?.current;
        if (currentRef) {
            const startPossition = currentRef.getBoundingClientRect().top + window.scrollY + 150;
            setStartScroll(startPossition - innerHeight)
            setEndScroll(startPossition + innerHeight)
        }
    }

    const { scale, translateY, rotate, theme } = getAnimationData({
        index
    })

    const handlePhoneClick = () => {
        if (phone) {
            openLink(`tel:${phone.replace(/\s/g, '').replace('+', '')}`)
        }
    }

    const handleEmailClick = () => {
        if (email) {
            openLink(`mailto:${email}?subject=Reference Inquiry`)
        }
    }

    const handleLinkedInClick = () => {
        if (linkedinUrl) {
            openLink(linkedinUrl)
        }
    }

    return (
        <Parallax
            translateY={translateY}
            scale={scale}
            rotate={rotate}
            easing="easeOutBack"
            {...(startScroll && ({ startScroll }))}
            {...(endScroll && ({ endScroll }))}
            style={{
                width: '100%',
                maxWidth: '400px',
                margin: '0 auto',
                transition: 'all 1000ms cubic-bezier(0.18, 0.89, 0.32, 1.28)'
            }}
        >
            <div
                ref={cardRef}
                className={`ai-reference-card ai-reference-theme-${theme}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className={`ai-reference-card-content ${isHovered ? 'ai-reference-hovered' : ''}`}>
                    <div className="ai-reference-name">
                        {name}
                    </div>
                    <div className="ai-reference-divider"></div>
                    <div className="ai-reference-contacts">
                        {phone && (
                            <div 
                                className="ai-reference-contact-item"
                                onClick={handlePhoneClick}
                            >
                                <Phone width={18} height={18} />
                                <span>{phone}</span>
                            </div>
                        )}
                        {email && (
                            <div 
                                className="ai-reference-contact-item"
                                onClick={handleEmailClick}
                            >
                                <Email width={18} height={18} />
                                <span>{email}</span>
                            </div>
                        )}
                        {linkedin && (
                            <div 
                                className="ai-reference-contact-item"
                                onClick={handleLinkedInClick}
                            >
                                <LinkedIn width={18} height={18} />
                                <span>{linkedin}</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className={`ai-reference-card-glow ai-reference-theme-${theme}-glow`}></div>
            </div>
        </Parallax>
    )
}

const Reviews = ({ data: {
    heading,
    list
} }) => {
    return (
        <div className='ai-reviews'>
            <div className='container'>
                <div className='ai-reviews-container'>
                    <ViewsTitle
                        text={heading}
                    />
                </div>
            </div>
            <div className='ai-reviews-list'>
                {(list || []).map((item, i) => (
                    <ReferenceCard 
                        key={i}
                        index={i}
                        name={item.name}
                        phone={item.phone}
                        email={item.email}
                        linkedin={item.linkedin}
                        linkedinUrl={item.linkedinUrl}
                    />
                ))}
            </div>
        </div>
    )
}

Reviews.propTypes = {}

export default Reviews
