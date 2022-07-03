import Layout from "../Components/Layout/Layout"
import React, { useState } from 'react'
import { Props } from "next/script";


interface MyState {


}


export default function Huk() {












    const [Todo, setTodo] = useState([])
    const [Dates, setDate] = useState('')
    const [Title, setTitle] = useState('')
    const [Tex, setTex] = useState('')

    const [Disp, setDisp] = useState({ className: "hidden" })
    const [Disp2, setDisp2] = useState({ className: "undefined" })



    const onDisp = event => {
        if (Disp.className != undefined) {
            setDisp({
                className: undefined
            })
            setDisp2({
                className: "hidden"
            })
        }
        else {
            setDisp({
                className: "hidden"
            })

        }
        
        console.log(setDisp)
        console.log(Disp)
    }

    const onDisp2 = event => {
        if (Disp2.className != undefined) {
            setDisp2({
                className: undefined
            })
            setDisp({
                className: "hidden"
            })

        }
        else {
            setDisp2({
                className: "hidden"
            })

        }
        console.log(setDisp)
        console.log(Disp)
    }

    const [AddData, setAddData] = useState('')
    const [AddTitle, setAddTitle] = useState('')
    const [AddText, setAddText] = useState('')

    function TimeConverter(UNIX_timestamp){
        const a = UNIX_timestamp;
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const year = a.getFullYear();
        const month = months[a.getMonth()];
        const date = a.getDate();
        const hour = a.getHours();
        const min = a.getMinutes();
        const sec = a.getSeconds();
        
        const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
      };


    const Addadd = event => {
        {
            
            setTodo([
                ...Todo,
                {
                    id: Date.now(),
                    Date: TimeConverter(new Date()),
                    Data: AddData,
                    Title: AddTitle,
                    Text: AddText,

                }
            ])
            setAddText('')
            setAddTitle('')
            setAddData(' ')
        }

    }


  
    



    return (
        <div>
            <Layout>
                <div className=" mt-20">
                
                    <div className=" flex justify-center h-[500px] w-full bg-customize-text">
                        <div>
                            <div className={` ${Disp2.className} w-[200px]`}>

                                    
                                <div>
                                    <input className=" mt-10 h-10 w-full" onChange={(event) => setAddData(event.target.value)} placeholder='Веди дату' name='Data' type="date" value={AddData} >

                                    </input>
                                </div>
                                <div>
                                    <input className=" mt-10 h-10 w-full" onChange={(event) => setAddTitle(event.target.value)} placeholder='Веди Заголовок' type="text" value={AddTitle} >


                                    </input>
                                </div>
                                <div>
                                    <input className="mt-10 h-10 w-full" onChange={(event) => setAddText(event.target.value)} placeholder='Веди текст' type="text" value={AddText} >

                                    </input>
                                </div>
                            </div>
                            <div className={`${Disp.className}`}>
                            <One Todo={Todo}  />
                            </div>

                        </div>
                        <div className=" mt-32 ml-32">
                            <div>
                                <button onClick={Addadd} className="bg-customize-slate200 mb-5">
                                    Добавить
                                </button>
                            </div>
                            <div >
                                <button className="bg-white w-32" type="button" onClick={onDisp2} >
                                    1
                                </button>

                            </div>
                            <div >
                                <button className="bg-white w-32 mt-5" type="button" onClick={onDisp} >
                                    2
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </Layout>


        </div>

    )


}

interface MyProps {
    Todo?: JSX.Element;
    sr?: String;
    name?: String;
    email: String;
    data: number;
}


function One({ Todo },) {


    

    return (
        <div className=" text-white">

            {Todo.map(item => <Too key={item.id} {...item}  />)}

        </div>


    )

}

function Too({Date, Data, Text, Title, id}) {

    
    

    return (
        <div>
            <div className={`text-white  mt-20 w-[200px]  `}>
                <div>
                    1) {Date}
                </div>
                <div>
                    2){Data}
                </div>
                <div>
                    3){Title}
                </div>
                <div>
                    4){Text}
                </div>
            </div>
        </div>
    )
}
