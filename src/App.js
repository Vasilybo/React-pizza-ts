import {useEffect, useState} from "react";

import './scss/app.scss'
import Header from './components/Header'
import Categories from './components/Categories'
import SortBy from './components/SortBy'
import PizzaBlock from "./components/PizzaBlock";



function App() {

    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        fetch('https://632c28bf5568d3cad87e6524.mockapi.io/pizzas').then(response => {
            return response.json()
        }).then(json => {
            setPizzas(json)
        })
    }, [])

  return (
      <div className="wrapper">
          <Header/>
          <div className="content">
              <div className="container">
                  <div className="content__top">
                      <Categories/>
                      <SortBy/>
                  </div>
                  <h2 className="content__title">Все пиццы</h2>
                  <div className="content__items">
                      {pizzas.map((obj) => (
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
          </div>
      </div>
  );
}

export default App;
