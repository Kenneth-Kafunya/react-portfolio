export default function Heading({ heading, sub, textColor, smallTextColor }) {
  return (
    <div className="headingContainer flex flex-col justify-center text-center p-8">
      <p className={`subheading text-md ${smallTextColor}`}>{sub}</p>
      <h2 className={`heading text-6xl ${textColor} font-bold`}>{heading}</h2>
    </div>
  );
}
