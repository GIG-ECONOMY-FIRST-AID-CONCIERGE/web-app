"use client";
import React, { useState, useEffect } from "react";
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
import accidentService from "./services/accidentService";
import transformDate from "./utils/transformDate";

const Home = (): JSX.Element => {
  const [option, setOption] = useState("service");
  const [details, setDetails] = useState({
    isDetails: false,
    isHistory: false,
    title: "",
    accidentData: {},
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
  const [tableService, setTableService] = useState<any[]>([]);
  const [tableHistory, setTableHistory] = useState<any[]>([]);
  const [rowBoard1, setRowboard1] = useState<string[]>([]);
  const [rowBoard2, setRowboard2] = useState<string[]>([]);
  const [rowBoard3, setRowboard3] = useState<string[]>([]);

  const populateServiceTable = (data: any) => {
    const dataTable: any[] = [];
    const processedAccidents: Set<number> = new Set();

    data.forEach((value: any) => {
      value?.assistances.forEach((assistance: any) => {
        const accidentId = value.id;

        if (!processedAccidents.has(accidentId)) {
          const tableRow = {
            firstCol: "Accident " + accidentId,
            secondCol: assistance.type === 1 ? "Yes" : "No",
            thirdCol: assistance.type === 2 ? "Yes" : "No",
            fourthCol: transformDate(value.occurredDate),
            fifthCol: value.repliedNotification ? "Yes" : "No",
            accidentData: value,
          };
          dataTable.push(tableRow);
          processedAccidents.add(accidentId);
        }
      });
    });

    setTableService(dataTable);
  };

  const populateHistoryTable = (data: any) => {
    const dataTable: any[] = [];
    data.forEach((value: any) => {
      dataTable.push({
        firstCol: "Accident " + value.id,
        secondCol: transformDate(value.occurredDate),
        thirdCol: value.description,
        accidentData: value,
      });
    });

    setTableHistory(dataTable);
  };

  useEffect(() => {
    accidentService
      .getAccident(option === "service" ? "1" : "2")
      .then((response: any) => {
        if (option === "service") {
          populateServiceTable(response?.data);
        } else {
          populateHistoryTable(response?.data);
        }
      })
      .catch((error: any) => {
        console.error("error: ", error);
      });
  }, [option]);

  useEffect(() => {
    if (details.isDetails) {
      // TODO = fix accidentData type
      setRowboard1([
        // @ts-ignore
        `Name: ${details?.accidentData?.partner?.name}`,
        // @ts-ignore
        `Phone: ${details?.accidentData?.partner?.phone}`,
        // @ts-ignore
        `Birthdate: ${details?.accidentData?.partner?.birthDate}`,
        // @ts-ignore
        `Birthdate: ${details?.accidentData?.partner?.birthDate}`,
        // @ts-ignore
        `RG: ${details?.accidentData?.partner?.rg}`,
        // @ts-ignore
        `CPF: ${details?.accidentData?.partner?.cpf}`,
        // @ts-ignore
        `Address: ${details?.accidentData?.partner?.address?.street}, ${details?.accidentData?.partner?.address?.number}`,
        // @ts-ignore
        `City: ${details?.accidentData?.partner?.address?.city}`,
        // @ts-ignore
        `State: ${details?.accidentData?.partner?.address?.state}`,
        // @ts-ignore
        `Geographic Coordinates: ${details?.accidentData?.partner?.address?.coordX},${details?.accidentData?.partner?.address?.coordY}`,
      ]);
      let hasSamu = "NO";
      let hasTruck = "NO";
      // @ts-ignore
      details?.accidentData?.assistances?.forEach((assistance: any) => {
        if (assistance.type === 1) {
          hasSamu = "YES";
        }
        if (assistance.type === 2) {
          hasTruck = "YES";
        }
      });
      setRowboard2([
        // @ts-ignore
        `Name: ${details?.accidentData?.partner?.name}`,
        `Samu: ${hasSamu}`,
        `Tow Truck Assistance: ${hasTruck}`,
        // @ts-ignore
        `Geographic Coordinates: ${details?.accidentData?.address?.coordX},${details?.accidentData?.address?.coordY}`,
        // @ts-ignore
        `Address: ${details?.accidentData?.address?.street}, ${details?.accidentData?.address?.number}`,
        // @ts-ignore
        `City: ${details?.accidentData?.address?.city}`,
        // @ts-ignore
        `State: ${details?.accidentData?.address?.state}`,
      ]);
      // @ts-ignore
      if (details?.accidentData.vehicle) {
        setRowboard3([
          // @ts-ignore
          `Model: ${details?.accidentData?.vehicle?.model}`,
          // @ts-ignore
          `Manufacturer: ${details?.accidentData?.vehicle?.manufacturer}`,
          // @ts-ignore
          `Manufacture Year: ${details?.accidentData?.vehicle?.manufacturerYear}`,
          // @ts-ignore
          `Chassi: ${details?.accidentData?.vehicle?.chassi}`,
          // @ts-ignore
        ]);
      }
    }
  }, [details]);

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
          setDetails({
            isDetails: false,
            isHistory: false,
            title: "",
            accidentData: {},
          })
        }
      />
      {details.isDetails ? (
        <>
          <div className={styles.painelDetails}>
            <div className={styles.title}>{details.title}</div>
            <Board title="Insured Data" row1={rowBoard1} />
            <Board title="Accident Data" row1={rowBoard2} />
            <Board title="Vehicle Data" row1={rowBoard3} />
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
                rows={tableService.length > 0 ? tableService : []}
                handleClick={(value: string, data: any) =>
                  setDetails({
                    isDetails: true,
                    isHistory: false,
                    title: value,
                    accidentData: data,
                  })
                }
              />
            ) : (
              <Table
                head1="Accident Number"
                head2="Service Date"
                head3="Summary"
                rows={tableHistory.length > 0 ? tableHistory : []}
                handleClick={(value: string, data: any) =>
                  setDetails({
                    isDetails: true,
                    isHistory: true,
                    title: value,
                    accidentData: data,
                  })
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
