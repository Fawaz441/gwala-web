import { BrowserRouter } from "react-router-dom";
import RequestProvider from "./components/general/RequestProvider";
import AppRoutes from "./Routes";
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="App">
      <Toaster />
      <BrowserRouter>
        <RequestProvider>
          <AppRoutes />
        </RequestProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
