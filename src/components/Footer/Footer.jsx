import Heart from '../Footer/heart-regular.svg';
import '../Footer/Footer.css'
const Footer = () => {
    return (
        <div>
            <p><small>Thank you for visiting our website</small></p> 

            <hr />
            <p>All rights &copy; are reserves by Sajid <span><img className='footer' src={Heart}></img></span></p>

        </div>
    );
};

export default Footer;