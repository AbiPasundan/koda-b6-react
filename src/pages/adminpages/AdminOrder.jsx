import { BsFillTrashFill } from "react-icons/bs"; 
import { BiPencil } from "react-icons/bi"; 
import { CgNotes } from "react-icons/cg"; 
import { Table, Thead, Tbody } from "@/components/admincomp/Table"

function Actions() {
  return (
    <div className="flex gap-5 text-right">
      <span><CgNotes /></span>
      <span><BiPencil /></span>
      <span><BsFillTrashFill /></span>
    </div>
  )
}

export default function AdminOrder() {
  const data = JSON.parse(localStorage.getItem("orders")) || [];
  console.log(data);

  return (
    <>
      <Table>
        <Thead first="No. Order" second="Date" third="Order" fourth="Status" fifth="Total" sixth="Action" />
        {data.map((data, i) => (
          <Tbody key={i} first={data.no} second={data.date} third={data.cart.map(c => c. product.name).join(", ")} fourth={data.status} fifth="Total" >
            <Actions />
          </Tbody>
        ))}

      </Table>
    </>
  )
}