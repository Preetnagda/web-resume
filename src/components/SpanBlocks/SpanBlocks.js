const SpanBlocks = ({elements, theme = "primary"}) => {
    return(
        <div className="ml-[-0.5rem] py-2">
            {elements? elements.map((element,index) => {
                return (<div className={'inline-block rounded  p-2 m-2 text-sm border border-secondary ' + (theme == "primary"? 'bg-secondary text-primary' : '') }
                    key={index}>
                        {element}
                </div>)
            }) : []}
        </div>
    )
}

export default SpanBlocks;