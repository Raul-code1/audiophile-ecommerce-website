import { useEffect, useState } from 'react';


import productsData from '../data.json'
import { Product } from '../interfaces/Products';


interface DataState{
    headPhones:Product[];
    speakers:Product[];
    earphones:Product[];
}


export const useData = () => {

    const [dataState, setDataState] = useState<DataState>({
        headPhones:[],
        speakers:[],
        earphones:[]

    })

    const  filterData=()=>{
        const dataHeadphones=productsData.filter( product=>product.category==='headphones' );
        const dataSpeakers=productsData.filter( product=>product.category==='speakers');
        const dataEarphones=productsData.filter( product=>product.category==='earphones');

        setDataState({
            headPhones:dataHeadphones,
            speakers:dataSpeakers,
            earphones:dataEarphones
        })
    }


    useEffect(() => {
      filterData();
    }, [])
    



    return{
        ...dataState
    }
}
