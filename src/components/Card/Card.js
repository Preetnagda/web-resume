const Card = ({title, content, footerTags}) => {
    console.log(footerTags);
return(
    <div class="flex flex-col lg:max-w-sm rounded overflow-hidden shadow-md h-full">
        <div class="px-6 py-4">
            <div class="font-semibold text-lg mb-2">{title}</div>
            {content}
        </div>
        <div className="flex-grow"></div>
        <div class="px-6 pt-4 pb-2">
            {footerTags?footerTags.map((element, index) => 
                <span key={index} class="hover:bg-secondary hover:text-primary inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-secondary-text mr-2 mb-2">
                    {element}
                </span>
            ): []}
        </div>
    </div>
);
}

export default Card;