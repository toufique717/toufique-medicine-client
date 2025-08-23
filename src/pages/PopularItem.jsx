import React, { useEffect, useState } from 'react';
import Sectiontitle from './Sectiontitle';
import Popular from '../shared/Popular';
import usemenu from '../hooks/usemenu';

const PopularItem = () => {

    const[menu] = usemenu();
    const popular = menu.filter(item=>item.category === 'popular')
    // const[menu,setmenu] =useState([]);

    // useEffect(()=>
    //     {
    //         fetch('menu.json')
    //         .then(res=>res.json())
    //         .then(data=>
    //         {
    //               const popularitem = data.filter(item=>item.category === 'popular')
    //               setmenu(popularitem)
    //         }
    //         )
    //     },[])
    return (
        <div>

            <h1>This is popular item</h1>

            <section>
                <Sectiontitle
                heading={"---Check out---"}
                subheading={'FROM OUR MENU'}>

                </Sectiontitle>
            </section>

            <section className='grid grid-cols-2'>
                {
                    popular.map(item=><Popular
                    key={item._id}
                    item={item}>
                    

                    </Popular>)
                }

            </section>
            
        </div>
    );
};

export default PopularItem;