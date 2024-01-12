import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AiFillYoutube } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5'
import YouTube from 'react-youtube'

type CourseDetailProps = {
  // course: Cour
}

const CourseDetail = () => {
  const [enrolled, setEnrolled] = useState(false)
  const [youtubePlayer, setYoutubePlayer] = useState({
    isOpen: false,
    videoId: "",
  });

  const handleEnrolled = () => {
    setEnrolled(true)
  }

  const closeModal = () => {
    setYoutubePlayer({ isOpen: false, videoId: "" });
  };
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);

    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className='w-full flex flex-col place-items-center my-6 space-y-6'>
      <div className='bg-white-blue-30 w-3/4 h-72 items-center rounded-lg shadow-xl flex flex-row p-4 justify-around'>
        <div className='w-2/3 space-y-3 flex flex-col pl-4'>
          <h2 className='h2-title text-start'>Khóa học: <span>Cấu trúc và Dữ liệu</span></h2>
          <p className='description text-navy-blue-500 font-normal text-base'> Môn &quot;Cấu trúc và Dữ liệu&quot; là một khoá học cơ bản trong lĩnh vực khoa học máy tính, tập trung vào việc giới thiệu và phân tích các cấu trúc dữ liệu và thuật toán cơ bản</p>
          <div className='flex space-x-2 items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            <p className='description font-bold text-dark-blue'> Giảng viên:  <span className='text-navy-blue-500 font-normal'> Th.S Trần Thị Dung </span></p>
          </div>

          <div className='flex space-x-2 items-center'>
            <Image src={'/alarm-clock.png'} alt='' width={20} height={20} />
            <p className='font-bold text-dark-blue'>Thời lượng: <span className='text-navy-blue-500 font-normal'>4 giờ 45 phút</span></p>
          </div>
          <div className=' flex space-x-6 items-end mt-2'>
            <button onClick={handleEnrolled} disabled={enrolled} className={`${enrolled ? 'bg-green-600 disabled:cursor-not-allowed hover:bg-slate-500' : 'bg-deep-blue'}  rounded-lg p-2 text-white px-3 hover:bg-deep-blue/80`}> {enrolled ? 'Đã tham gia' : 'Tham gia'} </button>
            <button className=' flex bg-brand-orange rounded-lg p-2 text-white px-3 space-x-2 items-center hover:bg-brand-orange-s'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
              </svg>
              <span >Lưu</span>
            </button>
          </div>
        </div>
        <div className='w-1/3 pr-4'>
          <Image src='/course-4.png' alt='' width={500} height={400} className='rounded-lg' />
        </div>
      </div>
      <div className='flex flex-col w-3/4 space-y-4'>
        <h2 className='h2-title text-start'> Nội dung </h2>
        <div className='items-center w-full place-items-center'>
          <table className='course-table bg-white-blue-100 w-full rounded-lg p-4 shadow-lg'>
            <tbody className='rounded-lg'>
              <tr className='rounded-lg'>
                <td>
                  9 Cấu trúc dữ liệu và giải thuật cơ bản với #C++, #Java và #Python
                </td>
                <td>
                  <AiFillYoutube
                    fontSize={"28"}
                    className="cursor-pointer hover:text-red-600"
                    onClick={() =>
                      setYoutubePlayer({
                        isOpen: true,
                        videoId: '-9hjwS3nihY',
                      })
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Cấu trúc dữ liệu & Giải thuật [01]: Array - Mảng. #array
                </td>
                <td>
                  <AiFillYoutube
                    fontSize={"28"}
                    className="cursor-pointer hover:text-red-600"
                    onClick={() =>
                      setYoutubePlayer({
                        isOpen: true,
                        videoId: 'IRoOEsNqgzM',
                      })
                    }
                  />
                </td>
              </tr>
              <tr className='rounded-lg'>
                <td>
                  Cấu trúc dữ liệu & Giải thuật [02]: Sorting - Thuật toán Sắp xếp
                </td>
                <td>
                  <AiFillYoutube
                    fontSize={"28"}
                    className="cursor-pointer hover:text-red-600"
                    onClick={() =>
                      setYoutubePlayer({
                        isOpen: true,
                        videoId: '09MKgIyj_1w',
                      })
                    }
                  />
                </td>
              </tr>
              <tr className='rounded-lg'>
                <td>
                  Cấu trúc dữ liệu & Giải thuật [03]: Danh sách liên kết đơn - Singly Linked List
                </td>
                <td>
                  <AiFillYoutube
                    fontSize={"28"}
                    className="cursor-pointer hover:text-red-600"
                    onClick={() =>
                      setYoutubePlayer({
                        isOpen: true,
                        videoId: '0Q3RBacgpjM',
                      })
                    }
                  />
                </td>
              </tr>
              <tr className='rounded-lg'>
                <td>
                  Cấu trúc dữ liệu & Giải thuật [04]: Floyd&apos;s Cycle Detection-Xác định Cycle Linked List
                </td>
                <td>
                  <AiFillYoutube
                    fontSize={"28"}
                    className="cursor-pointer hover:text-red-600"
                    onClick={() =>
                      setYoutubePlayer({
                        isOpen: true,
                        videoId: 'YxtsZfc-zp4',
                      })
                    }
                  />
                </td>
              </tr>
              <tr className='rounded-lg'>
                <td>
                  Cấu trúc dữ liệu & Giải thuật [05]: Ngăn xếp - Hàng Đợi (#Stack and #Queue)
                </td>
                <td>
                  <AiFillYoutube
                    fontSize={"28"}
                    className="cursor-pointer hover:text-red-600"
                    onClick={() =>
                      setYoutubePlayer({
                        isOpen: true,
                        videoId: 'jYLW3E4EMyg',
                      })
                    }
                  />
                </td>
              </tr>
              <tr className='rounded-lg'>
                <td>
                  Cấu trúc dữ liệu & Giải thuật [06]: Đệ quy - #Recursion
                </td>
                <td>
                  <AiFillYoutube
                    fontSize={"28"}
                    className="cursor-pointer hover:text-red-600"
                    onClick={() =>
                      setYoutubePlayer({
                        isOpen: true,
                        videoId: 'tHo18sWKqDs',
                      })
                    }
                  />
                </td>
              </tr>
              <tr className='rounded-lg'>
                <td>
                  Cấu trúc dữ liệu & Giải thuật [07]: Độ phức tạp #BigO
                </td>
                <td>
                  <AiFillYoutube
                    fontSize={"28"}
                    className="cursor-pointer hover:text-red-600"
                    onClick={() =>
                      setYoutubePlayer({
                        isOpen: true,
                        videoId: '2JO7IWOilrk',
                      })
                    }
                  />
                </td>
              </tr>
            </tbody>
            {youtubePlayer.isOpen && (
              <tfoot className="fixed z-50 top-0 left-0 h-screen w-screen flex items-center justify-center">
                <div
                  className="bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute"
                  onClick={closeModal}
                ></div>
                <div className="w-full z-50 h-full px-6 relative max-w-4xl">
                  <div className="w-full h-full flex items-center justify-center relative">
                    <div className="w-full relative">
                      <IoClose
                        fontSize={"35"}
                        className="cursor-pointer absolute -top-16 right-0"
                        onClick={closeModal}
                      />
                      <YouTube
                        videoId={youtubePlayer.videoId}
                        loading="lazy"
                        iframeClassName="w-full min-h-[500px]"
                      />
                    </div>
                  </div>
                </div>
              </tfoot>
            )}
          </table>
        </div>
      </div>
      <div className='flex flex-col w-3/4 space-y-4'>
        <h2 className='h2-title text-start'> Mô tả khóa học </h2>
        <div className='items-center w-full place-items-center text-deep-blue'>
          <p>Môn &quot;Cấu trúc và Dữ liệu&quot; là một bước quan trọng trong hành trình học tập của sinh viên về khoa học máy tính. Trong khóa học này, sinh viên sẽ tìm hiểu và áp dụng các cấu trúc dữ liệu cơ bản như mảng, danh sách, ngăn xếp, hàng đợi, cây, và đồ thị. Ngoài ra, môn học cũng giới thiệu về các thuật toán sắp xếp, tìm kiếm và đánh giá độ phức tạp thuật toán.  Khám phá sự kết hợp giữa lý thuyết và thực hành, môn học này giúp sinh viên phát triển khả năng thiết kế giải pháp cho các vấn đề phức tạp và hiểu rõ về hiệu suất của thuật toán. Qua đó, sinh viên sẽ xây dựng nền tảng vững chắc cho việc hiểu rõ hơn về cấu trúc và quản lý dữ liệu, chuẩn bị cho những thách thức trong lĩnh vực phát triển phần mềm và khoa học máy tính.</p>
        </div>
      </div>
      <div className='flex flex-col w-3/4 space-y-4'>
        <h2 className='h2-title text-start'> Bình luận <span className='text-sm'>(Coming soon)</span></h2>
        <div className='flex items-center w-full place-items-center text-deep-blue space-x-2'>
          <textarea className='border border-dark-blue rounded-lg w-full h-8 active:border active:border-dark-blue p-2 min-h-' />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -rotate-45">
            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail

