import CheckOutlineIcon from "@/components/icons/CheckOutline";
import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

interface Props extends PropsWithChildren {
  className?: string;
}

const CheckList = ({ className, children }: Props) => <ul className={className}>{children}</ul>;

CheckList.item = ({ children }: PropsWithChildren) => (
  <li className="my-2 flex flex-nowrap items-center gap-2 ">
    <CheckOutlineIcon className="fill-primary-800" />
    <p className="text-left text-lg/tight">{children}</p>
  </li>
);

export default CheckList;
