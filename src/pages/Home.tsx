import React, { useEffect } from 'react';
import {useSelector} from "react-redux";

import Categories from "../components/Categories";
import SortBy from "../components/SortBy";
import SkeletonLoader from "../components/PizzaBlock/SkeletonLoader";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";
import {filterSelector, setActiveCategory, setCurrentPage} from "../redux/slices/filterSlice";
import {fetchPizzas, pizzasSelector} from "../redux/slices/pizzasSlice";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../redux/store";

const Home = () => {

    const {activeCategory, sort, currentPage, searchValue} = useSelector(filterSelector)
    const {items, status} = useSelector(pizzasSelector)
    const selectedSort = sort.sortProperty
    const dispatch = useAppDispatch()

    const search = searchValue ? `&search=${searchValue}` : ''

    const onClickCategory = (id: number) => {
        dispatch(setActiveCategory(id))
    }

    const onChangePage = (number: number) => {
        dispatch(setCurrentPage(number))
    }

    const getPizzas = async () => {
        dispatch(
            fetchPizzas({
            currentPage,
            activeCategory,
                // @ts-ignore
            selectedSort,
                // @ts-ignore
            search,
        }))
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        getPizzas()
    }, [activeCategory, selectedSort, search, currentPage])

    const pizzas = items.map((obj: any) => (
        <Link to={`/pizza/${obj.id}`}
              key={obj + obj.name}>
            <PizzaBlock
                name={obj.name}
                price={obj.price}
                imageUrl={obj.imageUrl}
                id={obj.id}
                sizes={obj.sizes}
                types={obj.types}
            />
        </Link>
    ))

    const skeleton = [...new Array(6)].map((_, index) => <SkeletonLoader key={index}/>)

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    value={activeCategory}
                    onClickCategory={onClickCategory}/>
                <SortBy/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {
                status === 'error'
                    ? (<div className="content__error-info">
                        <h2>Произошла ошибка 😕</h2>
                        <p>К сожалению, не удалось получить пиццы. Попробуйте повторить попытку позже. </p>
                    </div>)
                    : (<div className="content__items">
                        {status === 'loading'
                            ? skeleton
                            : pizzas}
                    </div>)
            }
            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    );
};

export default Home;