import { useEffect, useState } from "react";
import userCRUD from "./hooks/userCRUD";
import CardUser from "./components/CardUser";
import FormUser from "./components/FormUser";

// first_name, last_name, email, password, birthday

function App() {

  const [update, setUpdate] = useState();

  const [isShow, setIsShow] = useState(false);

  const [users, getUsers, createUser, deleteUser, updateUser] = userCRUD();

  useEffect(() => {
    getUsers('/users');
  }, []);
  
  //console.log(users);

  const handleForm = () => {
    setIsShow(true);
  }

  return (
    <div className="app">
      <div className="app-header">
        <h1>Usuarios</h1>
        <button onClick={handleForm}>Craear un usuario</button>
      </div>
      <FormUser
        createUser={createUser}
        update={update}
        updateUser={updateUser}
        setUpdate={setUpdate}
        isShow={isShow}
        setIsShow={setIsShow}
      />
      <div className="app-container">
        {
          users?.map((user) => (
            <CardUser
             key={user.id}
             user={user}
             deleteUser={deleteUser}
             setUpdate={setUpdate}
             setIsShow={setIsShow}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
