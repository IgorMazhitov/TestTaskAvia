import React, { useState } from "react";
import { bagIcon, luggageIcon } from "../../SVGs/elements";

    export type ICardData = {
        date: string,
        cityFrom: string,
        cityTo: string,
        number: number
    }

    const CardData = (props: ICardData) => {

        const [timeDepart, setTimeDepart] = useState('09:20')
        const [timeArr, setTimeArr] = useState('11:05')

        const logo = require('../../SVGs/Logo.png')

        const timeClickHandler = (event: React.MouseEvent) => {

            
            for (let i = 1; i < 4; i++) {
                if (document.getElementById(`btn${props.number}-${i}`)?.classList.contains('bg-slate-200')) {

                    document.getElementById(`btn${props.number}-${i}`)?.classList.replace('bg-slate-200', 'bg-slate')

                }
            }

            (event.target as Element).classList.replace('bg-slate', 'bg-slate-200')
            const arrTime = (event.target as Element).textContent!.slice(8)
            const depTime = (event.target as Element).textContent!.slice(0, 5)
            setTimeArr(arrTime)
            setTimeDepart(depTime)

        }

        return (

            <div className="relative h-[200px] flex flex-row justify-start items-center">

                {props.number === 2 && <div className="absolute top-0 right-0 h-[2px] bg-slate-200 w-[95%]"></div>}

                <div className=" w-32 h-7 absolute top-0 left-0 rounded-tl-2xl rounded-br-2xl bg-blue-200 text-sm font-bold flex justify-center items-center">Невозвратный</div>

                <div className="flex flex-col justify-center items-center h-full mx-9 gap-4">
                    <img src={logo}/>
                    <p className=" w-20">S7 Airlines</p>
                </div>

                <div className="flex flex-col justify-center items-start gap-6">

                    <div className="flex flex-row justify-center items-center gap-4">

                        <div className=" mr-12">
                            
                            <p className=" text-2xl font-bold">{timeDepart}</p>
                            <p className=" capitalize"> {props.cityFrom} </p>
                            <p> {props.date.replace(/\//g, '.')} </p>

                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div className="flex flex-row justify-center items-center">
                                <div className="relative flex flex-col">
                                    <p className="absolute top-0 -translate-y-full -translate-x-1/2">SVO</p>
                                    <div className="h-2 w-2 rounded-full bg-slate-600"></div>
                                </div>
                                <div className="w-[269px] h-[2px] bg-slate-600 flex flex-col"></div>
                                <div className="relative flex flex-col">
                                    <p className="absolute top-0 -translate-y-full -translate-x-1/2">ROV</p>
                                    <div className="h-2 w-2 rounded-full bg-slate-600"></div>
                                </div>
                            </div>
                            <p> Время в пути 1 ч. 55 мин.</p>
                        </div>

                        <div className=" ml-12">
                            
                            <p className=" text-2xl font-bold">{timeArr}</p>
                            <p className=" capitalize"> {props.cityTo} </p>
                            <p> {props.date.replace(/\//g, '.')} </p>

                        </div>

                        <div className="flex flex-row justify-center items-center gap-4 mr-4">
                            {luggageIcon}
                            {bagIcon}
                        </div>

                    </div>

                    <div className="flex flex-row justify-center items-center gap-6">

                        <div 
                        className="flex justify-center items-center w-28 h-9 border-2 bg-slate-200 border-slate-400 rounded-xl cursor-pointer"
                        onClick={e => timeClickHandler(e)}
                        id={`btn${props.number}-1`}>

                            09:20 - 11:05

                        </div>

                        <div 
                        className="flex justify-center items-center w-28 h-9 border-2 bg-slate border-slate-400 rounded-xl cursor-pointer"
                        onClick={e => timeClickHandler(e)}
                        id={`btn${props.number}-2`}>

                            10:20 - 12:05

                        </div>

                        <div 
                        className="flex justify-center items-center w-28 h-9 border-2 bg-slate border-slate-400 rounded-xl cursor-pointer"
                        onClick={e => timeClickHandler(e)}
                        id={`btn${props.number}-3`}>

                            11:20 - 13:05

                        </div>

                    </div>

                </div>


            </div>

        )

    }

export default CardData