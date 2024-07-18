import { useSelector } from "react-redux";
import Skill from "./SkillDesign/skill.jsx";
import "./Skills.css";

export default function Skills() {
  const skillData = useSelector((store) => store.myData);
  const language = useSelector((store) => store.language);
  return (
    <div className="w-[100%] h-[66.395vh] flex flex-col items-center justify-center pb-[5.081vh] mt-[-5.081vh] all_skills dark:bg-[#484148]">
      {language == "english" ? (
        <h1 className="text-[64px] font-medium pb-0 mb-[7.622vh] skills_title dark:text-[#F4F4F4]">
        Skills
      </h1>
      ) : (
        <h1 className="text-[64px] font-medium pb-0 mb-[7.622vh] skills_title dark:text-[#F4F4F4]">
          Yeteneklerim
        </h1>
      )}
      <div className="w-[100%] h-[22.493vh] flex flex-row gap-[2.448vw] items-center justify-center pt-0 skills_div">
        {skillData.skills.map((item, index) => (
          <Skill key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}