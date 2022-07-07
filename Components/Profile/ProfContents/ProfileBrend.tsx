import ModalAddBrend from "../../modal/ModalAddBrend"
import React from "react";


interface MyProps {


}

interface MyState {
    onDisp: string,
    setingDisp: string,
}


export default class PrfileBrend extends React.Component<MyProps, MyState> {

    constructor(props) {
        super(props);
        this.state = {
            onDisp: '',
            setingDisp: '',

        };

        this.openDisp = this.openDisp.bind(this);
        this.offDisp = this.offDisp.bind(this)

    };

    openDisp(event) {
        this.setState({ setingDisp: 'brightness-50' });
        this.setState({ onDisp: 'flex' });

    }

    offDisp(why) {
        this.setState({ setingDisp: 'brightness-100' })
        this.setState({ onDisp: `${why} ` });
    }






    render() {


        return (
            <div className={` relative mb-20 border-[1px] border-white/20 bg-customize-button/70 w-full h-[850px] rounded-lg`}>

                <ModalAddBrend Disp={this.state.onDisp} offDisp={this.offDisp} />
                <div>


                    <div>
                        <div className="flex">
                            <div className="">
                                <p className="ml-16 mt-5 text-xl text-white">Доступные Бренды</p>
                            </div>
                            <div className=" ml-[340px] mr-10 mt-5 bg-yellow-600 rounded-lg h-10 w-36 text-center">
                                <button className="p-2 text-black" type="button" onClick={this.openDisp} >
                                    Добавить бренд
                                </button>
                            </div>
                        </div>
                        <div className="border-[1px] rounded-xl drop-shadow-2xl h-96 mt-8 mx-10 overflow-auto ">
                            <div className="">


                            </div >
                            <div className="">

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}