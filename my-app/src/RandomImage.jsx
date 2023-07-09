import React, { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FiRefreshCcw } from 'react-icons/fi';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = async () => {
    try {
      const response = await fetch('https://source.unsplash.com/random');
      const imageUrl = response.url;
      setImageUrl(imageUrl);
    } catch (error) {
      console.error('Failed image:', error);
    }
  };

  const handleRefresh = () => {
    fetchRandomImage();
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className='font-bold '>random images</h1>
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Random"
          className="max-w-md p-10"
        />
      )}
      <div className="mt-4">
        <button
          onClick={handleRefresh}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          <FiRefreshCcw className='text-xl' />
          Refresh Image
        </button>
        <FacebookShareButton
          url={imageUrl}
          quote="Check out this random image!"
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            <FaFacebook size={20} className="mr-1" />
            Share on Facebook
          </button>
        </FacebookShareButton>
        <TwitterShareButton
          url={imageUrl}
          title="Check out this random image!"
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
            <FaTwitter size={20} className="mr-1" />
            Share on Twitter
          </button>
        </TwitterShareButton>
        <WhatsappShareButton
          url={imageUrl}
          title="Check out this random image!"
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <FaWhatsapp size={20} className="mr-1" />
            Share on WhatsApp
          </button>
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default RandomImage;


