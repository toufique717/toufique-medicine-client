import React from 'react';

import { Helmet } from 'react-helmet-async';
import Backcover from '../shared/Backcover';
import Popularitem from '../pages/PopularItem'

import backimage from '../assets/backimage.jpg'
import Sectiontitle from '../pages/Sectiontitle';
import usemenu from '../hooks/usemenu';
import Productcategory from './Productcategory';



import medi1 from '../assets/medi1.jpg'
import medi2 from '../assets/medi2.jpg'
import medi3 from '../assets/medi3.jpg'
import medi4 from '../assets/medi4.jpg'

const Item = () => {
    const[medicine] = usemenu();
    const antibiotics = medicine.filter(product=>product.category === 'offered')
    const analgecsics = medicine.filter(product=>product.category === 'pizza')
    const  Antihypertensives = medicine.filter(product=>product.category === 'dessert')
    const Antidiabetics = medicine.filter(product=>product.category === 'salad')
    const  Antidepressants = medicine.filter(product=>product.category === 'soup')
    
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

           <Sectiontitle heading={'--Dont miss--'} subheading={'TODAYS OFFER'}></Sectiontitle>
           <Productcategory item={antibiotics}></Productcategory>

           <Productcategory item={analgecsics} image={medi1} title1={'mb'} title2={'Medicine plays a vital role in maintaining health and saving lives. It helps prevent, treat, and manage various diseases, improving quality of life. From antibiotics that fight infections to painkillers that relieve suffering, medicines are essential in modern healthcare. Responsible use ensures safety, effectiveness, and better outcomes for everyone.'} ></Productcategory>

           <Productcategory item={Antihypertensives} image={medi2} title1={' Antihypertensives'} title2={'Medicine plays a vital role in maintaining health and saving lives. It helps prevent, treat, and manage various diseases, improving quality of life. From antibiotics that fight infections to painkillers that relieve suffering, medicines are essential in modern healthcare. Responsible use ensures safety, effectiveness, and better outcomes for everyone.'} ></Productcategory>

           <Productcategory item={ Antidiabetics} image={medi3} title1={' Antidiabetics'} title2={'Medicine plays a vital role in maintaining health and saving lives. It helps prevent, treat, and manage various diseases, improving quality of life. From antibiotics that fight infections to painkillers that relieve suffering, medicines are essential in modern healthcare. Responsible use ensures safety, effectiveness, and better outcomes for everyone.'} ></Productcategory>


           <Productcategory item={Antidepressants} image={medi4} title1={'Antidepressants'} title2={'Medicine plays a vital role in maintaining health and saving lives. It helps prevent, treat, and manage various diseases, improving quality of life. From antibiotics that fight infections to painkillers that relieve suffering, medicines are essential in modern healthcare. Responsible use ensures safety, effectiveness, and better outcomes for everyone.'} ></Productcategory>



            
        </div>
    );
};

export default Item;