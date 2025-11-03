import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import ViewsTitle from '../../components/ViewsTitle'
import Helm from '../../components/SVGs/Helm'
import HoverImage from '../../components/HoverImage'
import { useParallax } from 'react-scroll-parallax'

const Paragraph = ({ text }) => (
    <div data-aos="zoom-in-left" className='ai-myself-paragraph'>
        {text}
    </div>
)

const List = ({ items }) => (
    <div className='col'>
        {(items || []).map(item => (
            <div data-aos="zoom-in-left" className='ai-myself-skill' key={item}>
                {item}
            </div>
        ))}
    </div>
)

const ListParent = ({ list1, list2 }) => (
    <div className='ai-myself-list-parent row'>
        <List items={list1} />
        <List items={list2} />
    </div>
)

const MySelf = ({ data: {
    heading,
    paragraphs,
    techList1,
    techList2,
    image,
} }) => {
    const { ref } = useParallax({
        speed: -20,
        easing: [1, 1.5, 0.5, 2],
        rotate: [0, (360 * 1)],
    });
    
    // Cache-busting parameter to ensure new image loads
    const imageSrc = useMemo(() => {
        if (!image) return null;
        // Add timestamp to force browser to reload image after update
        return `${image}?v=${Date.now()}`;
    }, [image]);
    
    return (
        <div className='ai-myself'>
            <div
                ref={ref}
                className='ai-myself-settings-icon'>
                <Helm />
            </div>
            <div className='container'>
                <div
                    data-aos="fade-down-left"
                    className='ai-myself-container'>
                    <ViewsTitle
                        text={heading}
                    />
                    <div className='row justify-content-center align-items-center'>
                        <div className='col-12 col-md-8'>
                            <div className=''>
                                {(paragraphs || []).map((text, i) => (
                                    <Paragraph
                                        key={i}
                                        text={text}
                                    />
                                ))}
                                <ListParent
                                    list1={techList1}
                                    list2={techList2}
                                />
                            </div>
                        </div>
                        {imageSrc && (
                            <div className='col-12 col-md-4 d-flex justify-content-center'>
                                <div className='ai-myself-profile-wrapper' data-aos="fade-left">
                                    <div className='ai-myself-profile-parent'>
                                        <HoverImage
                                            src={imageSrc}
                                            parentClassName='ai-myself-profile-wrapper'
                                            imageClassName='ai-myself-profile'
                                            showFilter={true}
                                            showBorder={true}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

MySelf.propTypes = {}

export default MySelf