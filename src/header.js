import { NavLink } from 'react-router-dom';
import classes from './header.module.css';
// CSS lifted from "React the complete guide Section 20"

const Header = () => {
    return( 
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/create'>Create Table</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/update/1'>Update Table</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/delete/1'>Delete Table</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;