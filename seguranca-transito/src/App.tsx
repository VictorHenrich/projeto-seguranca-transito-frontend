import { ChakraProvider } from "@chakra-ui/react";

import GlobalStyles from "./Themes/GlobalTheme";
import ApplicationRoutes from "./Routes"

function App() {
  return (

    <ChakraProvider theme={GlobalStyles}>
      <ApplicationRoutes/>
    </ ChakraProvider>
    
  );
}

export default App
