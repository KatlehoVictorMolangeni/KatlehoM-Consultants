// src/DataFetch.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetch = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/api/register')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <h1>Data from MySQL</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{JSON.stringify(item)}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataFetch;

