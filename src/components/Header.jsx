import Logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div
      className='relative z-10 w-full dark:bg-black dark:text-white duration-300
    '>
      <div className='container py-3 md:py-2'>
        <div className='flex fixed justify-between items-center'>
          {/* Logo section */}
          <img src={Logo} alt='' className='w-23 h-10' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
