import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./app/store.js";

// import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// import { ThemeProvider } from "@material-tailwind/react";
// import {  createTheme } from "@mui/material";

// const theme = extendTheme({
//   colors: {
//     brand: {
//       100: "#f7fafc",
//       // ...
//       900: "#1a202c",
//     },
//   },
// })

// const theme2 = createTheme({})

import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";
import {
  ChakraProvider,
  extendTheme as extendChakraTheme,
} from "@chakra-ui/react";
import { ThemeProvider as TailwindThemeProvider } from "@material-tailwind/react";

const muiTheme = createTheme({
  // Add your MUI theme configurations here
  shadows : Array(25).fill('none')
});

const chakraTheme = extendChakraTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

const tailwindTheme = {
  // Add your Tailwind theme configurations here
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MUIThemeProvider theme={muiTheme}>
      <ChakraProvider theme={chakraTheme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ChakraProvider>
    </MUIThemeProvider>
  </React.StrictMode>
);

// import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
// import { ChakraProvider, extendTheme as extendChakraTheme } from '@chakra-ui/react';
// import { ThemeProvider as TailwindThemeProvider } from '@material-tailwind/react';

// const muiTheme = createTheme({
//   // Add your MUI theme configurations here
// });

// const chakraTheme = extendChakraTheme({
//   colors: {
//     brand: {
//       100: "#f7fafc",
//       900: "#1a202c",
//     },
//   },
// });

// const tailwindTheme = {
//   // Add your Tailwind theme configurations here
// };

// <React.StrictMode>
// <MUIThemeProvider theme={muiTheme}>
//   <ChakraProvider theme={chakraTheme}>
//     <TailwindThemeProvider theme={tailwindTheme}>
//       <Provider store={store}>
//         <App />
//       </Provider>
//     </TailwindThemeProvider>
//   </ChakraProvider>
// </MUIThemeProvider>
// </React.StrictMode>
