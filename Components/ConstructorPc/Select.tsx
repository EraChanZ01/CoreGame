import React from "react";
import Buts from "./Button";

export interface ISELECTProps {

    
    selected?: string;
    value?: string;
}



export default function Select(props: ISELECTProps) {
    const { value, selected, } = props;

    return (
            
        <select className=' w-full flex bg-customize-blacegray2/0 border-b-[1px] text-center border-white/50'>
            
            <option value={123} className=' bg-customize-text/95'>
                Выбрать
            </option>
            <option className=' bg-customize-text/95'>
                Amd
            </option>


        </select>


    )
}