import { NavLink } from "@remix-run/react";
import ThemeSwitcher from "./theme-switcher";

const NavLinks = [
  { href: "/", title: "Home" },
  { href: "/blog", title: "Blog" },
  { href: "/about", title: "About" },
];

export default function Header() {
  return (
    <header className="px-8 py-10">
      <nav className="text-primary mx-auto flex max-w-8xl items-center justify-between">
        <div>
          {/* <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg> */}
          <div className="text-2xl font-bold xl:text-3xl">{"<it />"}</div>
        </div>
        <div className="px-5 py-2 flex items-center space-x-4 leading-5 sm:space-x-6">
          {NavLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.href}
              className="text-gray-900 dark:text-gray-100 hover:underline underline-offset-8 text-medium font-bold uppercase"
            >
              {link.title}
            </NavLink>
          ))}
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
