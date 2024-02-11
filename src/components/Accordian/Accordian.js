const Accordian = ({Title, Text}) => {
    return (
        <div class="group">
            <button>
                <div>
                    <Title/>
                </div>
            </button>
            <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 overflow-hidden transition-all duration-300 ease-in-out">
                <div>
                    <Text/>
                </div>
            </div>
        </div>
    )
}

export default Accordian;