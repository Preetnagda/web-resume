import Accordian from '../../Accordian/Accordian.js';

const ListContent = ({elements}) => {
    return (
        <div>
            {elements? elements.map((element, index)=>{
                if(element["title"] && element["content"]){
                    let Title = element["title"];
                    return <div key={index}>
                        <Accordian Text={() => element["content"]}>
                            <Title />
                        </Accordian>
                    </div>
                }
                else{
                    return <div key={index}>
                        {element}
                    </div>
                }
            }):[]}
        </div>
    )
}

export default ListContent;