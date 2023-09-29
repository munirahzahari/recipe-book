import Image from "next/image";
import Link from "next/link";
import logo from "../assets/noriahs_recipes_logo.png";

const Navbar = () => {
  return (
    <div className="bg-white shadow-sm h-14 flex flex-row justify-between px-10 align-middle">
      <div className="h-min my-auto">
        <Link href="/">
          <Image
            src={logo}
            alt="Noriah's recipes"
            width={150}
            className=""
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Link>
      </div>
      <div className="flex space-x-6">
        <Link
          href="/all-recipes"
          className="h-min my-auto px-3 py-1 bg-darkGreen text-white"
        >
          <div>All recipes</div>
        </Link>
        <Link
          href="/"
          className="h-min my-auto border-2 px-3 py-1 border-darkGreen"
        >
          Categories
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
