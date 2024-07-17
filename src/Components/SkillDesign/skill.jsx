export default function Skill({ item, index }) {
    return (
      <>
        <div key={index}>
          <img src={item.img} className="w-[160px] h-[160px] rounded-[8px]" />
          <p className="text-[32px] font-medium text-center">{item.skill}</p>
        </div>
      </>
    );
  }