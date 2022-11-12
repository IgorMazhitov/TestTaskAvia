import React, { createContext } from "react";
import { AviaContextType } from "../types";

export const AviaContext = createContext<AviaContextType>({
    aviaPageState: true,
    aviaPageStateChange: (value: boolean) => {},
    searchPlaceFrom: '',
    searchPlaceFromChange: (value: string) => {},
    searchPlaceTo: '',
    searchPlaceToChange: (value: string) => {},
    searchDateTo: '',
    searchDateToChange: (value: string) => {},
    searchDateBack: '',
    searchDateBackChange: (value: string) => {},
    submitState: true,
    submitStateChange: (value: boolean) => {},
    cardsPageState: false,
    cardsPageStateChange: (value: boolean) => {},
})
