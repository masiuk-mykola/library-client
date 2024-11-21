import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

export const StyledLoaderWrapper = styled("div")(({ theme }) => ({
    position: "absolute",
    backgroundColor: theme.loaderOverlay,
    height: "100vh",
    width: "100vw",
    top: 0,
    left: 0
  }));

export const StyledCircularProgress = styled(CircularProgress)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
}));
