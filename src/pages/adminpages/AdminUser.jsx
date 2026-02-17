import { Table, Thead, Tbody, TbodyUser, TheadUser } from "@/components/admincomp/Table"
import { BiPencil } from "react-icons/bi"
import { BsFillTrashFill } from "react-icons/bs"

function Actions() {
  return (
    <div className="flex gap-5 text-right">
      <span><BiPencil /></span>
      <span><BsFillTrashFill /></span>
    </div>
  )
}

export default function AdminUser() {
  const dataUser = JSON.parse(localStorage.getItem("user_coffee_shop")) || []
  return (
    <>
      <Table>
        <TheadUser first="Image" second="Full Name" third="Phone" fourth="Address" fifth="Email" sixth="Action" />
        {dataUser.map((e, i) => (
          <TbodyUser key={i} first={e.image} second={e.name} third={e.phone} fourth={e.address} fifth={e.email}>
            <Actions />
          </TbodyUser>
        ))}
      </Table>
    </>
  )
}