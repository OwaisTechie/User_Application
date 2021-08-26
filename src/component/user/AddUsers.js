import axios from "axios"
import React , {useState} from "react"
import { useHistory } from "react-router"
const AddUsers = () => {
    const history = useHistory();
    const [users, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })

    const onInputChange = (e) => {
        setUser({...users,[e.target.name]:e.target.value})
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:3001/users", users)
        history.push("/")
    }
    const {name , username , email , phone , website} = users 

    
    return (
    //     <div className = "">

    //     <form className= "border shadow">
            
    //         <h1>Add Users</h1>
    //     <div className="form-floating mb-3">
    //     <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
    //     <label htmlFor="floatingInput">Email address</label>
    //   </div>
    //   <div className="form-floating">
    //     <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
    //     <label htmlFor="floatingPassword">Password</label>
    //   </div>

    //     </form>
    //     </div>

    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit = {e => {onSubmit(e)}}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange= { e => {onInputChange(e)}}
            />
          </div>
          <div className="form-group mt-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange= { e => {onInputChange(e)}}
            />
          </div>
          <div className="form-group mt-4">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange= { e => {onInputChange(e)}}
            />
          </div>
          <div className="form-group mt-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange= { e => {onInputChange(e)}}
            />
          </div>
          <div className="form-group mt-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange= { e => {onInputChange(e)}}
            />
          </div>
          <div class="d-grid gap-2">
          <button className="btn btn-primary btn-block  mt-4">Add User</button>
          </div>
        </form>
      </div>
    </div>
        
    )
}
    

export default AddUsers