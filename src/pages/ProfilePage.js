import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.config"

export const ProfilePage=()=> {
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/signup")
      }
    })
  }, [])

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