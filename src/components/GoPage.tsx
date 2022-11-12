import React from "react";
import { Link, Outlet } from "react-router-dom";

    const GoPage = () => {

        const clickHandler = () => {
            document.getElementById('showBtn')?.classList.toggle('hidden')
        }

        return (
            <>
                <Link  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" to='/avia'> <button id="showBtn" className="w-[120px] h-[80px] bg-blue-400 rounded-2xl font-bold text-slate-200 text-3xl" onClick={clickHandler}>GO</button> </Link>
                <Outlet/>

            </>

        )

    }

export default GoPage