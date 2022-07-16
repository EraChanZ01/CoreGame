import React from "react";
import Router, { withRouter } from "next/router";
import saga from 'redux/decorators/saga';
import { connect } from 'react-redux';
import ModelsEntity from 'redux/models/model'
import SelectBrend from "./Device/SelectBrend";
import brends from "redux/models/brends";
import SelectCategory from "./Device/SelectCategory";
import category from "redux/models/category";
import { IModel } from 'server/constants';

export interface IModelAddProps {
    children?: React.ReactNode;
    opDisp?: String;
    saveModel: (data: IModel) => void,
    brends: any,
    category: any,

}

export interface IModelAddState {
    name: string,
    img: string,
    info: string,
    price: number,
    categoryName: string,
    brendName: string,
    imgg: string,


}

@saga(ModelsEntity)
export class ModelAddDevic extends React.Component<IModelAddProps, IModelAddState> {


    constructor(props) {
        super(props);
        this.state = {
            imgg: "",
            name: "",
            categoryName: "",
            brendName: null,
            price: null,
            info: "",
            img: "",




        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openInput = this.openInput.bind(this);
        this.СountСategory = this.СountСategory.bind(this);
    };

    СountСategory(name) {
        console.log(name)
        this.setState({ brendName: `${name}` })
    }

    openInput(event) {

    }

    handleChange(event) {

        const target = event.target;
        const name = target.name;
        this.setState<typeof name>({

            [name]: target.value

        });


    };

    async handleSubmit(event) {

        const { saveModel } = this.props;
        console.log(saveModel)
        const ModelData: IModel = {
            name: this.state.name,
            info: this.state.info,
            price: this.state.price,
            img: this.state.img,
            categoryName: this.state.categoryName,
            brendName: this.state.brendName,
        }
        saveModel(ModelData);

    }

    render() {

        console.log(this.state.brendName)
        const { opDisp, brends, category } = this.props;

        const currentBrend = brends?.find(brend => brend?.get("id") == this.state.brendName)

        const brendCategories = category?.filter(categor => {

            if (currentBrend?.get("categoryName")?.find(categorName =>
                
              categorName?.get("categoryid") == categor?.get("id")
            )) { return true }

            else return false
        }
        )
        return (
            <div className={`  ${opDisp ? opDisp : 'hidden'}  rounded-xl fixed top-32 left-[500px] bg-customize-button w-[800px] justify-center z-50 border-4 border-black/50 `}>
                <button><svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="absolute top-2 right-2"
                    width="25.000000pt" height="25.000000pt" viewBox="0 0 512.000000 512.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                        fill="#ca8a04" stroke="none">
                        <path d="M161 5103 c-88 -31 -161 -136 -161 -233 0 -20 7 -59 16 -86 15 -45 106 -139 1103 -1137 l1086 -1087 -1082 -1083 c-594 -595 -1089 -1097 -1098 -1116 -45 -90 -24 -213 50 -286 69 -70 163 -91 261 -59 45 15 139 106 1136 1103 l1088 1086 1088 -1086 c997 -997 1091 -1088 1136 -1103 98 -32 192 -11 261 59 70 69 91 163 59 261 -15 45 -106 139 -1103 1137 l-1086 1087 1086 1088 c997 997 1088 1091 1103 1136 32 98 11 192 -59 261 -69 70 -163 91 -261 59 -45 -15 -139 -106 -1137 -1103 l-1087 -1086 -1088 1086 c-997 997 -1091 1088 -1136 1103 -61 20 -117 19 -175 -1z" />
                    </g>
                </svg>
                </button>

                <div className=" border-white/20 text-center w-full mx-16">

                    <div className="flex mt-10">
                        <div className="flex static border-4 border-gray-700 h-64 w-64 mt-5 bg-white/80  ">
                            <div className={`relative w-full h-full bg-white `} id="input-div">
                                <div className="block absolute border-2 border-black w-[120px] h-[120px] top-[66px] left-[66px] rounded-lg z-30">
                                    <input type="file" className=" " name="imgg" style={{ display: 'none' }} id="input-file" onChange={this.openInput} accept="image/*" />
                                    <label htmlFor="input-file" className=" rounded-lg block absolute border-2 border-black w-[40px] h-[40px] top-[37px] left-[37px] after:absolute after:border-b-2 after:top-[16px] after:w-8 after:border-black after:h-0 after:left-[2px]
                             before:absolute before:border-l-2 before:top-[2px] before:w-0 before:border-black before:h-8 before:left-[17px]">
                                    </label>
                                </div>
                            </div>

                        </div>
                        <textarea className="resize rounded-md bg-customize-text/70 w-[400px] ml-5 h-64 mt-5 brightness-200 border-4 border-gray-700/20 text-white/20" name="info" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="flex justify-end mr-14 mt-5">
                    </div>
                    <div >
                        <div className="my-2 border-white/20 text-white/20">
                            <div className="flex">
                                <input className=" h-12 p-2 text-2xl bg-customize-text/70 my-5 w-full brightness-200 border-4 border-gray-700/20 rounded-lg " placeholder='Название' name="name" onChange={this.handleChange} />
                                <SelectBrend brends={brends} СountСategory={this.СountСategory} />
                            </div>
                            <div className="flex">
                                <input className=" p-2 mb-5 text-2xl w-full h-12 bg-customize-text/70 brightness-200 border-4 border-gray-700/20 rounded-lg " placeholder='Цена' name="price" onChange={this.handleChange} />
                                <SelectCategory category={brendCategories}  />
                            </div>
                            <button className="border-2 rounded-xl w-full h-10 text-black text-xl bg-yellow-600 border-gray-700/20" type="button" onClick={this.handleSubmit} >
                                Добавить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}


const mapStateToProps = (state, props) => {


    const brends = state.entities.get("brands");
    const category = state.entities.get("category")


    return {
        brends,
        category
    };
}

const monitor_connected = connect(mapStateToProps, ModelsEntity.triggers())(ModelAddDevic);
export default withRouter(monitor_connected);