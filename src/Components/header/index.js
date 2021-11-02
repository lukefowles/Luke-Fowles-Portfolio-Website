import React, {useState} from 'react'
import './header.css'
import Web from './web/index'
import Mobile from './mobile/index'

function Header() {
    //React hook so that app menu only shows when not clicked
    const[isOpen, setIsOpen] = useState(true);
    return (
         <div className="header">
             {/* <div className="logo">Luke Fowles</div> */}
             <div className="menu">
                 <div className = "webMenu">
                     <Web />
                 </div>
                <div className = "mobileMenu">
                    <div onClick = {() => setIsOpen(!isOpen)}>
                        <i class="fi fi-sr-apps menu-Icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                </div>
             </div>
         </div>
    )
}

export default Header;
