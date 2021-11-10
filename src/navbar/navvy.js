import { useEffect, useRef, useState } from "react";
import './nav.css';
import logo from './logo.png'
import lays from './chips.png'
import {links,social} from './data'
import { BiAlignJustify } from "react-icons/bi";
const Navbarr=()=>{
    const linksref = useRef(null);
    const linkscontainerref =useRef(null)
const [toogle,setToogle]=useState(false);
useEffect(()=>{
    const linksHeight = linksref.current.getBoundingClientRect().height;
    console.log(linksHeight);
    if(toogle){
        linkscontainerref.current.style.height=`${linksHeight+55}px`;
    }else{
        linkscontainerref.current.style.height=`55px`;

    }
},[toogle])
return<section  ref={linkscontainerref} className='lays-sec lays-sec2'>
 <div className="inner-circle">
 <img src={logo} alt="" width="120px" height="50px"></img>
 
 
 <div className="links-nav " ref={linksref}>
   <ul className="links-ul" >
 
 {links.map((item,index)=>{

     return <li> <SingleLink key={item.id} {...item}/></li>
 })}
 </ul>
 </div>
 <div className="social-nav">
 {social.map((item)=>{
     return  <SingleIcon key={item.id} {...item} />
 })}
 </div>
 </div>
 <section className="chip-sec">
 <button className="toogle-btn" onClick={()=>setToogle(!toogle)} ><BiAlignJustify /></button>
  <img src={lays} alt="" className="chips"></img>
  </section>
 </section>
}

const SingleIcon =({id,url,icon})=>{

    return <article>
        
      <a href={url}>{icon}</a> 
        
    </article>
}

const SingleLink =(item)=>{
    let {url,text}=item;

  return  <a href={url}>{text}</a>
  
}
export default Navbarr;