import { ToggleValue } from "../types/generalTypes";

export const capitalizeFirstLetter = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const formatNumber = (amount: number): string => {
  if (amount >= 1_000_000) {
    return (amount / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  } else if (amount >= 1_000) {
    return (amount / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  } else {
    return amount.toString();
  }
};

export const formatToggleNumber = (
  amount: number,
  toggleValue: ToggleValue
): string => {
  if (amount === null || amount === undefined || typeof amount !== "number")
    return "NAN";
  switch (toggleValue) {
    case "Millions":
      return (amount / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    case "Thousands":
      return (amount / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    case "Absolute":
    default:
      return amount.toLocaleString(); // Formats number with commas
  }
};
