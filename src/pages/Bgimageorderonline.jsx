import React from 'react';
import Sectiontitle from './Sectiontitle';
import frimage from '../assets/fr.jpg';
import bimage from '../assets/bg.jpg'

const Bgimageorderonline = () => {
    return (
        <div>

            <div className=' py-10 '>
            <div className='p-12 bg-black bg-opacity-50 bg-cover bg-center bg-blend-overlay ' style={{ backgroundImage: `url(${bimage})` }}>

            <div>
                 <Sectiontitle
                 heading={'---check it out---'}
                 subheading={'From Our menu'}></Sectiontitle>
            </div>

            <div className='flex  gap-4 py-16 px-28'>
                <div className='max-w-80'>
                    <img src={frimage}/> 

                </div>

                <div className='mt-16 b' >
                     <p className='text-xl'>March-22,2025</p>
                     <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat veniam sint possimus alias vel quaerat quod, aliquam quis, labore non impedit, cupiditate autem quisquam itaque in nihil modi dolor blanditiis libero iste ut vitae ducimus deleniti iure. Quod tempora dolores vero soluta placeat! Unde delectus quasi pariatur laborum consequatur perferendis.</p>


                </div>
            </div>
            
        </div>
        </div>
            
        </div>
    );
};

export default Bgimageorderonline;