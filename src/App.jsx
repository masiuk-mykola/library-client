import { useMode } from "@utils/theme.js";
import { useLocalStorage } from "@hooks/useLocalStorage.js";
import { userTokenLSKey } from "@constants/common.js";
import { useDispatch } from "react-redux";
import api, { setAuthHeader } from "@utils/api.js";
import { apiUrls } from "@constants/apiUrls.js";
import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { setProfile } from "@store/authSlice.js";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { router } from "@components/Router/router.jsx";

function App() {
  const theme = useMode();

  const [token] = useLocalStorage(userTokenLSKey);
  const dispatch = useDispatch();

  const getProfile = async () => {
    const data = await api.get(apiUrls.auth.getProfile);
    return data.librarian;
  };

  useEffect(() => {
    if (token) {
      setAuthHeader(token);
    }
  }, []);

  const { data } = useQuery({
    queryKey: [apiUrls.auth.getProfile],
    queryFn: () => getProfile(),
    enabled: Boolean(token)
  });

  useEffect(() => {
    if (data) {
      dispatch(setProfile(data));
    }
  }, [data]);

  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <RouterProvider router={router} />
        <Toaster />
      </>
    </ThemeProvider>
  );
}

export default App;
