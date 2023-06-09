import React from "react";
import { useState } from "react";
import "./ClaimsForm.css";
import { Button, TextField, RadioGroup, Radio} from "@mui/material";
import { AuthContext } from "../shared/context/authContext";
import { useContext } from "react";
const ClaimsForm = (props) => {
  const auth = useContext(AuthContext);
  const [firstName, setFirstName] = useState({
    value: auth.firstName,
    error: false,
  });
  const [lastName, setLastName] = useState({
    value: auth.lastName,
    error: false,
  });
  const [claimAmt, setClaimAmt] = useState({
    value: "",
    error: false,
  });
  const [projectId, setProjectId] = useState({
    value: "",
    error: false,
  });
  const [myFollowUpRadioVal, setMyFollowUpRadioVal] = useState({
    value: "No",
    error: false,
  });
  const [prevClaimId, setPrevClaimId] = useState({
    value: "",
    error: false,
  });
  const onFirstNameChangeHandler = (e) => {
    const firstNameValue = e.target.value;
    setFirstName({ ...firstName, value: firstNameValue });
  };
  const onLastNameChangeHandler = (e) => {
    const lastNameValue = e.target.value;
    setLastName({ ...lastName, value: lastNameValue });
  };
  const onClaimAmtChangeHandler = (e) => {
    const claimAmtValue = e.target.value;
    setClaimAmt({ ...claimAmt, value: claimAmtValue });
  };
  const onProjectIdChangeHandler = (e) => {
    const projectIdVal = e.target.value;
    setProjectId({ ...projectId, value: projectIdVal });
  };
  const onMyFollowUpHandler = (e) => {
    setMyFollowUpRadioVal({ ...myFollowUpRadioVal, value: e.target.value });
  };

  const onPrevClaimHandler = (e) => {
    setPrevClaimId({ ...prevClaimId, value: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (firstName.value === "") {
      setFirstName({ ...firstName, error: true });
    }
    if (lastName.value === "") {
      setLastName({ ...lastName, error: true });
    }
    if (claimAmt.value === "") {
      setClaimAmt({ ...claimAmt, error: true });
    }
    if (projectId.value === "") {
      setProjectId({ ...projectId, error: true });
    }
  };
  return (
    <form className="form" onSubmit={onSubmitHandler}>
      <TextField
        label="First Name"
        color="secondary"
        value={firstName.value}
        onChange={onFirstNameChangeHandler}
        error={firstName.error}
      />
      <TextField
        label="Last Name"
        color="secondary"
        value={lastName.value}
        onChange={onLastNameChangeHandler}
        error={lastName.error}
      />
      <TextField
        label="Claim Amount"
        color="secondary"
        value={claimAmt.value}
        onChange={onClaimAmtChangeHandler}
        error={claimAmt.error}
      />
      <TextField
        label="Project ID"
        color="secondary"
        value={projectId.value}
        onChange={onProjectIdChangeHandler}
        error={projectId.error}
        
      />
      <label>Is this a follow up?</label>
      <RadioGroup row defaultValue={myFollowUpRadioVal.value} onChange={onMyFollowUpHandler}>
        <label>Yes<Radio value="Yes"/></label>
        <label>No<Radio value="No"/></label>
      </RadioGroup>
      <TextField
        disabled={myFollowUpRadioVal.value === "No" && true}
        label="Prev Claim ID"
        color="secondary"
        value={prevClaimId.value}
        onChange={onPrevClaimHandler}
        error={prevClaimId.error}
      />
      <Button type="submit" variant="contained">
        Save/Create
      </Button>

      {/* If yes, enable field below */}
    </form>
  );
};

export default ClaimsForm;
