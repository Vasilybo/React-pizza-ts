import React, {useEffect, useState} from 'react';

import Categories from "../components/Categories";
import SortBy from "../components/SortBy";
import SkeletonLoader from "../components/PizzaBlock/SkeletonLoader";
import PizzaBlock from "../components/PizzaBlock";

const Home = () => {
    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [activeCategory, setActiveCategory] = useState(0)
    const [selectedSort, setSelectedSort] = useState({
        name: 'популярности', sort: 'rating'
    })

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://632c28bf5568d3cad87e6524.mockapi.io/pizzas?${activeCategory > 0
            ? `category=${activeCategory}`
            : ''}&sortBy=${selectedSort.sort}&order=asc`)
            .then(response => {return response.json()})
            .then(json => {
            setPizzas(json)
            setIsLoading(false)
        })
        window.scrollTo(0, 0)
    }, [activeCategory, selectedSort])
    return (
        <div className="container">
        <div className="content__top">
            <Categories
                value={activeCategory}
                onClickCategory={(index) => setActiveCategory(index)} />
            <SortBy value={selectedSort}
                    onClickSortBy={(index) => setSelectedSort(index)} />
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
        </div>
    );
};

export default Home;