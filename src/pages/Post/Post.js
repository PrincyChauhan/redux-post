import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllPostDataAPI } from "../../redux/action/postAction";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";


const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPostDataAPI());
  }, []);

  const { posts, isLoading } = useSelector((state) => state.post);

  if (isLoading) {
    return <div>Loading......</div>;
  }

  return (
    <>
      <div>
        <Button variant="contained" size="small" onClick={() => navigate("/posts/add")}> Add Post </Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="contained" size="small" onClick={() => navigate("/users/add")} > Add User</Button>
        &nbsp;&nbsp;&nbsp;
        <Button variant="contained" size="small" onClick={() => navigate("/person")} > Person </Button>
      </div>
      
      <div style={{ paddingTop: "20px" }}>
      {posts.length > 0 && (
     <TableContainer>
             <Table sx={{ minWidth: 50 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Id</TableCell>
                  <TableCell align="center">Title</TableCell>
                  <TableCell align="center">Post View</TableCell>
                  <TableCell align="center">Comment View</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id}>
               <TableCell align="center">{post.id}</TableCell>
               <TableCell align="center">{post.title}</TableCell>
                <TableCell>
                  <Button variant="contained" size="small" onClick={() => navigate(`/posts/${post.id}`)}> Post </Button>
                </TableCell>
                <TableCell>
                  <Button variant="contained" size="small" onClick={() => navigate(`/posts/${post.id}/comments`)}> Comments </Button>
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

export default Post;