import { Link, useNavigate, useRoutes } from "react-router-dom";
import s from "../styles/user-listing.module.scss";
import { useEffect, useState } from "react";

export default function UserListing() {
  const [users, setUsers] = useState(null);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const data = await fetch("http://localhost:8080/users");
    const response = await data.json();
    setUsers(response);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={s.list}>
      <div className={s.list__heading}>
        <div className={s.list__title}>Users</div>
        <button
          className={s.list__add}
          onClick={() => navigate("/create-new-user")}
        >
          <span>+</span>Add User
        </button>
      </div>
      <table>
        <tr>
          <th>User</th>
          <th>Role</th>
          <th>Department</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
        {users?.map((user) => {
          return (
            <tr>
              <td>{user?.username}</td>
              <td>{user?.role}</td>
              <td>{user?.company}</td>
              <td>{user?.address}</td>
              <td>
                <button onClick={() => navigate("user/1")}></button>
                <button></button>
                <button></button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
