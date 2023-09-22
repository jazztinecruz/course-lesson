import { Dispatch, SetStateAction } from "react";
import LoginForm from "./form";

type Props = {
  isOpen: boolean;
  setOpenLoginModal: Dispatch<SetStateAction<boolean>>;
};

const Login = ({ isOpen, setOpenLoginModal }: Props) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={() => setOpenLoginModal(false)}
      className="absolute inset-0 backdrop-blur-sm z-50 bg-black/10 flex items-center justify-center">
      <LoginForm setOpenLoginModal={setOpenLoginModal} />
    </div>
  );
};

export default Login;
