import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { loginState, tokenAtom } from '../atom';
import { useSetRecoilState } from 'recoil';
import { useState } from 'react';

interface IFrom {
  email: string;
  password: string;
}

function Auth() {
  const setIsLoggedIn = useSetRecoilState(loginState);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IFrom>();

  const onSubmit = (data: IFrom) => {
    const { email, password } = data;

    axios
      .post('http://localhost:8080/users/create', {
        email,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem('login-token', response.data.token);
          setToken(response.data.token);
        }
      })
      .catch((response) => {
        console.log(response);
      });
    setIsLoggedIn(true);
    navigate('/');
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register('email', {
            required: '필수 응답 항목입니다.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: '이메일 형식이 아닙니다',
            },
          })}
        />
        <p>{errors.email && errors.email.message}</p>
        <input
          type="password"
          {...register('password', {
            required: '필수 응답 항목입니다.',
            minLength: {
              value: 8,
              message: '비밀번호는 8자 이상입니다.',
            },
          })}
        />
        <p>{errors.password && errors.password.message}</p>
        <input type="submit" disabled={isSubmitting} value="로그인" />
      </form>
    </div>
  );
}

export default Auth;
