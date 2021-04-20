import React, { useState, useEffect } from 'react';
import API_KEY from '../keys';

const CONTEXT_KEY = '453e1b921e389719c';

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }
        
        fetchData();
    }, [term])

    return { data }
}

export default useGoogleSearch
