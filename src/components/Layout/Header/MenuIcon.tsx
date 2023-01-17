import styles from "./menuIcon.module.scss";

interface Props {
  open: boolean;
}

export default function MenuIcon({ open }: Props) {
  return (
    <svg
      width="24"
      height="24"
      fill="#ffffff"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.menuIcon}
    >
      <path className={open ? styles.open : styles.close} d="m3 16h18v2h-18z" />
      <path d="m3 11h18v2h-18v-2" />
      <path className={open ? styles.open : styles.close} d="m3 6h18v2h-18v-2" />
    </svg>
  );
}
