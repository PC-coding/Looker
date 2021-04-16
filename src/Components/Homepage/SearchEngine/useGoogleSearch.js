import React from 'react';
import API_KEY from '../keys';

const CONTEXT_KEY = '453e1b921e389719c';

const useGoogleSearch = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            fetch(
                `https://googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
        }
    }, [term])

    return { data}
}

export default useGoogleSearch
