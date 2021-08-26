import React , {useState , useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const Users = () => {
    const {id} = useParams();
    const [users,setUser] = useState([])


    useEffect(()=> {
        loadUsers()
    }, [])
    const loadUsers = async () => {
        const res = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(res.data)
    }
    return(

    <div className ="container">
        <Link className = "btn btn-primary my-4" to="/">Back to Home</Link>
        <h1 className="display-4">Users Id :</h1>
        <ul class="list-group w-50">
            <li class="list-group-item">Name: {users.name}</li>
            <li class="list-group-item">Username: {users.username}</li>
            <li class="list-group-item">Email: {users.email}</li>
            <li class="list-group-item">Phone: {users.phone}</li>
            <li class="list-group-item">Website: {users.website}</li>
        </ul>
    </div>
    )
}

export default Users   