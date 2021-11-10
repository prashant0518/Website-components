import './stripe1.css'
import { useGlobalContext } from "./stripe";
import sublinks from './data';

const Sidebar = () => {

    const { isSideBar, sidebarclose } = useGlobalContext();
    return <div className="container">
        <div className="row ">
            <div className="col ">
               
                <div className={isSideBar ? `  sidebar1 d-flex flex-column d-md-none` : `d-none`}>
                    <button className={isSideBar ? ` btn-close fs-3 fw-bold mt-4 ms-auto me-4 d-md-none` : `d-none`} onClick={sidebarclose}></button>

                    <div className=" d-flex flex-column ms-5 heightclass justify-content-start" >
                        {sublinks.map((item, index) => {
                            const { page, links } = item;
                            return <div key={index} >
                                <h2 className=" text-capitalize">{page}</h2>
                                <div className="d-flex flex-wrap mb-5">
                                {links.map((link, index) => {
                                    const { label, icon, url } = link;
                                    return <div className="col-6" key={index}>
                                        <a href={url} className="text-decoration-none text-black "><span className="me-3">{icon}</span>{label}</a>
                                    </div>
                                })}
                                </div>
                            </div>
                        })}
                    </div>

                </div>
                <div className={isSideBar ? `bg-dark  sidebar` : `d-none`}>

</div>

            </div>
        </div>

    </div>
}
export default Sidebar