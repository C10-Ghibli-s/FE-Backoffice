/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import LoginFacebookButton from '../index';

describe('<LoginFacebookButton/>', () => {
    test('Render Facebook Login Button', () => {
        render(<LoginFacebookButton/>);
        const FbLoginButton = screen.getByRole('button');
        expect(FbLoginButton).toBeInTheDocument();
    });
});