"use client";

import { Fragment, ReactNode, useEffect } from "react";
import { smoothScroll } from "@/utils/smoothScroll";
import Menu from "../common/Menu";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  useEffect(() => {
    const scroll = smoothScroll();
    return () => scroll.destroy();
  }, []);

  return (
    <Fragment>
      <Menu />

      <div className="flex flex-col gap-20 min-h-[calc(100vh-3.5rem)] mt-24">
        {children}
      </div>

      {/* <Footer /> */}
    </Fragment>
  );
}
