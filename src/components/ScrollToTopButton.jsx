import { GenIcons } from "./IconMap";
export default function ScrollToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-green-900 opacity-50 text-white rounded-full shadow-lg hover:bg-green-700 transition-colors cursor-pointer"
      aria-label="Scroll to top"
    >
      <span>{GenIcons.chevronup}</span>
    </button>
  );
}
