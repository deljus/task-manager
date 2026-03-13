"use client";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import NextLink from "next/link";
import { MENU } from "@/widgets/navbar/config";

export function BurgerMenu() {
  const handleClick = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <Bars3BottomRightIcon className="w-6 h-6" />
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-lg"
      >
        {MENU.map(({ key, name, href }) => (
          <li key={key} onClick={handleClick}>
            <NextLink href={href}>{name}</NextLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
