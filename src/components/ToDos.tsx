import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { IForm, toDoState, tokenAtom } from '../atom';

function ToDos() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = async ({ title, content }: IForm) => {
    const token = localStorage.getItem('login-token');
    setToDos((oldToDos) => [
      { title, content, id: Date.now().toString(), category: 'TO_DO' },
      ...oldToDos,
    ]);
    setValue('content', '');

    try {
      const response = await axios.post(
        'http://localhost:8080/todos',
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>To Dos</h1>
      <form onSubmit={handleSubmit(handleValid)}>
        <input {...register('title')} placeholder="Write a title" />
        <input {...register('content')} placeholder="Write a content" />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <p>Title : {toDo.title}</p>
            <p>{toDo.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDos;
