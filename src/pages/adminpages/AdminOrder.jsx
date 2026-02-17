import { Table, Thead, Tbody } from "@/components/admincomp/Table"
import { useEffect, useState } from "react";


export default function AdminOrder() {
  // const [dataApi, setData] = useState([]);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);
  const data = JSON.parse(localStorage.getItem("orders")) || [];
  console.log(data);

  return (
    <>
      <Table>
        <Thead first="No. Order" second="Date" third="Order" fourth="Status" fifth="Total" sixth="Action" />
        {data.map((data, i) => (
          <Tbody
            key={i}
            first={data.no}
            second={data.date}
            third={data.cart.map(c => c.product.name).join(", ")}
            fourth={data.status}
            fifth="Total"
            sixth="Action"
          />
        ))}

      </Table>
    </>
  )
}