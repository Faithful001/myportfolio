import { useState } from "react";
const Navbar = () => {
    const [click, setClick] = useState(false);

    function toggleMenu(){
        setClick(!click);
    }

    function closeMenu(){
        setClick(false)
    }

    return ( 
        <div className="navbar">
                <h2>Faithful</h2>
            <div className="hamburger" onClick={()=>toggleMenu}>
                <div className="burger"></div>
                <div className="burger"></div>
                <div className="burger"></div>
            </div>


            <div className={click ? 'nav-menu active' : 'nav-menu'}>
                
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#" className="nav-link" onClick={closeMenu}>Home</a></li>
                        <li className="nav-item"><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
                        <li className="nav-item"><a href="#services" className="nav-link" onClick={closeMenu}>Services</a></li>
                        <li className="nav-item"><a href="#portfolio" className="nav-link" onClick={closeMenu}>Portfolio</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
                    </ul>
                </div>


        </div>
     );
}
 
export default Navbar;
