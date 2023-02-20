import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAllCommentDataAPI } from "../../redux/action/commentAction";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const Comment = () => {
  const params = useParams();
  const { postId } = params;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCommentDataAPI(postId));
  }, [postId]);

  const { comments, isLoading } = useSelector((state) => state.comment);

  if (isLoading) {
    return <div>Loading......</div>;
  }
  return (
    <>
      <div style={{ paddingTop: "20px" }}>
        <Button variant="contained" size="small" onClick={() => {navigate(`/posts/`)}}> Back </Button>
      </div>

      <div style={{ paddingTop: "20px" }}>
        {comments.length > 0 && (
          <TableContainer>
            <Table sx={{ minWidth: 50 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Id</TableCell>
                  <TableCell align="center">Comment</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {comments.map((comment) => (
                  <TableRow>
                    <TableCell align="center">{comment.id}</TableCell>
                    <TableCell align="center">{comment.name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>

      <div style={{ paddingTop: "20px" }}>
        <Button variant="contained" size="small" onClick={() => navigate(`/posts/${postId}`)}>View Post </Button>
      </div>
    </>
  );
};

export default Comment;