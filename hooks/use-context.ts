import { Context } from "@/contexts/context-provider";
import { useContext } from "react";

const useMyContext = () => {
  return useContext(Context);
};

export default useMyContext;
