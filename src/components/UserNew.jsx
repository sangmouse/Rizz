import { Link } from "react-router-dom";
import s from "../styles/user-new.module.scss";

export default function UserNew() {
  return (
    <div className={s.form}>
      <div className={s.form__logo}>
        <Link to="/">
          <span></span>
        </Link>
      </div>
      <div className={s.form__inner}>
        <div className={s.form__item}>
          <div className={s.form__label}>Username</div>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
          />
        </div>
        <div className={s.form__item}>
          <div className={s.form__label}>Address</div>
          <input type="text" placeholder="Address" />
        </div>
        <div className={s.form__item}>
          <div className={s.form__label}>Role</div>
          <select name="role" id="role">
            <option value="dev">Developer</option>
            <option value="ba">Business Analyst</option>
            <option value="pm">Project Manager</option>
            <option value="tester">Tester</option>
          </select>
        </div>
        <div className={s.form__item}>
          <div className={s.form__label}>Company</div>
          <select name="role" id="role">
            <option value="vti">VTI Group</option>
            <option value="fsoft">FPT Software</option>
            <option value="cmc">CMC Global</option>
            <option value="viettel">Viettel</option>
          </select>
        </div>
        <div className={s["form__btn-group"]}>
          <button className={s.form__btn}>Submit</button>
          <Link to="/" className={s.form__btn}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
