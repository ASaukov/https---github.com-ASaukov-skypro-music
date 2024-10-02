import { TrackType } from "@/types/tracks";

export const getUniqueValues = (items: any[], key: string): string[] => {
  const uniqueValues = new Set<string>();
  items.forEach((item) => {
    uniqueValues.add(String(item[key]));
  });
  return Array.from(uniqueValues);
};
