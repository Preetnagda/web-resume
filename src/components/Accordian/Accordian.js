import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Accordian = ({title, content, open = false}) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggleAccordian = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-2 cursor-pointer bg-white w-full" onClick={toggleAccordian}>
      <div className="text-left items-center select-none flex justify-between flex-row">
        <div className="flex items-start w-full">
          <div className="w-full mr-4">{title}</div>
          <div className='text-secondary-text text-sm w-6 mt-1'>{isOpen ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronRight} />}</div>
        </div>
      </div>
      <div className={`pt-2 overflow-hidden transition-[max-height] duration-200 ease-in ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <p className="pb-4 text-left text-secondary-text">
          {content}
        </p>
      </div>
    </div>
  );
}

export default Accordian;