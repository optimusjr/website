import { tv } from "tailwind-variants";

import Image from "@/components/Image";

const { container, image } = tv({
  slots: {
    container: "overflow-hidden rounded-xl",
    image: "transition-transform duration-1000 ease-in-out hover:scale-110",
  },
})();

interface Props extends Omit<React.ComponentProps<typeof Image>, "className"> {
  className?: {
    container?: string;
    image?: string;
  };
}

const StyledImage = ({ className, ...props }: Props) => (
  <div className={container({ className: className?.container })}>
    <Image className={image({ className: className?.image })} {...props} />
  </div>
);

export default StyledImage;
