"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

import {
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Board from "./components/Board";
import Table from "./components/Table";

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
      firstCol: "Accident 1",
      secondCol: "Yes",
      thirdCol: "No",
      fourthCol: "10/01/2023",
      fifthCol: "Yes",
    },
    {
      firstCol: "Accident 2",
      secondCol: "Yes",
      thirdCol: "Yes",
      fourthCol: "15/02/2023",
      fifthCol: "No",
    },
    {
      firstCol: "Accident 3",
      secondCol: "No",
      thirdCol: "Yes",
      fourthCol: "10/03/2023",
      fifthCol: "Yes",
    },
  ];
  const rows2 = [
    {
      firstCol: "Accident 1",
      secondCol: "10/01/2023",
      thirdCol:
        "Lorem ipsum dolor sit amet. Aut nobis galisum qui rerum omnis et voluptatem error. Ex eaque eligendi ea necessitatibus excepturi aut magnam posYesus vel nihil earum!",
    },
    {
      firstCol: "Accident 2",
      secondCol: "15/02/2023",
      thirdCol:
        "Lorem ipsum dolor sit amet. Aut nobis galisum qui rerum omnis et voluptatem error. Ex eaque eligendi ea necessitatibus excepturi aut magnam possimus vel nihil earum!",
    },
    {
      firstCol: "Accident 3",
      secondCol: "10/03/2023",
      thirdCol:
        "Lorem ipsum dolor sit amet. Aut nobis galisum qui rerum omnis et voluptatem error. Ex eaque eligendi ea necessitatibus excepturi aut magnam possimus vel nihil earum!",
    },
  ];
  const rowBoard1 = [
    "Name: Antônio Gomes Ribeiro",
    "Phone:  (11) 7681-5230",
    "Cellphone:  (11) 97681-5230",
  ];
  const rowBoard2 = [
    "Birthdate:  15/05/2000",
    "RG:  43.546.345-2",
    "CPF:  472.335.423-92",
  ];
  const rowBoard3 = [
    "Address: Rua Três, 1890",
    "City:  Rio de Janeiro",
    "State:  RJ",
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
          <div className={styles.titleRadio}>Requested?</div>
          <RadioGroup
            name="radioSamu"
            value={values.radioSamu}
            row
            onChange={handleChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </div>
        <div className={styles.description}>Description:</div>
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
              style={{
                marginRight: "24px",
              }}
            >
              Cancel
            </Button>
            <Button variant="contained" onClick={() => setSamuModal(false)}>
              Confirm
            </Button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={assistanceModal} onClose={() => setAssistanceModal(false)}>
        <div className={styles.titleModal}>Tow Truck Assistance</div>
        <div className={styles.ctnRadio}>
          <div className={styles.titleRadio}>Requested?</div>
          <RadioGroup
            name="radioAssistance"
            value={values.radioAssistance}
            row
            onChange={handleChange}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </div>
        <div className={styles.description}>Description:</div>
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
              style={{
                marginRight: "24px",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              onClick={() => setAssistanceModal(false)}
            >
              Confirm
            </Button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={finishModal} onClose={() => setFinishModal(false)}>
        <div className={styles.titleModal}>Do You Want To Finish?</div>
        <div className={styles.description}>Description:</div>
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
              Do you want to send guidelines on opening a Claim?
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
              style={{
                marginRight: "24px",
              }}
            >
              Cancel
            </Button>
            <Button variant="contained" onClick={() => setFinishModal(false)}>
              Confirm
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
              title="Insured Data"
              row1={rowBoard1}
              row2={rowBoard2}
              row3={rowBoard3}
            />
            <Board
              title="Accident Data"
              row1={rowBoard1}
              row2={rowBoard2}
              row3={rowBoard3}
            />
            <Board
              title="Vehicle Data"
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
                style={{
                  marginRight: "24px",
                }}
              >
                Samu
              </Button>
              <Button
                variant="contained"
                onClick={() => setAssistanceModal(true)}
                style={{
                  marginRight: "24px",
                }}
              >
                Tow Truck Assistance
              </Button>
              <Button
                variant="contained"
                onClick={() => setFinishModal(true)}
                color="success"
                style={{
                  marginRight: "24px",
                }}
              >
                Finish Attendance
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
              Service
            </div>
            <div
              onClick={() => setOption("history")}
              className={
                option === "history"
                  ? styles.optionEnabled
                  : styles.optionsDisabled
              }
            >
              History
            </div>
          </div>
          <div className={styles.painel}>
            {option === "service" ? (
              <Table
                head1="Accident Number"
                head2="Samu"
                head3="Tow Truck Assistance"
                head4="Occurred Date"
                head5="Replied Notification?"
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
                head1="Accident Number"
                head2="Service Date"
                head3="Summary"
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
