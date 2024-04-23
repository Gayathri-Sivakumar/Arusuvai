import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import SummaryApi from "./common";

function App() {
  const fetchUserDetails = async () => {
    try {
      const response = await fetch(SummaryApi.userDetails.url, {
        method: SummaryApi.userDetails.method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    //user-details
    fetchUserDetails();
  }, []);
  return (
    <>
      <ToastContainer />
      <Header />
      <main className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
