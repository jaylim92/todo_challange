import { useForm } from 'react-hook-form';

interface IFrom {
  email: string;
  password: string;
}

function Auth() {
  const { register, handleSubmit } = useForm<IFrom>();
  const onSubmit = (data: IFrom) => {
    const { email, password } = data;
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('email', {
            required: '필수 응답 항목입니다.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: '이메일 형식이 아닙니다',
            },
          })}
        />
        <input
          {...register('password', {
            required: '필수 응답 항목입니다.',
            minLength: {
              value: 8,
              message: '필수 응답 항목입니다.',
            },
          })}
        />
        <input type="submit" value="로그인" />
      </form>
    </div>
  );
}

export default Auth;
