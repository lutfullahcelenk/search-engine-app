import React, { useState } from "react";
import { useHistory } from "react-router";
import { engineContext } from "../context/engineContext";
import { useContext } from "react";

const AddPage = () => {
  const { AddRecord } = useContext(engineContext);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  // ARRANGING DATE

  const todayFunc = (digit) => ("0" + digit).slice(-2);
  const today = new Date();
  const date = `${todayFunc(today.getDate())} /${todayFunc(
    today.getMonth() + 1
  )} /${today.getFullYear()}`;

  // MainPage sayfasına Dönüş
  const history = useHistory();
  const backMain = () => {
    history.push("/");
  };

  // Add Record

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name || !country || !city || !email) {
      alert("All the fields must be filled appropriately....");
    } else {
      AddRecord([name, "Lorem Corps", email, date, country, city]);
    }
    setName("");
    setCountry("");
    setCity("");
    setEmail("");
  };

  return (
    <div className="addpage w-25 m-auto mt-5">
      <button
        type="submit"
        className="logobutton btn btn-outline-primary btn-lg mt-5 p-3 "
        onClick={backMain}
      >
        <i className="fas fa-arrow-left"></i> Return To Main Page
      </button>
      <form className="addpage w-md-50  text-light mt-5" onSubmit={handleAdd}>
        <div className="form-group mt-3">
          <label htmlFor="namesurname" className="h4 text-primary fs-3">
            Name Surname
          </label>
          <input
            id="namesurname"
            type="text"
            className="form-control mt-2"
            placeholder="Enter name and surname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            pattern="^[a-zA-Z\s]{4,60}$"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="country" className="h4 text-primary fs-3">
            Country
          </label>
          <input
            id="country"
            type="text"
            className="form-control mt-2"
            onChange={(e) => setCountry(e.target.value)}
            pattern="[a-zA-Z\s]+"
            value={country}
            placeholder="Enter a country"
            minLength="2"
            maxLength="40"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="city" className="h4 text-primary fs-3">
            City
          </label>
          <input
            id="city"
            type="text"
            className="form-control mt-2"
            onChange={(e) => setCity(e.target.value)}
            pattern="[a-zA-Z\s]+"
            value={city}
            placeholder="Enter a city"
            minLength="2"
            maxLength="40"
          />
        </div>
        <div className="form-group mt-3">
          <label for="email" className="h4 text-primary fs-3">
            Email
          </label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control mt-2"
            value={email}
            placeholder="Enter an e-mail (abc@xyz.com)"
          />
        </div>
        <div className="d-flex mt-5">
          <button type="submit" class="btn btn-primary w-25 addbutton">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPage;
