import { atom } from "recoil";

export interface IForm {
    title: string;
    content: string;
  }
  
export interface IToDo {
    title: string;
    content: string;
    id: string;
    category: 'TO_DO' | 'DOING' | 'DONE';
  }
  
  export const toDoState = atom<IToDo[]>({
    key: 'toDo',
    default: [],
  });

  export const loginState = atom({
    key: 'login',
    default: true,
  });
  
  export const tokenAtom = atom({
    key: 'token',
    default: '',
  });
  