import { Email } from "../data";
import myCv from "../public/Kenneth-Kafunya_CV_2026.pdf";
export default function LargeBtn({
  title,
  BtnStyle = false,
  emailBtn = false,
}) {
  let solidBtn =
    "bg-amber-400 text-gray-50 rounded-full font-medium p-4 w-40 max-md:block text-center";
  let outlineBtn =
    "border-[2.5px] border-solid border-amber-400 text-gray-700 rounded-full font-medium p-4 w-40 max-md:block text-center";

  let ctaBtn = "";

  if (emailBtn) {
    ctaBtn = (
      <a
        href={`mailto:${Email[0].add}`}
        className={BtnStyle ? `${solidBtn}` : `${outlineBtn}`}
      >
        {title}
      </a>
    );
  } else {
    ctaBtn = (
      <a
        href={`${myCv}`}
        target="_blank"
        download
        className={BtnStyle ? `${solidBtn}` : `${outlineBtn}`}
      >
        {title}
      </a>
    );
  }

  return <>{ctaBtn}</>;
}
