import { Navbar } from 'react-bootstrap';
import logo from './Image/logo.png';
import notification from './Image/notification.svg';
import help from './Image/help.svg';
import './Header.css';


function Header() {
    return (
        <div>
            <Navbar className='navbar-wrapper'>
                <Navbar.Brand href="#home">
                    <img src={logo}  className="d-inline-block align-top" alt="Company Logo" />
                </Navbar.Brand>
                
                <div className='d-flex w-100 justify-content-between align-items-center'>
                    <div className='client-wrap'>
                        <div className='cw-paycycle'>
                            Pay Cycle: 31-May-2021 to 31-June-2021
                        </div>
                        <div className='cw-client'>
                            <select>
                                <option value="Amazon India Pvt Ltd">Amazon India Pvt Ltd</option>
                                <option value="Flipkart India Pvt Ltd">Flipkart India Pvt Ltd</option>
                                <option value="Myntra India Pvt Ltd">Myntra India Pvt Ltd</option>
                            </select>
                        </div>
                    </div>

                    <div className='profile-menu-wrap d-flex align-items-center text-center'>
                        <div className='profile-menu-holder'>
                            <ul>
                                <li>
                                    <div className='icon-holder notifications-icon-with-dot'>
                                        <img src={notification}  alt="notification" />
                                        <span className='notification-dot'></span>
                                    </div>
                                    <label className='text-uppercase'>notifications</label>
                                </li>

                                <li>
                                    <div className='icon-holder'>
                                        <img src={help}  alt="notification" />
                                    </div>
                                    <label className='text-uppercase'>Support</label>
                                </li>
                            </ul>
                        </div>

                        <div className='profile-initial-holder'>
                            <span className='initial'>R</span>
                        </div>
                    </div>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;


