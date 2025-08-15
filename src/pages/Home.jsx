import React from 'react';
import Banner from './Banner';
import Orderonline from './Orderonline';
import Categories from './Categories';
import PopularItem from './PopularItem';
import Bgimageorderonline from './Bgimageorderonline';
import Testimonials from './Testimonials';
 

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
             <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;