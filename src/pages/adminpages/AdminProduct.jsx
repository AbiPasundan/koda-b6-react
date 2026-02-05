import { useEffect, useState } from "react";


export default function AdminProduct() {
    const [dataApi, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function getData() {
            try {
                const api = await fetch("https://raw.githubusercontent.com/AbiPasundan/koda-b6-react/refs/heads/main/public/data.json")
                // console.log(api)
                const { menu } = await api.json()
                setData(menu)
                dataApi(menu)
                // console.log(menu)
                // console.log(menu[0].name)
                // console.log(menu[0].image)
                setIsLoading(false);
            } catch (error) {
                setError(error.message);
                setIsLoading(false);
            }
        }
        getData()
    }, [])
    return (
        <>
            <div className="flex flex-col my-10 border p-5">
                <table className="border border-red-100 [&>thead>tr]:p-5 [&>tbody>tr]:p-5 ">
                    <thead className=" [&>tr>td]:py-5 [&>tr>td]:px-2 ">
                        <tr className="">
                            <td>
                                <input type="checkbox" name="check" id="check" />
                            </td>
                            <td>
                                <span>Image</span>
                            </td>
                            <td>
                                <span>Product Name</span>
                            </td>
                            <td>
                                <span>Price</span>
                            </td>
                            <td>
                                <span>Desc</span>
                            </td>
                            <td>
                                <span>Product Size</span>
                            </td>
                            <td>
                                <span>Method</span>
                            </td>
                            <td>
                                <span>Stock</span>
                            </td>
                            <td>
                                <span>Action</span>
                            </td>
                        </tr>
                    </thead>
                    <tbody className=" [&>tr>td]:py-5 [&>tr>td]:px-2 ">
                        {dataApi.map((data, i) => (
                            <tr key={i} className="border-t odd:bg-white [&>td>span]:max-w-50 even:bg-gray-100">
                                <td>
                                    <input type="checkbox" name="check" id="check" />
                                </td>
                                <td>
                                    <span><img src={data.image} width="100" alt="Image" /></span>
                                </td>
                                <td>
                                    <span>{data.name}</span>
                                </td>
                                <td>
                                    <span>{data.newPrice}</span>
                                </td>
                                <td>
                                    <span>{data.description}</span>
                                </td>
                                <td>
                                    <span>R,L,M</span>
                                </td>
                                <td>
                                    <span>Delivery, Dine In </span>
                                </td>
                                <td>
                                    <span>300</span>
                                </td>
                                <td>
                                    <span>Edit</span>
                                    <span>Hapus</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className="[&>tr>td]:py-5 [&>tr>td]:px-2 ">
                        <tr>
                            <td>
                                <input type="checkbox" name="check" id="check" />
                            </td>
                            <td>
                                <span>Image</span>
                            </td>
                            <td>
                                <span>Product Name</span>
                            </td>
                            <td>
                                <span>Price</span>
                            </td>
                            <td>
                                <span>Desc</span>
                            </td>
                            <td>
                                <span>Product Size</span>
                            </td>
                            <td>
                                <span>Method</span>
                            </td>
                            <td>
                                <span>Stock</span>
                            </td>
                            <td>
                                <span>Action</span>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}