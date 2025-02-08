import img1 from "./logooo/instagram.png";
import img2 from "./technologies/gmail.png";
import img3 from "./logooo/linkedin.png";

const sendEmail = () => {
  const recipient = "sanchitsharmaa78@gmail.com"; // Replace with your email
  const subject = "Project Related";
  const body = "Hello, want to work with you";

  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  // Open the email client
  window.open(mailtoLink, "_blank");
};

export const Contact = () => {
  return (
    <div className="h-screen items-center justify-center flex  w-full select-none">
      <div className="bg-black h-[80vh] flex items-center justify-center  w-full text-white">
        <div className="  h-[70%] bg-gray-900 w-[70%] rounded-2xl flex flex-col items-center p-10 gap-6 text-white">
          <span className="text-white tracking-[-3px] font-bold text-3xl">
            Contact Us
          </span>
          <div className="flex gap-1">
            <img
              src={img1}
              className="w-40  hover:scale-150 transform transition-all duration-500"
            ></img>
            <img
              src={img2}
              className="w-40 hover:scale-150 transform transition-all duration-500"
              onClick={sendEmail}
            ></img>
            <img
              src={img3}
              className="w-40 hover:scale-150 transform  transition-all duration-500"
            ></img>
          </div>
          <div>
            <span className="text-white">
              Have questions? Big ideas? Let’s make them happen! Reach out today 🚀
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
