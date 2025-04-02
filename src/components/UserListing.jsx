import { useNavigate, useRoutes } from "react-router-dom";
import s from "../styles/user-listing.module.scss";

export default function UserListing() {
  const navigate = useNavigate();

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
        <tr>
          <td>Simon Young</td>
          <td>Developer</td>
          <td>VTI</td>
          <td>Ha Noi</td>
          <td>
            <button></button>
            <button></button>
            <button></button>
          </td>
        </tr>
        <tr>
          <td>Simon Young</td>
          <td>Developer</td>
          <td>VTI</td>
          <td>Ha Noi</td>
          <td>
            <button></button>
            <button></button>
            <button></button>
          </td>
        </tr>
        <tr>
          <td>Simon Young</td>
          <td>Developer</td>
          <td>VTI</td>
          <td>Ha Noi</td>
          <td>
            <button></button>
            <button></button>
            <button></button>
          </td>
        </tr>
      </table>
    </div>
  );
}
