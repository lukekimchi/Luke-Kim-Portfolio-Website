function AboutMe() {
  return (
    <>
      {/* Name and title */}
      <div className="flex justify-center items-center py-2">
        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
          Luke Kim
        </h1>
      </div>
      <div className="flex justify-center py-2">
        <p>Software Developer.</p>
      </div>
      {/* Get to know me */}
      <div className="flex justify-center items-center py-10">
        <p className="font-light text-justify px-20">
          Hey, I'm Luke - aspiring software developer, mad active lad, 3rd year
          Software Engineering student and Kowi (Korean-Kiwi). Going straight to
          what I want to do with my life, at least career-wise:{" "}
          <span>
            "Experience as much of the industry as possible, eventually find
            what I find most fun, find people who think that's also fun, and
            lead a business."
          </span>
        </p>
      </div>
    </>
  );
}

export default AboutMe;
