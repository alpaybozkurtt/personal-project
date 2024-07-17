import { useSelector } from "react-redux";
import Proje from "./GeneralDesign/proje";

export default function Project() {
  const myProject = useSelector((store) => store.myData).projects;
  const language = useSelector((store) => store.language);
  console.log(myProject);
  return (
    <>
      <div className="w-[100%] h-[1337.33px] flex flex-col items-center gap-[50px]">
        {language === "turkish" ? (
          <h1 className="text-[48px] font-[Inter] font-medium mt-[103.67px]">
            Projelerim
          </h1>
        ) : (
          <h1 className="text-[48px] font-[Inter] font-medium mt-[103.67px]">
            Projects
          </h1>
        )}
        <div className="flex flex-row gap-[85.33px]">
          {myProject.map((item, index) => (
            <Proje key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}