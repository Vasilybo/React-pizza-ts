import React, {useEffect, useState, useContext} from 'react';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios"

import Categories from "../components/Categories";
import SortBy from "../components/SortBy";
import SkeletonLoader from "../components/PizzaBlock/SkeletonLoader";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { setActiveCategory, setCurrentPage } from "../redux/slices/filterSlice";

const Home = () => {

    const { activeCategory, sort, currentPage } = useSelector((state) => state.filter)
    const selectedSort = sort.sortProperty
    const dispatch = useDispatch()

    const { searchValue } = useContext(SearchContext)
    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const search = searchValue ? `&search=${searchValue}` : ''

    const onClickCategory = (id) => {
        dispatch(setActiveCategory(id))
    }

    const onChangePage = (number) => {
        dispatch(setCurrentPage(number))
    }

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://632c28bf5568d3cad87e6524.mockapi.io/pizzas?page=${currentPage}&limit=4&${activeCategory > 0
            ? `category=${activeCategory}`
            : ''}&sortBy=${selectedSort.sort}&order=asc${search}`)
            .then((response) => {
                    setPizzas(response.data)
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
            id={obj.id}
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
            <SortBy />
        </div>
    <h2 className="content__title">Все пиццы</h2>
    <div className="content__items">
        {isLoading
            ? skeleton
            : items}
    </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    );
};

export default Home;