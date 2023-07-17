import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");

  function getData() {
    axios
      .get("https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube")
      .then((res) => {
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, firstname,secondname,email,city,state) => {
    localStorage.setItem("id", id);
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("secondname", secondname);
    localStorage.setItem("email", email);
    localStorage.setItem("city", city);
    localStorage.setItem("state", state);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tabledark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
        />
      </div>
      <div className="d-flex justify-content-between m-2">
        <h1>HISTORY</h1>
        <Link to="/">
          <button className="btn btn-info">Create</button>
        </Link>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"> First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">State</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.firstname}</td>
                  <td>{eachData.secondname}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.city}</td>
                  <td>{eachData.state}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.firstname,
                            eachData.secondname,
                            eachData.email,
                            eachData.city,
                            eachData.state,
                          )
                        }
                      >
                        Edit{" "}
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;