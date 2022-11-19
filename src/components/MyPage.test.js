import { render, screen } from "@testing-library/react"
import MyPage from "./MyPage"

test("유저가 없으면 로그인 문구와 버튼을 보여준다.", () => {
    render(<MyPage/>);
    const txtEl = screen.getByText(/로그인을 해주세요/);
    const btnEl = screen.getByRole("button");

    expect(txtEl).toBeInTheDocument();
    expect(btnEl).toBeInTheDocument();
    expect(btnEl).toHaveTextContent("로그인");  
})

test("유저가 있으면 유저 네임을 보여줌.", () => {
    render(<MyPage user={{name: 'dongha'}}/>);
    const txtEl = screen.getByText(/dongha님 환영/);

    expect(txtEl).toBeInTheDocument();
})

test("유저가 잘못들어가면 보여지는 예제.", () => {
    render(<MyPage user='dongha'/>);
    const txtEl = screen.getByText(/로그인을 해주세요/);
    const btnEl = screen.getByRole("button");

    expect(txtEl).toBeInTheDocument();
    expect(btnEl).toBeInTheDocument();
    expect(btnEl).toHaveTextContent("로그인");  
})