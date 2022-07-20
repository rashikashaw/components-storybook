import { useContext } from "react";
import { context } from "./Provider";

export const useExpandableBlock = () => useContext(context);
