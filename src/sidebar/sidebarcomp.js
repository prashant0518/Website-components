
import './sidebar.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";


export const Sidebarcomp =({sidebarclose,mainlinks,socialLinks,show})=>{
    return (
        <div className={show ? "sidebarshow1 " : " sidebarshow"}>
        <div className="flex-column p-md-4 sidebar1">
            <div className="d-flex mb-5">
                <div className="display-2 fw-bold fs-3 navbar-brand me-auto text-white">Red Door Studio</div>
                <button className="btn-close btn-danger text-white" onClick={sidebarclose}></button>
            </div>
            <nav className=" nav nav-pills flex-column mb-5 fs-5 ">
                {
                    mainlinks.map((item) => {
                        // const { id, url, text, icon } = item;

                        return <li className="nav-item d-flex ">
                            <span>{item.icon}</span>
                            <a className="nav-link text-white text-capitalize" href={item.url}>{item.text}</a>
                        </li>

                    })
                }

            </nav>
            <div>
                <nav className=" nav nav-pills " style={{backgroundColor:"white"}}>
                    {
                        socialLinks.map((item) => {
                            // const { id, url, text, icon } = item;

                            return <li className="nav-item  ">
                                {/* <span>{item.icon}</span> */}
                                <a className="nav-link" href={item.url}>{item.icon}</a>
                            </li>

                        })
                    }

                </nav>

            </div>
        </div>
    </div>
    )
}