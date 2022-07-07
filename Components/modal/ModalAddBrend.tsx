import React from "react";
import Router, { withRouter } from "next/router";
import { ProfilingLevel } from "mongodb";
import identity from 'redux/models/identity'
import saga from 'redux/decorators/saga';
import { connect } from 'react-redux';
import BrendsEntity from 'redux/models/brends'
import { IBrends } from 'server/constants';
import Entity from "redux/models/Entities";
import xSave from "redux/models/Entities";
import { response } from "express";



export interface IModalAddProps {

    Disp: String,
    offDisp: (why) => void,
    saveBrand: (data:IBrends ) => void,

}

export interface IModalAddState {


    name: string,
    email: string,
    img: string,
}

@saga(BrendsEntity)
export class ModalAddBrend extends React.Component<IModalAddProps, IModalAddState> {


    constructor(props) {
        super(props);



        this.state = {
            name: " ",
            email: " ",
            img: " ",





        };

        this.handleChange = this.handleChange.bind(this);
        this.openInput = this.openInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        


    };


    

    async handleSubmit(event) {
        const { saveBrand } = this.props;
        const BrendsData : IBrends = {
            brendsId: null,
            email: this.state.email,
            name: this.state.name,
            img: this.state.img,
        }
        saveBrand(BrendsData);
        

        

    }



    handleChange(event) {

        const target = event.target;
        const name = target.name;
        this.setState<typeof name>({

            [name]: target.value

        });


    }

    openInput(event) {
        this.handleChange(event)

        const file = Array.from(event.target.files)

        file.forEach(file => {
            const reader = new FileReader()
            const div = document.getElementById('input-div')




            reader.onload = ev => {


                div.insertAdjacentHTML('afterend', `<img src="${ev.target.result}" class="absolute top-5 left-[70px]  h-64 w-64 rounded-xl z-50" /> `)
                this.setState({ img: `${ev.target.result}` })
            }

            reader.readAsDataURL(file)


        })
    }



    render() {
        const { Disp } = this.props;
        return (
            <div className={` ${Disp ? Disp : 'hidden'} w-[400px] h-[520px] bg-customize-button inset-y-48 inset-x-[800px] fixed z-40 rounded-xl border-[1px] border-customize-text `}>
                <button className="" type="button" onClick={() => this.props.offDisp('hidden')} >
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


                    <div className=" static border-[1px] border-black h-64 w-64 mx-[70px] mt-5 bg-white/80 rounded-xl ">
                        <div className={`relative w-full h-full bg-white rounded-xl`} id="input-div">

                            <div className="block absolute border-2 border-black w-[120px] h-[120px] top-[66px] left-[66px] rounded-lg z-30">
                                <input type="file" className=" " name="img" style={{ display: 'none' }} id="input-file" onChange={this.openInput} accept="image/*" />
                                <label htmlFor="input-file" className=" rounded-lg block absolute border-2 border-black w-[40px] h-[40px] top-[37px] left-[37px] after:absolute after:border-b-2 after:top-[16px] after:w-8 after:border-black after:h-0 after:left-[2px]
                             before:absolute before:border-l-2 before:top-[2px] before:w-0 before:border-black before:h-8 before:left-[17px]">

                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="  mt-10  mx-16 ">
                        <input type="text" className=" w-full h-8 rounded-lg bg-white/80 p-1" name="name" placeholder='Название' onChange={this.handleChange} />
                    </div>
                    <div className=" mt-10 mx-16">
                        <input type="email" className=" w-full h-8 rounded-lg bg-white/80 p-1" name="email" placeholder='Почта' onChange={this.handleChange} />
                    </div>
                    <div className=" flex justify-center mt-5">
                        <button className="bg-yellow-600 rounded-lg h-8 w-full mx-[65px] text-white" type='button' onClick={this.handleSubmit}>
                            Добавить
                        </button>
                    </div>
                </div>
            </div >
        )
    }




};

const mapStateToProps = (state, props) => {
    return {
    };
}

const monitor_connected = connect(mapStateToProps, BrendsEntity.triggers())(ModalAddBrend);
export default withRouter(monitor_connected);

