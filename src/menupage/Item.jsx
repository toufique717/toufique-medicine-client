import React from 'react';

import { Helmet } from 'react-helmet-async';
import Backcover from '../shared/Backcover';
import Popularitem from '../pages/PopularItem'

import backimage from '../assets/backimage.jpg'

const Item = () => {
    
    return (
        <div>
              <Helmet>
                 <title>Medicine Menu</title>
             </Helmet>
            <h1>This is menu page </h1>

            <Backcover
            image={backimage}
            title1={"all medicine"}
            title2={"welcome our shop"}
            >
           </Backcover>

           <Popularitem></Popularitem>

            
        </div>
    );
};

export default Item;