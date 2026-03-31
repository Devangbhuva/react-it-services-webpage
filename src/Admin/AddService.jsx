import React, { useState } from "react";
import axios from "axios";

const AddService = () => {

  const [service, setService] = useState({
    title: "",
    description: ""
  });

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/api/service", service);

    alert("Service Added ✅");

    setService({ title: "", description: "" });
  };

  return (
    <div>
      <h2>Add Service</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Service Title"
          value={service.title}
          onChange={handleChange}
        />
        <br /><br />

        <input
          name="description"
          placeholder="Description"
          value={service.description}
          onChange={handleChange}
        />
        <br /><br />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddService;