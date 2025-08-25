import React, { useState } from 'react';
import Backcover from '../shared/Backcover';
import orderbackimage from '../assets/bg.jpg'



import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Foodcard from '../shared/Foodcard';
import usemenu from '../hooks/usemenu';

const Order = () => {
    const[medicine] = usemenu();

    const antibiotics = medicine.filter(product=>product.category === 'offered')
    const analgecsics = medicine.filter(product=>product.category === 'pizza')
    const  Antihypertensives = medicine.filter(product=>product.category === 'dessert')
    const Antidiabetics = medicine.filter(product=>product.category === 'salad')
    const  Antidepressants = medicine.filter(product=>product.category === 'soup')
    const[tabindex,settabindex] =useState(0);
    return (
        <div>

            <h1>this is order page</h1>
            <Backcover image={orderbackimage} title1={'order now'} title2={'Ordering medicine online has become simple and reliable. With trusted apps and websites, you can upload prescriptions, find required medicines, and get them delivered to your home. It saves time, ensures privacy, and often provides discounts. Online medicine delivery is convenient, safe, and helpful, especially during emergencies or busy days.'} ></Backcover>
            
            <div>
                <Tabs selectedIndex={tabindex} onSelect={(index) => settabindex(index)}>
      <TabList>
        <Tab>mb</Tab>
        <Tab>Antihypertensives</Tab>
         <Tab>Antidiabetics</Tab>
        <Tab>Antidepressants</Tab>
         <Tab>Antidepressants.........</Tab>
        
      </TabList>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      <TabPanel></TabPanel>
      
    </Tabs>
            </div>

            <Foodcard></Foodcard>
        </div>
    );
};

export default Order;