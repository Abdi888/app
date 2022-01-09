import Card from "./Card";
import TodoForm from "./TodoForm";

const Main = (props)=>{
    const onSaveData = (data)=>{
        props.saveData(data)
    }

     return (
        <Card>
            <TodoForm data={props.data} onSave={onSaveData}/>
        </Card>
    )
}

export default Main;

