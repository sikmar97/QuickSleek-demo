import styled from "styled-components"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Who from "./components/Who"
import Works from "./components/Works"

const Container = styled.div` 
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color: white;
background: linear-gradient(109.8deg, rgb(62, 5, 116) -5.2%, rgb(41, 14, 151) -5.2%, rgb(216, 68, 148) 103.3%);
&::-webkit-scrollbar{
  display: none;
}
`


function App() {

  return (
    <Container>
      <Hero/>
      <Who/>
    </Container>
  )
}

export default App
