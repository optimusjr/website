import type { NextFont } from "@next/font";

import Footer from "./Footer";
import Header from "./Header";
import PROSEL from "./PROSEL";

interface Props {
  font: NextFont;
  children: React.ReactNode;
}

const Layout = ({ font, children }: Props) => {
  return (
    <div className={font.className} style={{ display: "contents" }}>
      <Header />
      <main>{children}</main>
      <Footer />
      <PROSEL />
    </div>
  );
};

export default Layout;
