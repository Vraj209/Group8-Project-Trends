import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPage from "./Pages/ContactUsPage";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactUsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
