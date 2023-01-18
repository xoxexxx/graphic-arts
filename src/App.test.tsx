import React from "react";
import { render, screen } from "@testing-library/react";
import {App} from '../src/App'

test('first render', () => {
    render(<App  />)
    const link =  screen.getByText(/CREATIQA/ig);
    expect(link).toBeTruthy()
})