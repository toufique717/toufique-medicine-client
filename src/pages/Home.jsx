import React from 'react';
import Banner from './Banner';
import Orderonline from './Orderonline';
import Categories from './Categories';
import PopularItem from './PopularItem';
import Bgimageorderonline from './Bgimageorderonline';
import Testimonials from './Testimonials';
import Bgimage from './Bgimage';
import Callus from './Callus';
 

const Home = () => {
    return (
        <div>
             
            <Banner></Banner>
            {/* <Orderonline></Orderonline> */}
             <div className='max-w-lg mx-auto my-4 '>
                <Categories></Categories>
             </div>

             <Bgimage></Bgimage>
             <PopularItem></PopularItem>
             <Bgimageorderonline></Bgimageorderonline>
             <Callus></Callus>
             <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;