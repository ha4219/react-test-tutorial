const MyPage = ({user}) => {
    return (
        <div>
            {user?.name ? (
                <h1>{user.name}님 환영</h1>
            ) : (
                <h1>로그인을 해주세요 <button>로그인</button></h1>
            )}
            <h2>test 제목</h2>

            <div>
                <div>
                    <label htmlFor="username">이름</label>
                    <input type='text' id='username' value={'tom'} readOnly/>
                </div>
                <div data-testid='mydiv'/>
                <div>
                    <label htmlFor="profile">자기소개</label>
                    <textarea  id='profile'/>
                </div>
            </div>
        </div>
    )
}

export default MyPage;