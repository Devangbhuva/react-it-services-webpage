import React, { useEffect, useState } from "react";
import axios from "axios";

const Services = () => {

  const [services, setServices] = useState([]);

  const [editData, setEditData] = useState(null);
  const getServices = async () => {
    const res = await axios.get("http://localhost:5000/api/services");
    setServices(res.data);
  };

  useEffect(() => {
    getServices();
  }, []);

  const deleteService = async (id) => {
    await axios.delete(`http://localhost:5000/api/service/${id}`);
    getServices();
  };

  const updateService = async () => {
    await axios.put(`http://localhost:5000/api/service/${editData._id}`, editData);
    alert("Updated ✅");
    setEditData(null);
    getServices();
  };

  return (
    <div>
      <h2>Services</h2>

      {services.map(s => (
        <div key={s._id}>
          <h4>{s.title}</h4>
          <p>{s.description}</p>

          <button onClick={() => deleteService(s._id)}>
            Delete
          </button>

          <hr />
        </div>
      ))}

    </div>
  );
};

export default Services;