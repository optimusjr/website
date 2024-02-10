import { tv } from "tailwind-variants";

import Image from "@/components/lib/Image";

const { wrapper, image } = tv({
  slots: {
    wrapper: "overflow-hidden rounded-xl",
    image: "transition-transform duration-1000 ease-in-out hover:scale-110",
  },
})();

interface Props extends Omit<React.ComponentProps<typeof Image>, "className"> {
  disableWrapper?: boolean;
  className?: {
    wrapper?: string;
    image?: string;
  };
}

const StyledImage = ({ disableWrapper, className, ...props }: Props) => {
  const imageComponent = <Image className={image({ className: className?.image })} {...props} />;

  if (disableWrapper) {
    return imageComponent;
  }

  return <div className={wrapper({ className: className?.wrapper })}>{imageComponent}</div>;
};

export default StyledImage;
