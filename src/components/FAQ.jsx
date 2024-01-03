import {useState} from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp} from "react-icons/io";



const FAQ = ({data}) => {
    const [hidden,setHidden] = useState(true)
    
  return (
    <article className="px-2 pb-3">
            <div className="flex faq_box justify-between items-start py-4 " >
                <h1 className="text-xl md:text-2xl font-semibold text-gray-500 border-b pb-3">{data.question}</h1>
                {hidden ? <IoIosArrowDown size={50} className="text-gray-500" onClick={()=> setHidden(!hidden)} /> : <IoIosArrowUp size={50} className="text-gray-500" onClick={()=> setHidden(!hidden)} />}
            </div>
            <p className={`text-gray-800 faq_box font-semibold  ${hidden ? 'hidden ' : 'block'}`}>{data.answer}</p>
    </article>
  )
}

export default FAQ