"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Table from "@/components/Table";

export const useClient = true;

const Home = (): JSX.Element => {
  const [option, setOption] = useState("service");
  const rows = [
    {
      firstCol: "Acidente 1",
      secondCol: "Sim",
      thirdCol: "Não",
      fourthCol: "10/01/2023",
      fifthCol: "Sim",
    },
    {
      firstCol: "Acidente 2",
      secondCol: "Sim",
      thirdCol: "Sim",
      fourthCol: "15/02/2023",
      fifthCol: "Não",
    },
    {
      firstCol: "Acidente 3",
      secondCol: "Não",
      thirdCol: "Sim",
      fourthCol: "10/03/2023",
      fifthCol: "Sim",
    },
  ];
  const rows2 = [
    {
      firstCol: "Acidente 1",
      secondCol: "10/01/2023",
      thirdCol:
        "Lorem ipsum dolor sit amet. Aut nobis galisum qui rerum omnis et voluptatem error. Ex eaque eligendi ea necessitatibus excepturi aut magnam possimus vel nihil earum!",
    },
    {
      firstCol: "Acidente 2",
      secondCol: "15/02/2023",
      thirdCol:
        "Lorem ipsum dolor sit amet. Aut nobis galisum qui rerum omnis et voluptatem error. Ex eaque eligendi ea necessitatibus excepturi aut magnam possimus vel nihil earum!",
    },
    {
      firstCol: "Acidente 3",
      secondCol: "10/03/2023",
      thirdCol:
        "Lorem ipsum dolor sit amet. Aut nobis galisum qui rerum omnis et voluptatem error. Ex eaque eligendi ea necessitatibus excepturi aut magnam possimus vel nihil earum!",
    },
  ];
  return (
    <>
      <Header />
      <div className={styles.ctnOptions}>
        <div
          onClick={() => setOption("service")}
          className={
            option === "service" ? styles.optionEnabled : styles.optionsDisabled
          }
        >
          Atendimento
        </div>
        <div
          onClick={() => setOption("history")}
          className={
            option === "history" ? styles.optionEnabled : styles.optionsDisabled
          }
        >
          Histórico
        </div>
      </div>
      <div className={styles.painel}>
        {option === "service" ? (
          <Table
            head1="N. Acidente"
            head2="Samu"
            head3="Assistência Guincho"
            head4="Data Ocorrido"
            head5="Respondeu Notificação?"
            rows={rows}
          />
        ) : (
          <Table
            head1="N. Acidente"
            head2="Data de Atendimento"
            head3="Resumo do Ocorrido"
            rows={rows2}
          />
        )}
      </div>
    </>
  );
};

export default Home;
