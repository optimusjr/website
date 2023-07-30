import { m } from "framer-motion";

interface Props {
  open: boolean;
}

const ChevronIcon = ({ open }: Props) => (
  <m.svg
    animate={{ rotateX: open ? 0 : 180 }}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{open ? "Expandir" : "retrair"}</title>
    <path d={"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"} />
  </m.svg>
);

export default ChevronIcon;
