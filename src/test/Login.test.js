import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from "../Components/Login";
import { BrowserRouter } from "react-router-dom";

test('Valid username password', async () => {
 await render(
  <BrowserRouter>
    <Login />
  </BrowserRouter>);
  const LoginText = screen.getByText(/Login/i);
  expect(LoginText).toBeInTheDocument();

  const forgotPasswordText = screen.getByText(/Forgot Password/i);
  expect(forgotPasswordText).toBeInTheDocument();

  const signUpText = screen.getByText(/Sign up/i);
  expect(signUpText).toBeInTheDocument();

  const userNameLabel = screen.getByLabelText(/User Name/i)
  expect(userNameLabel).toBeInTheDocument();
  
  fireEvent.change(userNameLabel, {target: {value: "Mini"}})  
  expect(userNameLabel.value).toBe("Mini");
  
  const passwordLabel = screen.getByLabelText(/Password/i)
  expect(passwordLabel).toBeInTheDocument();
  
  fireEvent.change(passwordLabel, {target: {value: "Mini@123"}})  
  expect(passwordLabel.value).toBe("Mini@123");

 
});

test('Invalid username password', async () => {
    await render(
     <BrowserRouter>
       <Login />
     </BrowserRouter>);
    
    const userNameInput = screen.getByLabelText('User Name');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole("button",'SIGN IN');

    fireEvent.change(userNameInput, {target: {value: ""}})
    fireEvent.change(passwordInput, {target: {value: ""}})
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Username is required')).toBeInTheDocument();
      expect(screen.getByText('Password is required')).toBeInTheDocument();
    });  
    
});

test('redirects to productlist page after successful sign in', async () => {
    await render(<BrowserRouter><Login /></BrowserRouter>);
    
    const userNameInput = screen.getByLabelText('User Name');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByText('SIGN IN');

    fireEvent.change(userNameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(window.location.pathname).toBe('/product'); 
    });
});
   
  