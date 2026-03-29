import { Table, Thead, Tbody, TbodyUser, TheadUser } from "@/components/admincomp/Table"
import TableList from "@/components/admincomp/TableList"
import { useGetUsersQuery } from "@/feature/api"
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
  // const dataUser = JSON.parse(localStorage.getItem("user_coffee_shop")) || []
  // const { data, isLoading, error } =  useGetUsersQuery()
  // const users = data || []
  // console.log(data);
  // users.forEach(e => {
  //   console.log(e.Full_Name);
  // });
  
  return (
    <>
      {/* <Table> */}
        {/* <TheadUser image="Image" full_name="Full Name" phone="Phone" address="Address" email="Email" action="Action" /> */}
        {/* {users.map((e, i) => (
          <TbodyUser key={i} image={e.image ?? "https://ui-avatars.com/api/?name=User+Admin&background=random"} name={e.Full_Name || "Nama Masih Kosong"} phone={e.Phone || "Phone Masih Kosong"} address={e.Address ?? "Address Masih Kosong"} email={e.Email ?? "Email Masih Kosong"}>
            <Actions />
          </TbodyUser>
        ))} */}
        <TableList></TableList>
      {/* </Table> */}
    </>
  )
}