const Navbar = () => {
    return ( 
        <div className="navbar">
                <h2>Faithful</h2>
            <div className="hamburger">
                <div className="burger"></div>
                <div className="burger"></div>
                <div className="burger"></div>
            </div>
            <div className="links-background">
            <div className="links">
                <a href="#home">Home</a>
                <a href="#about-me">About Me</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact-me">Contact Me</a>
            </div>
            </div>
        </div>
     );
}
 
export default Navbar;
