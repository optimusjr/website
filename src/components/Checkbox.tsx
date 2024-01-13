interface TextFieldProps extends Omit<React.HTMLProps<HTMLInputElement>, "type"> {
  label: string;
  Icon?: React.ComponentType<{ className?: string }>;
}

const Checkbox = ({ label, Icon, ...props }: TextFieldProps) => (
  <label
    className={[
      "relative flex h-full w-full items-center gap-2 rounded-lg border-2 border-transparent bg-neutral-200 p-4",
      "has-[:hover]:border-neutral-400 has-[:hover]:bg-neutral-300",
      "has-[:checked]:border-primary-800 has-[:checked]:bg-primary-100",
      "has-[:checked]:has-[:hover]:border-primary-800 has-[:checked]:has-[:hover]:bg-primary-100",
    ].join(" ")}
  >
    <input
      className="pointer peer absolute inset-0 h-full w-full appearance-none"
      type="checkbox"
      {...props}
    />

    {Icon && <Icon className="peer-checked:fill-primary-800" />}

    <span className="text-lg/tight peer-checked:text-primary-800">{label}</span>
  </label>
);

export default Checkbox;
