import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParallax } from 'react-scroll-parallax';
import { openLink } from '../../utils/methods';
import Star from '../../components/SVGs/Star';
import GitFork from '../../components/SVGs/GitFork';

const Contact = ({ data: {
    label,
    heading,
    description,
    button,
    handleBuiltByClick,
    designAndBuiltBy,
    contactInfo,
} }) => {

    const [githubInfo, setGitHubInfo] = useState({
        stars: null,
        forks: null,
    });

    useEffect(() => {
        fetch('https://api.github.com/repos/nurlancoder/animated-portfolio')
            .then(response => response.json())
            .then(json => {
                const { stargazers_count, forks_count } = json;
                setGitHubInfo({
                    stars: stargazers_count,
                    forks: forks_count,
                });
            })
            .catch(e => console.error(e));
    }, []);

    const { ref } = useParallax({
        easing: 'easeIn',
        translateX: [-50, 0]
    });
    return (
        <div className='ai-contact'>
            <div
                ref={ref}
                className='ai-contact-zebra-img'
                style={{
                    background: `repeating-linear-gradient(45deg, 
                        transparent, 
                        transparent 20px, 
                        rgba(135, 206, 235, 0.1) 20px, 
                        rgba(135, 206, 235, 0.1) 40px
                    )`,
                }}>

            </div>
            <div className='ai-contact-box'>
                <div className='container flex-center flex-column'>
                    <div className='ai-contact-box-width'>
                        <div className='ai-contact-label'>{label}</div>
                        <div className='ai-contact-title'>{heading} </div>
                        <div className='ai-contact-text'>{description}</div>
                        
                        {contactInfo && (
                            <div className='ai-contact-info-grid mt-4 mb-4' style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                gap: '1.5rem',
                                marginTop: '2rem',
                                marginBottom: '2rem'
                            }}>
                                <div className='ai-contact-info-item' style={{
                                    padding: '1.5rem',
                                    backgroundColor: 'var(--themeColor3)',
                                    borderRadius: '8px',
                                    border: '1px solid var(--themeColor4)'
                                }}>
                                    <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--themeColor4)' }}>📍</div>
                                    <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Location</div>
                                    <div style={{ color: 'var(--themeColor2)', opacity: 0.8 }}>{contactInfo.location}</div>
                                </div>
                                <div className='ai-contact-info-item' style={{
                                    padding: '1.5rem',
                                    backgroundColor: 'var(--themeColor3)',
                                    borderRadius: '8px',
                                    border: '1px solid var(--themeColor4)'
                                }}>
                                    <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--themeColor4)' }}>✉️</div>
                                    <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Email</div>
                                    <div 
                                        onClick={() => openLink(`mailto:${contactInfo.email}`)}
                                        style={{ color: 'var(--themeColor4)', cursor: 'pointer', textDecoration: 'underline' }}
                                    >{contactInfo.email}</div>
                                </div>
                                <div className='ai-contact-info-item' style={{
                                    padding: '1.5rem',
                                    backgroundColor: 'var(--themeColor3)',
                                    borderRadius: '8px',
                                    border: '1px solid var(--themeColor4)'
                                }}>
                                    <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--themeColor4)' }}>📞</div>
                                    <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Phone</div>
                                    <div 
                                        onClick={() => openLink(`tel:${contactInfo.phone.replace(/\s/g, '')}`)}
                                        style={{ color: 'var(--themeColor4)', cursor: 'pointer', textDecoration: 'underline' }}
                                    >{contactInfo.phone}</div>
                                </div>
                                <div className='ai-contact-info-item' style={{
                                    padding: '1.5rem',
                                    backgroundColor: 'var(--themeColor3)',
                                    borderRadius: '8px',
                                    border: '1px solid var(--themeColor4)'
                                }}>
                                    <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--themeColor4)' }}>🕐</div>
                                    <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>Working Hours</div>
                                    <div style={{ color: 'var(--themeColor2)', opacity: 0.8 }}>{contactInfo.workingHours}</div>
                                </div>
                            </div>
                        )}

                        <div className='ai-contact-button'>
                            <button onClick={button?.onClick} className='ai-button'>
                                {button?.label}
                            </button>
                        </div>
                        <div onClick={handleBuiltByClick} className='ai-contact-git-section'>
                            <div>{designAndBuiltBy}</div>
                            {!!(githubInfo.stars && githubInfo.forks) && (
                                <div>
                                    <span>
                                        <Star />
                                        <>{' '}{githubInfo.stars.toLocaleString()}</>
                                    </span>
                                    {' '}
                                    <span>
                                        <GitFork />
                                        <>{' '}{githubInfo.forks.toLocaleString()}</>
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Contact.propTypes = {}

export default Contact