import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate,Navigate } from "react-router-dom";

export default function AddStudent() {
  let navigate = useNavigate();

  const [student, setStudent] = useState({
    firstname: "",
    lastname: "",
    email: "",
    grouping: "",
    number: "",
  });

  const { firstname, lastname, email, grouping, number } = student;

  const onInputChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8081/el-school/students", student);
    navigate("/home");
  };
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Register Student</h2>

            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="firstname" className="form-label">
                  firstname
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your first name"
                  name="firstname"
                  value={firstname}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                  Lastname
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your lastname"
                  name="lastname"
                  value={lastname}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  E-mail
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your e-mail address"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Grouping" className="form-label">
                  Grouping
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your grouping"
                  name="grouping"
                  value={grouping}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="number" className="form-label">
                  Number
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter your number"
                  name="number"
                  value={number}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/home">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
}