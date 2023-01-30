import { FaArrowRight } from "react-icons/fa";

function ExperienceCard(props) {
  return (
    <div className="grid grid-cols-1 grid-rows-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-x-1 hover:-translate-y-1">
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
      <div class="p-3 h-32">
        <div>
          <a href={props.link}>
            <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.name}
            </h5>
          </a>
          <p class="text-base py-5">{props.description}</p>
        </div>
      </div>

      {/* Button */}

      <div className="flex items-end p-3">
        <a
          href={props.link}
          target="_blank"
          class="inline-flex items-center px-3 py-2 text-base font-medium bg-rose-500 text-center text-white rounded-lg hover:bg-black "
        >{props.button}
          <span className="ml-1">
            <FaArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
}

export default ExperienceCard;
