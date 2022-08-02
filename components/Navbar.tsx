import NextLink from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 inset-0 sticky">
      <div className="flex-1">
        <NextLink href={"/"}>
          <a className="btn btn-ghost normal-case text-xl">4Word</a>
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
