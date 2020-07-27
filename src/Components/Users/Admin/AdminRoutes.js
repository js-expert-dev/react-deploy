import {Route} from "react-router-dom";
import React from "react";
import Dashboard from "./Dashboard";
import ItemsDetails from "./Items/ItemsDetails";
import AddItem from "./Items/AddItem";
import CategoryDetails from "./Cataegories/CategoryDetails";
import AddCategory from "./Cataegories/AddCategory";
import TableDetails from "./Table/TableDetails";
import AddTable from "./Table/AddTable";
import PendingOrder from "./Order/PendingOrder";
import VerifiedOrder  from "./Order/VerifiedOrder.js";
import PendingBills from "./Bill/PendingBills";
// import ContentDefinition from "../../saas-user/admin/content-management/ContentDefinition";
// import ViewContent from "../../saas-user/admin/content-management/ViewContent";
// import ViewAnnouncement from "../../saas-user/admin/annoucements/view-announement";
// import OutletsList from "../../saas-user/admin/outlet-management/OutletsList";
// import OutletDefinition from "../../saas-user/admin/outlet-management/OutletDefinition";
// import AttendanceManagement from "../../saas-user/admin/attendance-management";


export const AdminRoutes = (props) => {
    let {match} = props;
    return (

        <>

            <Route  path={`${match.path}/admin/dashboard`} component={Dashboard}/>
            <Route exact path={`${match.path}/admin`} component={Dashboard}/>
            <Route exact path={`${match.path}/items`} component={ItemsDetails}/>
            <Route path={`${match.path}/items/add`} component={AddItem}/>
            <Route exact path={`${match.path}/category`} component={CategoryDetails}/>
            <Route path={`${match.path}/category/add`} component={AddCategory}/>
            <Route exact path={`${match.path}/table`} component={TableDetails}/>
            <Route path={`${match.path}/table/add`} component={AddTable}/>
            <Route exact path={`${match.path}/order/approved`} component={VerifiedOrder}/>
            <Route exact path={`${match.path}/order/pending`} component={PendingOrder}/>
            <Route path={`${match.path}/bills/pending`} component={PendingBills}/>
           {/* <Route exact path={`${match.path}/attendances/:approvalStatus`} component={AttendanceManagement}/>
            <Route exact path={`${match.path}/contents`} component={ContentManagement}/>
            <Route exact path={`${match.path}/items/add`} component={ContentDefinition}/>
            <Route exact path={`${match.path}/contents/view`} component={ViewContent}/> */}
        </>

    )
};
