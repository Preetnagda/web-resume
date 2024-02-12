const List = ({content}) => {
    return(
    <div>
        <ul>
        {content.map((element, index) => 
            <li className='my-2' key={index}>{element}</li>
        )}
        </ul>
    </div>
    )
}

export default List;