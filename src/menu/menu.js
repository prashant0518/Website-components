
import menu from './data';
import React, { useState } from 'react';

let allCategory = ['all', ...new Set(menu.map((item) => {
    return item.category;
    ;
}))];
console.log(allCategory);
const Menu = () => {
    const [select, setSelect] = useState(menu);
    const [categories, setCategories] = useState(allCategory);
    const filter = (cate) => {
        if (cate === 'all') {
            setSelect(menu);
            return;
        }
        
            let a = menu.filter((item) => item.category === cate);
            setSelect(a);
        



    }
    return (
        <section>
            <FilterItems categories={categories} filter={filter} />
            {select.map((item) => {
                return <SingleItem key={item.id} {...item} />
            })}
        </section>
    )
}
const FilterItems = ({ categories, filter }) => {

    return categories.map((item) => {
        return <button onClick={() => filter(item)}>{item} </button>
    })
}
const SingleItem = ({ id, title, category, price, img, desc }) => {

    return (
        <article>
            <img src={img} width="500px" height="500px"></img>
            <h4>{title}</h4>
            <h4>${price}</h4>
            <p>{desc}</p>
        </article>
    )
}
export default Menu;