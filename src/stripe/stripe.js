import React, { useContext, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Submenu from "./submenu";
import Hero from "./hero";
import './stripe1.css';
import sublinks from "./data";

const AppContext = React.createContext();

const Stripe = () => {
    const [isSideBar, setIsSideBar] = useState(false);
    const [isSubMenu, setIsSubMenu] = useState(false);
    const [location, setLocation] = useState({})
    const [pageItem, setPageItem] = useState({ page: '', links: [] })
    const sidebaropen = () => {
        setIsSideBar(true);
    }
    const sidebarclose = () => {
        setIsSideBar(false);
    }

    const submenuopen = (text, coordinates) => {
        
        const pageLinks = sublinks.find((link)=>link.page==text)
        console.log(pageLinks);
        setPageItem(pageLinks);
        setLocation(coordinates);
        setIsSubMenu(true);
    }
    const submenuclose = () => {
        setIsSubMenu(false);
    }



    return <div className="container-fluid p-0 ">
        <div className="row sec m-0" >
            <div className="col p-0 d-flex flex-column" >
                <AppContext.Provider value={
                    { isSideBar, isSubMenu, sidebarclose, sidebaropen, submenuopen, submenuclose, location, pageItem }
                }>
                    <Navbar />
                    <Submenu />

                    <Sidebar />
                    <Hero />
                </AppContext.Provider>

            </div>

        </div>

    </div>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}


export default Stripe;