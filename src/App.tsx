import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Suspense, lazy } from "react";
import Login from "./modules/core/pages/Login";
import NotFound from "./modules/core/pages/NotFound";
import CoreLayout from "./modules/core/components/layoutComponents/CoreLayout";
const ProjectsModule = lazy(() => import("./modules/projects/module"));

const Loading = () => <>Loading...</>;
const LoadModule = ({ module }: { module: JSX.Element }) => (
  <Suspense fallback={<Loading />}>{module}</Suspense>
);
function App() {
  return (
    <div className="App">
      <CoreLayout>
        <Routes>
          <Route path="/*" element={<Navigate to={"notFound"} />} />
          <Route path="/notFound" element={<NotFound />} />
          <Route path="/" element={<Navigate to={"/advisors/projects"} />} />
          <Route
            path="/advisors"
            element={<Navigate to={"/advisors/projects"} />}
          />
          <Route
            path="/advisors/projects/*"
            element={<LoadModule module={<ProjectsModule />} />}
          />
          <Route path="/advisors/login" element={<Login />} />
        </Routes>
      </CoreLayout>
    </div>
  );
}

export default App;
