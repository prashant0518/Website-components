import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./stripe";
import sublinks from "./data";
import { link } from "fs";
const Submenu = () => {
    const { isSubMenu, location, pageItem: { page, links } } = useGlobalContext();
    const subMenuContainer = useRef(null);
    const [columns, setColumns] = useState("submenu");
    const [columns1, setColumns1] = useState("submenu-item")

    // const {page,links} = pageItem;
    // const pageLink = sublinks.find((link)=>link.page=="company")
    // console.log(pageLink);
    useEffect(() => {
        setColumns("submenu");
        setColumns1("submenu-item");
        if (links.length == 3) {
            setColumns("submenunew");
            setColumns1("submenu-itemnew");
        }
        if(links.length >3){
        setColumns("submenunew1");
        setColumns1("submenu-itemnew1");


        }
        const { center, bottom } = location;

        subMenuContainer.current.style.left = `${center}px`;
        subMenuContainer.current.style.top = `${bottom}px`;

    }, [location, links])
    
    return <div className="container closenav">
        <div className="row">
            <div className={isSubMenu ? `col bg-white p-4 d-none d-md-block ${columns} ` : `d-none`} ref={subMenuContainer}>
                <h4 className="text-capitalize">{page}</h4>
                <div className={columns1} >
                    {links.map((item) => {
                        const { label, url, icon } = item;
                        return <a href={url} className="text-decoration-none text-black me-5 fs-5">
                            <span className="me-3">{icon}</span>
                            {label}
                        </a>


                    })}
                </div>
            </div>
        </div>

    </div>
}
export default Submenu;