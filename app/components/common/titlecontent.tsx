import { useTranslation } from 'react-i18next';

type TitlecontentProps = {
  title: string;
};
export default function Titlecontent({ title }: TitlecontentProps) {
  const { t } = useTranslation();
  return (
    <div className="mb-5 flex w-full items-center gap-5 py-5">
      <img src="left-line.png" alt="" className="w-1/3" />
      <div className="flex h-[110px] flex-1 items-center justify-center bg-[url(bg_flower.png)] bg-contain bg-center bg-no-repeat text-4xl font-bold">
        {t(`${title}.${title}`)}
      </div>
      <img src="right-line.png" alt="" className="w-1/3" />
    </div>
  );
}
