import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";
import BreathingGame from "./pages/BreathingGame";
import Community from "./pages/CommunityPage";
import TrackMood from "./pages/MoodLogger";
import SleepTracker from "./pages/SleepTracker";
import AboutPage from "./pages/About";
import Analytics from "./pages/Analytics";
import MoodLogger from "./pages/MoodLogger";
import LandingPage from "./pages/landingpage";
import SubscribePage from "./pages/Subscribe";
import DailyJournal from "./pages/DailyJournal";
import Chatbot from "./pages/Chatbot";
export default function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}

      <Routes>
        <Route path="/breathinggame" element={<BreathingGame />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/community" element={<Community />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/Mood-Tracker" element={<MoodLogger />} />
        <Route path="/Sleep-Tracker" element={<SleepTracker />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/analytics" element={<Analytics />} />

        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/daily-journal" element={<DailyJournal />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
