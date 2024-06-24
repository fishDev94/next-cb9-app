import styles from "./appbutton.module.scss";

export default function AppButton({
  text = "placeholder",
  handleClick = () => {},
}) {
  return <button onClick={handleClick} className={styles.appButton}>{text}</button>;
}
