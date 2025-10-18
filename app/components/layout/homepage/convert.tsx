import { TOURISTATTRACTIONS } from '~/data/data';

export default function Convert() {
  const handleConvert = () => {
    const newData = TOURISTATTRACTIONS.findIndex(item => {
      return item.name === 'Hồ Hoàn Kiếm (Hồ Gươm)';
    });
    const convertedData = JSON.stringify(TOURISTATTRACTIONS.filter((item, index) => item.name === 'Tay Ho Temple'));
    console.log(convertedData);
  };
  return <div onClick={handleConvert}>convert</div>;
}
