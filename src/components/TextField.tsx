import { tv } from "tailwind-variants";

import Typography from "@/components/Typography";

const textField = tv({
  slots: {
    container: "flex flex-col items-start gap-1",
    text: "ml-1",
    input:
      "w-full rounded-t-lg border-b-2 border-b-neutral-800 bg-neutral-200 p-4 text-xl leading-none outline-none hover:bg-neutral-300",
  },
  variants: {
    required: {
      true: { text: "after:content-['*']" },
    },
    textarea: {
      true: { input: "min-h-32 resize-none" },
    },
  },
});

interface TextFieldProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
}

const TextField = ({ label, className, ...props }: TextFieldProps) => {
  const { container, text, input } = textField({ required: props.required });

  return (
    <label className={container()}>
      <Typography className={text()} component="span" variant="p">
        {label}
      </Typography>
      <input className={input({ className })} {...props} />
    </label>
  );
};

interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  label: string;
}

const TextArea = ({ label, className, ...props }: TextAreaProps) => {
  const { container, text, input } = textField({ required: props.required, textarea: true });

  return (
    <label className={container()}>
      <Typography className={text()} component="span" variant="p">
        {label}
      </Typography>
      <textarea className={input({ className })} {...props} />
    </label>
  );
};

export default TextField;
export { TextArea, TextField };
