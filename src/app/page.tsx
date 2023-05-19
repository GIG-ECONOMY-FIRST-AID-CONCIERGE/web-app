"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Table from "@/components/Table";
import Board from "@/components/Board";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Modal from "@/components/Modal";

export const useClient = true;

const Home = (): JSX.Element => {
  const [option, setOption] = useState("service");
  const [details, setDetails] = useState({
    isDetails: false,
    isHistory: false,
    title: "",
  });
  const [samuModal, setSamuModal] = useState(false);
  const [assistanceModal, setAssistanceModal] = useState(false);
  const [finishModal, setFinishModal] = useState(false);
  const [values, setValues] = useState({
    radioSamu: "",
    radioAssistance: "",
    detailsSamu: "",
    detailsAssistance: "",
    detailsFinish: "",
    checkFinish: false,
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

  const handleChange = (evt: any) => {
    setValues({
      ...values,
      [evt.target.name]:
        evt.target.name === "checkFinish"
          ? evt.target.checked
          : evt.target.value,
    });
  };

  return (
    <>
      <Modal isOpen={samuModal} onClose={() => setSamuModal(false)}>
        <div className={styles.titleModal}>SAMU</div>
        <div className={styles.ctnRadio}>
          <div className={styles.titleRadio}>Solicitado?</div>
          <RadioGroup
            name="radioSamu"
            value={values.radioSamu}
            row
            onChange={handleChange}
          >
            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
            <FormControlLabel value="nao" control={<Radio />} label="Não" />
          </RadioGroup>
        </div>
        <div className={styles.description}>Descrição:</div>
        <TextField
          multiline
          rows={4}
          variant="outlined"
          value={values.detailsSamu}
          name="detailsSamu"
          onChange={handleChange}
        />
        <div className={styles.btnModalGroup}>
          <div>
            <Button
              variant="outlined"
              onClick={() => setSamuModal(false)}
              className={styles.btnMargin}
            >
              Cancelar
            </Button>
            <Button variant="contained" onClick={() => setSamuModal(false)}>
              Confirmar
            </Button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={assistanceModal} onClose={() => setAssistanceModal(false)}>
        <div className={styles.titleModal}>Assitência Guincho</div>
        <div className={styles.ctnRadio}>
          <div className={styles.titleRadio}>Solicitado?</div>
          <RadioGroup
            name="radioAssistance"
            value={values.radioAssistance}
            row
            onChange={handleChange}
          >
            <FormControlLabel value="sim" control={<Radio />} label="Sim" />
            <FormControlLabel value="nao" control={<Radio />} label="Não" />
          </RadioGroup>
        </div>
        <div className={styles.description}>Descrição:</div>
        <TextField
          multiline
          rows={4}
          variant="outlined"
          value={values.detailsAssistance}
          name="detailsAssistance"
          onChange={handleChange}
        />
        <div className={styles.btnModalGroup}>
          <div>
            <Button
              variant="outlined"
              onClick={() => setAssistanceModal(false)}
              className={styles.btnMargin}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              onClick={() => setAssistanceModal(false)}
            >
              Confirmar
            </Button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={finishModal} onClose={() => setFinishModal(false)}>
        <div className={styles.titleModal}>Deseja Finalizar?</div>
        <div className={styles.description}>Descrição:</div>
        <TextField
          multiline
          rows={4}
          variant="outlined"
          value={values.detailsFinish}
          name="detailsFinish"
          onChange={handleChange}
        />
        <div className={styles.btnModalFinish}>
          <div className={styles.ctnCheck}>
            <div className={styles.titleCheck}>
              Enviar orientações sobre abertura de Sinistro?
            </div>
            <Checkbox
              checked={values.checkFinish}
              name="checkFinish"
              onChange={handleChange}
            />
          </div>
          <div>
            <Button
              variant="outlined"
              onClick={() => setFinishModal(false)}
              className={styles.btnMargin}
            >
              Cancelar
            </Button>
            <Button variant="contained" onClick={() => setFinishModal(false)}>
              Confirmar
            </Button>
          </div>
        </div>
      </Modal>

      <Header
        isDetails={details.isDetails}
        handleClick={() =>
          setDetails({ isDetails: false, isHistory: false, title: "" })
        }
      />
      {details.isDetails ? (
        <>
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
          {!details.isHistory ? (
            <div className={styles.btnGroup}>
              <Button
                variant="contained"
                onClick={() => setSamuModal(true)}
                className={styles.btnMargin}
              >
                SAMU
              </Button>
              <Button
                variant="contained"
                onClick={() => setAssistanceModal(true)}
                className={styles.btnMargin}
              >
                Assistência Guincho
              </Button>
              <Button
                variant="contained"
                onClick={() => setFinishModal(true)}
                color="success"
                className={styles.btnMargin}
              >
                Finalizar Atendimento
              </Button>
            </div>
          ) : (
            <div className={styles.marginBotton} />
          )}
        </>
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
                  setDetails({
                    isDetails: true,
                    isHistory: false,
                    title: value,
                  })
                }
              />
            ) : (
              <Table
                head1="N. Acidente"
                head2="Data de Atendimento"
                head3="Resumo do Ocorrido"
                rows={rows2}
                handleClick={(value: string) =>
                  setDetails({ isDetails: true, isHistory: true, title: value })
                }
              />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
