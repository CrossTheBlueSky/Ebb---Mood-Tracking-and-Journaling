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

  function submitHandler(e){
    e.preventDefault()
    console.log(e)
  }

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
            <button className="btn" onClick={()=>document.getElementById('add-user').showModal()}>Add User</button>
            <dialog id="add-note" className="modal">
              <div className="modal-box grid grid-cols-1 w-fit">
                <div className="modal-action place-self-center">
                <form id="note-form" method="dialog" onSubmit={submitHandler}>
                    <div className="mb-25">
                    <label htmlFor="user">New User</label>
                    <br />
                    <input  type="text" name="user"></input>
                    </div>
                    <button className="btn btn-primary" type="submit">Add User</button>
                    <div className="btn btn-primary" value="cancel" formMethod="dialog" onClick={()=>document.getElementById('add-note').close()}>Cancel</div>
                </form> 
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      </div>
  );
}

export default LoginCard;
