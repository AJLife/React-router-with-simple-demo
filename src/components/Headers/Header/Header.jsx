
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="text-justify">
            <nav>
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Header;