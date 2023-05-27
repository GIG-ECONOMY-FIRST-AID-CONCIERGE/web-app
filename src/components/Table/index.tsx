import React from "react";

//MATERIAL
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

//INTERFACE
import { Correct, Incorrect } from "../Icon";
import { tableProps } from "../../interfaces/table.interface";

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
    <TableContainer>
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
            Props.rows.map((row: any, index: number) => (
              <StyledTableRow key={index}>
                <TableCell
                  onClick={() =>
                    Props.handleClick(row.firstCol, row.accidentData)
                  }
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
                    fontSize: "18px",
                    color: "#333333",
                  }}
                >
                  {row.secondCol === "Yes" ? (
                    <Correct />
                  ) : row.secondCol === "No" ? (
                    <Incorrect />
                  ) : (
                    row.secondCol
                  )}
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "18px",
                    color: "#333333",
                  }}
                >
                  {row.thirdCol === "Yes" ? (
                    <Correct />
                  ) : row.thirdCol === "No" ? (
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
                      fontSize: "18px",
                      color: "#333333",
                    }}
                  >
                    {row.fifthCol === "Yes" ? (
                      <Correct />
                    ) : row.fifthCol === "No" ? (
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
    </TableContainer>
  );
};

export default MuiTable;
