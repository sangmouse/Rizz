import { Link, useNavigate, useRoutes } from "react-router-dom";
import s from "../styles/user-listing.module.scss";
import { useEffect, useState } from "react";
import { companyMapping, roleMapping } from "../constants";

export default function UserListing() {
  const [users, setUsers] = useState(null);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    const data = await fetch("http://localhost:8080/users");
    const response = await data.json();
    setUsers(response);
  };

  const onRemove = async (id) => {
    await fetch(`http://localhost:8080/users/${id}`, { method: "DELETE" });
    await fetchUsers();
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
      {users?.length && (
        <div className={s.list__count}>{users?.length} entries</div>
      )}

      <table>
        <tr>
          <th>User</th>
          <th>Role</th>
          <th>Company</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
        {users?.map((user) => {
          return (
            <tr>
              <td>{user?.username}</td>
              <td>{roleMapping(user?.role)}</td>
              <td>{companyMapping(user?.company)}</td>
              <td>{user?.address}</td>
              <td>
                <button onClick={() => navigate(`user/${user?.id}`)}></button>
                <button
                  onClick={() => navigate(`user/edit/${user?.id}`)}
                ></button>
                <button onClick={() => onRemove(user?.id)}></button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
