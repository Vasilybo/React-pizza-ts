
function Categories({ value, onClickCategory }) {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]


    return (
        <div className="categories">
            <ul>
                {categories.map((cate, index) => (
                    <li
                        key={cate + index}
                        onClick={() => onClickCategory(index)}
                        className={value === index ? 'active' : ''}
                    >{cate}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;