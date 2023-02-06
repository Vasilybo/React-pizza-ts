import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const FullPizza = () => {

    const [pizza, setPizza] = useState()
    const { id } = useParams()

    return (
        <div className="container">
            <img src=""/>
            <h2>{id}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet corporis culpa dolores fugit quidem ut. Aliquid dolor est ex illo mollitia nesciunt quasi quos tenetur voluptatum. Nihil, unde, ut.</p>
            <h4>250</h4>
        </div>
    );
};

export default FullPizza;