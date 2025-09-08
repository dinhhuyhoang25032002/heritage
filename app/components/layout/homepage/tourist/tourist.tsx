import React from 'react';
import Titlecontent from '~/components/common/titlecontent';
import image from './Xim-Vang-2.jpg';
import image1 from './Bảo-tàng-Hồ-Chí-Minh-768x432.jpeg';
import image2 from './Elizabeth-Quay-5-768x432.jpeg';
import image3 from './van-mieu-768x512.jpeg';
import image4 from './2.KTDB-Ca-voi-Bryde-768x512.png';
import SlideContent from '~/components/common/slidecontent';
export default function Tourist() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex w-3/4 flex-col items-center justify-center">
        <div className="w-full">
          <Titlecontent title={'Du lịch điểm đến'} />
        </div>
        <div className="mb-10 flex justify-between gap-10">
          <div className="w-1/2 space-y-3">
            <img src={image} alt="" className="rounded" />
            <div className="ml-5 space-y-3 border-l-2 border-dashed border-[#dba511] p-3">
              <h2 className="text-2xl font-semibold">Sơn La "mùa vàng"</h2>
              <div className="text-sm font-semibold text-[#dba511]">03/09/2025 - QUỐC NỘI</div>
              <p className="text-justify">
                Tà Xùa của tỉnh Sơn La là một xã rẻo cao Tây Bắc, là nơi sinh sống chủ yếu của đồng bào Mông. Được mệnh
                danh là “Thiên đường mây”, với cảnh quan tuyệt đẹp. Nằm ở độ cao trung bình khoảng 1.600m so với mặt
                nước biển, khí hậu quanh năm mát mẻ được ví như “Đà Lạt của Sơn La”.
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
    title: 'Náo nức trong sắc cờ vàng son',
    date: '03/09/2025 - QUỐC NỘI SỰ KIỆN',
  },
  {
    title: 'Lâm Đồng và những thung lũng ủ hương cà phê Arabica',
    date: '01/09/2025 - QUỐC NỘI',
  },
  {
    title: 'Nơi thiêng liêng sử sách cùng gió núi mây ngàn',
    date: '01/09/2025 - QUỐC NỘI',
  },
  {
    title: 'Tới Hà Nội dịp lễ A80: Nên đi chơi đâu?',
    date: '30/08/2025 - QUỐC NỘI SỰ KIỆN',
  },
  { title: 'Một vùng non xanh nước biếc', date: '29/08/2025 - QUỐC NỘI' },
];

const resourcesSlideContent = [
  {
    title: 'Quốc khánh 2/9: Hà Nội miễn phí vé tham quan tại 5 địa điểm',
    date: '25/08/2025 - QUỐC NỘI SỰ KIỆN',
    image: image1,
  },
  {
    title: 'Miền viễn tây kỳ thú',
    date: '22/08/2025 - QUỐC TẾ',
    image: image2,
  },
  {
    title: 'Hà Nội mỗi ngày thêm mới',
    date: '21/08/2025 - QUỐC NỘI SỰ KIỆN',
    image: image3,
  },
  {
    title: 'Kết quả Giải thưởng Nhiếp Ảnh Heritage – Hành Trình Di Sản 2025',
    date: '20/08/2025 - QUỐC NỘI SỰ KIỆN',
    image: image4,
  },
];
