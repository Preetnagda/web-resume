const Timeline = ({elements, dates}) => {
    return(
        <div>
            {elements.map((element, index) => {
                return(
                    <div key={index} className="flex group/timeline">

                        <div className="flex flex-col">
                            <div 
                                style={{'borderWidth': index === 0 ? 'none': '1px'}}
                                className="timeline-top-line flex-grow border-secondary border-solid mx-auto"></div>
                            <div className="rounded-full border border-secondary group-hover/timeline:bg-secondary border-solid h-4 w-4"></div>
                            <div 
                                style={{'borderWidth': index === (elements.length - 1) ? 'none': '1px'}}
                                className="timeline-bottom-line flex-grow border-secondary border-solid mx-auto">
                            </div>
                        </div>
                        <div className="p-4 w-full">{element}</div>
                    </div>
                );
        })}
        </div>

    );
}

export default Timeline;