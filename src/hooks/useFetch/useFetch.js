import axios from 'axios';
import {useState, useEffect, useCallback} from 'react';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const {data: responseData} = await axios.get(url);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }, [url]);

  return {error, loading, data};
};

export default useFetch;
