import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/moduleLayoutComponents/Layout";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import SalesReport from "./pages/SalesReport";
import IncomeStatement from "./pages/IncomeStatement";
import { PROJECT_ROUTES } from "./routes";
import WorkingCapital from "./pages/WorkingCapital";
import Debt from "./pages/Debt";
import Equity from "./pages/Equity";
import FixedAsset from "./pages/FixedAsset";

const Projects = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/*" element={<Navigate to={"/notFound"} />} />
          <Route index element={<Dashboard />} />
          <Route path={PROJECT_ROUTES.dashboard} element={<Dashboard />} />
          <Route path={PROJECT_ROUTES.categories} element={<Categories />} />
          <Route
            path={PROJECT_ROUTES.incomeStatement}
            element={<IncomeStatement />}
          />
          <Route
            path={PROJECT_ROUTES.workingCapital}
            element={<WorkingCapital />}
          />
          <Route path={PROJECT_ROUTES.debt} element={<Debt />} />
          <Route path={PROJECT_ROUTES.equity} element={<Equity />} />
          <Route path={PROJECT_ROUTES.fixedAsset} element={<FixedAsset />} />
          <Route path="salesreport" element={<SalesReport />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default Projects;
