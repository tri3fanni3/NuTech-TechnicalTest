import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/Landing";
import { HomePage } from "./pages/Home";
import { Profile } from "./pages/Profile";
import TopUp from "./pages/TopUp";
import Transactions from "./pages/Transactions";
import ProfileEdit from "./pages/ProfileEdit";
import ProtectedRoute from "./config/ProtectedRoute";
import GuestRoute from "./config/GuestRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<GuestRoute />}>
          <Route path="/" element={<LandingPage />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile-buy/:id" element={<Profile />} />
          <Route path="/top-up" element={<TopUp />} />
          <Route path="/list-transaction" element={<Transactions />} />
          <Route path="/myprofile" element={<ProfileEdit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
