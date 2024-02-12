const Accordian = ({title, content}) => {
  
    return (
      <div className="mt-2 cursor-pointer bg-white group/accordian w-full">
        <div className="text-left items-center select-none flex justify-between flex-row">
          {title}
        </div>
        <div className={`pt-2 overflow-hidden transition-[max-height] duration-1000 ease-in max-h-0 group-hover/accordian:max-h-96`}>
          <p className="pb-4 text-left text-secondary-text">
            {content}
          </p>
        </div>
      </div>
    );
}
export default Accordian;