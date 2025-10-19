import { TOURISTATTRACTIONS } from '~/data/data';

export default function Convert() {
  const handleConvert = () => {
    const newData = TOURISTATTRACTIONS.findIndex(item => {
      return item.name === 'Bach Ma Temple';
    });
    const convertedData = JSON.stringify(TOURISTATTRACTIONS.filter((item, index) => index >= 26));
    console.log(convertedData, newData);
  };
  return <div onClick={handleConvert}>convert</div>;
}
