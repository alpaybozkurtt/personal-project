import { useSelector } from "react-redux";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export default function Aboutme() {
  const myData = useSelector((store) => store.myData);
  const language = useSelector((store) => store.language);

  if (!myData.about) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="w-[100%] h-[41.125rem] flex justify-center mt-[76px] ">
        <div className="flex w-[92.25rem] h-[35rem] justify-between">
          <div className="text-[56px] h-[100%] flex flex-col justify-between">
            <div className="w-[197.33px] h-[51.33px] bg-[#E92577] absolute z-[] mt-[130px] ml-[-22px] rounded-[5.33px]"></div>
            <p
              className={
                language == "english"
                  ? "w-[888px] h-[342px] mb-[160px] z-[10]"
                  : "w-[950px] h-[342px] mb-[160px] z-[10]"
              }
            >
              <span className="text-[40px]">{myData.about.paragraph1}</span>{" "}
              <br /> <span>{myData.about.paragraph2}</span>
              <br />
              <span>{myData.about.paragraph3}</span>
            </p>
            <div className="w-[165.33px] h-[78.67px] bg-[#E92577] absolute z-[99] rounded-l-[39.335px] right-0 mt-[525px]"></div>
            <div>
              <div className="flex flex-row gap-[1.6875rem] mb-[10px]">
                <FaLinkedinIn className="w-[41.33px] h-[45.27px]" />
                <FaGithub className="w-[45.33px] h-[48.19px]" />
              </div>
              <div className="text-[24px]">
                {language == "english" ? (
                  <>
                    {" "}
                    <p>
                      Currently{" "}
                      <span className="text-[#AF0C48]">Freelancing</span> for{" "}
                      <span className="text-[#AF0C48]">
                        UX, UI, & Web Desing
                      </span>{" "}
                      Project .
                    </p>{" "}
                    <p>
                      Invite me to join your team →{" "}
                      <span className="text-[#AF0C48]">
                        av.alpaybozkurt@gmail.com
                      </span>
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Şu anda{" "}
                      <span className="text-[#AF0C48]">
                        UX, UI, & Web Tasarım
                      </span>{" "}
                      projesi için{" "}
                      <span className="text-[#AF0C48]">serbest</span>{" "}
                      çalışıyorum.
                    </p>{" "}
                    <p>
                      Beni ekibinize katılmaya davet edin →{" "}
                      <span className="text-[#AF0C48]">
                        av.alpaybozkurt@gmail.com
                      </span>
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          <img
            src={myData.about.photo}
            className=" w-[28.416875rem] h-[28.416875rem] object-cover rounded-[1.833125rem] mt-[76px] custom-shadow"
          />
        </div>
      </div>
    </>
  );
}