import React from 'react';
import NavDropdown from "react-bootstrap/NavDropdown";

function TopBar(props) {


   

    const onLogout = () => {
        props.history.push('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <button className="btn" id="menu-toggle" onClick={() => props.toggleSidebar()}>
                <i className="fas fa-bars"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    


                    <NavDropdown title={<> <i className="fas fa-user mr-1"/> userName </> } id="collasible-nav-dropdown">
                        <NavDropdown.Item onClick={() => onLogout()}>
                            <i className="fas fa-sign-out-alt"/> Sign Out
                        </NavDropdown.Item>
                    </NavDropdown>
                </ul>
            </div>
        </nav>
    )
}

export default TopBar;
