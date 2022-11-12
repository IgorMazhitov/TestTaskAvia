import React, { useContext } from "react";
import { AviaContext } from "../../Context/Context";
import { calendarIcon } from "../../SVGs/elements";
import { AviaContextType } from "../../types";

    const AviaPage = () => {

        const { aviaPageState, aviaPageStateChange , searchPlaceFrom, searchPlaceFromChange, searchPlaceTo, searchPlaceToChange, searchDateTo, searchDateToChange, searchDateBack, searchDateBackChange, submitState, submitStateChange, cardsPageState, cardsPageStateChange} = useContext(AviaContext) as AviaContextType
        const dateBackCheck = searchDateBack.match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g)
        const dateToCheck = searchDateTo.match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/g)
        const cityFromCheck = searchPlaceFrom.match(/[^a-zA-Zа-яА-Я]/g)
        const cityToCheck = searchPlaceTo.match(/[^a-zA-Zа-яА-Я]/g)

        if ((!cityFromCheck && !cityToCheck && dateToCheck) || (!cityFromCheck && !cityToCheck && dateToCheck && dateBackCheck)) {submitStateChange(false)} else {submitStateChange(true)}
        
        const submitHandler = () => {

                cardsPageStateChange(true)
                aviaPageStateChange(false)
                submitStateChange(true)

        }

        return (

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">

                <div className="w-[962px] h-[100px] rounded-t-2xl bg-blue-400 flex flex-row justify-evenly items-center">

                    <div className="flex flex-col h-full items-start justify-center">
                        <label htmlFor="from">Откуда</label>
                        <input type="text" id="from" className="w-[208px] h-10 rounded-xl bg-slate-50 text-center" placeholder="Город вылета" value={searchPlaceFrom} onChange={(e) => searchPlaceFromChange(e.target.value)}/>
                    </div>

                    <div className="flex flex-col h-full items-start justify-center">
                        <label htmlFor="to">Куда</label>
                        <input type="text" id="to" className="w-[208px] h-10 rounded-xl bg-slate-50 text-center" placeholder="Город прилёта" value={searchPlaceTo} onChange={(e) => searchPlaceToChange(e.target.value)}/>
                    </div>

                    <div className="flex flex-col h-full items-start justify-center">
                        <label htmlFor="date1">Туда</label>
                        <div className="relative flex flex-col">
                            <div className="absolute left-2 top-1/2 -translate-y-1/2">{calendarIcon}</div>
                            <input type="text" id="date1" className="w-[208px] h-10 rounded-xl bg-slate-50 text-center" placeholder="ДД/ММ/ГГ" value={searchDateTo} onChange={(e) => searchDateToChange(e.target.value)}/>
                        </div>
                    </div>

                    <div className="flex flex-col h-full items-start justify-center">
                        <label htmlFor="date2">Обратно</label>
                        <div className="relative flex flex-col">
                            <div className="absolute left-2 top-1/2 -translate-y-1/2">{calendarIcon}</div>
                            <input type="text" id="date2" className="w-[208px] h-10 rounded-xl bg-slate-50 text-center" placeholder="ДД/ММ/ГГ" value={searchDateBack} onChange={(e) => searchDateBackChange(e.target.value)}/>
                        </div>
                    </div>

                </div>

                <div className="w-[962px] h-[86px] rounded-b-2xl border border-blue-400 flex flex-col justify-center items-end">

                    <button className="w-[158px] h-10 bg-blue-400 rounded-xl mr-7 cursor-pointer disabled:opacity-60" disabled={submitState} onClick={submitHandler}>Найти билеты</button>

                </div>

            </div>

        )

    }

export default AviaPage