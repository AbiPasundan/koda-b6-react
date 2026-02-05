import { createContext, useState } from 'react';

export const DataFetchContext = createContext();

export const DataFetch = ({ children }) => {
  const [dataApi, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const api = await fetch("https://raw.githubusercontent.com/AbiPasundan/koda-b6-react/refs/heads/main/public/data.json")
        const response = await api.json()
        setData(response.data)
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    }
    getData()
  }, [])

  return (
    <DataFetchContext.Provider value={{ dataApi, isLoading, error }} >
      {children}
    </DataFetchContext.Provider>
  );
}