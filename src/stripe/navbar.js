import './stripe1.css'
import { useGlobalContext } from "./stripe";
import { FaBars } from 'react-icons/fa'
import sublinks from './data';
const Navbar = () => {
    const { sidebaropen, submenuopen, submenuclose } = useGlobalContext();
const displaySubmenu =(e)=>{
const  text =  e.target.textContent;
const tempBtn = e.target.getBoundingClientRect();
 const center = tempBtn.left ;
 const bottom = tempBtn.bottom ;
//  console.log(text)
submenuopen(text,{center,bottom});
}

const handleclick=(e)=>{
    if(!e.target.classList.contains('nav-link')){
        submenuclose();
    }
 }

    return <div  onMouseOver={handleclick}>
        <button className="d-md-none d-block position-absolute end-0 border-0 ms-auto me-5 mt-4 fs-1 bg-transparent" onClick={sidebaropen}><FaBars /></button>



        <div className="container-fluid mt-3  " >
            <div className="row ">
                <div className="col-2">
                    <img src="https://raw.githubusercontent.com/john-smilga/react-projects/eccc3539430dff2c92afdc5e2c6e7fbb74f147f1/13-stripe-submenus/final/src/images/logo.svg" alt="logo"></img>

                </div>
                <div className="col-10 navrow d-md-flex justify-content-center ">




                    <nav className="nav  ">
                        {sublinks.map((item,index)=>{
                            const {page}=item;
                            return <li className="nav-item ">
                            <button className="nav-link btn bg-transparent text-white fs-5"
                           onMouseOver={displaySubmenu} >{page}</button>
                        </li>
                        })
                        }
                        {/* <li className="nav-item mx-2">
                            <button className="nav-link btn bg-transparent text-white fs-5"
                            onMouseOver={displaySubmenu} >developers </button>
                        </li>
                        <li className="nav-item mx-2">
                            <button className="nav-link btn bg-transparent text-white fs-5"
                            onMouseOver={displaySubmenu} >company </button>
                        </li> */}
                        <li className="nav-item mx-5">
                            <button className="nav-link btn bg-dark text-white fs-5"
                            >Sign-in </button>
                        </li>


                    </nav>

                </div>

            </div>
        </div>
    </div>

}
export default Navbar;