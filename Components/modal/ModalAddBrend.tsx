import React from "react";
import Router from "next/router";

export interface IModalAddProps {

}

export interface IModalAddState {


}


export default class ModalAddBrend extends React.Component<IModalAddProps, IModalAddState> {

    render() {
        return (
            <div className={`${Disp.className} w-[400px] h-[520px] bg-customize-button inset-x-[800px] fixed z-40 top-[300px] rounded-xl border-[1px] border-customize-text`}>
                <button className="" type="button" > 
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="absolute top-2 right-2"
                        width="25.000000pt" height="25.000000pt" viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                            fill="#ca8a04" stroke="none">
                            <path d="M161 5103 c-88 -31 -161 -136 -161 -233 0 -20 7 -59 16 -86 15 -45 106 -139 1103 -1137 l1086 -1087 -1082 -1083 c-594 -595 -1089 -1097 -1098 -1116 -45 -90 -24 -213 50 -286 69 -70 163 -91 261 -59 45 15 139 106 1136 1103 l1088 1086 1088 -1086 c997 -997 1091 -1088 1136 -1103 98 -32 192 -11 261 59 70 69 91 163 59 261 -15 45 -106 139 -1103 1137 l-1086 1087 1086 1088 c997 997 1088 1091 1103 1136 32 98 11 192 -59 261 -69 70 -163 91 -261 59 -45 -15 -139 -106 -1137 -1103 l-1087 -1086 -1088 1086 c-997 997 -1091 1088 -1136 1103 -61 20 -117 19 -175 -1z" />
                        </g>
                    </svg>
                </button>
                <div>


                    <div className=" border-[1px] border-black h-64 w-64 mx-[70px] mt-5 bg-white/80 rounded-xl ">
                        <input type="" className="w-full h-full" value={AddSr} onChange={event => setAddSr(event.target.value)} />
                    </div>

                    <div className="  mt-10  mx-16 ">
                        <input name="name" type="text" value={AddName} onChange={event => setAddName(event.target.value)} className=" w-full h-8 rounded-lg bg-white/80" />
                    </div>
                    <div className=" mt-10 mx-16">
                        <input type="email" value={AddEmail} onChange={event => setAddEmail(event.target.value)} className=" w-full h-8 rounded-lg bg-white/80" />
                    </div>
                    <div className=" flex justify-center mt-5">
                        <button className="bg-yellow-600 rounded-lg h-8 w-full mx-[65px] text-white"> 
                            Добавить
                        </button>
                    </div>
                </div>
            </div >
        )
    }


}