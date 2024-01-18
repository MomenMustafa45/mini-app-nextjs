"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Sounds", href: "/sounds-page" },
  { name: "Clock", href: "/clock-page" },
  { name: "Image", href: "/image-page" },
  { name: "blogs", href: "/blogs" },
  { name: "practice", href: "/practice" },
];

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="flex justify-between items-center px-10 py-5 box-border bg-slate-200 shadow-sm shadow-slate-400">
      <div className="font-bold text-xl drop-shadow-md">Practice</div>
      <div>
        {links.map((link) => (
          <>
            <Link
              href={link.href}
              className={`relative mx-2 text-slate-900 transition-all hover:text-neutral-600 after:content-[''] after:absolute after:transition-all hover:after:w-5/6 after:h-0.5 after:bg-slate-600 after:bottom-0 after:left-0 pb-1 ${
                pathname === link.href
                  ? "text-slate-400 after:w-5/6"
                  : "after:w-0"
              }`}
            >
              {link.name}
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
