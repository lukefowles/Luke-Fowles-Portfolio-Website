import React from 'react'
import './mobile.css';

function Mobile(props) {
    return (
        <div className='mobile'>
           <div className = 'close-icon' onClick = {() => props.setIsOpen(!props.isOpen)}>
           <i class="fi fi-sr-cross-circle"></i>
           </div>
           <div className = 'mobile-options'>
           <div className = "mobile-option">
                <a href='#aboutMe'>
                    <i class="fi fi-sr-user option-icon about-me"></i>
                    About Me!
                </a>
            </div>
            <div className = "mobile-option">
                <a href='#projects'>
                <i class="fi fi-sr-paint-brush option-icon projects"></i>
                Projects
                </a>
            </div>
            <div className = "mobile-option">
                <a href='#skills'>
                <i class="fi fi-sr-subtitles option-icon skills"></i>
                Skills
                </a>
            </div>
           </div>
        </div>
    )
}

export default Mobile
