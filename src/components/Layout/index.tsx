import Footer from "./Footer";
import Header from "./Header";
import PROSEL from "./PROSEL";

interface Props {
  className: string;
  children: React.ReactNode;
}

const Layout = ({ className, children }: Props) => (
  <div className={className} style={{ display: "contents" }}>
    <Header />
    <main>{children}</main>
    <Footer />
    <PROSEL />
  </div>
);

export default Layout;
