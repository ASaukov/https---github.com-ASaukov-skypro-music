export const FormateTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const formatSeconds = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${formatSeconds}`;
};
