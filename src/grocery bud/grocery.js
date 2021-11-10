import { useEffect, useState } from "react";

const getLocalStorage =()=>{
    let people = localStorage.getItem('people');
    if(people){
      return JSON.parse(localStorage.getItem('people'));
    }else{
  return  [];
    }
}

const Grocery =()=>{
    const [entry,setEntry] = useState("");
    const [people,setPeople] = useState(getLocalStorage());
    const [editing,setEditing] =  useState(false);
    const [alert,setAlert] = useState({show:false,type:"",content:""});
    const [editId,setEditId] =useState(0);
    const handleSubmit =(e)=>{
     e.preventDefault();
     if(!entry){
        
      showalert(true,"danger","enter the values");

     }else if(entry && editing){
       setPeople( people.map((item,index)=>{
        if(index==editId){
          return  entry;
        
        }else{
            return item;
        }
        }))
        showalert(true,"sucess","value updated")
        setEntry(""); 
        setEditing(false);
        setEditId(null);
     }
     else {
         //  let newpeople = [entry];
         setPeople([...people,entry]);
        showalert(true,"sucess","value added")
        setEntry("");
     }
    
    }
    const showalert =(show=false,type="",content="")=>{
        setAlert({show,type,content})
    }
    useEffect(()=>{
        localStorage.setItem('list',JSON.stringify(people));
    },[people])
    useEffect(()=>{
       let timeout= setTimeout(()=>{
       showalert(false,"","");
        },3000)
        return ()=>clearTimeout(timeout);
    },[alert]);
    const remove =(id)=>{
     let newpeople =  people.filter((item,index)=>index!=id);
     setPeople(newpeople);
     showalert(true,"success","item removed");
    }
const edit =(id)=>{
let newitem = people.find((item,index)=>index==id);
setEntry(newitem);
setEditing(true);
setEditId(id);
}
    
    return<section className="sec">
           <h2>Grocery Bud</h2>
           <p>{(alert.show && alert.content)}</p>
           
    <form>
        <input type="text" value={entry} onChange={(e)=>setEntry(e.target.value)}></input>
        <button type="submit" onClick={handleSubmit}>{editing?"edit":"submit"}</button>
    </form>
         {people.map((item,index)=>{
          return <article>
             <p>{item}</p>
             <button type="button" onClick={()=>edit(index)}>edit</button>
             <button type="button" onClick={()=>remove(index)}>remove</button>

             </article>
         })}
     </section>
}

export default Grocery;
