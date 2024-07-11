import { useState } from "react";

const useOnlineStatus = () => {
  [online, setOnline] = useState(true);
  window.addEventListener("offline", () => {
    setOnline(false);
  });
  window.addEventListener("online", () => {
    setOnline(true);
  });
  return online;
};

export default useOnlineStatus;
