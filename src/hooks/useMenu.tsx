import { menuContext } from "@/contexts/menuContext";
import { useContext } from "react";

export function useMenu() {
  return useContext(menuContext)
}
