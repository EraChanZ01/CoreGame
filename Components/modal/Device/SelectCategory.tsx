import React from "react"
import OptionCategory from "./OptionCategory"


export default function SelectCategory({category }) {
    

   

    
 
    
    const result = [];
    category?.forEach(element => {

       
       result.push(<OptionCategory category={element} />)

    });

    return (
        <select className="bg-customize-text/60 w-96 h-12 ml-6 text-yellow-600 rounded-lg border-4 border-white/20">
            {result}
        </select>
    )

}