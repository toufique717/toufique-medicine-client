import { useEffect, useState } from "react";

const usemenu = () =>
{
 

    const[menu,setmenu] =useState([]);
    const[loading,setloading] = useState(true);
    
        useEffect(()=>
            {
                fetch('menu.json')
                .then(res=>res.json())
                .then(data=>
                {
                      setmenu(data);
                      setloading(false);
                }
                )
            },[])

            return [menu,loading]


}

export default usemenu;