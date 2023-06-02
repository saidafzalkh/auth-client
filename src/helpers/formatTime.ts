// YYYY-MM-DDThh:mm:ss.ZZZZ -> YYYY-MM-DD hh:mm
export const formatTime = (initialTime: string): string => {
  const date = initialTime.split("T")[0];
  const time = initialTime.split("T")[1].split(".")[0];
  const [hh, mm] = time.split(":");
  return `${date} ${hh}:${mm}`;
};
