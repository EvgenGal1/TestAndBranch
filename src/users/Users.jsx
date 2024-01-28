// асинхр.получ.польз.
import React, { useEffect, useState } from "react";
import axios from "axios";
// const axios = require("axios");

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
    <div>
      {users.map((user) => (
        <div key={user.id} data-testid="user-item">
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default Users;
