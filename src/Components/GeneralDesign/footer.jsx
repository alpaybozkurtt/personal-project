import { useSelector } from "react-redux";

export default function Footer() {
  const footer = useSelector((store) => store.myData.footer);
  return (
    <>
      <div className="w-[100%] h-[502.67px] flex justify-center max-md:scale-[0.4] max-md:mt-[-300px]">
        <div className="w-[1010px] h-[183px] flex flex-row justify-center items-center gap-[77.96px] mt-[80px] ml-[-20px]">
          <p className="w-[722.04px] text-[56px] font-medium font-[Inter] text-right">
            {footer.text}
          </p>
          <nav className="flex flex-col">
            <a
              href={footer.github.link}
              className="text-[32px] font-medium font-[Inter] text-[#1769FF]"
            >
              {footer.github.text}
            </a>
            <a
              href={footer.blog.link}
              className="text-[32px] font-medium font-[Inter] text-[#0A0A14]"
            >
              {footer.blog.text}
            </a>
            <a
              href={footer.linkedin.link}
              className="text-[32px] font-medium font-[Inter] text-[#0077B5]"
            >
              {footer.linkedin.text}
            </a>
            <a
              href={footer.email.link}
              className="text-[32px] font-medium font-[Inter] text-[#AF0C48]"
            >
              {footer.email.text}
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}