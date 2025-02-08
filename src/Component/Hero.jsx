import { useEffect } from "react";
import { gsap } from "gsap";

export const Hero = () => {
  useEffect(() => {
    gsap.to(".bringing", {
      x: -200,
      duration: 1,
    });
    gsap.to(".bringing2", {
      x: 50,
      duration: 1,
    });
    gsap.to(".bringing3", {
      x: 100,
      duration: 1,
    });
    gsap.to(".flex2", {
      x: 100,
      duration: 1,
    });
  }, []);

  return (
    <div className="flex2 flex hero h-[100vh]  ">
      <div className=" h-[70vh] w-[60vw] flex items-center p-8 select-none">
        <div className="text-white  leading-[9vh]">
          <div className="text text-[4vmax]">
            <div className=" w-[70vw]  text-end bringing"> BRINGING YOUR</div>
            <div className="w-[50vw] bg-amber-600  text-end px-3 bringing2 ">
              WEB DREAMS ON THE
            </div>
            <div className="flex gap-8 justify-end w-[20vw] bringing3">
              Digital World
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
