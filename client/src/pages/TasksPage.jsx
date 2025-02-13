import {useAuth} from "../context/AuthContext"

function TasksPage(){
    const {user} = useAuth()
    return(
        <div>Tasks page</div>
    )
}
export default TasksPage
