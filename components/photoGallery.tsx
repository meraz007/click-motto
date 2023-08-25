"use client";
import { useState, useEffect } from 'react';
import { PEXELS_API_KEY } from '../config';

function PhotoGallery() {
  const [photos, setPhotos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    console.log('click')
  };
  useEffect(() => {
    async function fetchPhotos() {
      try {
        const searchTerm = 'nature'; // Example search term
        const response = await fetch(`https://api.pexels.com/v1/search?query=${searchTerm}&per_page=10`, {
          headers: {
            Authorization: PEXELS_API_KEY,
          },
        });
        const data = await response.json();
        setPhotos(data.photos);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchPhotos();
  }, []);

  return (
    <div className="">
        <div className='mt-6 flex flex-col md:flex-row justify-between'>
          <ul className='flex gap-4'>
            <li className='cursor-pointer text-[20px] font-medium text-[#333333]'>All</li>
            <li className='cursor-pointer text-[20px] font-medium text-[#949494]'>Photos</li>
            <li className='cursor-pointer text-[20px] font-medium text-[#949494]'>Videos</li>
            <li className='cursor-pointer text-[20px] font-medium text-[#949494]'>Freebies</li>
            <li className='cursor-pointer text-[20px] font-medium '>360</li>
          </ul>
          
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="inline-flex justify-center items-center w-full  shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none "
              onClick={toggleDropdown}
            >
              Recommended
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="z-[99999] origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                  Most Recent
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Most Viewed
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Most Downloaded
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Most Appreciated
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
          {photos.map(photo => (
            <div key={photo.id} className="relative overflow-hidden">
              <img
                src={photo.src.medium}
                alt={photo.photographer}
                className="w-full h-full object-cover cursor-pointer"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <div className="bg-black bg-opacity-50 text-white p-2 rounded-md">
                  <p>{photo.photographer}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PhotoGallery;
