import SketchVideo from "../assets/sketch.mov";

function LukeKim() {
  return (
    <>
      <div className="w-full grid grid-cols-2 p-5">
        <div>
          <div className="flex transition ease-in-out duration-300 hover:translate-x-1 hover:-translate-y-1  text-9xl font-serif w-5 px-10 ">
            Luke Kim.
          </div>
          <div className="flex text-2xl font-serif italic w-full px-12 py-5 animate-text bg-gradient-to-r from-rose-500 via-blue-500 to-rose-500 bg-clip-text text-transparent">
            Software Developer
          </div>
        </div>
        <div className="flex justify-end ml-20 w-72">
          <video autoPlay muted loop>
            <source src={SketchVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}

export default LukeKim;
