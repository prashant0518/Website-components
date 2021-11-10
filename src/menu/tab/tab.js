import { useEffect, useState } from "react";

const Tab =()=>{
    const [job,setJob]=useState([]);
    const [val,setVal]=useState(0);
    const [loading,setLoading] = useState(true);
    const url ="https://course-api.com/react-tabs-project";
    const data = async ()=>{
        const resp =await fetch(url);
        const res = await resp.json();
        console.log(res);
        setJob(res);
        setLoading(false);

    }
    useEffect(()=>{
       data();
      
    },[]);
    if(loading){
        return <h2>Loading..</h2>
    }else {
        const { company, dates, duties, title }   =job[val];
     
        return(
            <section>
                <h1>Experience</h1>
                <div>
                    {job.map((item,index)=>{
                        return<button onClick={()=>setVal(index)}>{item.company}</button>
                    })}
                </div>
                <article>
                   <h2> {title}</h2>
                    <h4>{company}</h4>
                    <h4>{dates}</h4>   
                    {duties.map((info)=>{
                        return <p>{info}</p>
                    })}             
                </article>
            </section>
        )
    }
    
   
} 

export default Tab ;
