import React from 'react'
import tamales from '../../../assets/tamales4.jpeg'

const Quote = () => {
    return (
        <div className="contact" id="contact">
            <div className="contact-img">
                <img src={tamales} alt="tamales" loading="lazy" />
            </div>
            <form>
                <h6 className="subheading">Get in touch</h6>
                <h1 className="mission-heading heading">Contact Us</h1>
                <div className="inputBox">
                    <input type="text" name="name" required />
                    <label for="name">Name</label>
                </div>
                <div className="inputBox">
                    <input type="number" name="phone" required />
                    <label for="phone">Phone</label>
                </div>
                <div className="inputBox">
                    <input type="email" name="email" required />
                    <label for="email">Email</label>
                </div>
                <div className="inputBox">
                    <textarea name="mssg" id="message" cols="30" rows="10" />
                    <label for="mssg">Message</label>
                </div>
                <input type="submit" class="contact-btn" value="Send Message" />
            </form>

        </div>
    )
}

export default Quote
