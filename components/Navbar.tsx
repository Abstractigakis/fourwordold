import NextLink from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <NextLink href={"/"}>
          <div
            className="navbar bg-base-100"
            style={{ position: "sticky", top: 0, zIndex: 1 }}
          >
            <a className="btn btn-ghost normal-case text-xl">4Word</a>
          </div>
        </NextLink>
      </div>
      <div className="flex-none">
        <NextLink href={"/x"}>
          <a className="btn btn-ghost normal-case text-xl">x</a>
        </NextLink>
      </div>
    </div>
  );
};

export default Navbar;
