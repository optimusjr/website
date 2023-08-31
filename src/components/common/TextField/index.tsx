import Typography from "@/components/common/Typography";

import styles from "./textField.module.scss";

interface TextFieldProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
}

const TextField = ({ label, ...props }: TextFieldProps) => (
  <label className={styles.textField}>
    <Typography component="span" variant="p">
      {label}
      {props.required && "*"}
    </Typography>
    <input {...props} />
  </label>
);

interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  label: string;
}

const TextArea = ({ label, ...props }: TextAreaProps) => (
  <label className={styles.textField}>
    <Typography component="span" variant="p">
      {label}
    </Typography>
    <textarea {...props} />
  </label>
);

export default TextField;
export { TextArea, TextField };
