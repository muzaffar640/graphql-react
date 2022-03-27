import React from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";
import { useState, useEffect } from "react";
import "./GetUsers.css";

const GetUsers = () => {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    console.log("Data--", data);
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);
  console.log("Users Data---->", users);

  return (
    <>
      <h3>Users Table</h3>

      <table>
        <thead>
          {" "}
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>

        {users.map((item) => {
          return (
            <>
              <tbody>
                <tr key={item.id}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default GetUsers;
