import React from 'react';
import './footer.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <section className="footer">
            <div className="upper-foot">
                <div className="footer-links">
                    <h4>Shop</h4>
                    <a href="#">WOMEN</a>
                    <a href="#">DEVIVED</a>
                    <a href="#">Splendor HOME</a>
                    <a href="#">BEAUTY</a>
                    <a href="#">STUDET DISCOUNT</a>
                    <a href="#">SPORT</a>
                    <a href="#">Gift Cards</a>
                </div>
                <div className="footer-links">
                    <h4>CORPORATE INFO</h4>
                    <a href="#">CAREEAR AT Splendor</a>
                    <a href="#">ABOUT Splendor GROUP</a>
                    <a href="#">SUSTAINIBILITY Splendor GROUP</a>
                    <a href="#">PRESS</a>
                    <a href="#">INVESTOR RELATIONS</a>
                    <a href="#">CORPORATE GOVORNANCE</a>
                </div>
                <div className="footer-links">
                    <h4>HELP</h4>
                    <a href="#">CUSTOMER SERVICE</a>
                    <a href="#">MY ACCOUNT</a>
                    <a href="#">FIND A STORE</a>
                    <a href="#">LEGAL & PRIVACY</a>
                    <a href="#">GIFT CARD TERMS & CONDITION</a>
                    <a href="#">CA SUPPLY CHAINS RIGHT</a>
                    <a href="#">CONTACT</a>
                </div>
                <div className="footer-links">
                    <div className="become-member">
                        <h4>BECOME A MEMBER</h4>
                        <a href="#">JOIN NOW & GET<br />10% OFF YOUR NEXT<br /> PURCHASE</a>
                        <a href="#">READ MORE</a>
                        <p>Follow us on social media</p>
                        <div className="social-icons">
                        
                                <FaFacebookF />
                                <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-foot">
                The content of this site is copyright-protected and is the property of Splendor Hennes & Mauritz AB. Splendor is committed to accessibility.<br />
                That commitment means Splendor embraces WCAG guidelines and supports assistive technologies such as screen readers.<br />
                If you are using a screen reader, magnifier, or other assistive technologies and are experiencing difficulties using this website, please call our TOLL-FREE support line (855-466-7467) for assistance.
            
           
            </div>
        </section>
    );
};

export default Footer;
