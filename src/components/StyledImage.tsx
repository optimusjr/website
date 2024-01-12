import { tv } from "tailwind-variants";

import Image from "@/components/Image";

const { container, image } = tv({
  slots: {
    container: "overflow-hidden rounded-xl",
    image: "transition-transform duration-1000 ease-in-out hover:scale-110",
  },
})();

interface Props extends Omit<React.ComponentProps<typeof Image>, "className"> {
  disableContainer?: boolean;
  className?: {
    container?: string;
    image?: string;
  };
}

const StyledImage = ({ disableContainer, className, ...props }: Props) => {
  const imageComponent = <Image className={image({ className: className?.image })} {...props} />;

  if (disableContainer) {
    return imageComponent;
  }

  return <div className={container({ className: className?.container })}>{imageComponent}</div>;
};

export default StyledImage;
