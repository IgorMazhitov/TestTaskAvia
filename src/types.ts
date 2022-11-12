import React from "react";

export type AviaContextType = {
    aviaPageState: boolean;
    aviaPageStateChange: (value: boolean) => void;
    cardsPageState: boolean;
    cardsPageStateChange: (value: boolean) => void;
    searchPlaceFrom: string;
    searchPlaceFromChange: (value: string) => void;
    searchPlaceTo: string;
    searchPlaceToChange: (value: string) => void;
    searchDateTo: string;
    searchDateToChange: (value: string) => void;
    searchDateBack: string;
    searchDateBackChange: (value: string) => void;
    submitState: boolean
    submitStateChange: (value: boolean) => void
};