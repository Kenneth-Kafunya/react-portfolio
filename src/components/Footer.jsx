import { SocialIcons } from "./IconMap";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-300 p-8 text-center [@media(min-width:768px)_and_(max-width:1024px)]:p-6
">
      <div className="footerContainer flex justify-between font-light text-sm max-sm:flex-col max-sm:gap-4 max-sm:items-center [@media(min-width:768px)_and_(max-width:1024px)]:flex-col [@media(min-width:768px)_and_(max-width:1024px)]:items-center [@media(min-width:768px)_and_(max-width:1024px)]:gap-4">
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
