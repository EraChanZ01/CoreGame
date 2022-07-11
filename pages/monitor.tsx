import Store from "../Components/Store"
import React from "react";
import Layout from "Components/Layout/Layout";
import Router from 'next/router'
import ModallAdd from '../Components/modal/ModalAddDevic'
import wrapper from "redux/store";
import saga from 'redux/decorators/saga';
import DeviceEntity from 'redux/models/devices'
import { withRouter } from 'next/router';
import { connect } from 'react-redux';

interface MyProps {
    saveDevice: (data) => void;
}

interface MyState {
    
    opDisp: String,
    onDisp: String,

}

@saga(DeviceEntity)
class Monitor extends React.Component<MyProps, MyState> {



    constructor(props) {
        super(props);
        this.state = {
            
            opDisp: '',
            onDisp: '',




        };

        
        this.openDisp = this.openDisp.bind(this);
        this.offDisp = this.offDisp.bind(this);
    };


    public static getInitialProps = wrapper.getInitialAppProps(store => ({ query }) => {
	
	});

    


    

    



    render() {
       
        return (
            <form className=" bg-customize-blacegray relative">
                <Layout>
                    
                    <Store opDisp={this.state.opDisp}>
                        <div className={` bg-customize-blacegray text-center text-white font-bold relative ${this.state.opDisp ? this.state.opDisp : ""}  z-40 `}>



                            <div className="z-30">
                                <p className="p-10 text-4xl">Монитор</p>
                            </div>



                    


                            <div className="flex justify-between lg:mx-[90px] xl:mx-[250px] mb-10 z-30">
                                <div className="border-y-[1px] border-white/20 text-center max-w-[350px]">
                                    <p className="p-5 text-2xl">Samsung Odyssey G5 27</p>
                                    <div>
                                        <img src="/mon1.png" />
                                    </div>
                                    <div className="text-left">
                                        <p>Диагональ:
                                            27"
                                        </p>
                                        <p>
                                            разрешение:
                                            2560 х 1440
                                        </p>
                                        <p>
                                            Матрица:
                                            VA
                                        </p>
                                        <p>
                                            Покрытие дисплея: матовое
                                        </p>
                                        <p>
                                            Тип подсветки:LED
                                        </p>
                                        <p>
                                            Время отклика:1мс
                                        </p>
                                        <p>
                                            Яркость:
                                            250кд/м2
                                        </p>
                                        <p>
                                            Частота обновления:144Гц
                                        </p>
                                        <p>
                                            Контрастность:2500:1
                                        </p>
                                        <p>
                                            Формат экрана: 16:9
                                        </p>
                                        <p>
                                            Горизонтальный угол обзора: 178градусов
                                        </p>
                                        <p>
                                            Вертикальный угол обзора: 178градусов
                                        </p>
                                        <p>
                                            Видимый размер дисплея: 596.736 x 335.664мм
                                        </p>
                                        <div className="my-10 border-t-[1px] border-white/20">
                                            <div>
                                                <p className="text-center p-5 text-lg">Cтоимость:</p>
                                            </div>
                                            <button className="border-2 rounded-xl w-full h-10">

                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-y-[1px] z-30 border-white/20 text-center max-w-[350px]">
                                    <p className="p-5 text-2xl">Samsung Odyssey G5 27</p>
                                    <div>
                                        <img src="/mon1.png" />
                                    </div>
                                    <div className="text-left">
                                        <p>Диагональ:
                                            27"
                                        </p>
                                        <p>
                                            разрешение:
                                            2560 х 1440
                                        </p>
                                        <p>
                                            Матрица:
                                            VA
                                        </p>
                                        <p>
                                            Покрытие дисплея: матовое
                                        </p>
                                        <p>
                                            Тип подсветки:LED
                                        </p>
                                        <p>
                                            Время отклика:1мс
                                        </p>
                                        <p>
                                            Яркость:
                                            250кд/м2
                                        </p>
                                        <p>
                                            Частота обновления:144Гц
                                        </p>
                                        <p>
                                            Контрастность:2500:1
                                        </p>
                                        <p>
                                            Формат экрана: 16:9
                                        </p>
                                        <p>
                                            Горизонтальный угол обзора: 178градусов
                                        </p>
                                        <p>
                                            Вертикальный угол обзора: 178градусов
                                        </p>
                                        <p>
                                            Видимый размер дисплея: 596.736 x 335.664мм
                                        </p>
                                        <div className="my-10 border-t-[1px] border-white/20">
                                            <p className="text-center p-5 text-lg">Cтоимость:</p>
                                            <button className="border-2 rounded-xl w-full h-10">

                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <div className="z-30">
                                    <div className="border-y-[1px] border-white/20 text-center max-w-[350px]">
                                        <p className="p-5 text-2xl">Samsung Odyssey G5 27</p>
                                        <div>
                                            <img src="/mon1.png" />
                                        </div>
                                        <div className="text-left">
                                            <p>Диагональ:
                                                27"
                                            </p>
                                            <p>
                                                разрешение:
                                                2560 х 1440
                                            </p>
                                            <p>
                                                Матрица:
                                                VA
                                            </p>
                                            <p>
                                                Покрытие дисплея: матовое
                                            </p>
                                            <p>
                                                Тип подсветки:LED
                                            </p>
                                            <p>
                                                Время отклика:1мс
                                            </p>
                                            <p>
                                                Яркость:
                                                250кд/м2
                                            </p>
                                            <p>
                                                Частота обновления:144Гц
                                            </p>
                                            <p>
                                                Контрастность:2500:1
                                            </p>
                                            <p>
                                                Формат экрана: 16:9
                                            </p>
                                            <p>
                                                Горизонтальный угол обзора: 178градусов
                                            </p>
                                            <p>
                                                Вертикальный угол обзора: 178градусов
                                            </p>
                                            <p>
                                                Видимый размер дисплея: 596.736 x 335.664мм
                                            </p>
                                            <div className="my-10 border-t-[1px] border-white/20">
                                                <p className="text-center p-5 text-lg">Cтоимость:</p>
                                                <button className="border-2 rounded-xl w-full h-10">

                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Store>
                </Layout>

            </form>

        )
    }
}

const mapStateToProps = (state, props) => {
	return {
    };
}

const monitor_connected = connect(mapStateToProps, DeviceEntity.triggers())(Monitor);
export default withRouter(monitor_connected);