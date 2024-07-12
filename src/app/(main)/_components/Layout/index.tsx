import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

import Footer from "./Footer";
import Header from "./Header";
import PROSEL from "./PROSEL";

const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
    <PROSEL />
  </>
);

export default Layout;
