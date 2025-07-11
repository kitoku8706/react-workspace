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
import { AuthProvider } from "./componets/layout/AuthProvider";
import ProtectedRoute from "./componets/layout/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <div className="container">
        <h1>My Shop</h1>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Home />} />
            <Route path="board/list/:currentPage" element={<BoardList />} />
            <Route
              path="board/view/:currentPage/:num"
              element={<BoardView />}
            />

            {/* 🔒 보호된 라우트 */}
            <Route
              path="board/write"
              element={
                <ProtectedRoute>
                  <BoardWrite />
                </ProtectedRoute>
              }
            />
            <Route
              path="board/write/:currentPage/:num/:ref/:reStep/:reLevel"
              element={
                <ProtectedRoute>
                  <BoardWrite />
                </ProtectedRoute>
              }
            />
            <Route
              path="board/update/:currentPage/:num"
              element={
                <ProtectedRoute>
                  <BoardUpdate />
                </ProtectedRoute>
              }
            />
            <Route path="joinadd" element={<JoinAdd />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route
              path="editinfo"
              element={
                <ProtectedRoute>
                  <EditInfo />
                </ProtectedRoute>
              }
            />
            <Route
              path="memberremove"
              element={
                <ProtectedRoute>
                  <MemberRemove />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
