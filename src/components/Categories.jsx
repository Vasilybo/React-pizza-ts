import React, {useState} from 'react';

function Categories() {
    const [activeCategory, setActiveCategory] = useState(0)

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]

    const onClickCategory = (index) => {
        setActiveCategory(index)
    }
    return (
        <div className="categories">
            <ul>
                {categories.map((cate, index) => (
                    <li
                        onClick={() => onClickCategory(index)}
                        className={activeCategory === index ? 'active' : ''}
                    >{cate}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;