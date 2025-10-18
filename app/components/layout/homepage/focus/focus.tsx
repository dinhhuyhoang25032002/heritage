import image1 from './Hinh-1-Gia-dinh-nguoi-Hoa-sua-soan-mam-cung_Nguon-Vnexpress-768x512.jpg';
import image2 from './22-1024x576.jpg';
import image3 from './Brochure-Documentary-Film-Festival-2025-reduit-hinh-anh-0-1024x696.jpg';
import image5 from './Ban-sao-143A3824-3-1024x576.jpg';
import image4 from './DSF8709-1024x768.jpg';
import Newsletter from '~/components/common/newsletter';
import Titlecontent from '~/components/common/titlecontent';
export default function Focus() {
  return (
    <div className="mb-10 flex justify-center">
      <div className="flex w-3/4 justify-between">
        <div className="w-[65%]">
          <Titlecontent title={'Highlight'} />
          {resources.map((item, index) => (
            <div key={index} className="mb-8 flex flex-col md:flex-row md:items-center">
              <Newsletter image={item.image} title={item.title} description={item.description} date={item.date} />
            </div>
          ))}
        </div>
        <div className="mt-[74px] flex w-[30%] flex-col gap-5">
          <div className="flex flex-col items-center justify-center gap-2 rounded bg-[#196e7c] py-4 text-white">
            <h2 className="text-3xl font-semibold">
              Heritage Guide <br />
              Tháng 08/2025
            </h2>
            <span className="text-lg">Đông Nam Bộ</span>
            <img src="cta_guide_button.svg" alt="" />
          </div>
          <div className="rounded bg-[#DBA511] p-4">
            {resources2.map((item, index) => (
              <div key={index} className="mb-5 space-y-3 border-b border-dashed pb-3 last:border-0 last:pb-0">
                <h2 className="text-justify text-lg font-semibold">{item.title}</h2>
                <span className="text-sm font-semibold text-white">{item.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const resources = [
  {
    title: 'Nghi thức cúng cô hồn: Nét đẹp tín ngưỡng dân gian',
    description:
      'Rằm tháng 7 là một trong những ngày rằm lớn trong năm. Bởi thời điểm này, có hai ngày lễ lớn. Đó là Vu Lan báo hiếu của Phật giáo và Xá tội vong nhân theo tín ngưỡng dân gian.',
    date: '06/09/2025 - VĂN HÓA ĐỊA PHƯƠNG',
    image: image1,
  },
  {
    title: '100 năm lên ngôi: Sneaker và cuộc cách mạng định hình thời trang hiện đại',
    description:
      'Từng là món đồ khiêm tốn chỉ hiện diện trên sàn đấu thể thao, sneaker ngày nay đã trở thành biểu tượng toàn năng của phong cách hiện đại.',
    date: '06/09/2025 - THỜI TRANG',
    image: image2,
  },
  {
    title: 'Liên hoan Phim Tài liệu châu Âu-Việt Nam Lần Thứ 15',
    description:
      'Diễn ra từ ngày 12 đến 18/09/2025 tại Hà Nội và Thành phố Hồ Chí Minh, sự kiện sẽ mang tới những bộ phim tài liệu Châu Âu và Việt Nam đặc sắc tới với khán giả Việt Nam.',
    date: '05/09/2025 - SỰ KIỆN',
    image: image3,
  },
  {
    title: 'Khám phá các công đoạn chế tác sơn mài tại cửa hàng mới của Hanoia',
    description:
      'Tọa lạc ở một con phố tại trung tâm Hà Nội, cửa hàng mới của Hanoia là lời tôn vinh tinh thần giao hòa giữa truyền thống và hiện đại của thương hiệu.',
    date: '05/09/2025 - PHONG CÁCH SỐNG SỰ KIỆN',
    image: image4,
  },
  {
    title: 'SORAMAME ra mắt BST Xuân/Hè 2026 Tại Tuần lễ Thời trang London',
    description:
      'Mang tên "Tia sáng lấp lánh của Khoảnh khắc", BST thể hiện vẻ đẹp của sự giao thoa từ những điều đối lập.',
    date: '05/09/2025 - THỜI TRANG',
    image: image5,
  },
];

const resources2 = [
  {
    title: 'Vietnam Airlines trao tặng thư viện và 500 chăn ấm cho học sinh Tuyên Quang đúng dịp khai giảng',
    date: '05/09/2025 - AIRLINES',
  },
  {
    title: 'Vietnam Airlines được vinh danh tại Giải thưởng Bền vững 2025 của Airline Ratings',
    date: '05/09/2025 - AIRLINES',
  },
  {
    title: 'Hành trình đặc biệt: Chuyến bay Vietnam Airlines đưa hơn 360 chiến sĩ hoàn thành nhiệm vụ A80 về TP.HCM',
    date: '03/09/2025 - AIRLINES',
  },
  {
    title: 'Hơn 3,5 triệu vé Tết 2026 mở bán sớm, Hàng không Việt Nam khởi động mùa cao điểm cuối năm',
    date: '03/09/2025 - AIRLINES',
  },
  {
    title:
      'Vietnam Airlines công bố báo cáo tài chính soát xét 6 tháng đầu năm 2025: Bay cao nhờ lực đẩy từ mạng bay quốc tế',
    date: '30/08/2025 - AIRLINES',
  },
  {
    title: 'Vietnam Airlines điều chỉnh kế hoạch khai thác tại Đồng Hới, Huế do ảnh hưởng của áp thấp nhiệt đới',
    date: '29/08/2025 - AIRLINES',
  },
];
