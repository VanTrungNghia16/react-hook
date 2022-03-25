import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // ComponentDidmount
  useEffect(async () => {
    try {
      async function fetchData() {
        let res = await axios.get(url);
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0) {
          data.map((item) => {
            return (item.Date = moment(item.Date).format("DD/MM/YYYY"));
          });

          data = data.reverse();
        }
        // console.log(">>> Check data:", data);
        setData(data); // data params data
        setIsLoading(false);
        setIsError(false);
      }
      fetchData();
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
    }
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useFetch;
