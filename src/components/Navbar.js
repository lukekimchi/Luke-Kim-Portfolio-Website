 
function Navbar() {
  // let links = [
  //   { name: "About Me", link: "/about-me" },
  //   { name: "Expe", link: "/experience" },
  //   { name: "CONTACT", link: "/contact" },
  // ];
  return (
    <nav className="flex flex-row w-full bg-black px-10 py-10 justify-center h-36 items-center">
      {/* <div className="flex w-32 h-32">
        <img
          src={Logo}
          className="rounded-full scale-50 hover:translate-x-1 hover:-translate-y-1"
          alt="my-face"
        />
      </div> */}

      <div className="flex">
        <li className="px-4 inline text-white font-mono hover:text-rose-500">
          About Me
        </li>
        <li className="px-4 inline text-white font-mono hover:text-rose-500">
          Experience
        </li>
        <li className="px-4 inline text-white font-mono hover:text-rose-500">
          Contact
        </li>
      </div>
    </nav>
  );
}

export default Navbar;
