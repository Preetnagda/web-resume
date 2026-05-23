const SpanBlocks = ({elements, theme = "primary"}) => {
    return(
        <div className="ml-[-0.5rem] py-2 flex flex-wrap">
            {elements? elements.map((element,index) => {
                return (<div className={
                    'inline-block rounded-full px-3 py-1.5 m-1 text-sm font-medium transition-colors duration-200 ' +
                    (theme === "primary"
                        ? 'bg-primary-text text-white hover:bg-secondary-text'
                        : 'bg-accent-light text-secondary-text border border-gray-200')
                    }
                    key={index}>
                        {element}
                </div>)
            }) : []}
        </div>
    )
}

export default SpanBlocks;
