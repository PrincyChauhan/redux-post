import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAllUserDataAPI,
  deleteUserByIdAPI,
} from "../redux/action/userAction";
import Button from "@mui/material/Button";

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUserDataAPI());
  }, []);

  const { users } = useSelector((state) => state.user);

  const deleteHandler = (e) => {
    dispatch(deleteUserByIdAPI(e.target.id));
  };

  return (
    <>
      <div>
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate("/users/add")}
        >
          Add User
        </Button>
      </div>
      {users.length > 0 && (
        <table border={1} className="center">
          <tbody>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => navigate(`/users/${user.id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    color="error"
                    id={user.id}
                    onClick={deleteHandler}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default User;
