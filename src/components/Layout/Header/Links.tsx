import Link from "next/link";

export default function Links() {
  return (
    <>
      <li>
        <Link href="#about">Sobre Nós</Link>
      </li>
      <li>
        <Link href="#services">Serviços</Link>
      </li>
      <li>
        <Link href="#contact">Contato</Link>
      </li>
    </>
  );
}
