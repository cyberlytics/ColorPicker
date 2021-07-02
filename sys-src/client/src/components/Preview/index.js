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
   margin-top: 15%;
   margin-bottom: -15%;
   text-align: center;
   color: ${props => props.color};
`

const Header = styled.div`
   padding: 3em;
   background-color: ${props => props.backgroundColor}
`
const Container = styled.div`
   padding: 3em;
   background-color: ${props => props.backgroundColor}
`

const Text = styled.p`
  text-align: left;
  color: ${props => props.color}
`

const Logo = styled(ReactLogo)`
   color: ${props => props.color}
`


 
 export function Preview (props) {

   const {colors} = props;
      
   //wenn zwei Farben ausgewählt wurden
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
   //wenn drei Farben ausgewählt wurden
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
   //wenn vier Farben ausgewählt wurden
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
   //wenn fünf Farben ausgewählt wurden
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