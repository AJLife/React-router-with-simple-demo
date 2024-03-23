import '../Contact/Contact.css'
import Icon1 from '../Contact/facebook.svg';
import Icon2 from '../Contact/instagram.svg';
import Icon3 from '../Contact/threads.svg';
import Icon4 from '../Contact/phone-solid.svg';
import Icon5 from '../Contact/square-whatsapp.svg';
import Icon6 from '../Contact/twitter.svg';
import Icon7 from '../Contact/youtube.svg';


const Contact = () => {
    return (
        <div>
            <h2>Contact us </h2>
            <div className='flex gap-3 contact'>
                    <img src={Icon1} alt="" />
                    <img src={Icon2} alt="" />    
                    <img src={Icon3} alt="" />    
                    <img src={Icon4} alt="" />    
                    <img src={Icon5} alt="" />    
                    <img src={Icon6} alt="" />    
                    <img src={Icon7} alt="" />    
                       
            </div>
        </div>
    );
};

export default Contact;