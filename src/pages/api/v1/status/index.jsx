//#region imports
import { api } from "@/services/api";
import { useEffect, useState } from "react";
//#endregion

export default function Status() {
  const [status, setStatus] = useState();
  useEffect(() => {
    async function fetchStatus() {
      const response = await api.get("/api/v1/status");
      setStatus(response.data);
    }
    fetchStatus();
  }, []);
  return (
    <>
      <main className="min-h-screen flex flex-col gap-20 max-sm:gap-10 bg-green_5">
        <h1 className="text-black">STATUS</h1>
        <ul>
          {status &&
            Object.entries(status).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
        </ul>
      </main>
    </>
  );
}
