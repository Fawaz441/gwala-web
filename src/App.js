import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { GroupContext } from "./contexts";
import AppRoutes from "./Routes";

function App() {
  const [group, setGroup] = useState({})
  return (
    <GroupContext.Provider value={{ group, setGroup }}>
      <div className="App">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </GroupContext.Provider>
  );
}

export default App;
