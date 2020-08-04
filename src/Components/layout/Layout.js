import { Switch } from 'react-router-dom';
import React from 'react';
import SideBar from './sidebar/SideBar';
import TopBar from './Topbar/TopBar';
import './Layout.css';
import { StaffRoutes } from '../Users/Staff/StaffRoutes';
import { AdminRoutes } from '../Users/Admin/AdminRoutes';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSideNavOpen: false,
    };
  }

  toggleSidebar = () => {
    this.setState({ isSideNavOpen: !this.state.isSideNavOpen });
  };

  render() {
    const { isSideNavOpen } = this.state;
    const { location } = this.props;
    debugger;
    return (
      <div id="wrapper" className={`d-flex ${isSideNavOpen ? 'toggled' : ''}`}>
        <SideBar {...this.props} className="shadow" />

        <div id="page-content-wrapper" style={{ position: 'relative' }}>
          <TopBar toggleSidebar={this.toggleSidebar} {...this.props} />

          <div className="container-fluid mb-5">
            <Switch>
              {location.pathname.includes('admin') && (
                <AdminRoutes {...this.props} />
              )}

              {location.pathname.includes('staff') && (
                <StaffRoutes {...this.props} />
              )}
            </Switch>
          </div>

          <footer
            className="text-right bg-light border-top"
            style={{
              position: 'absolute',
              bottom: 0,
              left: -1,
              width: '100%',
              padding: '10px 10px 10px 0',
            }}
          >
            <small className="font-weight-bold">
              &#169; Bhiyya Pizza pvt. Ltd.
            </small>
          </footer>
        </div>
      </div>
    );
  }
}

export default Layout;
