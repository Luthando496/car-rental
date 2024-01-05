import React from 'react'
import CustomHeader from '../components/CustomHeader'
import BackgroundContact from '../components/BackgroundContact'
import Footer from '../components/Footer'

const people =[
    {
        name:"Josh Graham",
        job:"Salesman",
        image:"../images/jurica-koletic-7YVZYZeITc8-unsplash.jpg"
    },
    {
        name:"John Smith",
        job:"Business Manager",
        image:"../images/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg"
    },
    {
        name:"Josh Graham",
        job:"Photographer",
        image:"../images/pexels-ali-pazani-2787341.jpg"
    },
    {
        name:"Lela Stefani",
        job:"Car Detailist",
        image:"../images/aiony-haust-3TLl_97HNJo-unsplash.jpg"
    },
    {
        name:"Simon Carter",
        job:"Mechanic",
        image:"../images/pexels-simon-robben-614810.jpg"
    },
    {
        name:"Brad Smith",
        job:"Manager",
        image:"../images/itay-verchik-6ZKGBzrDd3I-unsplash.jpg"
    },
]

const Team = () => {
  return (
    <>
        <CustomHeader title='Our Team' />

        <section className="w-full py-36">

            <div className="w-full px-7 md:px-20 lg:px-28 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">

            {people.map((person, index) => (
            <article key={index} className="w-full col-span-1 bg-shadow">
                <div className="img w-full h-[20rem]">
                    <img src={person.image} alt={person.name} className='w-full h-full object-cover' />
                </div>
                <div className="w-full py-14 text-center space-y-4">
                <h3 className="text-3xl font-bold text-gray-800">{person.name}</h3>
                <p className="text-gray-600 font-semibold">{person.job}</p>

                </div>

            </article>

            ))}

            </div>

        </section>

        <BackgroundContact />
        <Footer />
    </>
  )
}

export default Team