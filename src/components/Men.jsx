import React from 'react';

function Men() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-auto md:h-screen">
      {/* Men's Section */}
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-3/4 h-2/3 mb-4">
          {/* Men's Image */}
          <img
            src="/src/assets/man 1.webp" // Replace with your men's image path
            alt="Men"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          {/* Men's Label */}
          <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            Men
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 w-3/4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          <img
            src="/src/assets/man2.webp"
            alt="Men 1"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
          <img
            src="/src/assets/man3.webp"
            alt="Men 2"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
          <img
            src="/src/assets/man4.webp"
            alt="Men 3"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
          <img
            src="/src/assets/man5.webp"
            alt="Men 4"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
          <img
            src="/src/assets/man5.jpg"
            alt="Men 5"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
          <img
            src="/src/assets/man6.jpg"
            alt="Men 6"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Women's Section */}
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-3/4 h-2/3 mb-4">
          {/* Women's Image */}
          <img
            src="/src/assets/girl.webp" // Replace with your women's image path
            alt="Women"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          {/* Women's Label */}
          <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            Women
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 w-3/4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
          <img
            src="/src/assets/download.jpeg"
            alt="Women 1"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
          <img
            src="/src/assets/download (1).jpeg"
            alt="Women 2"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
          <img
            src="/src/assets/download (2).jpeg"
            alt="Women 3"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
          <img
            src="/src/assets/download (3).jpeg"
            alt="Women 4"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
          <img
            src="/src/assets/download (4).jpeg"
            alt="Women 5"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
          <img
            src="/src/assets/download (5).jpeg"
            alt="Women 6"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Men;
