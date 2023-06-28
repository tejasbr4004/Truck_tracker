// App.js
import React from "react";
import UserAuth from "./components/UserAuth";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Displaymap from "./components/Displaymap";
import NewMap from "./components/NewMap";

const App =()=>{
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<UserAuth />} />
          <Route path="/display" element={<Displaymap />} />
          <Route path="/NewMap" element={<NewMap />} />
          
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;
