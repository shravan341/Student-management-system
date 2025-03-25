import Navbar from "../pages/NavBar";
// import Navbar from "./NavBar";
import bg from "../assets/bg.jpg";

const Services = () => {
  return (
    <>
      <Navbar />
      {/* Full-screen container with background image */}
      <div className="relative w-full h-screen">
        {/* Background image */}
        <img
          src={bg}
          alt="Background Image"
          className="w-full h-full object-cover"
        />

        {/* Overlay content */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-8">
          {/* First Row */}
          <div className="flex flex-row gap-8">
            {/* First Section */}
            <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-md shadow-sm bg-gray-100 bg-opacity-75 md:bg-opacity-50">
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-red">
                  Want to track Student performance?
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Want to track Student performance?
              </p>
              <a
                href="#"
                className="inline-flex font-medium items-center text-blue-600 hover:underline"
              >
                See our guideline
              </a>
            </div>

            {/* Second Section */}
            <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-md shadow-sm bg-gray-100 bg-opacity-75 md:bg-opacity-50">
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-red">
                  Worrying About the Student Attendance?
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Worrying About the Student Attendance?
              </p>
              <a
                href="#"
                className="inline-flex font-medium items-center text-blue-600 hover:underline"
              >
                See our guideline
              </a>
            </div>

            {/* Third Section */}
            <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-md shadow-sm bg-gray-100 bg-opacity-75 md:bg-opacity-50">
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-red">
                  Know Your Teaching Feedback?
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Check how much students love your teaching.
              </p>
              <a
                href="#"
                className="inline-flex font-medium items-center text-blue-600 hover:underline"
              >
                See our guideline
              </a>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-row gap-8">
            {/* Fourth Section */}
            <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-md shadow-sm bg-gray-100 bg-opacity-75 md:bg-opacity-50">
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-red">
                  Want to track Student performance?
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Want to track Student performance?
              </p>
              <a
                href="#"
                className="inline-flex font-medium items-center text-blue-600 hover:underline"
              >
                See our guideline
              </a>
            </div>

            {/* Fifth Section */}
            <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-md shadow-sm bg-gray-100 bg-opacity-75 md:bg-opacity-50">
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-red">
                  Worrying About the Student Attendance?
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Worrying About the Student Attendance?
              </p>
              <a
                href="#"
                className="inline-flex font-medium items-center text-blue-600 hover:underline"
              >
                See our guideline
              </a>
            </div>

            {/* Sixth Section */}
            <div className="max-w-sm p-4 bg-white border border-gray-200 rounded-md shadow-sm bg-gray-100 bg-opacity-75 md:bg-opacity-50">
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-red">
                  Know Your Teaching Feedback?
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Check how much students love your teaching.
              </p>
              <a
                href="#"
                className="inline-flex font-medium items-center text-blue-600 hover:underline"
              >
                See our guideline
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
