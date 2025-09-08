type SlideContentProps = {
  image: string;
  title: string;
  date: string;
};
export default function SlideContent({ image, title, date }: SlideContentProps) {
  return (
    <div className="m-2 flex h-[400px] w-full flex-col rounded shadow">
      <div>
        <img src={image} alt={title} className="h-[265px] rounded border border-white object-cover object-center w-full" />
      </div>
      <div className="p-2">
        <p className="mb-2 line-clamp-3 text-justify text-xl font-semibold text-gray-700">{title}</p>
        <span className="text-sm font-semibold text-[#dba51199]">{date}</span>
      </div>
    </div>
  );
}
