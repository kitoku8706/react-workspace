import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./componets/Home";
import BaseLayout from "./componets/layout/BaseLayout";
import BoardList from "./componets/board/BoardList";
import BoardView from "./componets/board/BoardView";
import BoardWrite from "./componets/board/BoardWrite";
import BoardUpdate from "./componets/board/BoardUpdate";
import JoinAdd from "./componets/members/JoinAdd";
import Login from "./componets/members/Login";
import Logout from "./componets/members/Logout";
import EditInfo from "./componets/members/EditInfo";
import MemberRemove from "./componets/members/MemberRemove";

function App() {
  return (
    <div className="container">
      <h1>My shop</h1>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="board/list/:currentPage" element={<BoardList />} />
          <Route path="board/view/:currentPage/:num" element={<BoardView />} />
          <Route path="board/write" element={<BoardWrite />} />
          <Route
            path="board/write/:currentPage/:num/:ref/:reStep/:reLevel"
            element={<BoardWrite />}
          />
          <Route
            path="board/update/:currentPage/:num"
            element={<BoardUpdate />}
          />
          <Route path="JoinAdd" element={<JoinAdd />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="editInfo" element={<EditInfo />} />
          <Route path="memberremove" element={<MemberRemove />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
