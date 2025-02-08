import img12 from "./technologies/resume.png";
export const Resume = () => {
  return (
    <div className="h-screen items-center justify-center flex  w-full select-none">
      <div className="bg-black p-10 h-[80vh] flex items-center justify-around  w-full text-white">
        <div className="h-[100%] flex flex-col rounded-2xl overflow-hidden p-2 mobile items-center justify-evenly w-[20%] bg-gray-900">
          <img src={img12}></img>
          <button className=" cursor-pointer hover:bg-amber-400 active:bg-amber-600 bg-amber-500 text-black py-1  px-4 rounded-4xl font-mono font-extrabold ">
            Download
          </button>
        </div>

        <div className="bg-gray-900 p-10 items-center h-[90%] w-full  ">
          <div className="w-full flex flex-col gap-5">
            <h1 className="text-center text-2xl">
              👋 Hi, I'm{" "}
              <span className="text-3xl tracking-[-3px] text-amber-500 font-extralight">
                Sanchit
              </span>{" "}
              - A Passionate Web Developer!
            </h1>
            <blockquote className="tracking-wide text-2xl font-extralight">
              <span className="text-3xl text-amber-500 font-extralight tracking-tighter">
                Expertise{" "}
              </span>
              --React , Javascript , Node.js , MongoDB
            </blockquote>
            <blockquote className="text-2xl tracking-tighter font-extralight">
              {" "}
              Building scalable and user-friendly web applications 🕸️{" "}
            </blockquote>

            <div className="flex flex-col">
              <span>📌 Javascript - ⭐⭐⭐⭐⭐</span>
              <span>📌 React.js - ⭐⭐⭐⭐☆</span>
              <span>📌 Node.js - ⭐⭐⭐⭐☆</span>
              <span>📌 MongoDb - ⭐⭐⭐☆☆</span>
            </div>
            <div className="text-blue-200">
              <a href="#">🔗 GitHub</a>
              <a href="#">🔗 LinkedIn</a>
              <a href="#">🔗 Instagram</a>
            </div>
            <span className="text-center font-extralight ">
              🚀 Great code is like poetry - simple, elegant, and powerful! 🚀
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
