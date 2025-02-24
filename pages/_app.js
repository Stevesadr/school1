import Nav from "../components/navigate/Nav";
import { NavContext } from "../Context/Store";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import localFont from "next/font/local";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Loader from "../components/ficher/Loader";

const Koodak = localFont({ src: "../Fonts/KoodakBold.woff" });

export default function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [firsloading, setFirstLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setFirstLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <>
      {firsloading ? (
        <Loader />
      ) : (
        <div className={Koodak.className}>
          {loading && <Loader />}
          <NavContext.Provider
            value={{
              isOpen,
              setIsOpen,
              isLoggedIn,
              setIsLoggedIn,
            }}
          >
            <Nav />

            <Component {...pageProps} />
          </NavContext.Provider>

          <Footer />
        </div>
      )}
    </>
  );
}
