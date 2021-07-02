 import React from 'react';
 import styled from 'styled-components';
 import { ReactComponent as ReactLogo } from "././logo.svg"; 

 // einzelne Elemente der Preview als "styled-components"
 const Title = styled.h1`
   font-family: sans-serif;
   font-size: 2rem;
   letter-spacing: 0.08em;
   text-align: center;
   color: ${props => props.color};
 `

const Subtitle = styled.p`
   color: black;
   font-family: sans-serif;
   letter-spacing: 0.2em;
   word-spacing: 30px;
   text-align: center;
   color: ${props => props.color};
`

const Header = styled.div`
   padding: 1em;
   background-color: ${props => props.backgroundColor};
`
const Container = styled.div`
   padding: 3em;
   background-color: ${props => props.backgroundColor};
   height: 550px;
`

const Text = styled.p`
  text-align: left;
  color: ${props => props.color};
`

const Logo = styled(ReactLogo)`
   color: ${props => props.color};
`


 
 export function Preview (props) {

   // Die ausgewählten Farben des Users
   const {colors} = props;
      
   //Die Preview passt ihr Farbschema an, nachdem der User 2 Farben gewählt hat. 
   if(colors.length === 2){
      return(
            <div>      
               <Header backgroundColor = {colors[0]}>
                  <Title color = {colors[1]}>Welcome to this page</Title>
                  <Subtitle color = {colors[1]}>home gallery contact</Subtitle>
               </Header>
               <Container backgroundColor = {colors[1]}>
                  <Logo color = {colors[0]}/>
                  <Text color = {colors[0]}>
                     Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </Text>
               </Container>
            </div>
      )
   } 
   //Die Preview passt ihr Farbschema an, nachdem der User 3 Farben gewählt hat. 
   else if(colors.length === 3){
      return(
         <div>         
            <Header backgroundColor = {colors[0]}>
               <Title color = {colors[1]}>Welcome to this page</Title>
               <Subtitle color = {colors[1]}>home gallery  contact</Subtitle>
            </Header>
            <Container backgroundColor = {colors[2]}>
               <Logo color = {colors[0]}/>
               <Text color = {colors[0]}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
               </Text>
            </Container>
        </div>
      )
   } 
   //Die Preview passt ihr Farbschema an, nachdem der User 4 Farben gewählt hat. 
   else if(colors.length === 4){
      return(
         <div>         
            <Header backgroundColor = {colors[0]}>
               <Title color = {colors[1]}>Welcome to this page</Title>
               <Subtitle color = {colors[1]}>home gallery contact</Subtitle>
            </Header>
            <Container backgroundColor = {colors[3]}>
               <Logo color = {colors[2]}/>
               <Text color = {colors[2]}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
               </Text>
            </Container>
         </div>
      )
   } 
   //Die Preview passt ihr Farbschema an, nachdem der User 5 Farben gewählt hat. 
   else {
      return(
      <div>         
            <Header backgroundColor = {colors[0]}>
               <Title color = {colors[1]}>Welcome to this page</Title>
               <Subtitle color = {colors[1]}>home gallery contact</Subtitle>
            </Header>
            <Container backgroundColor = {colors[3]}>
               <Logo color = {colors[4]}/>
               <Text color = {colors[2]}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
               </Text>
            </Container>
         </div>
      );
   }
}