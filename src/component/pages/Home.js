import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const Home = () => {
  const formatButton = (cell, row) => {
      console.log({cell,row});
    // if (row.title) {
      return (
        <div>
          <Link className="btn btn-primary me-2" to={`/users/${users.id}`}>
            View
          </Link>
          <Link
            className="btn btn-outline-primary me-2"
            to={`/users/edit/${users.id}`}
          >
            Edit
          </Link>
          <Link
            className="btn btn-danger"
            onClick={() => {
              onDelete(users.id);
            }}
          >
            Delete
          </Link>
        </div>
      );
    // }
  };
  const [users, setUser] = useState([]);
  const [columns, setColumn] = useState([
    {
      dataField: "id",
      text: "iD",
      sort: true,
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "username",
      text: "Username",
      sort: true,
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
    },
    {
      text: "Action",
      formatter: formatButton,
      sort: true,
    },
  ]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUser(result.data.reverse());
  };

  //   const productsGenerator = quantity => {
  //     const items = [];
  //     for (let i = 0; i < users; i++) {
  //       items.push({ id: i, name: `Item name ${users.name}`, username: `Item name ${users.name}` });
  //     }
  //     return items;
  //   };

  //   const products = productsGenerator(50);
  //   const products = users.map((user, index) => (
  //     <ul>
  //       <li>{index + 1}</li>
  //       <li>{user.name}</li>
  //       <li>{user.username}</li>
  //       <li>{user.email}</li>
  //       <li>
  //         <Link className="btn btn-primary me-2" to={`/users/${user.id}`}>
  //           View
  //         </Link>
  //         <Link
  //           className="btn btn-outline-primary me-2"
  //           to={`/users/edit/${user.id}`}
  //         >
  //           Edit
  //         </Link>
  //         <Link
  //           className="btn btn-danger"
  //           onClick={() => {
  //             onDelete(user.id);
  //           }}
  //         >
  //           Delete
  //         </Link>
  //       </li>
  //     </ul>
  //   ));
  const onDelete = async (id) => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>

        {/* <table className="table border shadow mt-4">
        <thead className="table-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
              users.map((user,index) => (
                  <tr>
                      <th scope="row" >{index+1}</th>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>
                        <Link className="btn btn-primary me-2" to={`/users/${user.id}`} >View</Link>
                        <Link className="btn btn-outline-primary me-2" to={`/users/edit/${user.id}`}>Edit</Link>
                        <Link className="btn btn-danger" onClick = {() => {onDelete(user.id)}}>Delete</Link>
                      </td>
                  </tr>
              ))
          }
        </tbody>
      </table> */}

        <BootstrapTable
          bootstrap4
          keyField="id"
          striped
          hover
          data={users}
          columns={columns}
          pagination={paginationFactory({ sizePerPage: 5 })}
        />
      </div>
    </div>
  );
};

export default Home;
