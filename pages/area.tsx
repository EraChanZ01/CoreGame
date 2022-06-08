import React from "react";
import Layout from "../Components/Layout/Layout"
import Link from "next/Link"
import Area from "../Components/Area"
import { useRouter } from "next/router"


interface MyProps {

}

interface MyState {

}


export default class PreArea extends React.Component<MyProps, MyState>  {


    constructor(props) {
        super(props);
        this.state = {


        };

        //this. = this..bind(this);

    };



    render() {
        return (
            <div className="mt-[85px] bg-customize-blace111">
                <Layout>
                    <Area >
                    <div className="mb-20 border-[1px] border-white/20 bg-customize-button/70 w-full h-[850px] rounded-lg">

                        <div className=" flex border-b-[1px] text-white">
                            <div className="ml-5 mt-3 mb-3">
                                <p className="text-xl">Персональыне данные</p>
                                <p className="text-sm">Обновите свою личную информацию</p>
                            </div>
                            <div className="flex ml-40">
                                <button className=" mr-7 border-2 border-yellow-600 rounded-lg mt-4 h-10 p-1 px-3 bg-yellow-600">
                                    Сохранить изменения
                                </button>
                                <button className="rounded-lg h-10 mt-4 p-1 px-3 bg-white/30">
                                    Отмена
                                </button>
                            </div>
                        </div>

                        <div >
                            <div className="flex">
                                <div className=" ">
                                    <p className="mt-24 ml-20 text-white">Аватар</p>
                                </div>
                                <div  className="bg-[url('https://w7.pngwing.com/pngs/122/182/png-transparent-xiaomi-logo-xiaomi-mi-a1-smartphone-internet-business-smartphone-angle-electronics-text-thumbnail.png')] bg-cover rounded-lg h-[120px] w-[120px] ml-48 mt-20" >

                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-[320px]">
                                    <p className=" text-white ml-20 mt-16"> Имя</p>
                                </div>
                                <input className=" bg-white/10 h-10 w-96 mt-14 ">

                                </input>
                            </div>
                            <div className="flex">
                                <div className="w-[320px]">
                                    <p className=" text-white ml-20 mt-16"> Фамилия</p>
                                </div>
                                <input className=" bg-white/10 h-10 w-96 mt-14 ">

                                </input>
                            </div>
                            <div className="mt-10 text-white text-center text-xl">
                                Контактная информация
                            </div>
                            <div className="flex">
                                <div className="w-[320px]">
                                    <p className=" text-white ml-20 mt-16"> Контактный номер</p>
                                </div>
                                <div className="w-96 mt-14">
                                    <input className=" bg-white/10 h-10 w-full " type='number'>

                                    </input>
                                    <p>Мы никогда не будем делиться вашей электронной почтой с кем-либо еще.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-[320px]">
                                    <p className=" text-white ml-20 mt-16"> Електроная почта</p>
                                </div>
                                <div className="w-96">
                                    <input className=" bg-white/10 h-10 w-full mt-14 ">

                                    </input>
                                </div>
                            </div>
                        </div>

                    </div>

                    </Area>


                </Layout>
            </div>



        )
    }

}

