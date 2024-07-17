import { useSelector } from "react-redux";
import Skill from "./SkillDesign/skill.jsx";

export default function Skills() {
  const skillData = useSelector((store) => store.myData);
  const language = useSelector((store) => store.language);
  return (
    <div className="w-[100%] h-[653.33px] flex flex-col items-center justify-center mb-[50px] mt-[-50px]">
      {language == "english" ? (
        <h1 className="text-[64px] font-medium] pb-0 mb-[75px]">Skills</h1>
      ) : (
        <h1 className="text-[64px] font-medium] pb-0 mb-[75px]">
          Yeteneklerim
        </h1>
      )}
      <div className="w-[100%] h-[221.33px] flex flex-row gap-[47px] items-center justify-center pt-0">
        {skillData.skills.map((item, index) => (
          <Skill key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}