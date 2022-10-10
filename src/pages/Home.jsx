import React, {useEffect, useState} from 'react';

import Categories from "../components/Categories";
import SortBy from "../components/SortBy";
import SkeletonLoader from "../components/PizzaBlock/SkeletonLoader";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";

const Home = ({ searchValue }) => {
    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const [activeCategory, setActiveCategory] = useState(0)
    const [selectedSort, setSelectedSort] = useState({
        name: 'популярности', sort: 'rating'
    })
    const search = searchValue ? `&search=${searchValue}` : ''

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://632c28bf5568d3cad87e6524.mockapi.io/pizzas?${activeCategory > 0
            ? `category=${activeCategory}`
            : ''}&sortBy=${selectedSort.sort}&order=asc${search}`)
            .then(response => {return response.json()})
            .then(json => {
            setPizzas(json)
            setIsLoading(false)
        })
        window.scrollTo(0, 0)
    }, [activeCategory, selectedSort, search])

     const items = pizzas
         // .filter(obj => {
         // return !!obj.name.toLowerCase().includes(searchValue.toLowerCase());})
         .map((obj) => (
        <PizzaBlock
            key={obj + obj.name}
            name={obj.name}
            price={obj.price}
            imageUrl={obj.imageUrl}
            sizes={obj.sizes}
            types={obj.types}
        />
    ))

    const skeleton = [...new Array(6)].map((_, index) => <SkeletonLoader key={index}/>)

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
            ? skeleton
            : items}
    </div>
            <Pagination />
        </div>
    );
};

export default Home;