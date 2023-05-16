import { Back } from "../Icon";
import styles from "./header.module.css";

const Header = (): JSX.Element => {
  return (
    <div className={styles.header}>
      <div className={styles.backIcon}>
        <Back />
      </div>
      <div className={styles.company}>EMPRESA</div>
      <div className={styles.user}>
        OLÁ, <b>Atendente</b>
      </div>
    </div>
  );
};

export default Header;
