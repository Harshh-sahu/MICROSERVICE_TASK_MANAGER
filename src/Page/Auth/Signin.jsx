import { Password } from "@mui/icons-material";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";

const Signin = ({togglePanel}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("login form", formData);
  };
  return (
    <div>
      <h1 className="text-lg font-bold text-center pb-8">Login</h1>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="enter your email....."
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="enter your password....."
        />
           <div item xs={12}>
                <Button
                  fullWidth
                  className="customButton"
                  type="submit"
                  sx={{ padding: "0.9rem" }}
                >
                  Login
                </Button>
              </div>
      </form>

      <div className="mt-5 flex items-center gap-2 py-5 justify-center">
        <span>don't have an account? </span>
        <Button onClick={togglePanel} >sign up</Button>
      </div>
    </div>
  );
};

export default Signin;
