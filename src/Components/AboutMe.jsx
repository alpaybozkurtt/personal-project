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
      <div className="w-[100%] h-[66.87vh] flex justify-center mt-[76px] max-md:mt-0 max-md:h-[45vh]">
        <div className="flex w-[76.875vw] h-[35rem] justify-between max-md:flex-col max-md:items-center">
          <div className="text-[56px] h-[100%] flex flex-col justify-between max-md:justify-center max-md:mt-[300px]">
            <div className="w-[197.33px] h-[41.33px] bg-[#E92577] absolute mt-[130px] ml-[-22px] rounded-[5.33px] max-md:scale-[0.4] max-md:hidden"></div>
            <p
              className={
                language == "english"
                  ? "w-[46.25vw] h-[34.756vh] mb-[8.333vw] z-[10] max-md:w-[100%] max-md:leading-5 max-md:h-[25vh] dark:text-[#FFFFFF]"
                  : "w-[49.479vw] h-[34.756vh] mb-[8.333vw] z-[10] max-md:w-[100%] max-md:leading-5 max-md:h-[25vh] dark:text-[#FFFFFF]"
              }
            >
              <span className="text-[40px] max-md:text-[20px]">
                {myData.about.paragraph1}
              </span>{" "}
              <br />{" "}
              <span className="max-md:text-[20px]">
                {myData.about.paragraph2}
              </span>
              <br />
              <span className="max-md:text-[20px]">
                {myData.about.paragraph3}
              </span>
            </p>
            <div className="w-[165.33px] h-[78.67px] bg-[#E92577] absolute z-[99] rounded-l-[39.335px] right-0 mt-[525px] max-md:scale-[0.4] max-md:hidden"></div>
            <div>
              <div className="flex flex-row gap-[1.6875rem] mb-[10px]">
              <FaLinkedinIn className="w-[41.33px] h-[45.27px] max-md:scale-[0.5] dark:text-[#D9D9D9]" />
                <FaGithub className="w-[45.33px] h-[48.19px] max-md:scale-[0.5] dark:text-[#D9D9D9]" />
              </div>
              <div className="text-[24px] max-md:text-[12px]">
                {language == "english" ? (
                  <>
                    {" "}
                    <p className="dark:text-[#FFFFFF]">
                      Currently{" "}
                      <span className="text-[#AF0C48]">Freelancing</span> for{" "}
                      <span className="text-[#AF0C48]">
                        UX, UI, & Web Desing
                      </span>{" "}
                      Project .
                    </p>{" "}
                    <p className="dark:text-[#FFFFFF]">
                      Invite me to join your team →{" "}
                      <span className="text-[#AF0C48]">
                        av.alpaybozkurt@gmail.com
                      </span>
                    </p>
                  </>
                ) : (
                  <>
                    <p className="dark:text-[#FFFFFF]">
                      Şu anda{" "}
                      <span className="text-[#AF0C48]">
                        UX, UI, & Web Tasarım
                      </span>{" "}
                      projesi için{" "}
                      <span className="text-[#AF0C48]">serbest</span>{" "}
                      çalışıyorum.
                    </p>{" "}
                    <p className="dark:text-[#FFFFFF]">
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
            className=" w-[23.68vw] h-[23.68vw] min-w-[200px] min-h-[200px] object-cover rounded-[1.833125rem] mt-[76px] custom-shadow max-md:absolute"
          />
        </div>
      </div>
    </>
  );
}