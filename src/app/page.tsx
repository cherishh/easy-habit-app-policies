'use client';

import Link from 'next/link';
import { useState, useCallback, useEffect } from 'react';

const screenshots = ['/p1.png', '/p2.png', '/p3.png', '/p4.png', '/p5.png', '/pad1.png', '/pad2.png'];
// 前5张为手机，后2张为iPad
const ratios = [
  ...Array(5).fill({ aspect: 'aspect-[9/19.5]', width: 'w-[110px]' }),
  ...Array(2).fill({ aspect: 'aspect-[4/3]', width: 'w-[150px]' }),
];

export default function Home() {
  const [zoomIndex, setZoomIndex] = useState<number | null>(null);

  // 支持 ESC 键关闭
  useEffect(() => {
    if (zoomIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoomIndex(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [zoomIndex]);

  const handleImgClick = useCallback((i: number) => setZoomIndex(i), []);
  const handleClose = useCallback(() => setZoomIndex(null), []);

  return (
    <div className='min-h-screen flex flex-col bg-white text-gray-900 font-sans'>
      {/* Header */}
      <header className='w-full border-b border-gray-200 py-4 px-6 flex items-center justify-between'>
        <span className='text-xl font-bold tracking-tight'>Easy Habit</span>
      </header>

      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center flex-1 py-16 px-4'>
        <h1 className='text-4xl font-semibold mb-4 text-center'>极简、随手打卡，帮助你养成好习惯</h1>
        <p className='text-lg text-gray-600 mb-8 text-center max-w-xl'>
          我们相信，养成好习惯，不需要复杂的功能、繁杂的界面、浮躁的广告。只需要一个清晰可见的目标和持续的行动。Easy.Habit帮助你专注当下，真正养成想要的生活方式。
        </p>
        {/* 手机/iPad截图横滑区 */}
        <div className='w-full max-w-2xl overflow-x-auto pb-2 mb-8'>
          <div className='flex flex-row gap-4'>
            {screenshots.map((src, i) => (
              <div
                key={i}
                className={`flex-shrink-0 ${ratios[i].width} max-w-[60vw] ${ratios[i].aspect} bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 cursor-pointer`}
                onClick={() => handleImgClick(i)}
              >
                <img
                  src={src}
                  alt={`应用截图${i + 1}`}
                  className='object-cover w-full h-full select-none pointer-events-none'
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
        {/* 放大图片遮罩层 */}
        {zoomIndex !== null && (
          <div className='fixed inset-0 z-50 bg-black/80 flex items-center justify-center' onClick={handleClose}>
            <img
              src={screenshots[zoomIndex]}
              alt={`应用截图${zoomIndex + 1}`}
              className='max-h-[90vh] max-w-[95vw] rounded-2xl shadow-lg border border-white'
              onClick={e => e.stopPropagation()}
            />
            <button
              className='absolute top-6 right-6 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/80 transition'
              onClick={handleClose}
              aria-label='关闭预览'
            >
              ×
            </button>
          </div>
        )}
      </section>

      {/* Q&A Section */}
      <section className='max-w-2xl w-full mx-auto px-4 py-8'>
        <h2 className='text-2xl font-semibold mb-6'>常见问题</h2>
        <div className='space-y-6'>
          <div>
            <div className='font-medium mb-1'>Q: Easy.Habit 是否收费？</div>
            <div className='text-gray-600'>A: 所有功能全部免费！如果喜欢请给我们五星好评❤️</div>
          </div>
          <div>
            <div className='font-medium mb-1'>Q: 我的数据会被上传吗？</div>
            <div className='text-gray-600'>A: 所有习惯数据仅保存在你的设备本地。我们坚信你才是你数据的拥有者。</div>
          </div>
          <div>
            <div className='font-medium mb-1'>Q: 如何联系客服？</div>
            <div className='text-gray-600'>A: 可通过下方联系方式或应用内&quot;用户反馈&quot;功能联系我们。</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='max-w-2xl w-full mx-auto px-4 py-8 border-t border-gray-100'>
        <h2 className='text-2xl font-semibold mb-4'>联系我们</h2>
        <div className='text-gray-600 mb-2'>
          邮箱：
          <a href='mailto:jasonlovescola@gmail.com' className='underline hover:text-gray-900'>
            jasonlovescola@gmail.com
          </a>
        </div>
        <div className='text-gray-600'>或通过应用内&quot;用户反馈&quot;功能留言</div>
      </section>

      {/* Footer */}
      <footer className='w-full border-t border-gray-200 py-4 px-6 flex flex-col items-center text-sm text-gray-400 mt-auto'>
        <div className='space-x-4 mb-1'>
          <Link href='/privacy-policy' className='hover:underline'>
            隐私政策
          </Link>
          <span>|</span>
          <Link href='/term-of-use' className='hover:underline'>
            用户协议
          </Link>
        </div>
        <div>© {new Date().getFullYear()} Easy Habit</div>
      </footer>
    </div>
  );
}
