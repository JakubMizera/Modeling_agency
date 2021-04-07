import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
    city: "",
    birthDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };
  return (
    <form>
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
    </form>
  );
};

export { Form };
