import React from "react"



export default function MonitorItem({ models }) {
    return (
        <div className=" border-y-[1px] border-white/20 text-center max-w-[350px] text-white">
            <p className="p-5 text-2xl ">{models.get("name")}</p>
            <div>
                <img src="/mon1.png" />
            </div>
            <div className="text-left">

                <p>{models.get("info")}</p>

                <div className="my-10 border-t-[1px] border-white/20">
                    <div className="flex items-center">
                        <p className="text-center text-lg py-3 p-2">Cтоимость: </p>
                        <p className="text-yellow-600 text-center py-3 p-2 text-lg"> {models.get("price")}</p>
                        <p className="text-center py-3 text-lg">грн</p>
                    </div>
                    <button className="border-2 rounded-xl w-full h-10">

                    </button>

                </div>
            </div>
        </div>

    )
}