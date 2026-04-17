const KEY = "tracking_history";

export const saveTracking = (data: any) => {
  const history = JSON.parse(localStorage.getItem(KEY) || "[]");
  history.push({
    date: new Date().toISOString(),
    data
  });
  localStorage.setItem(KEY, JSON.stringify(history));
};

export const getTracking = () => {
  return JSON.parse(localStorage.getItem(KEY) || "[]");
};