import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    // biar urlnya pas submit gk aneh
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/home");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text=center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input value={name} type={"text"} onChange={(e) => onInputChange(e)} className="form-control" placeholder="Enter your name" name="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input value={username} type={"text"} onChange={(e) => onInputChange(e)} className="form-control" placeholder="Enter your username" name="username" />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input value={email} type={"text"} onChange={(e) => onInputChange(e)} className="form-control" placeholder="Enter your e-mail address" name="email" />
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
