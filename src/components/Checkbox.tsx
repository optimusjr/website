import Typography from "@/components/Typography";

interface TextFieldProps extends Omit<React.HTMLProps<HTMLInputElement>, "type"> {
  label: string;
  Icon?: React.ComponentType;
}

const Checkbox = ({ label, Icon, ...props }: TextFieldProps) => (
  <label
    className={[
      "relative flex h-full w-full gap-1 rounded-lg border-2 border-transparent bg-neutral-200 p-4",
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

    {Icon && (
      <div className="peer-checked:fill-primary-800">
        <Icon />
      </div>
    )}

    <Typography className="peer-checked:text-primary-800" component="span" variant="p">
      {label}
    </Typography>
  </label>
);

export default Checkbox;
