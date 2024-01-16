import { useEffect, useState } from "react";
import { deleteTodoApi, retriveAllTodosForUsernameApi } from "./api/TodoApiService";
//import { useAuth } from "./security/AuthContext";

export function ListTodosComponent() {

    const [todos, setTodos] = useState([])

    const [message, setMessage]= useState(null)

    //const authContext = useAuth()

    //const username = authContext.username

    useEffect ( () => refreshTodos(), [] )

    function refreshTodos() {
        retriveAllTodosForUsernameApi('in28minutes')
            .then((response) => {
                setTodos(response.data)
            }) 
            .catch(error => console.log(error))
    }

    function deleteTodo(id) {
        deleteTodoApi('in28minutes', id)
            .then(
                () => {
                    setMessage(`Delete of todo with id = ${id} successful`)
                    refreshTodos()
                }

            )
            .catch(error => console.log(error))
    }

    function updateTodo(id) {
        
    }

    return (
        <div className="container">
            <h1>Things You Want to Do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map(
                            todo => (
                                <tr key={todo.id}>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
                                    <td>
                                        <button className="btn btn-warning" 
                                            onClick={ () => deleteTodo(todo.id) }> Delete
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn btn-success" 
                                            onClick={ () => updateTodo(todo.id) }> Update
                                        </button>
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
