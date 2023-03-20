import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AccountPage=()=> {
  const navigate = useNavigate()

  const {user} =useSelector(reduxData=>reduxData.signInReducers)

  useEffect(() => {
    if(!user.displayName) {
          navigate("/signup")
        }
  },[])

  return (
    <Box>
      <Grid container component="main" mt={5} alignItems="center">
        <Typography textAlign={"center"}>
          <h1>
            Profile Page
          </h1>
        </Typography>
      </Grid>
    </Box>
  );
}