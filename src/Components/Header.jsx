import { useDispatch, useSelector } from "react-redux";
import Switch from "./SwitchDesign/Switch";
import { english, turkish } from "../store/actions/actions";

export default function Header() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  const darkMode = useSelector((state) => state.darkMode);

  const handleClick = () => {
    if (language === "turkish") {
      dispatch(english());
    } else {
      dispatch(turkish());
    }
  };

  return (
    <div className="font-bold text-[20px] font-[Inter] flex flex-row items-center w-[100%] justify-end pr-[11vw] ">
      <Switch />
      <p className="text-[#777777] px-[19px]">
        {darkMode ? "LIGHT MODE" : "DARK MODE"}
      </p>
      <div className="bg-[#777777] w-[2px] h-[22px]  "></div>
      <p className="text-[#777777] pl-[13px]">
        <button onClick={handleClick}>
          {language === "turkish" ? (
            <>
              SWİTCH TO <span className="text-[#E92577]">ENGLISH</span>
            </>
          ) : (
            <>
              <span className="text-[#E92577]">TÜRKÇE</span> {"'"}YE GEÇ
            </>
          )}
        </button>
      </p>
    </div>
  );
}