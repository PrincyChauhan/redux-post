import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUserDataAPI } from "../../redux/action/userAction";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const UserList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUserDataAPI());
  }, []);

  const { users } = useSelector((state) => state.user);

  return (
    <>
      <div>
        <Button variant="contained" size="small" onClick={() => navigate("/posts")}> Back </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="contained" size="small" onClick={() => navigate("/users/add")}> Add User </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="contained" size="small" onClick={() => navigate("/posts/add")}> Add Post </Button>
      </div>

      <div style={{ paddingTop: "20px" }}>
        {users.length > 0 && (
          <TableContainer>
            <Table sx={{ minWidth: 50 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Id</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow>
                    <TableCell align="center">{user.id}</TableCell>
                    <TableCell align="center">{user.name}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                    <TableCell align="center">
                      <Button variant="contained" size="small" onClick={() => navigate(`/users/${user.id}`)}>
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </>
  );
};

export default UserList;