"use client";

import Image from "@/components/lib/Image";
import Link from "@/components/lib/Link";
import QuoteButton from "@/components/others/QuoteButton";
import Screen from "@/components/others/Screen";
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
    <Screen as="div" bgColor="secondary" className="overflow-hidden px-4 sm:px-8 md:px-16">
      <header className="content-auto grid w-full grid-cols-2 rounded-b-3xl bg-white text-xl animate-slide-top lg:grid-cols-3">
        <div className="flex min-h-16 items-center justify-start">
          <Link className="ml-3" href="/" onClick={hideMobile}>
            <Image
              alt="'OPTIMUS Jr.' escrito em letras estilizadas"
              height="40"
              src={logo_simplificado}
              priority
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
    </Screen>
  );
};

export default Header;
