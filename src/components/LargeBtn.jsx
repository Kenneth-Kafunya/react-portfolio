export default function LargeBtn({ title }) {
  return (
    <>
      {" "}
      <button
        className={
          title === "Let's Work"
            ? " bg-purple-700 text-gray-100 rounded-full font-medium font- p-4 mt-11 w-40 text-center"
            : "border-[2.5px] border-solid border-amber-400 text-gray-800 rounded-full font-medium font- p-4 mt-11 w-40 text-center"
        }
      >
        {title}
      </button>
    </>
  );
}
