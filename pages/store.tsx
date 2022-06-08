import React from "react";
import Baner from "Components/Baner";
import Layout from "Components/Layout/Layout";


export default class Stor extends React.Component {


    render() {
        return (
            <div className=" mt-20">
                <Layout>

                    <Baner bg={"bg-[url('/baner1.svg')]"} />

                    <div className=" border-y-[1px]  border-black h-[220px] bg-customize-blacegray2/95">
                        <div className=" flex justify-between text-white/20  mx-[350px] text-2xl font-bold">
                            <div className="min-w-[120px] h-auto hover:text-white my-6 hover:border-b-2 border-yellow-600 ">
                            <img src="/Монитор.png" width={120}  className="saturate-0 hover:filter-none"/>
                                <p className=" text-center py-2"> Мониторы</p>
                            </div>
                            <div className="min-w-[120px] h-auto hover:text-white my-6 hover:border-b-2 border-yellow-600 ">
                            <img src="/Клава.png" width={120} className="saturate-0 hover:filter-none"/>
                                <p className=" text-center py-2"> Клавиатуры </p>
                            </div>
                            <div className="min-w-[120px] h-auto hover:text-white my-6 hover:border-b-2 border-yellow-600 ">
                            <img src="/Мышка.png" width={120} className="saturate-0 hover:filter-none"/>
                                <p className=" text-center py-2"> Мышки </p>
                            </div>
                            <div className="min-w-[120px] h-auto hover:text-white my-6 hover:border-b-2 border-yellow-600 ">
                            <img src="/Наушники.png" width={120} className="saturate-0 hover:filter-none"/>
                                <p className=" text-center py-2"> Наушники </p>
                            </div>
                            <div className="min-w-[120px] h-auto hover:text-white my-6 hover:border-b-2 border-yellow-600 ">
                            <img src="/Кресла.png" width={120} className="saturate-0 hover:filter-none"/>
                                <p className=" text-center py-2">  Кресла</p>
                            </div>
                            <div className="min-w-[120px] h-auto hover:text-white my-6 hover:border-b-2 border-yellow-600 ">
                            <img src="/Корпус.png" width={120} className="saturate-0 hover:filter-none"/>
                                <p className=" text-center py-2">  Корпуса</p>
                            </div>
                        </div>

                    </div>
                    <Baner bg={"bg-[url('/banner2.jpg')]"}/>

                </Layout>

            </div>
        )
    }
}