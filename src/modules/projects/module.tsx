import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/moduleLayoutComponents/Layout";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";

const Projects = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/*" element={<Navigate to={"/notFound"} />} />
          <Route index element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default Projects;
