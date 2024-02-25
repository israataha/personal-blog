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
      <nav>
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
