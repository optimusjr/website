import { m } from "framer-motion";

interface Props {
  open: boolean;
}

const MenuIcon = ({ open }: Props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>{open ? "Abrir menu" : "Fechar menu"}</title>
    <m.path animate={{ x: open ? 24 : 0 }} d="m3 16h18v2h-18z" />
    <path d="m3 11h18v2h-18v-2" />
    <m.path animate={{ x: open ? 24 : 0 }} d="m3 6h18v2h-18v-2" />
  </svg>
);

export default MenuIcon;
