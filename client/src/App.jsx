import { BrowserRouter, Route, Routes } from "react-router-dom";
import FloatingChatbot from "./components/Chatbot";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
//import Header from "./components/Header";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import BreathingGame from "./pages/BreathingGame";
import Community from "./pages/CommunityPage";
//import TrackMood from "./pages/MoodLogger";

import AboutPage from "./pages/About";
import Analytics from "./pages/Analytics";
import DailyJournal from "./pages/DailyJournal";
import LandingPage from "./pages/landingpage.tsx";
import MoodLogger from "./pages/MoodLogger";
import SubscribePage from "./pages/Subscribe";
// import Chatbot from "./pages/Chatbot";
import PremiumRoute from "./components/PremiumRoute";
import AchievementDashboard from "./pages/Achievements";
import Break from "./pages/Break";
import Break1 from "./pages/Break1";
import ChatSpecialist from "./pages/ChatSpecialist";
import Contents from "./pages/contents";
import EmergencySupport from "./pages/EmergencySupport";
import JOTD from "./pages/JOTD";
import Meditation from "./pages/Meditation";
import Music from "./pages/Music";
import PaymentPage from "./pages/PaymentPage";
import Recommendation from "./pages/Recommendation";
import ScheduleConsultation from "./pages/ScheduleConsultation";
import Specialist from "./pages/Specialist";
import Swirl from "./pages/Swirl";
import Swirl1 from "./pages/Swirl1";
import Switch from "./pages/Switch";
import Switch1 from "./pages/Switch1";
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
        {/* <Route path="/chatbot" element={<Chatbot />} /> */}
        <Route path="/Mood-Tracker" element={<MoodLogger />} />


        <Route
          path="/achievements"
          element={
            <PremiumRoute><AchievementDashboard />
            </PremiumRoute>
          }
        />


        <Route path="/about" element={<AboutPage />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/subscribe" element={<SubscribePage />} />

        <Route
          path="/daily-journal"
          element={
            <PremiumRoute><DailyJournal />
            </PremiumRoute>
          } />


        <Route
          path="/specialist"
          element={
            <PremiumRoute><Specialist />
            </PremiumRoute>}
        />


        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/swirl" element={<Swirl />} />
        <Route path="/swirl/1" element={<Swirl1 />} />
        <Route path="/break" element={<Break />} />
        <Route path="/break/1" element={<Break1 />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="/switch/1" element={<Switch1 />} />
        <Route path="/jokeoftheday" element={<JOTD />} />
        <Route path="/musicrecommendation" element={<Music />} />

        <Route
          path="/contents"
          element={
            <PremiumRoute><Contents />
            </PremiumRoute>
          }
        />



        <Route
          path="/chat-specialist"
          element={
            <PremiumRoute>
              <ChatSpecialist />
            </PremiumRoute>
          }
        />
        <Route path="/schedule-consultation" element={<ScheduleConsultation />} />
        <Route path="/chat-specialist" element={<ChatSpecialist />} />
        <Route path="/emergency-support" element={<EmergencySupport />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
          
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
      
      <Footer />
      <FloatingChatbot iconSrc="/chatbot.png"/>
    </BrowserRouter>
  );
}
{/* Premium Features */ }
