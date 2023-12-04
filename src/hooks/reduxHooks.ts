import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../types/reduxType";

const useAppSelectore:TypedUseSelectorHook<RootState>=useSelector

const useAppDispatch=()=>useDispatch<AppDispatch>()

export {
    useAppDispatch,
    useAppSelectore
}