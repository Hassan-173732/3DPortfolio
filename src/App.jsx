import { BrowserRouter } from "react-router-dom"
import { About,Contact,Experience, Feedbacks,Hero, Navbar, Tech, Works, StarsCanvas} from "../src/components"

/**
 * Renders the main application component.
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  // ...
}
function App() {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
        </div>      
    </div> 
    </BrowserRouter>
  )
}

export default App
