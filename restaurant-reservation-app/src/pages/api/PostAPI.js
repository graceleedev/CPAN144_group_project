//SECTION 5: APIs AND DATA FETCHING
import React, { useEffect, useState } from "react";

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
                {data.slice(0, 10).map((data) => (
                <li key={data.id}>{data.body}</li>
                ))}
            </ul>
        </div>
    );
}