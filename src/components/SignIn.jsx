import s from "../styles/sign-in.module.scss";

export default function SignIn() {
  return (
    <div className={s.login}>
      <div>
        <div>
          <div className={s.login__logo}></div>
          <div className={s.login__heading}>Let's Get Started Rizz</div>
          <div className={s.login__subheading}>
            Sign in to continue to Rizz.
          </div>
        </div>
        <div>
          <div>
            <p>Username</p>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <p>Password</p>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <button>Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
