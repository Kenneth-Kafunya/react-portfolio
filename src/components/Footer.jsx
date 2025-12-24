import { SocialIcons } from "./IconMap";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-300 p-8 text-center">
      <div className="footerContainer flex justify-between font-light text-sm">
        {" "}
        <p>&copy;{`${year}`} Kenneth Kafunya, All rights reserved.</p>
        <p className="flex items-center gap-1">
          from Zambia, with{" "}
          <span className="text-red-700 ">{SocialIcons.heart}</span>
        </p>
      </div>
    </footer>
  );
}
