import { Fragment, ReactNode, useEffect } from "react";
import { smoothScroll } from "@/utils/smoothScroll";

interface Props {
  children: ReactNode;
  belowMenu?: ReactNode;
}

export default function Layout({ children, belowMenu }: Props) {
  useEffect(() => {
    const scroll = smoothScroll();
    return () => scroll.destroy();
  }, []);

  return (
    <Fragment>
      {/* <Menu /> */}

      <div className="mt-24">
        {belowMenu}

        <div className="px-32 py-20 flex flex-col gap-20 min-h-[calc(100vh-6rem)]">
          {children}
        </div>
      </div>

      {/* <Footer /> */}
    </Fragment>
  );
}
