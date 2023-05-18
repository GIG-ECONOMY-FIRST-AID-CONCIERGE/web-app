"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Table from "@/components/Table";
import Board from "@/components/Board";

export const useClient = true;

const Home = (): JSX.Element => {
  const [option, setOption] = useState("service");
  const [details, setDetails] = useState({
    isDetails: false,
    title: "",
  });
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
  const rowBoard1 = [
    "Nome: Antônio Gomes Ribeiro",
    "Telefone:  (11) 7681-5230",
    "Celular:  (11) 97681-5230",
  ];
  const rowBoard2 = [
    "Data Nascimento:  15/05/2000",
    "RG:  43.546.345-2",
    "CPF:  472.335.423-92",
  ];
  const rowBoard3 = [
    "Endereço: Rua Três, 1890",
    "Cidade:  Rio de Janeiro",
    "Estado:  RJ",
    "CEP:  22733-086",
  ];

  return (
    <>
      <Header
        isDetails={details.isDetails}
        handleClick={() => setDetails({ isDetails: false, title: "" })}
      />
      {details.isDetails ? (
        <div className={styles.painelDetails}>
          <div className={styles.title}>{details.title}</div>
          <Board
            title="Dados do Segurado"
            row1={rowBoard1}
            row2={rowBoard2}
            row3={rowBoard3}
          />
          <Board
            title="Dados do Acidente"
            row1={rowBoard1}
            row2={rowBoard2}
            row3={rowBoard3}
          />
          <Board
            title="Dados do Veículo"
            row1={rowBoard1}
            row2={rowBoard2}
            row3={rowBoard3}
          />
        </div>
      ) : (
        <>
          <div className={styles.ctnOptions}>
            <div
              onClick={() => setOption("service")}
              className={
                option === "service"
                  ? styles.optionEnabled
                  : styles.optionsDisabled
              }
            >
              Atendimento
            </div>
            <div
              onClick={() => setOption("history")}
              className={
                option === "history"
                  ? styles.optionEnabled
                  : styles.optionsDisabled
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
                handleClick={(value: string) =>
                  setDetails({ isDetails: true, title: value })
                }
              />
            ) : (
              <Table
                head1="N. Acidente"
                head2="Data de Atendimento"
                head3="Resumo do Ocorrido"
                rows={rows2}
                handleClick={(value: string) =>
                  setDetails({ isDetails: true, title: value })
                }
              />
            )}
          </div>{" "}
        </>
      )}
    </>
  );
};

export default Home;
