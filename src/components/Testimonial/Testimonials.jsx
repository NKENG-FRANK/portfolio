import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    position: "",
    content: "",
    rating: 5,
  });
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // 🧠 Load testimonials from localStorage on component mount
  useEffect(() => {
    const stored = localStorage.getItem("testimonials");
    if (stored) {
      setTestimonials(JSON.parse(stored));
    }
  }, []);

  // 🔁 Save testimonials to localStorage when they change
  useEffect(() => {
    localStorage.setItem("testimonials", JSON.stringify(testimonials));
  }, [testimonials]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial({
      ...newTestimonial,
      [name]: value,
    });
  };

  const handleRatingChange = (rating) => {
    setNewTestimonial({
      ...newTestimonial,
      rating,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTestimonials = [
      ...testimonials,
      {
        id: Date.now(),
        ...newTestimonial,
        image: "https://via.placeholder.com/100", // Placeholder image
      },
    ];

    setTestimonials(updatedTestimonials);
    setNewTestimonial({ name: "", position: "", content: "", rating: 5 });
    setFormSubmitted(true);
    setShowForm(false);

    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Client Testimonials</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what my clients have to say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-blue-600 mb-4">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-3xl opacity-30"
                />
              </div>
              <p className="text-gray-600 mb-6 italic">{testimonial.content}</p>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={`${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Testimonial Button */}
        <div className="text-center mb-8">
          {!showForm && !formSubmitted && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Share Your Experience
            </button>
          )}

          {formSubmitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mx-auto max-w-lg">
              <p className="font-medium">Thank you for your testimonial!</p>
            </div>
          )}
        </div>

        {/* Testimonial Form */}
        {showForm && (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Share Your Experience
            </h3>

            <form onSubmit={handleSubmit}>
              {/* Name Field */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newTestimonial.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              {/* Position Field */}
              <div className="mb-6">
                <label
                  htmlFor="position"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Your Position
                </label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={newTestimonial.position}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              {/* Testimonial Field */}
              <div className="mb-6">
                <label
                  htmlFor="content"
                  className="block mb-2 font-medium text-gray-700"
                >
                  Your Testimonial *
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={newTestimonial.content}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  required
                ></textarea>
              </div>

              {/* Rating Field */}
              <div className="mb-8">
                <label className="block mb-2 font-medium text-gray-700">
                  Your Rating *
                </label>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingChange(star)}
                      className="text-2xl"
                    >
                      <FontAwesomeIcon
                        icon={faStar}
                        className={`${
                          star <= newTestimonial.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Submit Testimonial
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
