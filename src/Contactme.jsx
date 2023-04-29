const Contactme = () => {
    return ( 
        <div className="contact-me">
            <h1 className="title">Contact Me.</h1>
            <form className="user-details" action="" method="">
            <div className="form-container">
                    <div className="input-fields">
                        <input  type="name" name="user-name" placeholder="enter your name"/>
                        <input type="email" name="user-email" placeholder="enter your email address"/>
                    </div> 
                <textarea type="name" name="message" placeholder="enter your message"/>
                <button className="contact-button" type="button" name="submit">Send</button>
            </div>
            </form>
        </div>
     );
}
 
export default Contactme;