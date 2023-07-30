import { m } from "framer-motion";

interface Props {
  open: boolean;
}

const ChevronIcon = ({ open }: Props) => (
  <m.svg
    animate={{ rotateX: open ? 180 : 0 }}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{open ? "Retrair" : "Expandir"}</title>
    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
  </m.svg>
);

export default ChevronIcon;
