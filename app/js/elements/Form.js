import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    city: "",
    hips: "",
    waist: "",
    chest: "",
    height: "",
    about: "",
    hobby: "",
    face: "",
    body: "",
    leftProfile: "",
    rightProfile: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    console.log(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Krok 1 - Podstawowe informacje</h2>
      <div className="form_box">
        <label>
          Imię
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Nazwisko
          <input
            type="text"
            name="surname"
            value={form.surname}
            onChange={handleChange}
          />
        </label>
        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Telefon
          <input
            type="text"
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
          />
        </label>
        <label>
          Miasto
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
          />
        </label>
        <label>
          Data urodzenia
          <input
            type="date"
            name="birthdate"
            value={form.birthDate}
            onChange={handleChange}
          />
        </label>
      </div>
      <h2>Krok 2 - Wymiary</h2>
      <div className="form_box">
        <label>
          Biodra
          <input
            type="number"
            name="hips"
            min="50"
            value={form.hips}
            onChange={handleChange}
          />
        </label>
        <label>
          Talia
          <input
            type="number"
            name="waist"
            min="50"
            value={form.waist}
            onChange={handleChange}
          />
        </label>
        <label>
          Klatka piersiowa
          <input
            type="number"
            name="chest"
            min="50"
            value={form.chest}
            onChange={handleChange}
          />
        </label>
        <label>
          Wzrost
          <input
            type="number"
            name="height"
            min="100"
            value={form.height}
            onChange={handleChange}
          />
        </label>
      </div>
      <h2>Krok 3 - Coś o sobie</h2>
      <div className="form_box">
        <label>
          Kilka słów o sobie
          <textarea name="about" value={form.about} onChange={handleChange} />
        </label>
        <label>
          Twoje hobby
          <textarea name="hobby" value={form.hobby} onChange={handleChange} />
        </label>
      </div>
      <h2>Krok 4 - Twoje zdjęcia</h2>
      <div className="form_box">
        <label>
          Twarz
          <input
            type="file"
            name="face"
            value={form.face}
            onChange={handleChange}
          />
        </label>
        <label>
          Sylwetka
          <input
            type="file"
            name="body"
            value={form.body}
            onChange={handleChange}
          />
        </label>
        <label>
          Lewy profil
          <input
            type="file"
            name="leftProfile"
            value={form.leftProfile}
            onChange={handleChange}
          />
        </label>
        <label>
          Prawy profil
          <input
            type="file"
            name="rightProfile"
            value={form.rightProfile}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Wyślij</button>
    </form>
  );
};

export { Form };
