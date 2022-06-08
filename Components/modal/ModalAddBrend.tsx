import React from "react";
import Router from "next/router";

export interface IModalAddProps {

}

export interface IModalAddState {


}


export default class ModalAddBrend extends React.Component<IModalAddProps, IModalAddState> {


    constructor(props) {
        super(props);
        this.state = {






        };
        //this. = this..bind(this);
        //this. = this..bind(this);

    };

    render() {

        return (
            <div className=" w-[400px] h-[500px] bg-customize-button inset-x-[800px] fixed z-40 top-[300px] rounded-xl border-[1px] border-customize-text">
                
                <div>
                    <div className=" border-[1px] border-black h-64 w-64 mx-[70px] mt-10 bg-white/80 rounded-xl ">
                        <input type="file" className=" py-24" />
                    </div>
                    <div className="  mt-10  mx-16 ">
                        <input name="name" className=" w-full h-8 rounded-lg bg-white/80" />
                    </div>
                    <div className=" mt-10 mx-16">
                        <input type="email" className=" w-full h-8 rounded-lg bg-white/80" />
                    </div>
                </div>




            </div>

        )
    }


}