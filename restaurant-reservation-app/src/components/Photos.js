export default function Photos({ images }) {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-2">Photos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <img key={index} src={img} alt="Restaurant" className="rounded-lg shadow" />
          ))}
        </div>
      </div>
    );
  }
  