import React from "react";

//MATERIAL
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

//INTERFACE
import { tableProps } from "@/interfaces/table.interface";
import { Correct, Incorrect } from "../Icon";

const MuiTable: React.FC<tableProps> = ({ ...Props }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "white",
      fontSize: "18px",
      fontWeight: 700,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: "18px",
    },
  }));

  const StyledTableRow = styled(TableRow)(() => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#F6F6F6",
      fontSize: "18px",
    },
    "&th": {
      backgroundColor: "black",
    },
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <StyledTableCell>{Props.head1}</StyledTableCell>
          <StyledTableCell>{Props.head2}</StyledTableCell>
          <StyledTableCell>{Props.head3}</StyledTableCell>
          {Props.head4 && <StyledTableCell>{Props.head4}</StyledTableCell>}
          {Props.head5 && <StyledTableCell>{Props.head5}</StyledTableCell>}
        </TableRow>
      </TableHead>
      <TableBody>
        {Props.rows &&
          Props.rows.map((row) => (
            <StyledTableRow key={row.firstCol}>
              <TableCell
                onClick={() => Props.handleClick(row.firstCol)}
                component="th"
                scope="row"
                sx={{
                  fontSize: "18px",
                  color: "#027BC2",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                {row.firstCol}
              </TableCell>
              <TableCell
                sx={{
                  paddingLeft:
                    row.thirdCol === "Sim" || row.thirdCol === "Não"
                      ? "20px"
                      : "",
                  fontSize: "18px",
                  color: "#333333",
                }}
              >
                {row.secondCol === "Sim" ? (
                  <Correct />
                ) : row.secondCol === "Não" ? (
                  <Incorrect />
                ) : (
                  row.secondCol
                )}
              </TableCell>
              <TableCell
                sx={{
                  paddingLeft:
                    row.thirdCol === "Sim" || row.thirdCol === "Não"
                      ? "80px"
                      : "",
                  fontSize: "18px",
                  color: "#333333",
                }}
              >
                {row.thirdCol === "Sim" ? (
                  <Correct />
                ) : row.thirdCol === "Não" ? (
                  <Incorrect />
                ) : (
                  row.thirdCol
                )}
              </TableCell>
              {Props.head4 && (
                <TableCell
                  sx={{
                    fontSize: "18px",
                    color: "#333333",
                  }}
                >
                  {row.fourthCol}
                </TableCell>
              )}
              {Props.head5 && (
                <TableCell
                  align="left"
                  sx={{
                    paddingLeft: "90px",
                    fontSize: "18px",
                    color: "#333333",
                  }}
                >
                  {row.fifthCol === "Sim" ? (
                    <Correct />
                  ) : row.fifthCol === "Não" ? (
                    <Incorrect />
                  ) : (
                    row.fifthCol
                  )}
                </TableCell>
              )}
            </StyledTableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default MuiTable;
