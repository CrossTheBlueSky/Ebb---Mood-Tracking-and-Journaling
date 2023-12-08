import React from "react";
import { useNavigate } from "react-router-dom";

function LoginCard({ appData }) {
  const navigate = useNavigate();

  const allUsers = appData.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });

  return (
    <div className="flex items-center justify-center h-5/6">
      <div className="card-compact glass w-48 text-neutral-content">
        <div className="card-body items-center text-center">
        <div className="card-actions justify-center">
            <select
              defaultValue=""
              onChange={(e) => {
                navigate(`calendar/`, {
                  state: { userData : appData[e.target.value] },
                });
              }}
            >
              <option value="" disabled>
                Choose User
              </option>
              {allUsers}
            </select>
            <input type="text" placeholder="Password"></input>
            <button className="btn btn-primary">Create User</button>
          </div>
        </div>
      </div>
      </div>
  );
}

export default LoginCard;
