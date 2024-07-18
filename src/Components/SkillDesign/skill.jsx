/* eslint-disable react/prop-types */
export default function Skill({ item, index }) {
  return (
    <>
      <div key={index} className="flex flex-col items-center">
      <img
        src={item.img}
        className="w-[8.333vw] h-[8.333vw] min-w-[56px] min-h-[56px] rounded-[0.417vw]"
      />
      <p className="text-[32px] font-medium text-center skill_text dark:text-[#D9D9D9]">
        {item.skill}
      </p>
      </div>
    </>
  );
}