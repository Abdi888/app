import { useState } from "react";
import Card from "./Card";
import TodoItem from "./TodoItem";

const TodoForm = (props) => {
  const [title, setTitle] = useState("");
  const [dis, setDis] = useState("");
  const [value, setValue] = useState("");
  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  const disChange = (event) => {
    setDis(event.target.value);
  };
  const SumitForm = (event) => {
    event.preventDefault();
    const userInput = {
      id: Math.random(),
      title: title,
      dis: dis,
    };
    setValue();
    props.onSave(userInput);
  };
  return (
    <Card>
      <div className="flex justify-center flex-col items-center">
        <h1 className="font-bold border-b-2 mb-4 text-2xl border-b-green-300">
          Tasks List
        </h1>
        <form onSubmit={SumitForm} className="w-6/12 border py-4 px-2">
          <input maxLength={15} required onChange={titleChange} type={"text"}
          value={title} placeholde="taskTitle" className="outline-none rounded w-full p-2" />
           
          <textArea
            required
            onChange={disChange}
            placeholder="Task Discription"
            className="block rounded outline-none max-h-96 h-32 w-full mt-2 p-2"
            name=""
            id=""
            value={dis}
          ></textArea>
          <div className="flex gap-10">
            <button
              type="submit"
              className="bg-green-300 rounded hover:bg-green-400 w-full text-white py-2 px-4 mt-4"
            >
              <i className="bi bi-plus-square"></i> Add List
            </button>
            <button
              type="reset"
              className="bg-red-300 rounded hover:bg-red-400 w-full text-white py-2 px-4 mt-4"
            >
              <i className="bi bi-x"></i> Cancel
            </button>
          </div>
        </form>
      </div>

      <div className="grid grid-cols-3 gap-4 w-6/12 mx-auto">
        {props.data.map((item) => {
          return <TodoItem title={item.title} key={item.id} dis={item.dis} />;
        })}
      </div>
    </Card>
  );
};

export default TodoForm;
