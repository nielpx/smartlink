import './App.css';
import Bell from './img/bell.png';
import Dropdown from './img/dropdown.png';

export default function Navtop() {
    return(
        <div className="navbar">
            <div className="left">
                <h2>Smartlink</h2>
                <img src={Dropdown} alt='drop'></img>
            </div>
            <div className="right">
                <p>Andreas Marcela</p>
                <p>Kasir</p>
                <img src={Bell} alt='bell'></img>
            </div>
        </div>
    );
}