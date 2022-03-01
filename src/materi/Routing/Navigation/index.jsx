import './index.css';
import { Link } from 'react-router-dom';

const Navigation = () => { 
    return (
        <div className="slidebar">
            <Link to="/"><i className='fa fa-fw fa-home' ></i>Home</Link>
            <Link to="/clients"><i className='fa fa-fw fa-users' ></i>Clients</Link>
            <Link to="/contact"><i className='fa fa-fw fa-envelope' ></i>Contact</Link>
            <Link to="/service"><i className='fa fa-fw fa-cog' ></i>Service</Link>
        </div>
    )
}

export default Navigation;