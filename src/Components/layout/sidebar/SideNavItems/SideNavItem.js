import React, {useState} from "react";
import Collapse from "react-bootstrap/Collapse";
import {Link} from "react-router-dom";
import './SideNavItem.css';

function SideNavItem(props) {
    const [open, setOpen] = useState(false);
    const {navItem} = props;
    return (
        <>
            {!navItem.children.length ? (
                <li className="side-nav-item">
                    <Link to={navItem.route} className="nav-item-link bg-transparent">
                        {navItem.icon}<span className="mr-2"/> {navItem.displayName}
                    </Link>
                </li>

            ) : (
                <li className="side-nav-item">
                    <span
                        className="nav-item-link"
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                    >
                        {navItem.icon}<span className="mr-2"/> {navItem.displayName}
                    </span>
                    <Collapse in={open}>
                        <ul className="list-unstyled mt-2">
                            {navItem.children.map(child => (
                                <SideNavItem navItem={child} key={child.displayName}/>
                            ))}

                        </ul>
                    </Collapse>
                </li>
            )}

        </>
    );
}

export default SideNavItem;


