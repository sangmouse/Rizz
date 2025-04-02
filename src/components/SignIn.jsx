import { Link } from "react-router-dom";
import s from "../styles/sign-in.module.scss";

export default function SignIn() {
  return (
    <div className={s.login}>
      <div className={s.login__container}>
        <div className={s.login__top}>
          <Link to="/">
            <span className={s.login__logo}></span>
          </Link>
          <div className={s.login__heading}>Let's Get Started Rizz</div>
          <div className={s.login__subheading}>
            Sign in to continue to Rizz.
          </div>
        </div>
        <div className={s.login__form}>
          <div>
            <p className={s.login__label}>Username</p>
            <input
              placeholder="Enter username"
              type="text"
              name="username"
              id="username"
            />
          </div>
          <div>
            <p className={s.login__label}>Password</p>
            <input
              placeholder="Enter password"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div>
            <button className={s.login__btn}>
              Log In <span className={s.login__icon}></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
