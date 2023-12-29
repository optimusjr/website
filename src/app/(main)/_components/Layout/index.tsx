import Footer from "./Footer";
import Header from "./Header";
import PROSEL from "./PROSEL";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
    <PROSEL />
  </>
);

export default Layout;
