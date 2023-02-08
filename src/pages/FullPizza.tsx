import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const FullPizza = () => {

    const [pizza, setPizza] = useState<{
        imageUrl: string
        name: string
        price: number
    }>()
    const { id } = useParams()

    useEffect(() => {
        async function fetchPizza() {
            try {
                const {data} = await axios.get('https://632c28bf5568d3cad87e6524.mockapi.io/pizzas/' + id)
                setPizza(data)
            } catch (error) {
                alert('Ошибка при получении пиццы')
            }
        }
        fetchPizza()
    }, [id])

    if (!pizza) {
        return <>'Загрузка...'</>
    }

    return (
        <div className="container">
            <img src={pizza.imageUrl}/>
            <h2>{pizza.name}</h2>
            <h4>{pizza.price} ₽</h4>
        </div>
    );
};

export default FullPizza;