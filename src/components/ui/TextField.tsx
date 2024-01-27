import { tv } from "tailwind-variants";

const textField = tv({
  slots: {
    container: "flex flex-col items-start gap-1",
    text: "ml-1 text-lg/tight",
    input:
      "w-full rounded-t-lg border-b-2 border-b-neutral-800 bg-neutral-200 p-4 text-xl leading-none outline-none hover:bg-neutral-300",
  },
  variants: {
    required: {
      true: { text: "after:content-['*']" },
    },
    multiline: {
      true: { input: "min-h-32 resize-none" },
    },
  },
});

type TextInputProps = React.HTMLProps<HTMLTextAreaElement> & React.HTMLProps<HTMLInputElement>;
interface TextFieldProps extends TextInputProps {
  multiline?: boolean;
  label: string;
}

const TextField = ({ label, className, required, multiline, ...props }: TextFieldProps) => {
  const { container, text, input } = textField({ required, multiline });

  const InputComponent = multiline ? "textarea" : "input";

  return (
    <label className={container()}>
      <span className={text()}>{label}</span>
      <InputComponent className={input({ className })} {...props} />
    </label>
  );
};

export default TextField;
