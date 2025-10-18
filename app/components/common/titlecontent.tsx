import { useTranslation } from 'react-i18next';

type TitlecontentProps = {
  title: string;
  color?: boolean;
};
export default function Titlecontent({ title, color = false }: TitlecontentProps) {
  const { t } = useTranslation();
  return (
    <div className="mb-5 flex w-full items-center gap-5 py-5">
      <img src="left-line.png" alt="" className="" />
      <div
        className={`flex h-[110px] min-w-[200px] flex-1 items-center justify-center bg-[url(bg_flower.png)] bg-contain bg-center bg-no-repeat text-5xl font-bold whitespace-nowrap text-[#d1a000] uppercase ${color && 'text-white'}`}
      >
        {t(`${title}.${title}`)}
      </div>
      <img src="right-line.png" alt="" className="" />
    </div>
  );
}
