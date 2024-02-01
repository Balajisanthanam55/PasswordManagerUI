"use client"
import React from 'react';

const SignUpForm = () => {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    profileImage: null
  });

  const handleChange = evt => {
    const { name, value, type } = evt.target;
    setState(prevState => ({
      ...prevState,
      [name]: type === "file" ? evt.target.files[0] : value
    }));
  };

  const handleCancelUpload = () => {
    // Reset the profileImage state to cancel the upload
    setState(prevState => ({
      ...prevState,
      profileImage: null
    }));
  };

  const handleOnSubmit = evt => {
    evt.preventDefault();

    const { name, email, password, profileImage } = state;
    console.log(profileImage)
    alert(
      `You are signing up with name: ${name}, email: ${email}, password: ${password}, and profile image: ${profileImage ? profileImage.name : "None"}`
    );

    // Reset form fields
    setState({
      name: "",
      email: "",
      password: "",
      profileImage: null
    });
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1>Create Account</h1>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <label>
          {state.profileImage && (
            <img
              src={URL.createObjectURL(state.profileImage)}
              alt="Profile"
              style={{ maxWidth: "150px", maxHeight: "150px" }}
            />
          )}
          <input
            type="file"
            name="profileImage"
            onChange={handleChange}
            accept="image/*"
            style={{ display: "none" }} // Hide the input field
          />
          {!state.profileImage && (
            <><p> Upload your profile (Optional)</p>
            <img
              src="/assets/images/user.png"
              alt="Profile"
              style={{ maxWidth: "150px", maxHeight: "150px" }} /></>
          )}
        </label>
        {state.profileImage && (
          <><button onClick={handleCancelUpload}>
            Cancel Upload
          </button><br /></>
        )}
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
