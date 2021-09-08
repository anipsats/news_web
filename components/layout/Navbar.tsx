import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Feedback', path: '/feedback' },
];

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="fixed z-50 top-0 w-full bg-white">
        <nav className="container flex justify-between items-center z-20">
          <div className="my-5 lg:my-6">
            <img src="/images/logo.svg" alt="easybank logo" />
          </div>

          <div className="hidden cursor-pointer lg:block text-sm text-neutral-grayish-blue">
            {navItems.map((navItem) => (
              <a
                key={navItem.name}
                className="mx-3 py-5 hover:gradient-border-bottom"
                onClick={() => {
                  router.push(navItem.path);
                }}
              >
                {navItem.name}
              </a>
            ))}
          </div>

          <a
            className="hidden lg:block primary-color px-7 py-3 rounded-full text-neutral-white text-xs to-primary-bright-cyan hover:button-brightness focus:outline-none focus:ring ring-blue-400"
            href="https://play.google.com/store/apps/details?id=com.newsta.android"
            target="_blank"
          >
            Get the app
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
          >
            <img
              className={`${isOpen && 'hidden'}`}
              src="/icons/icon-hamburger.svg"
              alt=""
            />
            <img
              className={isOpen ? 'block' : 'hidden'}
              src="/icons/icon-close.svg"
              alt=""
            />
          </button>
        </nav>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 z-30 bg-gray-800 
      bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="bg-white text-primary-dark-blue flex flex-col text-center mx-5 my-20 py-4 rounded">
          {navItems.map((navItem) => (
            <a
              key={navItem.name}
              className="py-2"
              onClick={() => {
                router.push(navItem.path);
              }}
            >
              {navItem.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
