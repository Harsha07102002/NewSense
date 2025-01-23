import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./components/News";
import Navbar from "./components/Navbar";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function App() {
  const pageSize = 6;
  const [progress, setProgress] = useState(10);
  const apiKey = process.env.REACT_APP_API_KEY
  return (
    <Router>
      <Navbar title="NewSense" />
      <LoadingBar color="white" progress={progress} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News  apiKey={apiKey}
              setProgress={setProgress}
              key="home"
              pageSize={pageSize}
              country="us"
              category="general"
            />
          }
        />
        <Route
          exact
          path="/bussiness"
          element={
            <News  apiKey={apiKey}
              setProgress={setProgress}
              key="bussiness"
              pageSize={pageSize}
              country="us"
              category="bussiness"
            />
          }
        />
        <Route
          exact
          path="/sports"
          element={
            <News  apiKey={apiKey}
              setProgress={setProgress}
              key="sports"
              pageSize={pageSize}
              country="us"
              category="sports"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News  apiKey={apiKey}
              setProgress={setProgress}
              key="entertainment"
              pageSize={pageSize}
              country="us"
              category="entertainment"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News  apiKey={apiKey}
              setProgress={setProgress}
              key="health"
              pageSize={pageSize}
              country="us"
              category="health"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News  apiKey={apiKey}
              setProgress={setProgress}
              key="science"
              pageSize={pageSize}
              country="us"
              category="science"
            />
          }
        />
        <Route
          exact
          path="/technology"
          element={
            <News  apiKey={apiKey}
              setProgress={setProgress}
              key="technology"
              pageSize={pageSize}
              country="us"
              category="technology"
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
