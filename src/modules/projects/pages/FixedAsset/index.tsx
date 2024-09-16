import { AssumptionResponseType } from "../../../../types/FinancesType";
import { localStorageKeys } from "../../../../utilities/localStorageKeys";
import FixedAssetLayout from "../../components/FixedAsset/FixedAssetLayout";

const FixedAsset = () => {
  const assumptionData = localStorage.getItem(localStorageKeys.assumptionData);
  const assumptionDataa: AssumptionResponseType[] = JSON.parse(
    assumptionData ?? ""
  );
  return <FixedAssetLayout df_assumption={assumptionDataa} />;
};

export default FixedAsset;
