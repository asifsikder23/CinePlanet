import { useEffect, useState } from "react";
import router from "./Router/Router";
import "./App.css";
import { HashLoader } from "react-spinners";
import { RouterProvider } from "react-router-dom";


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto bg-[#03020d] ">
      {loading ? (
        <div className="flex justify-center App bg-black">
          <HashLoader
            color="#ff0000"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <RouterProvider router={router}></RouterProvider>
        </>
      )}
    </div>
  );
}

export default App;
