import React,{useContext} from 'react'
import {Context} from './context'


export default function TodoItem({ sr,id,name,data,email }) {
   
    const {removeTodo} = useContext(Context)
    

    return (
        <div className="flex mt-5 ml-10 h-20">
            <div>
                <img src={`${sr} `} width={80} className=" " />
            </div>
            <div className="flex justify-between w-full">

                <div className="flex ml-16 w-32">
                    <div className=" text-white">
                        <p>{name}</p><div className="flex"><p>Email:</p>  <p className=" ml-2 text-yellow-600">{email}</p></div>

                    </div>
                </div>

                <div className="">


                    <div className="flex text-white">
                        <p>Дата изменения:</p> <p className="text-yellow-600 ml-2 ">{data}</p>
                    </div>
                </div>
                <button className='mx-5'>
                    <img src='/delete.png' width={20} onClick={() => removeTodo(id)} />
                </button>
            </div>
        </div>

    )

}