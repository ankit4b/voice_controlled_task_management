import Facebook from "../assets/facebook.jpeg";
import Github from "../assets/github.jpeg";
import Linkedin from "../assets/linkedin.jpeg";
import Twitter from "../assets/twitter.jpeg";

export default function Footer() {
  return (
    <>
      <div className="py-2 px-4 flex justify-between items-center bg-[#f2eaea] fixed bottom-0 w-full">
        <h2 className="font-island text-2xl">Task Vox</h2>
        <p className="font-abhaya">@2024 Ankit Sahu. All Rights Reserved.</p>
        <div className="flex items-center gap-2">
          <div className="rounded-full p-1">
            <img src={Facebook} alt="Facebook" className="w-10 h-10" />
          </div>
          <div className="rounded-full p-1">
            <img src={Linkedin} alt="Linkedin" className="w-10 h-10" />
          </div>
          <div className="rounded-full p-1">
            <img src={Twitter} alt="Twitter" className="w-10 h-10" />
          </div>
          <div className="rounded-full p-1">
            <img src={Github} alt="Github" className="w-10 h-10" />
          </div>
        </div>
      </div>
    </>
  );
}
