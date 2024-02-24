import CheckOutlineIcon from "@/components/icons/CheckOutline";
import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

interface Props extends PropsWithChildren {
  className?: string;
}

const CheckList = ({ className, children }: Props) => <ul className={className}>{children}</ul>;

const CheckListItem = ({ children }: PropsWithChildren) => (
  <li className="my-2 flex flex-nowrap items-center gap-2 ">
    <CheckOutlineIcon className="fill-primary-800" />
    <p className="text-left">{children}</p>
  </li>
);

export { CheckList, CheckListItem };
export default CheckList;
