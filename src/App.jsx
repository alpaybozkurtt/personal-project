import { useEffect } from "react";
import "./App.css";
import Aboutme from "./Components/AboutMe";
import Header from "./Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { dilAl, english, modeAl, turkish } from "./store/actions/actions";
import Skills from "./Components/Skills";
import Profile from "./Components/Profile";
import Project from "./Components/Project";
import Footer from "./Components/GeneralDesign/footer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const mode = JSON.parse(localStorage.getItem("mode"));
  const darkMode = useSelector((store) => store.darkMode);


  useEffect(() => {
    const language = localStorage.getItem("language");
    dispatch(dilAl(language));

    if (language === "english") {
      dispatch(english());
    } else if (language === "turkish") {
      dispatch(turkish());
    }

    const dark = JSON.parse(localStorage.getItem("mode"));
    if (dark !== null) {
      dispatch(modeAl(dark));
    }
    toast.success("Veriler Başarıyla Yüklendi", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: mode ? "dark" : "light",
    });
  }, []);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="w-[100%] h-[984px] bg-[#F4F4F4] max-md:h-[85vh] dark:bg-[#2A262B]">
        <div className="w-[100%] ">
        <div className="w-[148px] h-[148px] bg-[#D9D9D9] rounded-full mt-[-60px] ml-[33.1vw] max-md:hidden dark:bg-[#525252]"></div>
        </div>
        <Header />
        <Aboutme />
        <div className="w-[100%]">
        <div className="w-[161.33px] h-[161.33px] bg-[transparent] border-[#D9D9D9] border-[28px] rounded-full ml-[70.3vw] z-[99] absolute flex items-center justify-center bottom-0 mb-[-92.665px] max-md:hidden dark:border-[#525252]"></div>
        </div>
      </div>
      <Skills />
      <div className="w-[100%] h-[65.33px] absolute">
      <div className="w-[135px] h-[65.33px] bg-[#525252] mt-[-126.66px] rounded-r-full max-md:hidden"></div>
      </div>
      <div className="w-[100%] absolute flex justify-end">
        <img
          src="https://i.hizliresim.com/3s2bbrs.png"
          className="mt-[-42px] max-md:hidden"
        />
      </div>
      <Profile />
      <Project />
      <Footer />
      <div className="w-[100%] absolute">
      <div className="w-[366.67px] h-[24px] bg-[#82BBFF] absolute bottom-[337px] left-[693px] -z-[1] rounded-[5.33px] max-md:hidden"></div>
        <ToastContainer />
      </div>
      </div>
  );
}

export default App;