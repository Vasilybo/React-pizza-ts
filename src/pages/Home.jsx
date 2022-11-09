import React, {useEffect, useState, useContext} from 'react';
import { useSelector, useDispatch } from "react-redux";

import Categories from "../components/Categories";
import SortBy from "../components/SortBy";
import SkeletonLoader from "../components/PizzaBlock/SkeletonLoader";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { setActiveCategory } from "../redux/slices/filterSlice";

const Home = () => {

    const activeCategory = useSelector((state) => state.filter.activeCategory)
    const dispatch = useDispatch()

    const { searchValue } = useContext(SearchContext)
    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedSort, setSelectedSort] = useState({
        name: 'популярности', sort: 'rating'
    })
    const search = searchValue ? `&search=${searchValue}` : ''

    const onClickCategory = (id) => {
        dispatch(setActiveCategory(id))
    }

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://632c28bf5568d3cad87e6524.mockapi.io/pizzas?page=${currentPage}&limit=4&${activeCategory > 0
            ? `category=${activeCategory}`
            : ''}&sortBy=${selectedSort.sort}&order=asc${search}`)
            .then(response => {return response.json()})
            .then(json => {
            setPizzas(json)
            setIsLoading(false)
        })
        window.scrollTo(0, 0)
    }, [activeCategory, selectedSort, search, currentPage])

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
                onClickCategory={onClickCategory} />
            <SortBy value={selectedSort}
                    onClickSortBy={(index) => setSelectedSort(index)} />
        </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
        {isLoading
            ? skeleton
            : items}
    </div>
            <Pagination onChangePage={number => setCurrentPage(number)}/>
        </div>
    );
};

export default Home;