export function Thead(props) {
  return (
    <thead className=" [&>tr>td]:py-5 [&>tr>td]:px-2 ">
      <tr className="">
        <td>
          <input type="checkbox" name="check" id="check" />
        </td>
        <td>
          <span>{props.first}</span>
        </td>
        <td>
          <span>{props.second}</span>
        </td>
        <td>
          <span>{props.third}</span>
        </td>
        <td>
          <span>{props.fourth}</span>
        </td>
        <td>
          <span>{props.fifth}</span>
        </td>
        <td>
          <span>{props.sixth}</span>
        </td>
        <td>
          <span>{props.seventh}</span>
        </td>
      </tr>
    </thead>
  );
}

export function Tbody(props) {
//   const [dataApi, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     async function getData() {
//       try {
//         const api = await fetch(
//           "https://raw.githubusercontent.com/AbiPasundan/koda-b6-react/refs/heads/main/public/data.json",
//         );
//         console.log(api);
//         const { menu } = await api.json();
//         setData(menu);
//         dataApi(menu);
//         console.log(menu);
//         console.log(menu[0].name);
//         console.log(menu[0].image);
//         setIsLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setIsLoading(false);
//       }
//     }
//     getData();
//   }, []);
  return (
    <tbody className=" [&>tr>td]:py-5 [&>tr>td]:px-2 ">
      {/* {dataApi.map((data) => ( */}
        <tr className="border-t-1 odd:bg-white even:bg-gray-100">
          <td>
            <input type="checkbox" name="check" id="check" />
          </td>
          <td className="max-w-[200px]">
            <span>
              <img src={props.first} width="100" alt="Image" />
            </span>
          </td>
          <td className="max-w-[200px]">
            <span>{props.second}</span>
          </td>
          <td className="max-w-[200px]">
            <span>{props.third}</span>
          </td>
          <td className="max-w-[200px]">
            <span>{props.fourth}</span>
          </td>
          <td className="max-w-[200px]">
            <span>R,L,M</span>
          </td>
          <td className="max-w-[200px]">
            <span>Delivery, Dine In </span>
          </td>
        </tr>
      {/* ))} */}
    </tbody>
  );
}

export function Table({children}) {
  return (
    <div className="flex flex-col my-10 border p-5">
        <table className=" border border-red-100 [&>thead>tr]:p-5 [&>tbody>tr]:p-5 ">
        {/* <thead className=" [&>tr>td]:py-5 [&>tr>td]:px-2 ">
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
            {dataApi.map((data) => (
            <tr className="border-t-1 odd:bg-white even:bg-gray-100">
                <td>
                <input type="checkbox" name="check" id="check" />
                </td>
                <td className="max-w-[200px]">
                <span>
                    <img src={data.image} width="100" alt="Image" />
                </span>
                </td>
                <td className="max-w-[200px]">
                <span>{data.name}</span>
                </td>
                <td className="max-w-[200px]">
                <span>{data.newPrice}</span>
                </td>
                <td className="max-w-[200px]">
                <span>{data.description}</span>
                </td>
                <td className="max-w-[200px]">
                <span>R,L,M</span>
                </td>
                <td className="max-w-[200px]">
                <span>Delivery, Dine In </span>
                </td>
                <td className="max-w-[200px]">
                <span>300</span>
                </td>
                <td className="max-w-[200px]">
                <span>Edit</span>
                <span>Hapus</span>
                </td>
            </tr>
            ))}
        </tbody> */}
        {children}
        {/* <tfoot className=" [&>tr>td]:py-5 [&>tr>td]:px-2 ">
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
        </tfoot> */}
        </table>
    </div>
  );
}
