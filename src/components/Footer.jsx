import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='rounded-t-3xl bg-gradient-to-r from-sky-950 to-sky-900'>
      <section className='mx-auto max-w-[1440px] text-white'>
        <div className=' grid py-5 md:grid-cols-3'>
          <div className=' px-4 py-8 '>
            <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-3xl'>
              <a href='/#home' className=''>
                U-
                <span className='inline-block font-bold text-white'>MONSTER</span>
              </a>
            </h1>
            <p className=''>U-MONSTER-有怪獸企業有限公司。希望以更完整、更值得信賴的專業形象與大家見面。 </p>
            <br />
            <div className='flex items-center gap-3'>
              <FaLocationArrow />
              <p>Noida, Uttar Pradesh</p>
            </div>
            <div className='mt-3 flex items-center gap-3'>
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            {/* Social Handle */}
          </div>
          <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 '>
            <div className=''>
              <div className='px-4 py-8 '>
                <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl'>Important Links</h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className='cursor-pointer transition-all duration-300 hover:translate-x-[2px]'>Home</li>
                  <li className='cursor-pointer transition-all duration-300 hover:translate-x-[2px]'>About</li>
                  <li className='cursor-pointer transition-all duration-300 hover:translate-x-[2px]'>Services</li>
                  <li className='cursor-pointer transition-all duration-300 hover:translate-x-[2px]'>Login</li>
                </ul>
              </div>
            </div>
            <div className=''>
              <div className='px-4 py-8 '>
                <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl'>Links</h1>
                <ul className='flex flex-col gap-3'>
                  <li className='cursor-pointer transition-all duration-300 hover:translate-x-[2px]'>諮詢表單</li>
                  <li className='cursor-pointer transition-all duration-300 hover:translate-x-[2px]'>會員中心</li>
                  <li className='cursor-pointer transition-all duration-300 hover:translate-x-[2px]'>About us</li>
                </ul>
              </div>
            </div>
            <div className=''>
              <div className='px-4 py-8 '>
                <h1 className='mb-3 text-justify text-xl font-bold sm:text-left sm:text-xl'>Social Links</h1>
                <div className='flex flex-col gap-3'>
                  <h1>Subscribe to our newsletter</h1>
                  <input className='rounded-full px-3 py-1 text-black focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 ' type='text' placeholder='Email' />
                  <div className='mt-6 flex items-center gap-3'>
                    <a href='#' className='duration-200 hover:scale-105'>
                      <FaInstagram className='text-3xl' />
                    </a>
                    <a href='#' className='duration-200 hover:scale-105'>
                      <FaFacebook className='text-3xl' />
                    </a>
                    <a href='#' className='duration-200 hover:scale-105'>
                      <FaLinkedin className='text-3xl' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='border-t-2 border-gray-300/50 py-6 text-center'>@copyright 2024 U-MONSTER</div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
