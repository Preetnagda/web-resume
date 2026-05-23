const Card = ({title, content, footerTags}) => {
return(
    <div className="flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-xl h-full border border-gray-100 transition-all duration-300 hover:-translate-y-1 border-t-0">
        <div className="px-6 py-5">
            {title ? <div className="font-semibold text-lg mb-2 text-primary-text">{title}</div> : []}
            {content}
        </div>
        <div className="flex-grow"></div>

            {footerTags?
            <div className="px-6 pt-4 pb-4">
            {footerTags.map((element, index) =>
                <span key={index} className="inline-block rounded-full px-4 py-1.5 text-sm font-medium text-primary-text bg-accent-light hover:bg-primary-text hover:text-white mr-2 mb-2 transition-colors duration-200 cursor-pointer border border-gray-200">
                    {element}
                </span>
            )}</div>: []}

    </div>
);
}

export default Card;
