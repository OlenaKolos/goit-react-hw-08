import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppHead } from "./AppBar/AppBar";
import Container from "@mui/material/Container";

export const Layout = ({ children }) => {
  return (
    <>
      <AppHead />
      <Container maxWidth="lg">
        <Suspense fallback={null}>
          {children}
          <Outlet />
        </Suspense>
        <Toaster position="top-right" reverseOrder={false} />
      </Container>
    </>
  );
};