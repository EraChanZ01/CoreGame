import React from "react";
import Router from "next/router";

export interface IModalAddProps {
    children?: React.ReactNode;
    opDisp?: String;
    addDevice: (data) => void;
}

export interface IModalAddState {
    name: string,
    img: string,
    info: string,
    price: number,

}


export default class ModalAdd extends React.Component<IModalAddProps, IModalAddState> {


    constructor(props) {
        super(props);
        this.state = {
            name: '',
            img: '',
            info: '',
            price: null,





        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    };

    handleChange(event) {

        const target = event.target;
        const name = target.name;
        this.setState<typeof name>({

            [name]: target.value

        });


    };

    async handleSubmit(event) {
        this.props.addDevice(this.state);
    }

    render() {
        const { opDisp } = this.props;
        return (
            <div className={`left-[453px] top-[150px] mx-[250px] mb-10 absolute  ${opDisp ? opDisp : 'hidden'} absolute bg-black w-[500px] justify-center z-50 border-y-[1px] border-x-[1px] border-yellow-600 `}>
                <button><svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="absolute top-2 right-2"
                    width="25.000000pt" height="25.000000pt" viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        fill="#ca8a04" stroke="none">
                        <path d="M161 5103 c-88 -31 -161 -136 -161 -233 0 -20 7 -59 16 -86 15 -45 106 -139 1103 -1137 l1086 -1087 -1082 -1083 c-594 -595 -1089 -1097 -1098 -1116 -45 -90 -24 -213 50 -286 69 -70 163 -91 261 -59 45 15 139 106 1136 1103 l1088 1086 1088 -1086 c997 -997 1091 -1088 1136 -1103 98 -32 192 -11 261 59 70 69 91 163 59 261 -15 45 -106 139 -1103 1137 l-1086 1087 1086 1088 c997 997 1088 1091 1103 1136 32 98 11 192 -59 261 -69 70 -163 91 -261 59 -45 -15 -139 -106 -1137 -1103 l-1087 -1086 -1088 1086 c-997 997 -1091 1088 -1136 1103 -61 20 -117 19 -175 -1z" />
                    </g>
                </svg>
                </button>

                <div className=" border-white/20 text-center max-w-[350px]">
                    <input className="center text-2xl bg-customize-text my-5 w-full brightness-200 border-y-[1px] border-x-[1px] border-yellow-900 rounded-lg text-white" placeholder='Название' name="name" onChange={this.handleChange} />

                    <input type="file" accept="png,jpg,svg" name="img" onChange={this.handleChange} className="text-white" />

                    <div >
                        <textarea className="resize rounded-md bg-customize-text w-full h-[350px] mt-10 brightness-200 border-y-[1px] border-x-[1px] border-yellow-900 text-white" name="info" onChange={this.handleChange}></textarea>

                        <div className="my-10 border-white/20">
                            <input className=" bg- my-5 w-full h-10 bg-customize-text brightness-200 border-y-[1px] border-x-[1px] border-yellow-900 rounded-lg " placeholder='Цена' name="price" onChange={this.handleChange} />
                            <button className="border-2 rounded-xl w-full h-10 text-black text-xl bg-yellow-600 border-black" type="button" name="submit" onClick={this.handleSubmit} >
                                Добавить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}