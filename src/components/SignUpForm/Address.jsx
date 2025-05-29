import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAddress, setAddressError, setZipCode, setZipCodeError } from "../../features/slices/formSlice";

const Address = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { address, zipCode } = useSelector((state) => state.form);
  const { addressError, zipCodeError } = useSelector((state) => state.form.errors);
  const isFormValid = address.length > 8 && zipCode.length === 4;

  const handleAddressChange = (e) => {
    const value = e.target.value;
    dispatch(setAddress(value));
    if (value.length < 8) {
      dispatch(setAddressError("Please provide a valid address minimum length of 8 charecter"));
    } else dispatch(setAddressError(""));
  };

  const handleZipCodeChange = (e) => {
    const value = e.target.value;
    dispatch(setZipCode(value));
    if (value.length !== 4) {
      dispatch(setZipCodeError("Zip code must be of 4 charecters"));
    } else dispatch(setZipCodeError(''));
  };

  return (
    <>
      <h1 className="text-2xl font-medium">Step 3:</h1>
      <div className="flex flex-col">
        <label className="text-lg" htmlFor="address">
          Full Address:
        </label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={handleAddressChange}
          className="p-2 border border-gray-400 rounded-md"
        />
        {addressError && <p className="text-sm text-red-500">{addressError}</p>}
        <label className="text-lg" htmlFor="zipCode">
          Zip code:
        </label>
        <input
          type="number"
          id="zipCode"
          value={zipCode}
          onChange={handleZipCodeChange}
          className="p-2 border border-gray-400 rounded-md"
        />
        {zipCodeError && <p className="text-sm text-red-500">{zipCodeError}</p>}
      </div>
      <button
        type="button"
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer ${
          !isFormValid ? "opacity-50" : ""
        }`}
        disabled={!isFormValid}
        onClick={() => navigate('/summery')}
        >
        Next
      </button>
    </>
  );
};

export default Address;
