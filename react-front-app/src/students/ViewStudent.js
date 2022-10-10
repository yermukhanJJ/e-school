import axios from "axios";
import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function ViewStudent() {
  const [student, setStudent] = useState({
    firstname: "",
    lastname: "",
    email: "",
    grouping: "",
    number: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const loadStudent = async () => {
    const result = await axios.get(`http://localhost:8081/el-school/students/${id}`);
    setStudent(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Student Details</h2>

          <div className="card">
            <div className="card-header">
              Details of student id : {student.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>First Name:</b>
                  {student.firstname}
                </li>
                <li className="list-group-item">
                  <b>Last Name:</b>
                  {student.lastname}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {student.email}
                </li>
                <li className="list-group-item">
                  <b>Grouping:</b>
                  {student.grouping}
                </li>
                <li className="list-group-item">
                  <b>Number:</b>
                  {student.number}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/home"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}