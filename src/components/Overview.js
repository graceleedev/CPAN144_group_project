// Functional component that receives a `description` prop
export default function Overview({ description }) {
    return (
      <div>
        {/* Section heading with Tailwind CSS classes for styling */}
        <h2 className="text-xl font-semibold mb-2">Overview</h2>

        {/* Paragraph displaying the description content passed as a prop */}
        <p>{description}</p>
      </div>
    );
  }
  