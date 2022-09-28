import React,{useState,useEffect} from 'react';
import Image from 'next/image' 
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
const Navbar = () => {

    const [nav,setNav] = useState(false)
    const [shadow, setShadow] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3'); 
    const handleNav = () => {
      setNav(!nav)
    }

    const router = useRouter();
  
     
   useEffect(() => {
    if (
      router.asPath === '/property'
    ) {
      setNavBg('transparent'); 
    } else {
      setNavBg('#ecf0f3'); 
    }
  }, [router]);
    useEffect(() => {
      const handleShadow = () => {
        if (window.scrollY >= 90) {
          setShadow(true);
        } else {
          setShadow(false);
        }
      };
      window.addEventListener('scroll', handleShadow);
    }, []);


    return (
        <div  
        style={{ backgroundColor: `${navBg}` }}
        className={
         shadow
           ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
           : 'fixed w-full h-20 z-[100]'
       }>
             <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                <Image 
                 src="/../public/assets/navLogo.png"
                 alt="/"
                 width="125"
                 height="50"
                />

                <div>
                     <ul className='hidden md:flex'> 
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                        <Link href='/'>Home</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                        <Link href='/#about'>About</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                        <Link href='/#skills'>Skills</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                        <Link href='/#projects'>Projects</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                        <Link href='/resume'>Resume</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                        <Link href='/#contact'>Contact</Link>
                        </li>
                    </ul>

                    <div onClick={handleNav} className='md:hidden'>
                       <AiOutlineMenu size={25} />
                    </div> 
                 </div> 
             </div>


             <div className={nav?'fixed left-0 top-0 w-full h-screen bg-black/70':''}>
                <div className={nav?"md:hidden fixed left-0 top-0 h-screen w-[75%] sm:w-[60%] md:w-[60%]   bg-[#ecf0f3] p-10 duration-500":
                "fixed left-[-100%] top-0 p-10 duration-500"}>

                  <div>
                     <div className='flex w-full items-center justify-between'>
                        <Image 
                        src="/../public/assets/navLogo.png" 
                        alt="f"
                        width="87"
                        height="35"
                        />
                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                           <AiOutlineClose onClick={handleNav} />
                        </div>
                     </div>
                  </div> 
                    

                  <div className='border-b border-gray-300 my-4'>
                    <p className='w-[85%] md:w-[90%] py-4'>
                     Let&#39;s build something legendary together
                    </p>
                  </div>

                  <div className='py-4 flex flex-col'>
                     <ul className='uppercase'>
                        <Link href='/'>
                        <li   className='py-4 text-sm'>
                           Home
                        </li>
                     </Link>
                     <Link href='/#about'>
                        <li  className='py-4 text-sm'>
                           About
                        </li>
                     </Link>
                     <Link href='/#skills'>
                        <li className='py-4 text-sm'>
                           Skills
                        </li>
                     </Link>
                     <Link href='/#projects'>
                        <li className='py-4 text-sm'>
                           Projects
                        </li>
                     </Link>
                     <Link href='/resume'>
                        <li className='py-4 text-sm'>
                           Resume
                        </li>
                     </Link>
                     <Link href='/#contact'>
                        <li className='py-4 text-sm'>
                           Contact
                        </li>
                     </Link>
                     </ul>

                     <div className=''>
                        <p className='uppercase tracking-widest mt-10'>
                           Lets Connet
                        </p>

                           <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                           <a
                              href='https://www.linkedin.com/in/clint-briley-50056920a/'
                              target='_blank'
                              rel='noreferrer'
                           >
                              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                              <FaLinkedinIn />
                              </div>
                           </a>
                           <a
                              href='https://github.com/fireclint'
                              target='_blank'
                              rel='noreferrer'
                           >
                              <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                              <FaGithub />
                              </div>
                           </a>
                           <Link href='/#contact'>
                              <div 
                              className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                              >
                              <AiOutlineMail />
                              </div>
                           </Link>
                           <Link href='/resume'>
                              <div 
                              className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                              >
                              <BsFillPersonLinesFill />
                              </div>
                           </Link>
                        </div>

                     </div>

                   </div>

                </div> 
             </div>  
        </div>
    );
};

export default Navbar;