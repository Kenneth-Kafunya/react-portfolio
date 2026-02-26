export default function Menu({ children, onClick, isSelected }) {
  const defaultStyle =
    "flex opacity-70 hover:opacity-100 py-4 hover:text-amber-400 hover:border-b-2 hover:border-amber-400 transition ease-in-out duration-300 items-center max-lg:hidden max-sm:hidden font-medium uppercase cursor-pointer h-full";
  const activeStyle =
    "flex opacity-100 text-amber-400 py-4 border-b-2 border-amber-400 items-center max-lg:hidden max-sm:hidden font-medium uppercase cursor-pointer h-full";
  return (
    <button
      type="button"
      onClick={onClick}
      className={isSelected ? activeStyle : defaultStyle}
    >
      {children}
    </button>
  );
}
