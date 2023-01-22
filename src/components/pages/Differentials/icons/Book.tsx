import { m } from "framer-motion";

const icon = {
  hidden: {
    scale: 0,
    rotate: 180,
  },
  visible: {
    scale: 1,
    rotate: 0,
  },
};

const BookIcon = () => {
  return (
    <m.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <m.path
        variants={icon}
        d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"
      />
    </m.svg>
  );
};

export default BookIcon;
