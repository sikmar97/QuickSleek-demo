import React from 'react'
import styled from 'styled-components'

const Section = styled.div` 
 display: flex;
 justify-content:center;
`

const Container = styled.div` 
 width: 1400px;
 display: flex;
 justify-content: space-between;
 align-items: center;

`

const Links = styled.div` 
 display: flex;
 align-items: center;
 gap: 50px;

`
const Logo = styled.img`
height: 100px; 
cursor: pointer;
`

const List = styled.ul`
display: flex;
gap: 20px;
list-style: none;
`

const ListItem = styled.li`
cursor: pointer;
`

const Icon = styled.img`
width: 20px;
cursor: pointer;
`

const Icons = styled.div`
 display: flex;
 align-items: center;
 gap: 20px; 
`

const Button = styled.button` 
width: 100px;
padding: 10px;
background-color: #da4ea2;
color: white;
border: none;
border-radius: 8px;
cursor: pointer;
transition:  background-color .3s ease-in-out, border  .3s ease-in-out;
&:hover {
    background-color: #b03780;
    border: 1px solid white;
    }
`



const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
            <Logo src="./img/Logo_QuickSleek.png" />
            <List>
                <ListItem>About</ListItem>
                <ListItem>Contact</ListItem>
            </List>
            </Links>
            <Icons>
                <Icon src="./img/search.png"/>
                <Button>Hire Now</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar