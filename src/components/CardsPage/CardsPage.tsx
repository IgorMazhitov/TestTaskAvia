import React, { useContext } from "react";
import { AviaContext } from "../../Context/Context";
import { AviaContextType } from "../../types";
import CardData from "./CardData";


    const CardsPage = () => {


        const { searchPlaceFrom, searchPlaceTo, searchDateTo, searchDateBack} = useContext(AviaContext) as AviaContextType
        const price = 4150

        const value = {
            date: searchDateTo,
            cityFrom: searchPlaceFrom,
            cityTo: searchPlaceTo,
            number: 1
        }
        
        return (

            <div className="overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-row justify-start items-center w-[980px] border border-slate-300 rounded-2xl min-h-[200px]">

                <div>
                    <CardData {...value}/>

                    {searchDateBack && <CardData number={2} date={searchDateBack} cityFrom={searchPlaceTo} cityTo={searchPlaceFrom} />}
                </div>

                <div className={`flex flex-row w-full justify-center items-center ${searchDateBack ? 'min-h-[400px]' : 'min-h-[200px]'} border-l-[2px]`}>

                    <p className=" text-3xl font-bold">{searchDateBack ? price * 2 : price} P</p>

                </div>
            </div>

        )

    }

export default CardsPage