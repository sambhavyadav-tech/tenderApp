import Image from "next/image";
import {Inter} from "next/font/google";

// roboto =  Roboto({ subsets: [Roboto.SUBSET_REGULAR] });
inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <main className={inter.className}>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
        Tender App
      </h1>
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <ul className="flex items-center flex-wrap list-none">
          <li className="mr-3">
            <a
              className="inline-block py-2 px-4 text-white no-underline hover:text-gray-200 dark:hover:text-gray-100"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block py-2 px-4 text-white no-underline hover:text-gray-200 dark:hover:text-gray-100"
              href="#"
            >
              About
            </a>
          </li>
          <li className="mr-3">
            <a
              className="inline-block py-2 px-4 text-white no-underline hover:text-gray-200 dark:hover:text-gray-100"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Tender App
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </main>
  );
}
