import { useContext, useEffect } from "react";
import toast, { Toaster as HotToaster } from "react-hot-toast";
import { CommonContext } from "../contens";

const Toaster = () => {
  const { closeToster, setToster } = useContext(CommonContext);
  const { Message, variant, close } = closeToster;

  useEffect(() => {
    if (close && Message) {
      if (variant === "success") toast.success(Message);
      else toast.error(Message);

      // Auto-reset toaster state after showing
      setTimeout(() => {
        setToster({ Message: "", close: false, variant: "success" });
      }, 9000); // Adjust time as needed
    }
  }, [close, Message, variant, setToster]);

  return <HotToaster position="top-right" />;
};

export default Toaster;
