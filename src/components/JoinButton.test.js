import { render, screen } from "@testing-library/react"
import JoinButton from "./JoinButton"

test("19세 이하면 가입 불가", () => {
    render(<JoinButton age={10}/>);
    const btnEl = screen.getByRole('button');
    const txtEl = screen.getByRole('heading');
    expect(btnEl).toBeInTheDocument();
    expect(txtEl).toBeInTheDocument();
    expect(btnEl).toBeDisabled();
    expect(txtEl).toHaveStyle({
        color: 'red',
    })
})

test("19세 이상 가입", () => {
    render(<JoinButton age={20}/>);
    const btnEl = screen.getByRole('button');
    const txtEl = screen.getByRole('heading');
    expect(btnEl).toBeInTheDocument();
    expect(txtEl).toBeInTheDocument();
    expect(btnEl).toBeEnabled();
    expect(txtEl).toHaveStyle({
        color: 'green',
    })
})