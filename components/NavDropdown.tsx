import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

const NavDropdown = ({
  pathname,
  isOpen,
  setIsOpen,
}: {
  pathname: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const links = [
    { label: "Home", url: "/" },
    { label: "Portfolio", url: "/portfolio" },
    { label: "Contact Me", url: "/contact" },
  ];

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, setIsOpen]);

  return (
    <div
      ref={modalRef}
      className="absolute z-50 right-0 top-20 py-12 w-[280px] bg-primary-grayishdarkblue"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link.url}
            className={`${
              pathname === link.url ? "text-primary-cyan" : "text-white"
            } uppercase tracking-[3px] text-[12px] text-center`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;
