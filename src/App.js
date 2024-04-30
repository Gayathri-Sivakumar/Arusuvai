import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState, useCallback } from "react";
import SummaryApi from "./common";
import UserContext from "./context";

function App() {
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getUserDetails = useCallback(async () => {
    try {
      const dataResponse = await fetch(SummaryApi.current_user.url, {
        method: SummaryApi.current_user.method,
        credentials: "include",
      });

      const dataApi = await dataResponse.json();
      setUserDetails(dataApi.data);
      console.log("userDetails", dataApi.data);
    } catch (error) {
      setError(
        error.message || "An error occurred while fetching user details"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <UserContext.Provider value={userDetails}>
        <ToastContainer position="top-center" />
        <Header />
        <main className="min-h-[calc(100vh-120px)]">
          <Outlet />
        </main>
        <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
