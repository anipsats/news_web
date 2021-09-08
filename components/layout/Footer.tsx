import { useRouter } from 'next/dist/client/router';

export default function Footer() {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Feedback', path: '/feedback' },
  ];

  const router = useRouter();

  return (
    <footer className="bg-primary-dark-blue py-10">
      <div className="container">
        <div className="text-center grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-12 lg:gap-0">
          <div className="flex flex-col justify-between lg:justify-self-start lg:col-span-3">
            <img
              className="mb-7"
              src="images/logo-white.svg"
              alt="newsta logo"
            />
            <div className="flex justify-between items-center">
              <svg
                className="text-white hover:text-blue-400 fill-current cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
              >
                <title>Facebook</title>
                <path d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z" />
              </svg>
              <a href="https://twitter.com/newsta_in" target="_blank">
                <svg
                  className="text-white hover:text-blue-400 fill-current cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="18"
                >
                  <title>Twitter</title>
                  <path d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z" />
                </svg>
              </a>
              <svg
                className="text-white hover:text-blue-400 fill-current cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
              >
                <title>Instagram</title>
                <path d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z" />
              </svg>
              <svg
                className="text-white hover:text-blue-400 fill-current cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
              >
                <title>Instagram</title>
                <path
                  d="M144 7339h-4v-6.999c0-1.92-.847-2.991-2.366-2.991-1.653 0-2.634 1.116-2.634 2.991V7339h-4v-13h4v1.462s1.255-2.202 4.083-2.202c2.829 0 4.917 1.726 4.917 5.298V7339zm-17.558-15.079a2.451 2.451 0 0 1-2.442-2.461 2.451 2.451 0 0 1 2.442-2.46 2.451 2.451 0 0 1 2.441 2.46 2.45 2.45 0 0 1-2.441 2.461zM124 7339h5v-13h-5v13z"
                  transform="translate(-124 -7319)"
                ></path>
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2 py-1 lg:grid-rows-3 text-white text-sm lg:text-left lg:justify-self-start lg:col-span-5 lg:gap-x-24 lg:grid-flow-col-dense">
            {navItems.map((navItem) => (
              <a
                className="hover:text-blue-400 cursor-pointer"
                onClick={() => {
                  router.push(navItem.path);
                }}
              >
                {navItem.name}
              </a>
            ))}
            {/*             
            <a className="hover:text-blue-400" href="#">
              Home
            </a>
            <a className="hover:text-blue-400" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-blue-400" href="#">
              Terms &amp; Conditions
            </a> */}
          </div>

          <div className="flex flex-col justify-between items-center lg:items-end lg:justify-self-end lg:col-span-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.newsta.android"
              target="_blank"
              className="primary-color cursor-pointer px-7 py-3 rounded-full text-neutral-white text-xs  to-primary-bright-cyan hover:button-brightness mb-7 focus:outline-none focus:ring ring-blue-400"
            >
              Get the app
            </a>

            <p className="text-neutral-grayish-blue text-sm">
              © Newsta. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
