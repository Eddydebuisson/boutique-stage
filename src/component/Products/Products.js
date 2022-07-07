import './Products.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Products() {
    const [posts, setPosts] = useState(null);

    useEffect( () => {
        getAllData();
        }, []);
    
        const getAllData = () => {
        axios.get("http://localhost:3001/")
        .then(res => {
            const p = res.data;
            setPosts( p );
    })}
return (
    <div>
  
<ul class="product-list">
            {posts && posts.map( p => {
                return (
    <li class="product-item">
        <a href="" target="_blank" class="product-link">
            <figure class="product-info">
                <div class="product-info-img">
                    <img src="https://www.petit-bateau.fr/dw/image/v2/BCKL_PRD/on/demandware.static/-/Sites-PB_master/default/dw2d377f7a/PB/5625705F1.jpg?sw=1390&sh=1622&sm=fit" alt="description image"/>
                </div>
                <figcaption class="product-info-description">
                    <h2 class="title">{p.name}</h2>
                    <p class="description">{p.description}</p>
                </figcaption>
                <div class="price-box">
                    <div class="price">
                        <div>
                            <ins>{p.price_excl_tax} Є</ins>
                        </div>
                    </div>
                    <button href="#" class="btn btn-buy">Buy now <i class="fas fa-arrow-right"></i></button>
                </div>
            </figure>
        </a>
    </li>

                )
            })}
        </ul>
    </div>
    );
}
