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
      </tr>
    </thead>
  );
}


export function Tbody(props) {
  return (
    <tbody className="[&>tr>td]:py-3 sm:[&>tr>td]:py-5 [&>tr>td]:px-2">
      <tr className="border-t odd:bg-white even:bg-gray-100 whitespace-nowrap">
        <td>
          <input type="checkbox" />
        </td>

        <td>
          <img
            src={props.first}
            className="w-[60px] sm:w-[80px] md:w-[100px] rounded"
            alt="Image"
          />
        </td>

        <td>{props.second}</td>
        <td>{props.third}</td>
        <td>{props.fourth}</td>
        <td>R,L,M</td>
        <td>Delivery, Dine In</td>
      </tr>
    </tbody>
  );
}


export function Table({ children }) {
  return (
    <div className="my-10 border p-5 max-w-[90%]">
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-[900px] border border-red-100 text-sm">
          {children}
        </table>
      </div>
    </div>
  );
}

