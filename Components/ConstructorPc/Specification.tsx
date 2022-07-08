import React from "react";

export interface ISpecificationProps {
    title: string;
    icon: JSX.Element;
    buttons?: Array<JSX.Element>;
    select?: JSX.Element;
    grid?: string;
}

export default function Specification(props: ISpecificationProps) {
    const { title, icon, buttons, grid } = props;
    
    const select =(
        <div className={`flex justify-center`}>
        <select className=' w-full flex bg-customize-blacegray2/0 border-b-[1px] text-center border-white/50'>
            <option value={123} className=' bg-customize-text/95'>
                Выбрать
            </option>
            <option className=' bg-customize-text/95'>  
                Amd
            </option>
        </select>
    </div>
    )

    return (
        <div className = {`px-10 py-2 `}>
            <div className='ring-2 rounded-full ring-white/50 overflow-visible w-14 h-14 absolute -left-7 -top-7 flex bg-customize-blace111 hover:ring-white/75 '>
                {icon}
            </div>
            <div className="flex flex-col justify-between min-h-[280px] ">
                <div>
                    <div className='flex justify-center'>
                        <h1 className=' text-xl'>{title}</h1>
                    </div>
                    <div className={`grid ${grid? grid:" "} gap-y-6 gap-x-4 justify-items-center  mt-6`}>
                        {buttons}
                    </div>
                </div>
                {select}
            </div>
        </div>
    )
}



