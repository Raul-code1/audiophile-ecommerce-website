import { useSelector,useDispatch } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux';
import type{ RooteState,AppDispatch } from '../store'


export const useAppDispatch:()=> AppDispatch=useDispatch;
export const useAppSelector: TypedUseSelectorHook<RooteState>=useSelector;