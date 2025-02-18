import questionmark from "../Images/gd/question-mark.png";

function WhyChooseUs(probs) {
  return (
    <section className="text-gray-500 body-font bg-gray-100">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center px-28 md:w-1/2">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-blue-400">
            WHY CHOOSE US AS {probs.data}?
          </h1>
          <p className="mb-8 leading-relaxed">
            Let's collaborate with the Most Reliable Design Firm in Pakistan to
            get your ideas shaped into the best visual form.
          </p>
          <div className="px-10">
            <li>Reliable and Original Designs</li>
            <li>No Monthly or Annual Contract</li>
            <li>100% Client satisfaction</li>
            <li>24×7 Support and Communication</li>
            <li>FREE Consultation</li>
            <li>100% Transparency</li>
            <li>All Design Source Files Provided</li>
          </div>
        </div>
        <div className="lg:max-w-lg mx-20 lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={questionmark}
          />
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
