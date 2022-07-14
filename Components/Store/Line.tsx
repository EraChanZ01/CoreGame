import React from "react"
import Link from "next/link"





export default class Line extends React.Component {

    handleClick() {

    }

    render() {
        return (

            <div className=" flex justify-between text-white/20  mx-[350px] text-2xl font-bold">
                <Link href={"/store/Monitor"}>
                    <button type="button" onClick={this.handleClick}>
                        <div className="min-w-[120px] h-auto hover:text-white my-6 hover:border-b-2 border-yellow-600 ">
                            <img src="/Монитор.png" width={120} className="saturate-0 hover:filter-none" />
                            <p className=" text-center py-2"> Монитор</p>
                        </div>
                    </button>
                </Link>
                <div className="min-w-[120px] h-auto hover:text-white my-6 hover:border-b-2 border-yellow-600 ">
                    <img src="/Клава.png" width={120} className="saturate-0 hover:filter-none" />
                    <p className=" text-center py-2"> Клавиатура </p>
                </div>
                <div className="min-w-[120px] h-auto hover:text-white my-6 hover:border-b-2 border-yellow-600 ">
                    <img src="/Мышка.png" width={120} className="saturate-0 hover:filter-none" />
                    <p className=" text-center py-2"> Мышка </p>
                </div>
                <div className="min-w-[120px] h-auto hover:text-white my-6 hover:border-b-2 border-yellow-600 ">
                    <img src="/Наушники.png" width={120} className="saturate-0 hover:filter-none" />
                    <p className=" text-center py-2"> Наушники </p>
                </div>
                <div className="min-w-[120px] h-auto hover:text-white my-6 hover:border-b-2 border-yellow-600 ">
                    <img src="/Кресла.png" width={120} className="saturate-0 hover:filter-none" />
                    <p className=" text-center py-2">  Кресла</p>
                </div>
                <div className="min-w-[120px] h-auto hover:text-white my-6 hover:border-b-2 border-yellow-600 ">
                    <img src="/Корпус.png" width={120} className="saturate-0 hover:filter-none" />
                    <p className=" text-center py-2">  Корпуса</p>
                </div>
            </div>


        )
    }
}