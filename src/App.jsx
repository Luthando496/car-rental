import FormSection from './components/FormSection';
import Header from './components/Header';
import Navbar from './components/Navbar'
import PlanTrip from './components/PlanTrip';
import Save from './components/Save';
import ChooseUs from './components/ChooseUs';
import Testimonials from './components/Testimonials';


const App = () => {

    return(
      <>
      <Navbar />
      <Header />
      <FormSection />
      <PlanTrip />
      <Save />
      <ChooseUs />
      <Testimonials />

      </>
    )
}


export default App;