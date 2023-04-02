import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { GetStaticProps, NextPage } from 'next';
import { ITodo, TodoManger } from '@/utils';
import Router from 'next/router';
import { parseJwt } from '@/utils/helpers';

const inter = Inter({ subsets: ['latin'] })


interface Props {
  todos: { _id: string, description: string, isCompleted: boolean }[]
}
export default function Home({ todos: tds }: Props) {
  const [todos, setTodos] = useState(tds);



  useEffect(() => {
    if (!localStorage.getItem('qid_token')) {
      Router.push("/login");
    }

    //in case user login but not verified =>
    // const user = parseJwt(localStorage.getItem('qid_token')!);
    // if (!user.isVerified) Router.push({
    //   pathname: "verify",
    //   query: {
    //     phone: user.phoneNumber
    //   }
    // });

  }, [])

  const Header = () => {
    const handleLogout = () => {
      localStorage.removeItem('qid_token');
      localStorage.removeItem('phone');
      window.location.assign("login");

    };

    return (
      <header className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-white text-xl font-bold">Todo-app</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            {/* <FiLogOut className="inline-block mr-2" /> */}
            Logout
          </button>
        </div>
      </header>
    );
  };
  const TodoList = () => {
    // const [todos, setTodos] = useState(todos);

    const addTodo = (text: string) => {
      const newTodo = { _id: "3", description: text, isCompleted: false };
      setTodos([...todos, newTodo]);
    };

    const toggleTodo = async (id: string) => {
      const currentTodo = todos.find(t => t._id === id);
      const updatedTodos = todos.map((todo: ITodo) => {
        if (todo._id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
      await TodoManger.upsertTodo({ _id: id, description: currentTodo?.description, isCompleted: !currentTodo?.isCompleted });
      setTodos(updatedTodos);
    };

    const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const input = e.currentTarget.todoInput;
      const text = input.value.trim();
      await TodoManger.upsertTodo({ description: text });
      if (text) {
        addTodo(text);
        input.value = "";
      }
    };

    return (
      <div className="container mx-auto mt-10">
        <h1 className="text-center text-2xl font-bold mb-5">Todo List</h1>
        <form onSubmit={handleAddTodo} className="mb-5">
          <input
            type="text"
            name="todoInput"
            placeholder="Add a new todo"
            className="w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </form>
        <ul>
          {todos.map((todo: ITodo) => (
            <li
              key={todo._id}
              className={`${todo.isCompleted ? "line-through text-gray-400" : ""
                } py-2`}
              onClick={() => toggleTodo(todo._id)}
            >
              {todo.description}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <>
      <Head>
        <title>Todos web app</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Header />
        <TodoList />
      </main>
    </>
  )
}



export const getStaticProps: GetStaticProps = async ({ }) => {
  const res = await TodoManger.getAll();
  return {
    props: {
      todos: res
    }
  }
}