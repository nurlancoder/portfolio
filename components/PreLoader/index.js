import React, { useEffect, useState } from 'react'

const PreLoader = () => {
    const [loader, handleLoader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            const root = document.documentElement;
            root.style.setProperty('--scrollBarWidth', '8px');
            handleLoader(false)
        }, 2500)
    }, [])

    return (
        <div className={`ai-pre-loader ${loader ? 'ai-pre-loader-enabled' : 'ai-pre-loader-disabled'}`}>
            <div className='ai-pre-loader-boarder' />
            <div className='ai-pre-loader-container' style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem'
            }}>
                <div style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    color: 'var(--themeColor4)',
                    letterSpacing: '0.2em',
                    animation: 'fadeIn 1s ease-in-out'
                }}>
                    NURLAN MAMMADLI
                </div>
                <div style={{
                    fontSize: '1.2rem',
                    color: 'var(--themeColor2)',
                    opacity: 0.8,
                    animation: 'fadeIn 1.5s ease-in-out'
                }}>
                    Frontend Developer
                </div>
            </div>
        </div>
    )
}

PreLoader.propTypes = {}

export default PreLoader
