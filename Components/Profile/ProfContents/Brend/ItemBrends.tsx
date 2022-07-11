import React from "react";






export default function ListBrends({ brend }) {
    return (
        <div className=" flex border-b-2 mt-3">
            <div className="border w-12 h-12 ml-5 mb-3">
            </div >
            <div className=" ml-10 w-52">
                Название: {brend.get("name")}
            </div>
            <div className=" ml-10 " >
                Почта: {brend.get("")}
            </div>
        </div>
    )
}