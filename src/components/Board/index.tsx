import styles from "./board.module.css";
import { boardProps } from "@/interfaces/board.interface";

const Board: React.FC<boardProps> = ({ ...Props }) => {
  return (
    <>
      <div className={styles.title}>{Props.title}</div>
      <div className={styles.board}>
        <div className={styles.row}>
          {Props.row1 &&
            Props.row1.map((value: string, index: number) => (
              <div key={index} className={styles.items}>
                {value}
              </div>
            ))}
        </div>
        <div className={styles.row}>
          {Props.row2 &&
            Props.row2.map((value: string, index: number) => (
              <div key={index} className={styles.items}>
                {value}
              </div>
            ))}
        </div>
        {Props.row3 && (
          <div className={styles.row}>
            {Props.row3 &&
              Props.row3.map((value: string, index: number) => (
                <div key={index} className={styles.items}>
                  {value}
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Board;
