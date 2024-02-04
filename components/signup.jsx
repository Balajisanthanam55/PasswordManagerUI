"use client"
import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const SignUpForm = () => {
  const [state, setState] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const [open, setOpen] = React.useState(false);
  const [dialogContent, setDialogContent] = React.useState({
    title: '',
    text: '',
  });
 

  const handleChange = evt => {
    const { name, value, type } = evt.target;
    setState(prevState => ({
      ...prevState,
      [name]: type === "file" ? evt.target.files[0] : value
    }));
  };


  const handleOnSubmit = async evt => {
    evt.preventDefault();

    const { username, email, password } = state;
    const response = await fetch("http://localhost:8080/api/auth/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ username, email, password })
                });

    if (response.ok) {
    const responseData = await response.json();
    if (responseData.id) {
      setState({ username: "", email: "", password: "" });
      setDialogContent({
        title: 'Signup Successful',
        text: 'Your account has been created successfully.',
      });
      setOpen(true);
    } else if (responseData.Failed) {
      
      setDialogContent({
        title: 'Signup Failed',
        text: responseData.Failed,
      });
      setOpen(true);
      
    }          
      } 
    else {
       // If the response is not successful, throw an error
        throw new Error(`Signup failed with status: ${response.status}`);
      }
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit}>
        <h1 className='orange_gradient text_center'>Create Account</h1>
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
          placeholder="username"
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
        <button>Sign Up</button>
      </form>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{dialogContent.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {dialogContent.text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SignUpForm;
