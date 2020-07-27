import React from 'react';
import './SideBar.css';
import SideNavItem from "./SideNavItems/SideNavItem";
// import {useSelector} from "react-redux";

function SideBar(props) {
    const {match: {url}, location} = props;
    // const {lang} = useSelector(state => state.langReducer);

    const adminNavigation = [
        {
            displayName: "Dashboard",
            route: `${url}/dashboard`,
            icon: <i className="fas fa-tachometer-alt"/>,
            children: []
        },
        {
            displayName: "Item Management",
            icon: <i className="far fa-object-group"/>,
            children: [
                {
                    displayName: "Item Details",
                    route: `${url}/items`,
                    icon: <i className="far fa-circle"/>,
                    children: []
                },
                {
                    displayName: "Add Item",
                    route: `${url}/items/add`,
                    icon: <i className="far fa-circle"/>,
                    children: []
                }
            ]
        },
        {
            displayName: "Category Management",
            icon: <i className="fas fa-location-arrow"/>,
            children: [
                {
                    displayName: "Category Details",
                    route: `${url}/category`,
                    icon: <i className="far fa-circle"/>,
                    children: []
                },
                {
                    displayName: "Add Category",
                    route: `${url}/category/add`,
                    icon: <i className="far fa-circle"/>,
                    children: []
                }
            ]
        },
        {
            displayName: "Table Management",
            icon: <i className="fas fa-users"/>,
            children: [
                {
                    displayName: "Table Details",
                    route: `${url}/table`,
                    icon: <i className="far fa-circle"/>,
                    children: []
                },
                {
                    displayName: "Add Table",
                    route: `${url}/table/add`,
                    icon: <i className="far fa-circle"/>,
                    children: []
                }
            ]
        },
        {
            displayName: "Staff Management",
            icon: <i className="far fa-bell"/>,
            children: [
                {
                    displayName: "User Details",
                    route: `${url}/users`,
                    icon: <i className="far fa-circle"/>,
                    children: []
                },
                {
                    displayName: 'Add User',
                    route: `${url}/users/add`,
                    icon: <i className="far fa-circle"/>,
                    children: []
                }
            ]
        },
        {
            displayName: 'Order Management',
            icon: <i className="fas fa-hourglass-half"/>,
            children: [
                {
                    displayName: 'All Order',
                    route: `${url}/order/all`,
                    icon: <i className="far fa-circle"/>,
                    children: []
                },
                {
                    displayName: "Pending Orders",
                    route: `${url}/order/pending`,
                    icon: <i className="far fa-circle"/>,
                    children: []
                },
                {
                    displayName: "Approved Orders",
                    route: `${url}/order/approved`,
                    icon: <i className="far fa-circle"/>,
                    children: []
                }
            ]
        },
        {
            displayName: "Bill Management",
            icon: <i className="fas fa-stream"/>,
            children: [
                {
                    displayName: "All Bills",
                    route: `${url}/bills`,
                    icon: <i className="far fa-circle"/>,
                    children: []
                },
                {
                    displayName: "Paid Bills",
                    route: `${url}/bills/paid`,
                    icon: <i className="far fa-circle"/>,
                    children: []
                },
                {
                    displayName: "Pending Bills",
                    route: `${url}/bills/pending`,
                    icon: <i className="far fa-circle"/>,
                    children: []
                }
            ]
        }
    ];

    const userNavigation = [
        {
            displayName: "Dashboard",
            route: `${url}/dashboard`,
            icon: <i className="fas fa-tachometer-alt"/>,
            children: []
        },
        {
            displayName: "Attendance",
            icon: <i className="fas fa-hourglass-half"/>,
            children: [
                {
                    displayName: 'Me',
                    route: `${url}/attendance/own`,
                    icon: <i className="far fa-circle"/>,
                    children: []
                },
                {
                    displayName: 'My subs',
                    route: `${url}/attendance/mysub`,
                    icon: <i className="far fa-circle"/>,
                    children: []
                },
                {
                    displayName: 'My outlet',
                    route: `${url}/attendance/myoutlet`,
                    icon: <i className="far fa-circle"/>,
                    children: []
                },
                {
                    displayName: 'My group',
                    route: `${url}/attendance/mygroup`,
                    icon: <i className="far fa-circle"/>,
                    children: []
                }
            ]
        },
        {
            displayName: "Announcements",
            route: `${url}/announcements`,
            icon: <i className="far fa-bell"/>,
            children: []
        },
        {
            displayName: "ActivityLogs",
            route: `${url}/activity-logs`,
            icon: <i className="fas fa-list-ul"/>,
            children: []
        }
    ];
    return (
        <div className="sidebar-bg border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">
                <h4 className="mb-0">Smart Ordering</h4>
                <small className="version">Version 0.1.0.0 <span className="badge badge-primary">Beta</span></small>
                {location.pathname.includes('admin') && <h6 className="mt-1">Admin</h6>}
            </div>
            <ul className="list-unstyled nav-ul">
                {location.pathname.includes('admin') && adminNavigation.map((nav, index) => (
                    <SideNavItem navItem={nav} key={`${nav.displayName}${index}`}/>
                ))}

                {location.pathname.includes('user') && userNavigation.map((nav, index) => (
                    <SideNavItem navItem={nav} key={`${nav.displayName}${index}`}/>
                ))}
            </ul>
        </div>
    )
}

export default SideBar;

