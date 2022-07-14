import "./ThisProduct.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ThisProduct() {
    const { name } = useParams();
    const [post, setPost] = useState(null);

    useEffect( () => {
        getAllData();
        }, []);
    
        const getAllData = () => {
        axios.get("http://localhost:3001/")
        .then(res => {
            const p = res.data;
            setPost( p );
    })}
    return (
        <div className="thisProduct">
            <section className="sectionThisProduct">
            {post.map((p) => { p.name === name
                return (
                    <article className="articleThisProduct" key={p.Id_product}>
                        <h3>{ p.name }</h3>
                        <p>{ p.description }</p>
                        <p>{p.price_excl_tax}</p>
                    </article>
                )
            })}
            </section>
        </div>
    )
}