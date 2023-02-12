import Typography from "@/components/common/Typography";

import styles from "./textField.module.scss";

interface Props {
  label: string;
  name: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  multiline?: boolean;
}

const TextField = ({ label, name, type, required, multiline }: Props) => {
  const InputComponent = multiline ? "textarea" : "input";

  return (
    <label className={styles.textField}>
      <Typography component="span" variant="p">
        {label}
      </Typography>
      <InputComponent name={name} required={required} type={type} />
    </label>
  );
};

export default TextField;
