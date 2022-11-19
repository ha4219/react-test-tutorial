import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

describe("UserList test", () => {
    const users = ["a", 'b', 'c'];
    test("ul이 있다. ", () => {
        render(<UserList users={users}/>);
        const ulEl = screen.getByRole("list");
        expect(ulEl).toBeInTheDocument();
    })

    test("li 3개", () => {
        render(<UserList users={users}/>);
        const ulEls = screen.getAllByRole("listitem");
        expect(ulEls).toHaveLength(users.length);
    })

    test("li 없을 때", () => {
        render(<UserList users={[]}/>);
        const ulEls = screen.queryByRole("listitem");
        const ulEls1 = screen.queryAllByRole("listitem");

        expect(ulEls).not.toBeInTheDocument();
        expect(ulEls1).toHaveLength(0);
    })

    test("잠시 후 제목이 나타남", async () => {
        render(<UserList/>);
        // screen.debug();
        const titleEl = await screen.findByRole('heading', {
            name: '사용자 목록'
        }, {
            timeout: 2000
        });
        // screen.debug();
        expect(titleEl).toBeInTheDocument();
    });
})