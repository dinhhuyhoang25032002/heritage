type NewsletterProps = {
  image: string;
  title: string;
  description: string;
  date: string;
};
export default function Newsletter({ image, title, description, date }: NewsletterProps) {
  return (
    <div className="flex gap-5">
      <img src={image} alt="" className="h-[168px] w-[229px] object-cover object-center" />
      <div className="flex flex-col justify-between">
        <h2 className="line-clamp-3 text-justify text-xl font-semibold text-gray-700">{title}</h2>
        <p className="text-sm font-medium text-justify">{description}</p>
        <span className="text-sm font-semibold text-[#dba51199]">{date}</span>
      </div>
    </div>
  );
}
