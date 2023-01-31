import { FaArrowRight } from "react-icons/fa";

function ExperienceCard(props) {
  return (
    <div className="grid grid-cols-1 grid-rows-4 max-w-sm bg-white rounded-lg shadow-xl hover:shadow-2xl hover:translate-x-1 hover:-translate-y-1 cursor-pointer transition ease-in-out delay-50">
      {/* Image */}
      <div className="row-span-2">
        <a
          className="flex items-center justify-center"
          href={props.link}
          target="_blank"
        >
          <img
            className="rounded-t-lg h-60 object-cover"
            src={props.image}
            alt={props.name}
          />
        </a>
      </div>

      {/* Header and Description */}
      <div class="p-3 h-32 items-center">
        <div>
          <a href={props.link} target="_blank">
            <h5 class="flex justify-center  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.name}
            </h5>
          </a>
          <p class="text-center text-base py-5">{props.description}</p>
        </div>
      </div>

      {/* Button */}

      <div className="flex justify-center items-center px-4 pb-5">
        <a
          href={props.link}
          target="_blank"
          class="inline-flex items-center px-3 py-2 text-base font-medium bg-rose-500 text-center text-white rounded-lg hover:bg-black "
        >
          {props.button}
          {/* <span className="ml-1">
            <FaArrowRight />
          </span> */}
        </a>
      </div>
    </div>
  );
}

export default ExperienceCard;
