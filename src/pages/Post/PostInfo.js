import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getPostInfoDataAPI } from "../../redux/action/postAction";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const PostInfo = () => {
  const params = useParams();
  const { postId } = params;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostInfoDataAPI(postId));
  }, [postId]);

  const postInfo = useSelector((state) => state.post.posts);

  return (
    <>
      <div style={{ paddingTop: "20px" }}>
        <Button variant="contained" size="small" onClick={() => { navigate(`/posts`);}}>Back </Button>
      </div>

      <div style={{ paddingTop: "20px" }}>
        {
          <TableContainer>
            <Table sx={{ minWidth: 50 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Id</TableCell>
                  <TableCell align="center">Title</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={postInfo.id}>
                  <TableCell align="center">{postInfo.id}</TableCell>
                  <TableCell align="center">{postInfo.title}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        }
      </div>

      <div style={{ paddingTop: "20px" }}>
        <Button variant="contained" size="small" onClick={() => navigate(`/posts/${postInfo.id}/comments`)}>View Comments</Button>
      </div>
    </>
  );
};

export default PostInfo;