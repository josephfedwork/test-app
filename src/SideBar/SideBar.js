import dashboard from './Image/dashboard.svg';
import monthly from './Image/work_history.svg';
import configuration from './Image/tune.svg';
import reports from './Image/auto_graph.svg';
import more from './Image/read_more.svg'

import './SideBar.css';

function SideBar() {
    return (
        <aside className="sidebar-wrapper">
            <ul>
                <li className="sidebar-list-holder">
                    <a href=''>
                        <img src={dashboard}  alt="dashboard" />
                        <label>Dashboard</label>
                    </a>
                </li>

                <li className="sidebar-list-holder">
                    <a href=''>
                        <img src={monthly}  alt="monthly" />
                        <label>Monthly <br /> Process</label>
                    </a>
                </li>

                <li className="sidebar-list-holder active">
                    <a href=''>
                        <img src={configuration}  alt="configuration" />
                        <label>Super <br /> Configuration</label>
                    </a>
                </li>

                <li className="sidebar-list-holder">
                    <a href=''>
                        <img src={reports}  alt="reports" />
                        <label>Master <br /> Reports</label>
                    </a>
                </li>

                <li className="sidebar-list-holder">
                    <a href=''>
                        <img src={more}  alt="more" />
                        <label>More</label>
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default SideBar;