import React, { useState } from "react";

const Form = () => {
    const [form, setForm] = useState(
        {name:"", 
        surname:"", 
        email: "",
        phoneNumber: ""}
        );

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {
                ... prevState,
                [name]: value
            }
        });
    };
    return (
        <form>
            <input type='text' name='name' value={form.name} onChange={handleChange}/>
            <input type='text' name='surname' value={form.surname} onChange={handleChange}/>
            <input type='email' name='email' value={form.email} onChange={handleChange}/>
            <input type='number' name='phoneNumber' value={form.phoneNumber} onChange={handleChange}/>
        </form>
    )
}

export {Form};