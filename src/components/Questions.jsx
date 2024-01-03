import {useState} from 'react'
import FAQ from './FAQ';


const data = [{
    question:"1. What is special about comparing rental car deals?",
    answer:"Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies."},
    {question:"2. How do I find the car rental deals?",
    answer:"You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions."},
    {question:"3. How do I find such low rental car prices?",
    answer:"Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices."

}]

const Questions = () => {

    const [change,setChange] = useState(data)
  return (
    <section className='w-full py-32 '>
        <div className="text-center w-full px-4 space-y-5">

        <h2 className="text-center text-2xl font-semibold">FAQ</h2>
        <h2 className="text-center text-4xl font-semibold capitalize mt-3">Frequently Asked Questions</h2>
        <p className="text-[17px] text-gray-700 font-medium text-center">Frequently Asked Questions About the Car Rental Booking Process on<br /> Our Website: Answers to Common Concerns and Inquiries.</p>
        </div>

        <div className="flex justify-center mx-auto mt-20 w-full px-6">
        {/* accordin */}
        <div className="w-full md:w-[600px] px-4 py-2 shadow-2xl border border-gray-300 rounded-sm">
            {data.map((item,index) => (
                <FAQ key={index} data={item} />
            ))}

        </div>

        </div>


    </section>
  )
}

export default Questions