import Head from "next/head";
import { useState, useContext } from "react";
import { DataContext } from "../store/GlobalState";

const Profile = () => {
  const initialState = {
    avatar: "",
    name: "",
    password: "",
    cf_password: "",
  };
  const [data, setData] = useState(initialState);
  const { avatar, name, password, cf_password } = data;

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  if (!auth.user) return null;

  return (
    <div className="profile_page">
      <Head>
        <title>Profile</title>
      </Head>

      <section className="row text-secondary my-3">
        <div className="col-md-4">
          <h3 className="text-center text-uppercase">
            {auth.user.role === "user" ? "User Profile" : "Admin Profile"}
          </h3>
          <div className="avatar">
            <img src={auth.user.avatar} alt={auth.user.avatar} />
            <span>
              <i className="fas fa-camera"></i>
              <p>Change</p>
              <input type="file" name="file" id="file_up" />
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              className="form-control"
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              defaultValue={auth.user.email}
              className="form-control"
              disabled="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input
              type="text"
              name="password"
              value={password}
              className="form-control"
              placeholder="Your new password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="cf_password">Confirm New Password</label>
            <input
              type="text"
              name="cf_password"
              value={cf_password}
              className="form-control"
              placeholder="Confirm New password"
            />
          </div>

          <button className="btn btn-info">Update</button>
        </div>

        <div className="col-md-8">
          <h3>Orders</h3>
        </div>
      </section>
    </div>
  );
};

export default Profile;
