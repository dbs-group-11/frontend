import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

export default function UnderlingsExpenseTable() {
  const employeeClaimHeader = [
    "Employee ID",
    "Project ID",
    "Claim ID",
    "Currency",
    "Claim Amount",
    "Status",
  ];
  const dummyData = [
    {
      employeeId: "1",
      projectId: "1",
      claimId: "1",
      currency: "SGD",
      claimAmt: "1234",
      status: "pending",
    },
    {
      employeeId: "1",

      projectId: "1",
      claimId: "2",
      currency: "SGD",
      claimAmt: "1234",
      status: "pending",
    },
    {
      employeeId: "1",

      projectId: "1",
      claimId: "3",
      currency: "SGD",
      claimAmt: "1234",
      status: "pending",
    },
  ]
  const [employeeClaimData, setEmployeeClaimData] = React.useState(dummyData);
  const onSupervisorActionHandler = async (empId,claimId) => {
//after approving or rejecting claim http req
//then filter data
const filteredData = employeeClaimData.filter((el)=>el.claimId!=claimId)
setEmployeeClaimData(filteredData)
// console.log(employeeClaimData)
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {employeeClaimHeader.map((header, index) => {
              return (
                <TableCell key={index} align="right">
                  {header}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeClaimData.map((row) => (
            <TableRow
              key={row.projectId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.employeeId}</TableCell>

              <TableCell align="right">{row.projectId}</TableCell>
              <TableCell align="right">{row.claimId}</TableCell>
              <TableCell align="right">{row.currency}</TableCell>
              <TableCell align="right">{row.claimAmt}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">
                <Button onClick={()=>onSupervisorActionHandler(row.employeeId,row.claimId)}>Approve</Button>
                <Button>Reject</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
