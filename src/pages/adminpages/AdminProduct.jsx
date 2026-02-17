import { Table, Tbody, TbodyProduct, Thead } from "@/components/admincomp/Table";
import { ProductFetchContext } from "@/components/hook/ProductFetchContext";
import { useContext } from "react";
import { BiPencil } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";

function Actions() {
    return (
        <div className="flex gap-5 text-right">
            <span><BiPencil /></span>
            <span><BsFillTrashFill /></span>
        </div>
    )
}

export default function AdminProduct() {
    const { dataApi, isLoading, error } = useContext(ProductFetchContext);
    return (
        <>
            <Table>
                <Thead first="Images" second="Product Name" third="Price" fourth="Desc" fifth="Product Size" sixth="Method" seventh="Stock" eight="Action" />
                {dataApi.map(e => (
                    <TbodyProduct key={e.id} first={e.image} second={e.name} third={e.newPrice.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 })} fourth={e.description} fifth={e.size.join(", ")} sixth="Method" seventh={e.stock} eight="Action">
                        <Actions />
                    </TbodyProduct>
                ))}
            </Table>
        </>
    )
}