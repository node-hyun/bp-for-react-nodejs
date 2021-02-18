// 체인지 이벤트 설정 하기 (인풋, submit 체인지시 실행되는 함수 설정)
import React, { useState } from 'react'
import 'axios';

import { useDispatch } from 'react-redux';
import { loginUser } from "../../../_actions/user_action.js";

function LoginPage() {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("Email : ", Email);
        console.log("Password : ", Password);

        let body = {
            email: Email,
            password: Password
        }
        
        dispatch(loginUser(body))
    }

    return (

        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
        }}>
            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="pasword" value={Password} onChange={onPasswordHandler} />
                <br />
                <button>Login</button>
            </form>
        </div>

    )
}

export default LoginPage
