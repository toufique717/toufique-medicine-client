import React from 'react';
import Banner from './Banner';
import Orderonline from './Orderonline';
import Categories from './Categories';
import PopularItem from './PopularItem';
import Bgimageorderonline from './Bgimageorderonline';
 

const Home = () => {
    return (
        <div>
             
            <Banner></Banner>
            {/* <Orderonline></Orderonline> */}
             <div className='max-w-lg mx-auto my-4 '>
                <Categories></Categories>
             </div>
             <PopularItem></PopularItem>
             <Bgimageorderonline></Bgimageorderonline>
            
        </div>
    );
};

export default Home;