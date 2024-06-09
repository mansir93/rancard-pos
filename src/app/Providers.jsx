"use client";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider as ReduxPovider } from "react-redux";
import store from "@/redux/store";

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <ReduxPovider store={store}>
        <>{children}</>
      </ReduxPovider>
    </ThemeProvider>
  );
}
