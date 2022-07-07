import React from "react";

export interface IBUTProps {
    icon?: JSX.Element;
    text?: string;
    className?: string;
    
    clickCallBack?: (component: string, value: string) => void;
    value?: string;
    selected?: string;
    type?: string;
}



export default function Buts(props: IBUTProps) {
    const { icon, text, className, value, selected, type, clickCallBack } = props;

    return (
        <div className={`border-2 relative ${selected == value ? 'border-yellow-500' : 'border-white/50'}  ${className ? 'rounded-lg' : 'rounded-xl'}`} >
            {selected == value && icon ? (
                <img className ="absolute -right-0.5 -top-0.5" src="/check.svg" alt="" />
            ) : (
              <div></div>
              )
            }
            <button onClick={() => clickCallBack(type, value)} className={`min-w-[80px] min-h-[20px] ${className ? className : 'px-1 py-1' } `}>
                {icon}
                {text}
            </button>
        </div>
    )
}
