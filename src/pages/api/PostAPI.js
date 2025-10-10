import React, { useEffect, useState } from "react";
import styles from "../../styles/Post.module.css"

export default function PostAPI() {
    const [ data, setData ] = useState([]);
    //fetches data from a public API
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error)); //error handling

    },[]);
    return (
        <div>
            <ul>
                {data.slice(0, 10).map((data, index) => {
                    const randomStars = Math.floor(Math.random() * 5) + 1; // 1 to 5
                    return (
                    <li key={data.id} className={styles.li}>
                        <strong>User {index + 1} </strong>
                        {"⭐".repeat(randomStars)}<br/><br/>
                        {data.body}
                    </li>
                    );
                })}
            </ul>
        </div>
    );
}