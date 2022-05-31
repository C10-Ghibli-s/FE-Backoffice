/**
 * @jest-environment jsdom
 */
 import "@testing-library/jest-dom/extend-expect";
 import { render, screen } from "@testing-library/react";
 import React from "react";
 import LoginTwitterButton from '../index';
 
 describe('<LoginTwitterButton/>', () => {
     test('Render Facebook Login Button', () => {
         render(<LoginTwitterButton/>);
         const TwitterLoginButton = screen.getByRole('button');
         expect(TwitterLoginButton).toBeInTheDocument();
     });
 });