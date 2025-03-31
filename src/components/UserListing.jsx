import s from "../styles/user-listing.module.scss";

export default function UserListing() {
  return (
    <div className={s.list}>
      <div className={s.list__heading}>
        <div className={s.list__title}>Users</div>
        <button className={s.list__add}>
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
