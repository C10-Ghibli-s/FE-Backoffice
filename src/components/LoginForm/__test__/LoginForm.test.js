/**
 * @jest-environment jsdom
 */
 import "@testing-library/jest-dom/extend-expect";
 import { render, screen } from "@testing-library/react";
 import React from "react";
 import LoginForm from '../index';
 
 describe('<LoginForm/>', () => {
     test('Rendering form', () => {
       render(<LoginForm/>);
       const loginFormField__username = screen.getByPlaceholderText('Username');
       const loginFormField__password = screen.getByPlaceholderText('Password');
       const loginFormSubmitButton = screen.getByDisplayValue('Login');

       expect(loginFormSubmitButton).toBeInTheDocument();
       expect(loginFormField__username).toBeInTheDocument();
       expect(loginFormField__password).toBeInTheDocument();
     });
 });