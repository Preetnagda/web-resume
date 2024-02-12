const SpanBlocks = ({elements}) => {
    return(
        <div className="ml-[-0.5rem] py-2">
            {elements? elements.map((element,index) => {
                return (<div className='inline-block bg-secondary rounded text-primary p-2 m-2 text-sm' key={index}>
                    {element}
                </div>)
            }) : []}
        </div>
    )
}

export default SpanBlocks;