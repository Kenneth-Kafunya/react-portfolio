export default function LargeBtn({ title, BtnStyle = false }) {
  let solidBtn =
    "bg-amber-400 text-gray-100 rounded-full font-medium p-4 w-40 max-md:block text-center";
  let outlineBtn =
    "border-[2.5px] border-solid border-amber-400 text-gray-700 rounded-full font-medium p-4 w-40 max-md:block text-center";
  return (
    <>
      <button className={BtnStyle ? `${solidBtn}` : `${outlineBtn}`}>
        {title}
      </button>
    </>
  );
}
