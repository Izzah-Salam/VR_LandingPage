const Hero = () => {
  return (
    <div>
      <div className="text-center mt-10">
        <h1 className="text-5xl ">
          VirtualR build tools for <br />{" "}
          <span className="text-orange-600">developers</span>{" "}
        </h1>
        <div className="text-sm text-gray-300 my-10 ">
          <p>
            Empower your creativity and bring your VR app ideas to life with our
            initutive development tool{" "}
          </p>
          <p>
            Get started today and turn your imagination into immersive reality!
          </p>
        </div>
        <div>
          <button className="bg-custom-gradient p-2 rounded-md mx-3">
            Start for Free
          </button>
          <button className="border border-white p-2 rounded-md">
            Documentation
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Hero;
