import React from "react"









export default class ModelContent extends React.Component {









    render() {
        return (
            <div className="border-y-[1px] border-white/20 text-center max-w-[350px]">
                <p className="p-5 text-2xl">Samsung Odyssey G5 27</p>
                <div>
                    <img src="/mon1.png" />
                </div>
                <div className="text-left">

                    <div className="my-10 border-t-[1px] border-white/20">
                        <div>
                            <p className="text-center p-5 text-lg">Cтоимость:</p>
                        </div>
                        <button className="border-2 rounded-xl w-full h-10">

                        </button>
                    </div>
                </div>
            </div>
        )
    }
}