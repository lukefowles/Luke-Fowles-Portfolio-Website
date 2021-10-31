import React from 'react'

function Web() {
    return (
        <div className="web">
            <div className = "web-option">
                <a href='#aboutMe'>
                    <i class="fi fi-sr-user option-icon about-me"></i>
                    About Me!
                </a>
            </div>
            <div className = "web-option">
                <a href='#projects'>
                <i class="fi fi-sr-paint-brush option-icon projects"></i>
                </a>
            </div>
            <div className = "web-option">
                <a href='#Skills'>
                <i class="fi fi-sr-subtitles option-icon skills"></i>
                Skills
                </a>
            </div>
        </div>
    )
}

export default Web
