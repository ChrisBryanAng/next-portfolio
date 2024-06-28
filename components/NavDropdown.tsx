import Link from "next/link";

const NavDropdown = () => {
  const links = [
    { label: "Home", url: "/" },
    { label: "Portfolio", url: "/portfolio" },
    { label: "Contact Me", url: "/contact" },
  ];

  return (
    <div className="absolute z-50 right-0 top-20 py-12 w-[280px] bg-primary-grayishdarkblue">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.url}
            className="text-white uppercase tracking-[3px] text-[12px] text-center"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;
