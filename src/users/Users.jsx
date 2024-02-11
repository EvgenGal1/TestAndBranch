// асинхр.получ.польз.
import React, { useEffect, useState } from "react";
// const axios = require("axios");
import axios from "axios";
import { Link } from "react-router-dom";

const Users = () => {
  // state польз.
  const [users, setUsers] = useState([]);
  // fn получ.польз.
  const loadUsers = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log('resp ', resp);
    setUsers(resp.data);
  };
  // вызов fn ч/з usEf
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    // отрис.польз.ч/з map
    <div className="users">
      {users.map((user) => (
        // замена div > Link
        <Link to={`/users/${user.id}`} key={user.id} data-testid="user-item">
          {user.name}
        </Link>
      ))}
    </div>
  );
};

export default Users;
