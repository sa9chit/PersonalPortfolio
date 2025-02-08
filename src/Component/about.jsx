import tailwindcss3 from "./technologies/tailwind.png";
import react from "./technologies/tailwind1.png";
import javascript from "./technologies/java-script.png";
import nodeJs from "./technologies/nodeJs.png";
import mongodb from "./technologies/mongodb.png";
import redux1 from "./technologies/redux.png";
import linux from "./technologies/linux.png";
import figma from "./technologies/figma.png";
import devops from "./technologies/devOps.png";

export const About = () => {
  let arr = [
    tailwindcss3,
    react,
    javascript,
    nodeJs,
    mongodb,
    linux,
    figma,
    devops,
    redux1,
  ];
  return (
    <div className="  h-screen items-center justify-center flex  w-full  ">
      <div className=" bg-black h-[80vh] justify-evenly w-full flex">
        <div className=" w-[30vw] h-[30vh]  flex gap-7 py-10 items-center flex-col">
          <h1 className="text-[#ea8c20]  text-4xl tracking-[-0.3vmax]">
            Technologies
          </h1>
          <div className="flex gap-1">
            {arr.slice(0, 5).map((val, index) => (
              <img src={val} alt="error" key={index} className="w-[5vw] "></img>
            ))}
          </div>
        </div>
        <div className="  h-full flex items-center justify-center w-[50%]">
          <div className="h-[85%] border-2 border-b-0 border-r-0 p-10 border-white  w-[80%] b relative"> 
            <div className="w-[75%]  absolute left-[0%] bottom-[60%]">
              <div className="absolute left-[-92%] top-[-1pc] text-[#ffffff5c] tracking-[-1px]">Visionary</div>
              <div className="w-[75%] border-2 border-white absolute left-[-75%] bottom-[60%]"></div>
            </div>
            <div className="absolute text-white left-[0%] bottom-[30%] w-[75%]">
            <div className="absolute left-[79%] top-[-0.8pc] text-[#ffffff5c] tracking-[-1px] ">Innovative</div>
              {" "}
              <div className="w-[75%] border-2 absolute border-white "></div>
            </div>
            <div className="absolute left-[-0%] bottom-0 w-[75%] text-amber-50">
            <div className="absolute left-[-92%] top-[-1pc] text-[#ffffff5c] tracking-[-1px]"> Strategic</div>
              <div className="w-[75%] border-2 border-white absolute left-[-75%] bottom-0"></div>
            </div>
            <div className="absolute top-[-5%] bg-black left-[-5%]">
              <h1 className="text-[#ea8c20]   text-4xl  tracking-[-0.3vmax]">
                About
              </h1>
            </div>
            <p className="text-white text-[1vmax] ">
              I’m Sanchit, a full-stack developer specializing in React,
              Express, MongoDB, and JavaScript. Driven by a desire for DevOps,
              DSA, and delivering efficient, scalable solutions through clean,
              optimized code and collaboration
            </p>
            <div className="flex flex-col gap-10">
              <h1 className="text-[#ea8c20]  text-4xl tracking-[-0.3vmax] mt-10">
                Advancing My Expertise
              </h1>
              <div className="flex gap-1">
              {arr.slice(5, 9).map((val)=>(
                <img src={val} key={val} className="w-15"></img>
              ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
