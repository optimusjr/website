"use client";

import Image from "@/components/Image";
import Link from "@/components/Link";
import QuoteButton from "@/components/QuoteButton";
import useToggle from "@/hooks/useToggle";
import logo_simplificado from "@/images/OPTIMUS/logo_simplificado.svg";

import Links from "./Links";
import Mobile from "./Mobile";

const Header = () => {
  const [showMobile, toggleShowMobile, setShowMobile] = useToggle(false);

  const hideMobile = () => {
    if (showMobile) {
      setShowMobile(false);
    }
  };

  return (
    <div className="bg-primary-600 px-4 sm:px-8 md:px-16">
      <header className="animate-slide-top content-auto grid grid-cols-2 rounded-b-3xl bg-white text-xl lg:grid-cols-3">
        <div className="flex min-h-16 items-center justify-start">
          <Link href="/" onClick={hideMobile}>
            <Image
              alt="'OPTIMUS Jr.' escrito em letras estilizadas"
              className="ml-3"
              height="40"
              placeholder="empty"
              src={logo_simplificado}
            />
          </Link>
        </div>

        <ul className="hidden items-center justify-center gap-4 lg:flex">
          <Links hideMobile={hideMobile} />
        </ul>

        <div className="hidden justify-end p-3 lg:flex">
          <QuoteButton />
        </div>

        <Mobile hideShow={hideMobile} show={showMobile} toggleShow={toggleShowMobile} />
      </header>
    </div>
  );
};

export default Header;
