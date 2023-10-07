import LoginForm from "./form";

const Login = ({ isOpen, setOpenLoginModal }) => {
  if (!isOpen) return null;

  return (
    <div
      onClick={() => setOpenLoginModal(false)}
      className="fixed inset-0 backdrop-blur-sm z-50 bg-black/20 flex items-center justify-center">
      <LoginForm setOpenLoginModal={setOpenLoginModal} />
    </div>
  );
};

export default Login;
