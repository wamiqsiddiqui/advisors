import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/moduleLayoutComponents/Layout";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import SalesReport from "./pages/SalesReport";

const Projects = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/*" element={<Navigate to={"/notFound"} />} />
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="categories" element={<Categories />} />
          <Route path="salesreport" element={<SalesReport />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default Projects;
