import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    // setEnteredUsername("");
    // setEnteredAge("");
  };

  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

{
  (reffId = "2812"),
    (source = "BNI"),
    (firstName = "ANDHIKA"),
    (lastName = "TESTING"),
    (mobilePhoneNo = "081290909092"),
    (email = "andhika.testing@gmail.com"),
    (nationality = "01"),
    (idNo = "3215115503940010"),
    (birthPlace = "DKI JAKARTA"),
    (birthDate = "02012000"),
    (gender = "L"),
    (religion = "1"),
    (motherName = "MOTHER TESTING"),
    (education = "5"),
    (maritalStatus = "M"),
    (spouseName = "test"),
    (ocpType = "CIVIL SERVANT"),
    (lineOfBussiness = ""),
    (idNoPlace = "null"),
    (idNoDate = "15092022"),
    (idAddress1 = "JL CINTA NO 25"),
    (idAddress2 = "JL CINTA NO 25"),
    (idVillage = "null"),
    (idSubditrict = "null"),
    (idCityId = "3174"),
    (idProvId = "3100"),
    (idZipCode = "12270"),
    (isHomeAdr = "1"),
    (homeAddress1 = ""),
    (homeAddress2 = ""),
    (homeVillage = ""),
    (homeSubdistrict = ""),
    (homeCityId = ""),
    (homeProvId = ""),
    (homeZipCode = ""),
    (homeCountry = ""),
    (npwp = "597136779526113"),
    (ocpName = "OTHERS"),
    (ocpPosition = "OTHERS"),
    (ocpAddress1 = ""),
    (ocpAddress2 = ""),
    (ocpVillage = ""),
    (ocpSubdistrict = ""),
    (ocpCityId = ""),
    (ocpProvId = ""),
    (ocpZipCode = ""),
    (ocpCountry = "360"),
    (sourceIncome = "6"),
    (monthlyIncome = "9"),
    (grossIncome = "9"),
    (bankId = "BNI"),
    (bankAccName = "ANDHIKA TESTING"),
    (bankAccNo = "1011562985"),
    (riskProfileScore = "70"),
    (investmentObj = "2"),
    (investmentPeriod = "LONG TERM"),
    (isBo = "0"),
    (accType = "01"),
    (flagIPO = "1"),
    (sid = "");
}
