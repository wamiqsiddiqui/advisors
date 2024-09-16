import { useState } from "react";
import {
  Is_CRNT_ResponseType,
  WorkingCapitalResponseType,
} from "../../../../types/FinancesType";
import WorkingCapitalLayout from "../../components/WorkingCapital/WorkingCapitalLayout";

const WorkingCapital = () => {
  const is_crntData = localStorage.getItem("is_crntData");
  const s: Is_CRNT_ResponseType = JSON.parse(is_crntData ?? "");
  const [w, ss] = useState<any>();
  return <WorkingCapitalLayout Is_CRNT_Data={s} setWorkingCapitalData={ss} />;
};

export default WorkingCapital;
