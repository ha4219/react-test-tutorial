import React from 'react';

const JoinButton = ({age}) => {
    return <div>
        <button disabled={age<19}>가입</button>
        {age<19 ? (
            <h3 style={{color: 'red'}}> 성인만 가입할 수 있습니다.</h3>
        ): (
            <h3 style={{color: 'green'}}> 가입할 수 있습니다.</h3>
        )}
    </div>
}

export default JoinButton;