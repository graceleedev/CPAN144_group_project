// Component to display a gallery of restaurant images
export default function RestaurantImage({ images }) {
    return (
      <div>
         {/* Section heading */}
        <h2 className="text-xl font-semibold mb-2">Photos</h2>

        {/* Grid layout for responsive image gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Map over the images array to render each image */}
          {images.map((img, index) => (
            // Image element with key, alt text, and styling
            <img key={index} src={img} alt="Restaurant" className="rounded-lg shadow" />
          ))}
        </div>
      </div>
    );
  }
  