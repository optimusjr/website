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
      <span>{label}</span>
      <InputComponent name={name} type={type} required={required} />
    </label>
  );
};

export default TextField;
