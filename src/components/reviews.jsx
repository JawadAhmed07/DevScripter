import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import google from "../Images/google.png";
import reviewsImage from "../Images/gd/review.png";

// Define fake reviews data
const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    date: "June 15, 2024",
    text: "Amazing experience working with the team! Their dedication and skills helped grow my business.",
    stars: 5,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnmy_e9yxRfaW3_Rc53ceP9miL9Ls7RsPGyqBR6sFLGBHKymZeJaqkzL5QCLfCLZ5jbw&usqp=CAU",
  },
  {
    id: 2,
    name: "Jane ",
    date: "July 22, 2024",
    text: "They were so helpful in optimizing my website for SEO. Highly recommend them!",
    stars: 5,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnmy_e9yxRfaW3_Rc53ceP9miL9Ls7RsPGyqBR6sFLGBHKymZeJaqkzL5QCLfCLZ5jbw&usqp=CAU",
  },
  {
    id: 3,
    name: "Alice Johnson",
    date: "May 12, 2024",
    text: "Incredible service with a great team! They understood exactly what I needed.",
    stars: 5,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnmy_e9yxRfaW3_Rc53ceP9miL9Ls7RsPGyqBR6sFLGBHKymZeJaqkzL5QCLfCLZ5jbw&usqp=CAU",
  },
  {
    id: 4,
    name: "Michael Brown",
    date: "August 1, 2024",
    text: "Exceptional work! They increased my website traffic within a month!",
    stars: 5,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnmy_e9yxRfaW3_Rc53ceP9miL9Ls7RsPGyqBR6sFLGBHKymZeJaqkzL5QCLfCLZ5jbw&usqp=CAU",
  },
  {
    id: 5,
    name: "Emily Davis",
    date: "September 5, 2024",
    text: "Very professional service. They were responsive and exceeded my expectations.",
    stars: 4,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnmy_e9yxRfaW3_Rc53ceP9miL9Ls7RsPGyqBR6sFLGBHKymZeJaqkzL5QCLfCLZ5jbw&usqp=CAU",
  },
  {
    id: 6,
    name: "Chris Evans",
    date: "March 18, 2024",
    text: "Excellent SEO service, truly made a difference in my online presence.",
    stars: 5,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnmy_e9yxRfaW3_Rc53ceP9miL9Ls7RsPGyqBR6sFLGBHKymZeJaqkzL5QCLfCLZ5jbw&usqp=CAU",
  },
  {
    id: 7,
    name: "Natalie Portman",
    date: "October 2, 2024",
    text: "Highly recommend their team for website optimization and SEO.",
    stars: 5,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnmy_e9yxRfaW3_Rc53ceP9miL9Ls7RsPGyqBR6sFLGBHKymZeJaqkzL5QCLfCLZ5jbw&usqp=CAU",
  },
  {
    id: 8,
    name: "Robert Downey",
    date: "November 11, 2024",
    text: "Very impressed with the SEO strategy they implemented!",
    stars: 5,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnmy_e9yxRfaW3_Rc53ceP9miL9Ls7RsPGyqBR6sFLGBHKymZeJaqkzL5QCLfCLZ5jbw&usqp=CAU",
  },
];

// ReviewCard component to render individual review
const ReviewCard = ({ review }) => {
  const { name, date, text, stars, logo } = review;

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg w-96 my-4 mx-2 border">
      <div className="flex gap-4">
        <div className="my-2">
          <img src={logo} alt="Google logo" className="w-8 rounded-full h-8" />
        </div>
        <div>
          <div className="flex items-center">
            <h4 className="font-semibold text-md">{name}</h4>
          </div>
          <p className="text-sm text-gray-500 mb-3">{date}</p>
        </div>
        <h1 className="pl-16">
          <img className="w-10 h-10" src={google} alt="" />
        </h1>
      </div>
      <div className="flex items-center mb-4">
        {[...Array(stars)].map((_, i) => (
          <svg
            key={i}
            className="w-4 h-4 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.507 4.639a1 1 0 00.95.69h4.875c.969 0 1.371 1.24.588 1.81l-3.95 2.87a1 1 0 00-.364 1.118l1.508 4.639c.3.92-.755 1.688-1.538 1.118l-3.951-2.87a1 1 0 00-1.175 0l-3.951 2.87c-.783.57-1.838-.197-1.538-1.118l1.507-4.639a1 1 0 00-.364-1.118l-3.95-2.87c-.784-.57-.38-1.81.588-1.81h4.875a1 1 0 00.95-.69l1.507-4.64z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 text-sm">{text}</p>
    </div>
  );
};

function Reviews() {
  return (
    <>
      <section>
        <div className="text-center py-10">
          <h1 className="text-3xl text-gray-500">
            What some of our satisfied customers are saying
          </h1>
          <h1 className="text-4xl font-bold py-5 text-gray-700">
            Real Client Testimonials
          </h1>
        </div>
        <div className="flex gap-2 justify-center">
          <div>
            <img
              className="w-52 my-16"
              src={reviewsImage}
              alt="Review illustration"
            />
          </div>
          <div className="w-full max-w-4xl mx-auto">
            <Swiper
              slidesPerView={1} // Show 1 slide on mobile
              spaceBetween={20}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2, // Show 2 slides on tablets
                },
                1024: {
                  slidesPerView: 3, // Show 3 slides on desktops
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {reviewsData.map((review) => (
                <SwiperSlide key={review.id}>
                  <ReviewCard review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reviews;
