import React from "react";
import Link from 'next/link'
import Router, { withRouter } from 'next/router'
import saga from 'redux/decorators/saga';
import { connect } from 'react-redux';
import ModalAddDevic from '../../modal/ModalAddDevic'














interface MyProps {


}

interface MyState {
    onDisp: string,
    addDevice: string

}


export default class ProfileDevice extends React.Component<MyProps, MyState> {

    constructor(props) {
        super(props);
        this.state = {
            onDisp: '',
            addDevice: '',


        };

        this.onDisp = this.onDisp.bind(this);
        this.addDevice = this.addDevice.bind(this)
        this.offDisp = this.offDisp.bind(this);


    };

    onDisp(event) {

        this.setState({ onDisp: 'flex' });
    }

    offDisp(event) {


        this.setState({ onDisp: 'hidden' });

    }


    addDevice() { }


    render() {
        return (
            <div className="relative mb-20 border-[1px] border-white/20 bg-customize-button/70 w-full h-[850px] rounded-lg">
                <ModalAddDevic opDisp={this.state.onDisp} addDevice={this.addDevice} />
                <div className="flex">
                    <div className="">
                        <p className="ml-16 mt-5 text-xl text-white">Доступные Дивайсы</p>
                    </div>
                    <div className=" ml-[330px] mr-10 mt-5 bg-yellow-600 rounded-lg h-10 w-36 text-center">
                        <button className="px-1 py-2 text-black" type="button" onClick={this.onDisp} >
                            Добавить дивайс
                        </button>
                    </div>
                </div>
                <div className="border-[1px] rounded-xl drop-shadow-2xl h-96 mt-8 mx-10 overflow-auto" >

                </div>
            </div>
        )
    }
}