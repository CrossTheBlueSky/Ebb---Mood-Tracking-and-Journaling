import React from "react";
import { useNavigate } from "react-router-dom";

function LoginCard({ appData }) {
  const navigate = useNavigate();
  const [users, setUsers] = React.useState(appData)

  const allUsers = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });
  console.log(users)

  function updateUsers(){

    fetch("http://localhost:3000/users")
    .then(r=>r.json())
    .then(data=>setUsers(data))

  }

  function submitHandler(e){
    e.preventDefault()

    const newUser = {
      name: e.target.user.value,
      entryArr : []
    }

    document.getElementById('user-form').reset()
    document.getElementById('add-user').close()

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(updateUsers)

  }

  function deleteHandler(e){
      e.preventDefault()
      document.getElementById('delete-user').close()

      fetch(`http://localhost:3000/users/${e.target["delete-choice"].value}`, {
        method: "DELETE"
      }).then(updateUsers)

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
                  state: { userData : users[users.findIndex((user)=> user.id === e.target.value)] },
                });
              }}
            >
              <option value="" disabled>
                Choose User
              </option>
              {allUsers}
            </select>
            <button className="btn" onClick={()=>document.getElementById('add-user').showModal()}>Add User</button>
            <dialog id="add-user" className="modal">
              <div className="modal-box grid grid-cols-1 w-fit">
                <div className="modal-action place-self-center">
                <form id="user-form" method="dialog" onSubmit={submitHandler}>
                    <div className="mb-25">
                    <label htmlFor="user">New User</label>
                    <br />
                    <input  type="text" name="user"></input>
                    </div>
                    <button className="btn btn-primary" type="submit">Add User</button>
                    <div className="btn btn-primary" value="cancel" formMethod="dialog" onClick={()=>document.getElementById('add-user').close()}>Cancel</div>
                </form> 
                </div>
              </div>
            </dialog>
            <button className="btn" onClick={()=>document.getElementById('delete-user').showModal()}>Delete User</button>
            <dialog id="delete-user" className="modal">
              <div className="modal-box grid grid-cols-1 w-fit">
                <div className="modal-action place-self-center">
                <form id="delete-form" method="dialog" onSubmit={deleteHandler}>
                    <div className="mb-25">
                    <label htmlFor="delete">Select User To Delete</label>
                    <br />
                    <select name="delete-choice">
                      {allUsers}
                    </select>
                    </div>
                    <button className="btn btn-primary" type="submit">Delete User</button>
                    <div className="btn btn-primary" value="cancel" formMethod="dialog" onClick={()=>document.getElementById('delete-user').close()}>Cancel</div>
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
