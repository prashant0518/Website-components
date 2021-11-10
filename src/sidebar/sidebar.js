import { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { links, social } from './data'
import './sidebar.css';
import { MdOutlineLegendToggle } from 'react-icons/md';
import { Sidebarcomp } from "./sidebarcomp";
import { Modal } from "./modal";
import {FaBars} from 'react-icons/fa'


const Sidebar = () => {
    const [mainlinks, setMainlinks] = useState(links);
    const [socialLinks, setSocialLinks] = useState(social);
    const [show, setShow] = useState(false);
    const clicksidebaropen = () => {
        setShow(true);
    }

    const sidebarclose = () => {
        setShow(false);
    }

    return <div className="conatainer-fluid">
        <div className="row">
            <button type="button" className={show ? `button2 border-0 ms-3 ` : ` button1 border-0 ms-3`} onClick={clicksidebaropen}><FaBars /></button>

            <div className="col-md-3">
              <Sidebarcomp  sidebarclose={sidebarclose} mainlinks={mainlinks} socialLinks={socialLinks} show={show}/>
            </div>
            <div className="col-md-7">
                <Modal />
                
            </div>
        </div>
        


    </div>
}
export default Sidebar;