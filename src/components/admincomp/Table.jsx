export function Thead(props) {
  return (
    <thead className="[&>tr>td]:py-3 sm:[&>tr>td]:py-5 [&>tr>td]:px-2 bg-gray-50">
      <tr className="whitespace-nowrap font-medium">
        <td>
          <input type="checkbox" />
        </td>
        <td>{props.first}</td>
        <td>{props.second}</td>
        <td>{props.third}</td>
        <td>{props.fourth}</td>
        <td>{props.fifth}</td>
        <td>{props.sixth}</td>
        <td>{props.seventh}</td>
        <td>{props.eight}</td>
      </tr>
    </thead>
  );
}

export function TheadProduct(props) {
  return (
    <thead className="[&>tr>td]:py-3 sm:[&>tr>td]:py-5 [&>tr>td]:px-2 bg-gray-50">
      <tr className="whitespace-nowrap font-medium">
        <td>
          <input type="checkbox" />
        </td>
        <td>{props.first}</td>
        <td>{props.second}</td>
        <td>{props.third}</td>
        <td>{props.fourth}</td>
        <td>{props.fifth}</td>
        <td>{props.sixth}</td>
        <td>{props.seventh}</td>
        <td>{props.eight}</td>
      </tr>
    </thead>
  );
}
export function TheadUser(props) {
  return (
    <thead className="[&>tr>td]:py-3 sm:[&>tr>td]:py-5 [&>tr>td]:px-2 bg-gray-50">
      <tr className="whitespace-nowrap font-medium">
        <td>
          <input type="checkbox" />
        </td>
        <td>{props.first}</td>
        <td>{props.second}</td>
        <td>{props.third}</td>
        <td>{props.fourth}</td>
        <td>{props.fifth}</td>
        <td>{props.sixth}</td>
      </tr>
    </thead>
  );
}


export function Tbody({first, second, third, fourth, fifth, sixth, seventh, image, children}) {
  return (
    <tbody className="[&>tr>td]:py-3 sm:[&>tr>td]:py-5 [&>tr>td]:px-2">
      <tr className="border-t odd:bg-white even:bg-gray-100 whitespace-nowrap">
        <td>
          <input type="checkbox" />
        </td>
        <td> <img src={image} alt="Gambar" /></td>
        <td>{first}</td>
        <td>{second}</td>
        <td>{third}</td>
        <td>{fourth}</td>
        <td>{fifth}</td>
        <td>{sixth}</td>
        <td>{seventh}</td>
        <td>{children}</td>
      </tr>
    </tbody>
  );
}
export function TbodyProduct({first, second, third, fourth, fifth, sixth, seventh, children}) {
  return (
    <tbody className="[&>tr>td]:py-3 sm:[&>tr>td]:py-5 [&>tr>td]:px-2">
      <tr className="border-t odd:bg-white even:bg-gray-100 whitespace-nowrap">
        <td>
          <input type="checkbox" />
        </td>
        <td> <img src={first} alt="Gambar" /></td>
        <td>{second}</td>
        <td>{third}</td>
        <td>{fourth.length > 50 ? fourth.slice(0, 50) + "..." : fourth}</td>
        <td>{fifth}</td>
        <td>{sixth}</td>
        <td>{seventh}</td>
        <td>{children}</td>
      </tr>
    </tbody>
  );
}
export function TbodyUser({first, second, third, fourth, fifth, sixth,children}) {
  return (
    <tbody className="[&>tr>td]:py-3 sm:[&>tr>td]:py-5 [&>tr>td]:px-2">
      <tr className="border-t odd:bg-white even:bg-gray-100 whitespace-nowrap">
        <td>
          <input type="checkbox" />
        </td>
        <td> <img src={first} alt="Gambar" width="100px" /></td>
        <td>{second}</td>
        <td>{third}</td>
        <td>{fourth}</td>
        <td>{fifth}</td>
        <td>{sixth}</td>
        <td>{children}</td>
      </tr>
    </tbody>
  );
}


export function Table({ children }) {
  return (
    <div className="my-10 border p-5 max-w-[90%]">
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-225 border border-red-100 text-sm">
          {children}
        </table>
      </div>
    </div>
  );
}