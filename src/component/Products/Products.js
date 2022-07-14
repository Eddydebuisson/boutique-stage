import './Products.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

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
        <ul>
            {posts && posts.map( p => {
                return (
                    <li key={p.Id_product}>
                        <h2><Link to={p.name}>{p.name}</Link></h2>
                        <p>{p.description}</p>
                    </li>
                )
            })}
        </ul>
    </div>
    );
}
