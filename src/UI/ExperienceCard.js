import { FaArrowRight } from "react-icons/fa";
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiOutlineMinus,
} from "react-icons/ai";
import { VscChromeMinimize } from "react-icons/vsc";

function ExperienceCard(props) {
  return (
    // <div className="grid grid-cols-1 grid-rows-4 w-22 bg-zinc-50 shadow-xl hover:shadow-2xl hover:translate-x-1 hover:-translate-y-1 cursor-pointer transition ease-in-out delay-50">
    //   {/* Image */}
    //   {/* <div className="row-span-2">
    //     <a
    //       className="flex items-center justify-center"
    //       href={props.link}
    //       target="_blank"
    //     >
    //       <img
    //         className="rounded-t-lg h-60 object-cover"
    //         src={props.image}
    //         alt={props.name}
    //       />
    //     </a>
    //   </div> */}

    //   {/* Header and Description */}
    //   <div class="p-10 h-32 items-center">
    //     <div>
    //       <a href={props.link} target="_blank">
    //         <h5 class="flex justify-center  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    //           {props.name}
    //         </h5>
    //       </a>
    //       <p class="text-center text-base py-5">{props.description}</p>
    //     </div>
    //   </div>

    //   {/* Button */}

    //   <div className="flex justify-center items-center px-4 pb-5">
    //     <a
    //       href={props.link}
    //       target="_blank"
    //       class="inline-flex items-center px-3 py-2 text-base font-medium bg-black text-center text-white rounded-lg hover:bg-rose-500 "
    //     >
    //       {props.button}
    //       {/* <span className="ml-1">
    //         <FaArrowRight />
    //       </span> */}
    //     </a>
    //   </div>
    // </div>
    <div className="w-4/5 h-4/5 bg-stone-50 outline grid grid-cols-1 grid-rows-4">
      {/* Title Bar */}
      <div className="w-full h-6 bg-stone-200 outline justify-left flex">
        <AiFillCloseCircle className="text-red-500 mt-1 mb-1 ml-0.5 mr-0.5" />
        <AiOutlineMinus className="rounded-full bg-yellow-200 mt-1 mb-1 ml-0.5 mr-0.5" />
        <AiFillPlusCircle className="text-green-500 mt-1 mb-1 ml-0.5 mr-0.5" />
      </div>
      {/* Header */}
      <div className="flex h-6 w-full justify-center">
        <h5 className="text-2xl font-mono">{props.name}</h5>
      </div>
      {/* Description */}
      <div className="flex h-6 w-full justify-center">
        <p className="text-center font-mono text-xl px-2">
          {props.description}
        </p>
      </div>

      {/* Button */}
      <div className="flex justify-center items-center px-4 pb-5">
        <a
          href={props.link}
          target="_blank"
          class="inline-flex items-center px-3 py-2 text-base font-medium bg-black text-center text-white rounded-lg hover:bg-rose-500 "
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
