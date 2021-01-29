import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { navbar } from "./styles";

const Navbar = () => {
  const router = useRouter();

  return (
    <div css={navbar}>
      <header>
        <div className="logo">
          <Link href="/">
            <a>delman.io</a>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a className={router && router.pathname === "/" ? "active" : ""}>Landing</a>
              </Link>
            </li>
            <li>
              <Link href="/scroll-sync">
                <a className={router && router.pathname === "/scroll-sync" ? "active" : ""}>
                  Scroll Sync
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
