import { Textarea } from '~/components/ui/textarea';
import { Button } from '../ui/button';
export default function Feedback() {
  return (
    <div className="rounded bg-[#f7cf62] p-5">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold">Phản hồi về dịch vụ</h2>
        <div className="">
          <Textarea
            placeholder="Bình luận..."
            className="rounded-tl-sm rounded-tr-sm rounded-br-none rounded-bl-none placeholder-shown:bg-white"
          />
          <div className="flex items-center justify-end rounded-br-sm rounded-bl-sm bg-gray-100/80">
            <Button className='bg-blue-600 rounded'>Đăng</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
