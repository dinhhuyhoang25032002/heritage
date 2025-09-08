import React from 'react';
import Titlecontent from '~/components/common/titlecontent';
import image from './Thiếu-nữ-Chăm-Huỳnh-Phú-Photo-tour-2020.jpg';
import image1 from './Hạ-Long-Võ-Rin-Photo-tour-2015.jpg';
import image2 from './Dảo-Bình-Hưng-_-Khánh-Hòa-_-Ng-Phu-Duc-Photo-tour-2020.jpg';
import image3 from './Truyền-nghề-Du-Mục-Photo-tour-2019.jpg';
export default function Award() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-3/4 flex-col">
        <div>
          <Titlecontent title={'Giải thưởng Heritage'} />
        </div>
        <div className="mb-10 flex w-full justify-between gap-10">
          <div className="w-[40%]">
            {resources.map((item, index) => (
              <div key={index} className="mb-4 flex border-b-2 border-dashed border-black pb-4 last:border-0">
                <div className="space-y-2">
                  <h2 className="cursor-pointer text-xl font-medium hover:text-[#dba511]">{item.title}</h2>
                  <div className="text-sm font-semibold text-[#dba511]">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-[58%] flex-col items-center justify-evenly">
            <div className="flex w-full items-center justify-between gap-5">
              <img src={image} alt="" className="h-[278px] w-1/3 rounded object-cover object-center" />
              <img src={image1} alt="" className="h-[278px] w-2/3 rounded object-cover object-center" />
            </div>
            <div className="flex w-full items-center justify-between gap-5">
              <div className="w-2/3">
                <img src={image2} alt="" className="block h-[278px] rounded object-cover object-center" />
              </div>
              <img src={image3} alt="" className="h-[278px] w-1/3 rounded object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const resources = [
  {
    title: 'Kết quả Giải thưởng Nhiếp Ảnh Heritage – Hành Trình Di Sản 2025',
    date: '20/08/2025 - QUỐC NỘI SỰ KIỆN',
  },
  {
    title: 'Phát động Giải thưởng Nhiếp ảnh Heritage – Hành trình Di sản 2025',
    date: '01/04/2025 - SỰ KIỆN THỂ LỆ TIN TỨC GIẢI THƯỞNG',
  },
  {
    title: 'Khai mạc triển lãm Giải thưởng Nhiếp ảnh Heritage – Hành trình Di sản 2024',
    date: '14/09/2024 - SỰ KIỆN TIN TỨC GIẢI THƯỞNG',
  },
  {
    title: 'Phát động Giải thưởng Nhiếp ảnh Heritage – Hành trình Di sản 2024',
    date: '29/03/2024 - SỰ KIỆN THỂ LỆ TIN TỨC GIẢI THƯỞNG',
  },
  {
    title: 'Kết quả Chung kết Giải ảnh “Heritage – Hành trình Di sản 2023”',
    date: '18/08/2023 - SỰ KIỆN TIN TỨC GIẢI',
  },
  {
    title: '186. London – Phạm Thị Hồng Hạnh',
    date: '17/08/2023 - HẠNG MỤC ẢNH BỘ',
  },
];
