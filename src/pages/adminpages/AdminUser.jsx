import { Table, Thead, Tbody } from "@/components/admincomp/Table"
import { useEffect, useState } from "react";

export default function AdminUser() {
    const [dataApi, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      async function getData() {
        try {
          const api = await fetch(
            "https://raw.githubusercontent.com/AbiPasundan/koda-b6-react/refs/heads/main/public/data.json",
          );
          console.log(api);
          const { menu } = await api.json();
          setData(menu);
          dataApi(menu);
          console.log(menu);
          console.log(menu[0].name);
          console.log(menu[0].image);
          setIsLoading(false);
        } catch (error) {
          setError(error.message);
          setIsLoading(false);
        }
      }
      getData();
    }, []);
    return (
        <>
            <Table>
                <Thead first="No. Order" second="Date" third="Order" fourth="Status" fifth="Total" />
                {dataApi.map((data, i) => (
                    <Tbody key={i} first={data} second="Date" third="Order" fourth="Status" fifth="Total" />
                ))}
            </Table>
        </>
    )
}