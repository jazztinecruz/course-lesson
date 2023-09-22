import { Dispatch, SetStateAction } from "react";
import LoginForm from "./form";

type Props = {
  isOpen: boolean;
  setOpenLoginModal: Dispatch<SetStateAction<boolean>>;
};

const Login = ({ isOpen, setOpenLoginModal }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 backdrop-blur-sm z-50 bg-black/10">
      <div className="max-w-xl mx-auto">
        <LoginForm setOpenLoginModal={setOpenLoginModal} />
      </div>
    </div>
  );
};

export default Login;
