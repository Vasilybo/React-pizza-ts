import React, {useEffect, useState} from 'react';

import Categories from "../components/Categories";
import SortBy from "../components/SortBy";
import SkeletonLoader from "../components/PizzaBlock/SkeletonLoader";
import PizzaBlock from "../components/PizzaBlock";

const Home = () => {
    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://632c28bf5568d3cad87e6524.mockapi.io/pizzas').then(response => {
            return response.json()
        }).then(json => {
            setPizzas(json)
            setIsLoading(false)
        })
    }, [])
    return (
        <>
        <div className="content__top">
            <Categories/>
            <SortBy/>
        </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
        {isLoading
            ? [...new Array(6)].map((_, index) => <SkeletonLoader key={index}/>)
            : pizzas.map((obj) => (
                <PizzaBlock
                    key={obj + obj.name}
                    name={obj.name}
                    price={obj.price}
                    imageUrl={obj.imageUrl}
                    sizes={obj.sizes}
                    types={obj.types}
                />
            ))}
    </div>
        </>
    );
};

export default Home;