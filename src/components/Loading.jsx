import { Transition } from "@headlessui/react";
import { HashLoader,RotateLoader} from "react-spinners";


const color = "#318CE7"

function Spinner({ loading } ) {
  return (
    <Transition
      show={loading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        className={`fixed flex bg-black bg-opacity-30 w-full h-screen top-0 left-0  flex-col items-center justify-center z-20 }`}
      >
        {/* <div className="w-12 h-12  inline-block border-4 border-solid border-sdprimary-300  rounded-full animate-spin border-t-transparent"></div> */}
        <RotateLoader
        color={color}
        margin = {2}
        loading={loading}
        // cssOverride={}
        size={10}
        speedMultiplier = {1}
     
      />
        <span className="font-light mt-8 text-white">Loading...</span>
      </div>
    </Transition>
  );
}

export default Spinner;