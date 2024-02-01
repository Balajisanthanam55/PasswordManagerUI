"use client"
import { useState } from "react";
import { signIn } from 'next-auth/react'; // Add import for signIn
import { useRouter } from 'next/navigation'; // Add import for useRouter


const SignInForm = () => {
    const [state, setState] = useState({
      username: "",
        password: ""
      });
    
    const router = useRouter();
    const handleChange = evt => {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
    };

    const handleOnSubmit = async (evt) => {
        evt.preventDefault();
        const { username, password } = state;
        
        // Use signIn function to attempt login
        const result = await signIn('credentials', {
            redirect: false,
            username,
            password,
        });

        // Handle successful login or display error message
        if (!result.error) {
          router.push('/userpage')
        } else {
            alert(result.error);
        }

        // Clear form fields
        setState({
          username: "",
            password: ""
        });
    };

    return (
        <div className="form-container sign-in-container">
            <form onSubmit={handleOnSubmit}>
                <h1 className="orange_gradient text_center">Sign in</h1>
                <input
                   type="username"
                    placeholder="username"
                    name="username"
                    value={state.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={state.password}
                    onChange={handleChange}
                />
                <a href="#">Forgot your password?</a>
                <button >Sign In</button>
            </form>
        </div>
    );
}

export default SignInForm;
