import { useState } from "react"
import { data } from "./data";
import './tour.css'
const Tour = () => {
    const [loading, setLoading] = useState(false);
    // const [tours,setTours] =useState(data);

    if (loading) {
        return <h1>...Loading</h1>

    }
    else {
        console.log(data);
        return <Tours data={data} />
    }
}

const Tours = ({ data }) => {

    return (
        <section>
            {data.map((tour) => {
                return <SingleTour key={tour.id} {...tour} />
            })}
        </section>
    )
}


const SingleTour = ({name,info, image, id, price }) => {
    const [more,setMore]=useState(false);
    // const [rimg,setRimg]=useState();
    // const fetch = async ({image})=>{

    //     const resp = await fetch(image);
    //     const ima = await resp.json();
    //     console.log(ima);
    //     return setRimg(ima);
      
    //   }
    // let pic = document.getElementById('pic');

    //  fetch({image}).then(res=>res.blob).then(result=>{
    //     const url = URL.createObjectURL(result);
    //     console.log(url);
    //      pic.src=result.message;
    //  }).catch(err=>console.log(err));

    return (
        <article className="main">

            <img alt="" id="pic" width="500px" height="500px" src={image}></img>
            {/* <Fetch image={image}/> */}
            <footer>
                <div>
                    <h3>{name}</h3>
                    <span>${price}</span>
                </div>
                <p>{more?info:`${info.substring(0,200)}....`}</p>
                <button onClick={()=>setMore(!more)}>{more?"Show Less":"Read More"}</button>

            </footer>

        </article>
    )
}

export default Tour;