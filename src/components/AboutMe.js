function AboutMe() {
  return (
    <>
      {/* Name and title */}
      <div className="flex justify-center items-center py-2">
        <h1>Luke Kim</h1>
      </div>
      <div className="flex justify-center py-2">
        <p>Software Developer.</p>
      </div>
      {/* Get to know me */}
      <div className="flex justify-center items-center py-10">
        <p className="font-light text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p>
      </div>
    </>
  );
}

export default AboutMe;
