const List = ({content}) => {
    return(
    <div>
        <ul className="space-y-2">
        {content.map((element, index) =>
            <li className='text-secondary-text leading-relaxed flex items-start' key={index}>
                <span className='w-1.5 h-1.5 rounded-full bg-primary-text mt-2 mr-3 shrink-0'></span>
                {element}
            </li>
        )}
        </ul>
    </div>
    )
}

export default List;
