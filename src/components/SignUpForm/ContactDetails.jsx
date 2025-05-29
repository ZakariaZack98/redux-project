import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setEmailError, setPhone, setPhoneError } from "../../features/slices/formSlice";
import { useNavigate } from "react-router-dom";

const ContactDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { phone, email } = useSelector((state) => state.form);
  const { phoneError, emailError } = useSelector((state) => state.form.errors);
  const isFormValid = phone.length > 0 && email.length > 0 && !phoneError && !emailError;

  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    dispatch(setPhone(value));
    if (value.length !== 11) {
      dispatch(setPhoneError("Phone number should be the length of 11"));
    } else dispatch(setPhoneError(""));
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    dispatch(setEmail(value));
    if (value.length === 0) {
      dispatch(setEmailError("Email must not be empty"));
    } else if(!isValidEmail(value)) {
      dispatch(setEmailError('Please enter a valid email address containing @ and .'))
    } else dispatch(setEmailError(''))
  };

  return (
    <>
      <h1 className="text-2xl font-medium">Step 2:</h1>
      <div className="flex flex-col">
        <label className="text-lg" htmlFor="phone">
          Phone:
        </label>
        <input
          type="number"
          id="phone"
          value={phone}
          onChange={handlePhoneChange}
          className="p-2 border border-gray-400 rounded-md"
        />
        {phoneError && <p className="text-sm text-red-500">{phoneError}</p>}
        <label className="text-lg" htmlFor="email">
          Email:
        </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="p-2 border border-gray-400 rounded-md"
        />
        {emailError && <p className="text-sm text-red-500">{emailError}</p>}
      </div>
      <button
        type="button"
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer ${
          !isFormValid ? "opacity-50" : ""
        }`}
        disabled={!isFormValid}
        onClick={() => navigate('/address')}
        >
        Next
      </button>
    </>
  );
};

export default ContactDetails;
