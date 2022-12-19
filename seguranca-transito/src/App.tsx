import { ChakraProvider } from "@chakra-ui/react";

import GlobalStyles from "./Themes/GlobalStyles";
import ApplicationRoutes from "./Routes"
import "./Styles/reset.css";

function App() {
  return (

    <ChakraProvider theme={GlobalStyles}>
      <ApplicationRoutes/>

    </ ChakraProvider>
    
  );
}

export default App
