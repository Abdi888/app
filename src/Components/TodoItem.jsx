import Card from "./Card";

const TodoItem = (props) => {
  return (
    <Card>
        <div className="bg-green-400 w-full rounded-md px-2 py-4 text-white">
          <h1 className="font-bold w-20 text-md uppercase block mb-4 ">
           {props.title}
          </h1>
          <p className="mb-2 font-serif">
           {props.dis}
          </p>
          <button className="bg-white -top-4 -right-2 text-green-500 rounded-full py-2 px-2">
            <i className="text-2xl bi bi-check"></i>
          </button>
        </div>
    </Card>
  );
};

export default TodoItem;
