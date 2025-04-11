import { Link, useParams } from "react-router-dom";
import s from "../styles/detail.module.scss";
import { useEffect, useState } from "react";
import { companyMapping, roleMapping } from "../constants";

export default function UserDetail() {
  const [userDetail, setUserDetail] = useState(null);
  const params = useParams();

  const fetchUserDetail = async () => {
    const data = await fetch(`http://localhost:8080/users/${params?.id}`);
    const res = await data.json();
    setUserDetail(res);
  };

  useEffect(() => {
    fetchUserDetail();
  }, []);

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
            <strong>Username</strong> : {userDetail?.username}
          </div>
        </li>
        <li>
          <span className={s.detail__icon}></span>
          <div className={s.detail__content}>
            <strong>Role</strong> : {roleMapping(userDetail?.role)}
          </div>
        </li>
        <li>
          <span className={s.detail__icon}></span>
          <div className={s.detail__content}>
            <strong>Company</strong> : {companyMapping(userDetail?.company)}
          </div>
        </li>
        <li>
          <span className={s.detail__icon}></span>
          <div className={s.detail__content}>
            <strong>Address</strong> : {userDetail?.address}
          </div>
        </li>
      </ul>
    </div>
  );
}
