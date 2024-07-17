import { useDispatch } from "react-redux";
import "./Switch.css";
import { changeMode } from "../../store/actions/actions";
import useLocalStorage from "../../Hooks/useLocalStorage";

export default function Switch() {
  const dispatch = useDispatch();
  const [mode, setMode] = useLocalStorage("mode", false);

  const changeHandler = () => {
    setMode(!mode);
    dispatch(changeMode());
  };
  return (
    <>
      <label className="switch" defaultChecked>
        <input type="checkbox" onChange={changeHandler} checked={!mode} />
        <span className="slider"></span>
      </label>
    </>
  );
}