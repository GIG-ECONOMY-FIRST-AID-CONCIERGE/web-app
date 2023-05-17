import styles from "./page.module.css";
import Header from "@/components/Header";

const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className={styles.ctnOptions}>
        <div className={styles.optionEnabled}>Atendimento</div>
        <div className={styles.optionsDisabled}>Histórico</div>
      </div>
      <div className={styles.painel}>aaa</div>
    </>
  );
};

export default Home;
