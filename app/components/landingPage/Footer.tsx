

import Link from "next/link";


export function Footer() {
  return (
    <footer className="   m-4 relative flex flex-col w-full py-2 mx-auto md:flex-row md:items-center md:justify-between">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
      <Link href="/" className="flex items-center gap-2">
          <h1 className="text-3xl">
            <span className=" font-bold text-primary ">Schedulr</span>
          </h1>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023 <a href="https://schedulr.ama.ink/" className="hover:underline">Schedulr™</a>. All Rights Reserved.
      </span>
    </div>
  </footer>
  
  );
}
