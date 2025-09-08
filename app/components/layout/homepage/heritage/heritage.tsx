import Titlecontent from '~/components/common/titlecontent';
import image from './12-1024x731.jpeg';
import image1 from './chén-xu-xoa-nước-dường_Tạp-chí-Nông-thôn-Việt-768x512.jpg';
import image2 from './2-2-2-1024x576.webp';
import image3 from './mamcom-692x1024.jpeg';
import image4 from './DJI_0501-Pano-768x370.jpeg';
import SlideContent from '~/components/common/slidecontent';
export default function Heritage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-3/4 flex-col items-center justify-center">
        <div className="w-full">
          <Titlecontent title={'Di sản văn hoá'} />
        </div>
        <div className="mb-10 flex justify-between gap-10">
          <div className="w-1/2 space-y-3">
            <img src={image} alt="" className="rounded" />
            <div className="ml-5 space-y-3 border-l-2 border-dashed border-[#dba511] p-3">
              <h2 className="text-2xl font-semibold">Nơi niềm tự hào Tổ quốc bay xa</h2>
              <div className="text-sm font-semibold text-[#dba511]">02/09/2025 - SỰ KIỆN VĂN HOÁ ĐỊA PHƯƠNG</div>
              <p className="text-justify">
                Có một ngôi làng mà bước chân tới là thấy niềm tự hào dân tộc hiện diện khắp nơi bởi từ đây những lá cờ
                Tổ quốc được làm ra và tỏa đi khắp đất nước.
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
    title: 'Người giữ hồn sông nước',
    date: '28/08/2025 - VĂN HOÁ ĐỊA PHƯƠNG',
  },
  {
    title: 'Về Trà Lộc phá trằm',
    date: '27/08/2025 - VĂN HOÁ ĐỊA PHƯƠNG',
  },
  {
    title: 'Nghe dòng sông kể chuyện',
    date: '26/08/2025 - VĂN HOÁ ĐỊA PHƯƠNG',
  },
  {
    title: 'Tìm về xứ Trầm thưởng thức vị nem',
    date: '23/08/2025 - VĂN HOÁ ĐỊA PHƯƠNG',
  },
  {
    title: 'Hà Nội có thêm 9 di sản văn hóa phi vật thể quốc gia',
    date: '20/08/2025 - DI SẢN ',
  },
];

const resourcesSlideContent = [
  {
    image: image1,
    title: 'Xu xoa – Món thạch ngọt mát của miền Trung',
    date: '20/08/2025 - VĂN HOÁ ĐỊA PHƯƠNG',
  },
  {
    image: image2,
    title: 'Giai điệu vượt thời gian: Sức sống bền bỉ của nhạc cách mạng',
    date: ' 19/08/2025 - NGHỆ THUẬT',
  },
  {
    image: image3,
    title: 'Mâm cơm độc lập',
    date: '17/08/2025 - SỰ KIỆN VĂN HOÁ ĐỊA PHƯƠNG',
  },
  {
    image: image4,
    title: 'Miền sông xanh huyền thoại',
    date: '15/08/2025 - VĂN HOÁ ĐỊA PHƯƠNG',
  },
];
