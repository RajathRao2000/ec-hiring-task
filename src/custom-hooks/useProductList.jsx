import { useEffect, useState } from "react";
import axios from "axios";
import API from "../utils/api";
import apiData from "../utils/temp";
import toastMsg from "../utils/DisplayToast";
function useProductList(token) {
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [error, setError] = useState("");
  if (error) {
    toastMsg("error", error);
  }
  useEffect(() => {
    setIsLoading(true);
    async function getProducts() {
      setIsLoading(true);
      if (import.meta.env.VITE_APIDATA !== "local") {
        try {
          const res = await axios.get(API.GET_PRODUCTS, {
            headers: {
              Authorization: `bearer ${token}`,
            },
          });

          setProductList(res.data);
        } catch (error) {
          console.log(error);
          setError(error);
        } finally {
          setIsLoading(false);
        }
      } else {
        console.log("from local");
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            setProductList(apiData);
            resolve(apiData);
          }, 1000);
        });
        setIsLoading(false);
      }
    }
    if (token) {
      getProducts();
    }
  }, [token]);
  return [productList, isLoading, error];
}

export default useProductList;
