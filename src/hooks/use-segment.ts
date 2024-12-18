import { SegmentContext } from "@/lib/segment/provider";
import { useContext } from "react";

// Create an analytics hook that we can use with other components.
export const useSegment = () => {
  const result = useContext(SegmentContext);
  if (!result) {
    throw new Error("Context used outside of its Provider!");
  }
  return result;
};
