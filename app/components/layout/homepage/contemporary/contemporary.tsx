import Titlecontent from '~/components/common/titlecontent';
import image from './DSF8709-1024x768.jpg';
import image1 from './12-1024x731.jpeg';
import image2 from './5-768x432.jpg';
import image3 from './DJI_0998-copy-1-768x575.jpeg';
import image4 from './gen-h-z6933810014571_7d2f7af50f427fcd68dd0bb73c7a5d75-1024x683.jpg';
import SlideContent from '~/components/common/slidecontent';
export default function Contemporary() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-3/4 flex-col items-center justify-center">
        <div className="w-full">
          <Titlecontent title={'Cuộc sống đương đại'} />
        </div>
        <div className="mb-10 flex justify-between gap-10">
          <div className="w-1/2 space-y-3">
            <img src={image} alt="" className="rounded" />
            <div className="ml-5 space-y-3 border-l-2 border-dashed border-[#dba511] p-3">
              <h2 className="text-2xl font-semibold">
                Khám phá các công đoạn chế tác sơn mài tại cửa hàng mới của Hanoia
              </h2>
              <div className="text-sm font-semibold text-[#dba511]">05/09/2025 - PHONG CÁCH SỐNG SỰ KIỆN</div>
              <p className="text-justify">
                Tọa lạc ở một con phố tại trung tâm Hà Nội, cửa hàng mới của Hanoia là lời tôn vinh tinh thần giao hòa
                giữa truyền thống và hiện đại của thương hiệu.
              </p>
            </div>
          </div>
          <div className="flex w-1/2 flex-col justify-between rounded bg-[#dba511] p-10">
            {resources.map((item, index) => (
              <div key={index} className="flex border-b-2 border-dashed pb-5">
                <div className="space-y-2">
                  <h2 className="cursor-pointer text-xl font-semibold hover:text-white">{item.title}</h2>
                  <div className="text-sm font-semibold text-white">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full justify-between">
          {resourcesSlideContent.map((item, index) => (
            <div key={index} className="flex w-[24%] items-center justify-center">
              <SlideContent image={item.image} title={item.title} date={item.date} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const resources = [
  {
    title: 'SORAMAME ra mắt BST Xuân/Hè 2026 Tại Tuần lễ Thời trang London',
    date: '05/09/2025 - THỜI TRANG',
  },
  {
    title: 'Sound Healing Concert 2025 – Hành trình trở về tĩnh lặng',
    date: '05/09/2025 - SỰ KIỆN',
  },
  {
    title: 'Mùa Việt trong từng thức quà thu',
    date: '05/09/2025 - PHONG CÁCH SỐNG',
  },
  { title: 'Defender Trophy: Tiếp nối di sản, kiến tạo tương lai', date: '04/09/2025 - PHONG CÁCH SỐNG' },
  {
    title: 'Náo nức trong sắc cờ vàng son',
    date: '03/09/2025 - QUỐC NỘI SỰ KIỆN',
  },
];

const resourcesSlideContent = [
  {
    image: image1,
    title: 'Nơi niềm tự hào Tổ quốc bay xa',
    date: '02/09/2025 - SỰ KIỆN VĂN HOÁ ĐỊA PHƯƠNG',
  },
  {
    image: image2,
    title: 'Tại sao ‘Limited Series’ đang là lựa chọn hàng đầu của khán giả hiện đại?',
    date: '31/08/2025 - GIẢI TRÍ',
  },
  {
    image: image3,
    title: 'Tới Hà Nội dịp lễ A80: Nên đi chơi đâu?',
    date: '30/08/2025 - QUỐC NỘI SỰ KIỆN',
  },
  {
    image: image4,
    title: 'Thương hiệu gậy golf Majesty khai trương Flagship Store đầu tiên tai Việt Nam',
    date: '29/08/2025 - PHONG CÁCH SỐNG',
  },
];
