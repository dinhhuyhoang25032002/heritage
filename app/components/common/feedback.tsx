import { Textarea } from '~/components/ui/textarea';
import { Button } from '../ui/button';
import { useTranslation } from 'react-i18next';

export default function Feedback() {
  const { t } = useTranslation();

  return (
    <div className="bg-white p-5">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold">{t('common.Service Feedback')}</h2>

        {/* Comment input section */}
        <div className="border border-gray-300 rounded-sm">
          <Textarea
            placeholder={`${t('common.Comment')}...`}
            className="min-h-[100px] rounded-none border-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-500"
          />
          <div className="flex items-center justify-end border-t border-gray-300 bg-gray-50 p-2">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-sm px-4 py-1">
              {t('common.Submit')}
            </Button>
          </div>
        </div>

        {/* Existing comments section */}
        <div className="space-y-4 mt-6">
          {/* Comment 1 */}
          <div className="border-b border-gray-200 pb-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">Ben Pines</h4>
                <p className="text-sm text-gray-600">CMO at Bennetter</p>
              </div>
              <span className="text-xs text-gray-500">Sep 5, 2017 4:33am</span>
            </div>
            <p className="mt-2 text-sm">
              You are invited to write your own comments to see this widget in action!
            </p>
            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
              <button>Like</button>
              <button>Reply</button>
              <span>💷 3</span>
            </div>
          </div>

          {/* Comment 2 */}
          <div className="border-b border-gray-200 pb-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">John Park</h4>
                <p className="text-sm text-gray-600">Creative Designer at Google</p>
              </div>
              <span className="text-xs text-gray-500">Sep 5, 2017 7:51am</span>
            </div>
            <p className="mt-2 text-sm">
              For the first time I have ever seen such aggressive dev team which keeps deliveries & quality at top.
            </p>
            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
              <button>Like</button>
              <button>Reply</button>
              <span>💷 2</span>
            </div>
          </div>

          {/* Comment 3 */}
          <div className="border-b border-gray-200 pb-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold">Alom Mahmud</h4>
                <p className="text-sm text-gray-600">Professional Freelancer at Finer</p>
              </div>
              <span className="text-xs text-gray-500">Sep 6, 2017 9:17pm - Edited</span>
            </div>
            <p className="mt-2 text-sm">
              Recently I created a website for selling my freelancing service www.alombd.com with elementary. Can you give me any suggestion?
            </p>
            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
              <button>Like</button>
              <button>Reply</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
