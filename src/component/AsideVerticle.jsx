import { FaManatSign } from "react-icons/fa6";
import { menuItems } from "../contens";

const AsideVerticle = () => {

    return (
      // <div className="fixed h-full w-3 z-50 right-32 top-[30px] ">
      //       <div className={ `w-full h-[50em] bg-gradient-to-br from-black to-gray-700 rounded-md flex flex-col gap-y-[9em] items-center` }>
      //           {
      //               menuItems.map( ( h, i ) => {
      //                   return (
      //                     <div className="w-1 h-1 bg-yellow-300 rounded-full p-1 cursor-pointer animate-pulse" key={h.label}><a href={h.href}></a></div>
      //                   );
      //               })
      //           }
      //   </div>
      // </div>
      <div className="w-full h-full bg-yellow-500">
        <div className=" rounded-md outline w-44 h-72 outline-white/50 fixed top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <div className="absolute bg-blue-400 w-3 h-full right-0 animate-pulse "></div>
          <div className="bg-gradient-to-br from-white to-gray-50 absolute w-3 h-full right-2 rounded-tr-md rounded-br-md "></div>
          <div className="flex justify-center h-full w-full">
            <div className="bg-yellow-300 w-full flex justify-center">
              <div className="flex justify-center items-center bg-gray-600 h-36 ">
                <div className=" bg-white"> ds</div>
              </div>
            </div>
            <div className="bg-gray-400 w-full">s</div>
          </div>
          <div></div>
        </div>
      </div>
    );
}
export default AsideVerticle;