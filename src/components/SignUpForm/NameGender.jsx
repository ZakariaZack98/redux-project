import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstName,
  setLastName,
  setGender,
  setFirstNameError,
  setLastNameError,
  setGenderError,
} from "../../features/slices/formSlice";
import { useNavigate } from "react-router-dom";

const NameGender = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { firstName, lastName, gender } = useSelector((state) => state.form);
  const { firstNameError, lastNameError, genderError } = useSelector((state) => state.form.errors);
  const isFormValid = firstName.length > 0 && lastName.length > 0 && gender.length > 0;

  const handleFirstNameChange = (e) => {
    dispatch(setFirstName(e.target.value));
    if (e.target.value.trim().length === 0) {
      dispatch(setFirstNameError("First name must not be empty"));
    } else dispatch(setFirstNameError(""));
  };

  const handleLastNameChange = (e) => {
    dispatch(setLastName(e.target.value));
    if (e.target.value.trim().length === 0) {
      dispatch(setLastNameError("Last name must not be empty"));
    } else dispatch(setLastNameError(""));
  };

  const handleGenderChange = (e) => {
    dispatch(setGender(e.target.value));
    if (e.target.value === "") {
      dispatch(setGenderError("Please select a gender"));
    } else dispatch(setGenderError(""));
  };


  return (
    <>
      <h2 className="text-2xl font-medium">Step 1:</h2>
      <div className="flex flex-col">
        <label className="text-lg" htmlFor="firstName">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
          className="p-2 border border-gray-400 rounded-md"
        />
        {firstNameError && <p className="text-sm text-red-500">{firstNameError}</p>}
      </div>
      <div className="flex flex-col mt-4">
        <label className="text-lg" htmlFor="lastName">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
          className="p-2 border border-gray-400 rounded-md"
        />
        {lastNameError && <p className="text-sm text-red-500">{lastNameError}</p>}
      </div>
      <div className="flex flex-col mt-4">
        <label className="text-lg" htmlFor="gender">
          Gender:
        </label>
        <div className="flex gap-4">
          <div>
            <input type="radio" id="male" value="male" checked={gender === "male"} onChange={handleGenderChange} />
            <label className="text-lg" htmlFor="male">
              Male
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              value="female"
              checked={gender === "female"}
              onChange={handleGenderChange}
            />
            <label className="text-lg" htmlFor="female">
              Female
            </label>
          </div>
        </div>
      </div>
      {genderError && <p className="text-sm text-red-500">{genderError}</p>}
      <button
        type="button"
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer ${
          !isFormValid ? "opacity-50" : ""
        }`}
        disabled={!isFormValid}
        onClick={() => navigate('/contact')}
        >
        Next
      </button>
    </>
  );
};

export default NameGender;
