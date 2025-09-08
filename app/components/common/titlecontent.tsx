type TitlecontentProps = {
  title: string;
};
export default function Titlecontent({ title }: TitlecontentProps) {
  return (
    <div className="mb-5 flex items-center gap-5 py-5">
      <img src="left-line.png" alt="" className="w-1/3" />
      <div className="flex h-[110px] flex-1 items-center justify-center bg-[url(bg_flower.png)] bg-contain bg-center bg-no-repeat text-4xl font-semibold">
        {title}
      </div>
      <img src="right-line.png" alt="" className="w-1/3" />
    </div>
  );
}
