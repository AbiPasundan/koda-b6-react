import { Edit3, FileText, Trash2 } from "lucide-react";

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
    // <thead className="[&>tr>td]:py-3 sm:[&>tr>td]:py-5 [&>tr>td]:px-2 bg-gray-50">
    //   <tr className="whitespace-nowrap font-medium">
    //     <td>
    //       <input type="checkbox" />
    //     </td>
    //     <td>{props.first}</td>
    //     <td>{props.second}</td>
    //     <td>{props.third}</td>
    //     <td>{props.fourth}</td>
    //     <td>{props.fifth}</td>
    //     <td>{props.sixth}</td>
    //   </tr>
    // </thead>
    <thead>
      <tr className="bg-white text-gray-600 text-sm border-b border-gray-200">
        <th className="p-4 w-12 text-center"><input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500" /></th>
        <th className="p-4 font-semibold">{props.image}</th>
        <th className="p-4 font-semibold">{props.full_name}</th>
        <th className="p-4 font-semibold">{props.phone}</th>
        <th className="p-4 font-semibold">{props.address}</th>
        <th className="p-4 font-semibold">{props.email}</th>
        <th className="p-4 font-semibold text-center">{props.action}</th>
      </tr>
    </thead>
  );
}


export function Tbody({ first, second, third, fourth, fifth, sixth, seventh, image, children }) {
  return (
    <tbody className="[&>tr>td]:py-3 sm:[&>tr>td]:py-5 [&>tr>td]:px-2">
      <tr className="border-t odd:bg-white even:bg-gray-100 whitespace-nowrap">
        <td>
          <input type="checkbox" />
        </td>
        <td> <img loading="lazy" src={image} alt="Gambar" /></td>
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
export function TbodyProduct({ first, second, third, fourth, fifth, sixth, seventh, children }) {
  return (
    <tbody className="[&>tr>td]:py-3 sm:[&>tr>td]:py-5 [&>tr>td]:px-2">
      <tr className="border-t odd:bg-white even:bg-gray-100 whitespace-nowrap">
        <td>
          <input type="checkbox" />
        </td>
        <td> <img loading="lazy" src={first} alt="Gambar" /></td>
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
export function TbodyUser(props) {
  return (
    <tbody className="[&>tr>td]:py-3 sm:[&>tr>td]:py-5 [&>tr>td]:px-2">
      {/* <tr className="border-t odd:bg-white even:bg-gray-100 whitespace-nowrap">
        <td>
          <input type="checkbox" />
        </td>
        <td> <img loading="lazy" src={first} alt="Gambar" width="100px" /></td>
        <td>{second}</td>
        <td>{third}</td>
        <td>{fourth}</td>
        <td>{fifth}</td>
        <td>{sixth}</td>
        <td>{children}</td>
      </tr> */}
      <tr className={`border-b border-gray-100 hover:bg-gray-100 transition-colors`}>
        <td className="p-4 text-center"><input type="checkbox" className="rounded text-orange-500 focus:ring-orange-500" /></td>
        <td className="p-4">
          <img src={props.image} alt={props.name} className="w-10 h-10 rounded-md object-cover" />
        </td>
        <td className="p-4">{props.name}</td>
        <td className="p-4 text-gray-600">{props.phone}</td>
        <td className="p-4 text-gray-600 text-sm max-w-xs">{props.address}</td>
        <td className="p-4 text-gray-600">{props.email}</td>
        <td className="p-4">
          <div className="flex items-center justify-center gap-2">
            <button className="p-1.5 bg-orange-50 text-orange-700 rounded hover:bg-orange-100"><FileText size={16} /></button>
            <button className="p-1.5 bg-orange-50 text-orange-500 rounded hover:bg-orange-100"><Edit3 size={16} /></button>
            <button className="p-1.5 bg-red-50 text-red-500 rounded hover:bg-red-100"><Trash2 size={16} /></button>
          </div>
        </td>
      </tr>
    </tbody>
  );
}


export function Table({ children }) {
  return (
    <div className="p-8 bg-white min-h-screen relative font-sans text-gray-800">
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          {children}
        </table>
        <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
        <p>Show 5 user of 100 user</p>
        <div className="flex items-center gap-3">
          <button className="hover:text-orange-500">Prev</button>
          <div className="flex gap-2">
            <button className="text-orange-500 font-medium">1</button>
            <button className="hover:text-orange-500">2</button>
            <button className="hover:text-orange-500">3</button>
            <button className="hover:text-orange-500">4</button>
            <button className="hover:text-orange-500">5</button>
            <span>...</span>
          </div>
          <button className="font-medium hover:text-orange-500">Next</button>
        </div>
      </div>
      </div>
    </div>
  );
}