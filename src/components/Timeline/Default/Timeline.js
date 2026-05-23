const Timeline = ({elements}) => {
    return(
        <div>
            {elements.map((element, index) => {
                return(
                    <div key={index} className="flex group/timeline">
                        <div className="flex flex-col">
                            <div
                                style={{'borderWidth': index === 0 ? 'none': '1px'}}
                                className="timeline-top-line flex-grow border-gray-300 border-solid mx-auto"></div>
                            <div className="rounded-full border-2 border-primary-text group-hover/timeline:bg-primary-text border-solid h-4 w-4 transition-colors duration-200"></div>
                            <div
                                style={{'borderWidth': index === (elements.length - 1) ? 'none': '1px'}}
                                className="timeline-bottom-line flex-grow border-gray-300 border-solid mx-auto">
                            </div>
                        </div>
                        <div className="px-4 py-2 w-full">{element}</div>
                    </div>
                );
        })}
        </div>
    );
}

export default Timeline;
