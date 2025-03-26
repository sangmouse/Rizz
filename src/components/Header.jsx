import { Link } from "react-router-dom";
import s from "../styles/header.module.scss";

export default function Header() {
  return (
    <div>
      <div className={s.header}>
        <div>
          <Link to="/" className={s.header__icon}>
            <span className={s.header__logo}></span>
            <span className={s.header__name}></span>
          </Link>
        </div>
        <div className={s.header__content}>
          <div>
            Good Morning, <strong>James!</strong>
          </div>
          <div className={s.header__log}>
            <Link to="/signin">Log In</Link>
            <span className={s["header__ic-log"]}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
