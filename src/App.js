import { Input } from "@mui/material";
import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import Header from "./Components/Header";
import { Card } from "@material-ui/core";
// import Input from "./Components/Input";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path=':newsId' element={<Card />}></Route>
      </Routes>
      {/* <Input /> */}
    </div>
  );
}

export default App;
