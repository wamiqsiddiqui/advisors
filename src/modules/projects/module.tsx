import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/layoutComponents/Layout";

const Projects = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/*" element={<Navigate to={"/notFound"} />} />
          <Route index element={<Dashboard />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default Projects;
