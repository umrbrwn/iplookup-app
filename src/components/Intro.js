import Usage from './Usage';

function Intro() {
  return (
    <div className="flex flex-col justify-center md:items-start items-center">
      <h1 className="text-2xl font-bold py-2">The trusted source for IP address data</h1>
      <p className="text-xl pb-8">We help you learn where your users are coming from, tailor a better user experience, protect data, in a fast and reliable way.</p>
      <div className="py-10">
        <Usage />
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-gray-100 font-medium py-2 px-4 rounded inline-flex items-center">Sign up for free</button>
    </div>
  );
}

export default Intro;
