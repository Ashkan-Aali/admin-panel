import React, { useEffect, useState } from 'react';
import { getOrdersStatisticsService } from '../../services/order';
import Card from './Card';
import SpinnerLoad from '../../components/SpinnerLoad';

const cardObjects = [
    {
        name: "carts",
        currentValue:"",
        title:"سبد خرید امروز",
        desc:"سبد های خرید مانده امروز",
        icon:"fas fa-shopping-basket",
        lastWeekValue:"",
        lastMonthValue:"",
    },
    {
        name: "pendingOrders",
        currentValue:"",
        title:"سفارشات مانده امروز",
        desc:" سفارشات معلق و فاقد پرداختی",
        icon:"fas fa-dolly",
        lastWeekValue:"",
        lastMonthValue:"",
    },
    {
        name: "successOrders",
        currentValue:"",
        title:"سفارشات امروز",
        desc:"سفارشات کامل و دارای پرداختی",
        icon:"fas fa-luggage-cart",
        lastWeekValue:"",
        lastMonthValue:"",
    },
    {
        name:"successOrdersAmount",
        currentValue:"",
        title:"درآمد امروز",
        desc:"جمع مبالغ پرداختی (تومان)",
        icon:"fas fa-money-check-alt",
        lastWeekValue:"",
        lastMonthValue:"",
    },
]

const Cards = () => {
    const [cardInfos, setCardInfos] = useState(cardObjects)
    const [loading, setLoading] = useState(false)

    const handleGetCardInfos = async ()=>{
        setLoading(true)
        const res = await getOrdersStatisticsService();
        setLoading(false)
        if (res.status === 200) {
            const data = res.data.data
            let newCardObj = [...cardObjects]
            for (const key in data) {
                const index = newCardObj.findIndex(co=>co.name == key)
                newCardObj[index].currentValue = data[key].today
                newCardObj[index].lastWeekValue = data[key].thisWeek
                newCardObj[index].lastMonthValue = data[key].thisMonth
            }
            setCardInfos(newCardObj)
        }
    }

    useEffect(()=>{
        handleGetCardInfos()
    },[])

    return (
        <div className="row">
            {loading ? (<SpinnerLoad colorClass={"text-primary"}/>) 
            : cardInfos.map((cardInfo , index)=>(
                <Card key={index} {...cardInfo}/>
            ))}
        </div>
    );
}

export default Cards;