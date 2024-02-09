import { Props } from "@/utils/types/GenericIconType";

const CardDecorations = <T extends React.ElementType = "svg">({ as, ...props }: Props<T>) => {
  const Component = as || "svg";

  return (
    <Component
      overflow="visible"
      viewBox="0 0 1024 576"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m18.149 582.4c71.005 38.496 198.87 37.247 221.56-27.736-11.347 32.491-101.23 23.005-136.73 3.7566-86.04-46.648-29.375-147.41-89.798-175.07-90.834-41.576-98.163 143.13 4.9697 199.04z"
        fill="#94c117"
      />
      <path
        d="m1005.9-6.3983c-71.005-38.496-198.87-37.247-221.56 27.736 11.347-32.491 101.23-23.005 136.73-3.7566 86.04 46.648 29.375 147.41 89.798 175.07 90.834 41.576 98.164-143.13-4.9696-199.04z"
        fill="#0092bf"
      />
    </Component>
  );
};

export default CardDecorations;
