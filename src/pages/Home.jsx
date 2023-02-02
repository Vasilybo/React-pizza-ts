import React, {useEffect, useContext} from 'react';
import { useSelector, useDispatch } from "react-redux";

import Categories from "../components/Categories";
import SortBy from "../components/SortBy";
import SkeletonLoader from "../components/PizzaBlock/SkeletonLoader";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { setActiveCategory, setCurrentPage } from "../redux/slices/filterSlice";
import { fetchPizzas } from "../redux/slices/pizzasSlice";

const Home = () => {

    const { activeCategory, sort, currentPage } = useSelector((state) => state.filter)
    const { pizzas, status } = useSelector((state) => state.pizzas.items)
    const selectedSort = sort.sortProperty
    const dispatch = useDispatch()

    const { searchValue } = useContext(SearchContext)
    const search = searchValue ? `&search=${searchValue}` : ''

    const onClickCategory = (id) => {
        dispatch(setActiveCategory(id))
    }

    const onChangePage = (number) => {
        dispatch(setCurrentPage(number))
    }

    const getPizzas = async () => {
            dispatch(fetchPizzas({
                currentPage,
                activeCategory,
                selectedSort,
                search,
            }))
        window.scrollTo(0, 0)
    }

    useEffect( () => {
        getPizzas() }, [activeCategory, selectedSort, search, currentPage])

     const items = pizzas.map((obj) => (
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
        {status === 'loading'
            ? skeleton
            : items}
    </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    );
};

export default Home;