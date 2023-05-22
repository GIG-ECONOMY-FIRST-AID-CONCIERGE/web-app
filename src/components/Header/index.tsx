import { headerProps } from "../../interfaces/header.interface";
import { Back } from "../Icon";
import styles from "./header.module.css";

const Header: React.FC<headerProps> = ({ ...Props }) => {
  return (
    <div className={styles.header}>
      {Props.isDetails ? (
        <div className={styles.backIcon} onClick={() => Props.handleClick()}>
          <Back />
        </div>
      ) : (
        <div />
      )}
      <div className={styles.company}>COMPANY</div>
      <div className={styles.user}>
        HELLO, <b>Attendant</b>
      </div>
    </div>
  );
};

export default Header;
