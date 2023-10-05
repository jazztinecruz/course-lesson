import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="space-y-4">
      <Link href="/directory" className="hover:underline text-sm text-gray-500">
        Back To Campgrounds
      </Link>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
