import { tv } from "tailwind-variants";

const { container, input, icon, text } = tv({
  slots: {
    container: [
      "relative flex h-full w-full cursor-pointer items-center gap-2 rounded-lg border-2 border-transparent bg-neutral-200 p-4",
      "has-[:hover]:border-neutral-400 has-[:hover]:bg-neutral-300",
      "has-[:checked]:border-primary-800 has-[:checked]:bg-primary-100",
      "has-[:checked]:has-[:hover]:border-primary-800 has-[:checked]:has-[:hover]:bg-primary-100",
    ],
    input: "peer appearance-none",
    icon: "peer-checked:fill-primary-800",
    text: "peer-checked:text-primary-800",
  },
})();

interface TextFieldProps extends Omit<React.HTMLProps<HTMLInputElement>, "type"> {
  label: string;
  Icon?: React.ComponentType<{ className?: string }>;
}

const Checkbox = ({ label, Icon, ...props }: TextFieldProps) => (
  <label className={container()}>
    {Icon && <Icon className={icon()} />}
    <span className={text()}>{label}</span>
    <input className={input()} type="checkbox" {...props} />
  </label>
);

export default Checkbox;
