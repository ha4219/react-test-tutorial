import React, { useEffect, useState } from 'react';

const UserList = ({users}) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), 500);
    }, []);
    return <ul>
        {show && <h1>사용자 목록</h1>}
        {users?.map(user => <li key={user}>{user}</li>)}
    </ul>
}

export default UserList;