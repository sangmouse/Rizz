import { Link } from "react-router-dom";
import s from "../styles/detail.module.scss";

export default function UserDetail() {
  return (
    <div className={s.detail}>
      <div>
        <div className={s.detail__top}>
          <Link to="/" className={s["detail__logo-wrap"]}>
            <span className={s.detail__logo}></span>
          </Link>
          <div className={s.detail_heading}>Personal Information</div>
        </div>
      </div>
      <ul>
        <li>
          <span className={s.detail__icon}></span>
          <div className={s.detail__content}>
            <strong>Username</strong> : mannat.theme@gmail.com
          </div>
        </li>
        <li>
          <span className={s.detail__icon}></span>
          <div className={s.detail__content}>
            <strong>Role</strong> : mannat.theme@gmail.com
          </div>
        </li>
        <li>
          <span className={s.detail__icon}></span>
          <div className={s.detail__content}>
            <strong>Department</strong> : mannat.theme@gmail.com
          </div>
        </li>
        <li>
          <span className={s.detail__icon}></span>
          <div className={s.detail__content}>
            <strong>Address</strong> : mannat.theme@gmail.com
          </div>
        </li>
      </ul>
    </div>
  );
}
