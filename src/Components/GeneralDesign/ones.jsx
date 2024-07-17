/* eslint-disable react/prop-types */
export default function Ones({ item, index }) {
    return (
      <p
        key={index}
        className="w-max bg-[#FFFFFF] rounded-[21.165px] px-[15px] py-[2px] m-0"
      >
        {item}
      </p>
    );
  }