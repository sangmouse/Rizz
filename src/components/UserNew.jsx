import { Link, useNavigate, useParams } from "react-router-dom";
import s from "../styles/user-new.module.scss";
import { useEffect, useState } from "react";

export default function UserNew() {
  const [userDetail, setUserDetail] = useState(null);
  const [msgError, setMsgError] = useState("");
  const [msgSuccess, setMsgSuccess] = useState("");
  const [user, setUser] = useState({
    username: "",
    address: "",
    role: "developer",
    company: "vti",
  });
  const navigate = useNavigate();
  const params = useParams();
  const id = params?.id;
  let timeoutID = null;

  const onSubmit = () => {
    clearTimeout(timeoutID);
    if (!user.username?.trim()?.length || !user?.address?.trim()?.length) {
      setMsgError("Please fill required field!");
      return;
    }
    if (!userDetail) {
      fetch("http://localhost:8080/users", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((res) => {
        setMsgSuccess("Created user successfully");
        timeoutID = setTimeout(() => navigate("/"), 1000);
      });
    } else {
      fetch(`http://localhost:8080/users/${id}`, {
        method: "PATCH",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((res) => {
        setMsgSuccess("Updated user successfully");
        timeoutID = setTimeout(() => navigate("/"), 1000);
      });
    }
  };

  const fetchUserDetail = async () => {
    const data = await fetch(`http://localhost:8080/users/${params?.id}`);
    const res = await data.json();
    setUserDetail(res);
  };

  useEffect(() => {
    if (id) {
      fetchUserDetail();
    }
  }, []);

  useEffect(() => {
    if (userDetail) {
      setUser({
        ...user,
        username: userDetail?.username,
        address: userDetail?.address,
        role: userDetail?.role,
        company: userDetail?.company,
      });
    }
  }, [userDetail]);

  return (
    <div className={s.form}>
      {msgError && <div className={s.form__error}>{msgError}</div>}
      {msgSuccess && (
        <div className={`${s.form__error} ${s.form__success}`}>
          {msgSuccess}
        </div>
      )}
      <div className={s.form__inner}>
        <div className={s.form__item}>
          <div className={s.form__label}>Username</div>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={user?.username}
            onChange={(e) => {
              setMsgError("");
              setUser({
                ...user,
                username: e.target.value,
              });
            }}
          />
        </div>
        <div className={s.form__item}>
          <div className={s.form__label}>Address</div>
          <input
            type="text"
            placeholder="Address"
            value={user?.address}
            onChange={(e) => {
              setMsgError("");
              setUser({
                ...user,
                address: e.target.value,
              });
            }}
          />
        </div>
        <div className={s.form__item}>
          <div className={s.form__label}>Role</div>
          <select
            value={user?.role}
            onChange={(e) => {
              setMsgError("");
              setUser({
                ...user,
                role: e.target.value,
              });
            }}
          >
            <option value="dev">Developer</option>
            <option value="ba">Business Analyst</option>
            <option value="pm">Project Manager</option>
            <option value="tester">Tester</option>
          </select>
        </div>
        <div className={s.form__item}>
          <div className={s.form__label}>Company</div>
          <select
            value={user?.company}
            onChange={(e) => {
              setMsgError("");
              setUser({
                ...user,
                company: e.target.value,
              });
            }}
          >
            <option value="vti">VTI Group</option>
            <option value="fsoft">FPT Software</option>
            <option value="cmc">CMC Global</option>
            <option value="viettel">Viettel</option>
          </select>
        </div>
        <div className={s["form__btn-group"]}>
          <button className={s.form__btn} onClick={onSubmit}>
            Submit
          </button>
          <Link to="/" className={s.form__btn}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
