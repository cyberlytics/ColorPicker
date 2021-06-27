/**
 * Die Vorschauwebsite.
 * Enthält:
 *  - tbc...
 */

 import React, { useState, useEffect } from 'react';
 import styled from 'styled-components';
 import { ReactComponent as ReactLogo } from "././logo.svg"; 

 // einzelne Elemente der Preview als "styled-components"
 const Title = styled.h1`
   font-family: sans-serif;
   font-size: 2rem;
   text-align: center;
   color: ${props => props.color};
 `

const Subtitle = styled.p`
   color: black;
   font-family: monospace;
   text-align: center;
`

const Header = styled.div`
   padding: 4em;
   background-color: ${props => props.backgroundColor}
`
const Container = styled.div`
   padding: 4em;
   height: 300px;
   background-color: ${props => props.backgroundColor}
`

const Text = styled.p`
  text-align: left;
  margin-left: 30px;
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
               <Subtitle>home gallery contact</Subtitle>
            </Header>
            <Container backgroundColor = {colors[1]}>
               <Logo color = {colors[0]}/>
               <Text color = {colors[0]}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
               </Text>
            </Container>
        </div>
      )
   } 
   //wenn drei Farben ausgewählt wurden
   else if(colors.length === 3){
      return(
         <div>         
            <Header backgroundColor = {colors[2]}>
               <Title color = {colors[0]}>Welcome to this page</Title>
               <Subtitle>home gallery contact</Subtitle>
            </Header>
            <Container backgroundColor = {colors[0]}>
               <Logo color = {colors[2]}/>
               <Text color = {colors[1]}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
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
               <Subtitle>home gallery contact</Subtitle>
            </Header>
            <Container backgroundColor = {colors[3]}>
               <Logo color = {colors[2]}/>
               <Text color = {colors[2]}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
               </Text>
            </Container>
         </div>
      )
   } 
   //wenn fünf Farben ausgewählt wurden
   else {
      <div>         
            <Header backgroundColor = {colors[0]}>
               <Title color = {colors[1]}>Welcome to this page</Title>
               <Subtitle>home gallery contact</Subtitle>
            </Header>
            <Container backgroundColor = {colors[3]}>
               <Logo color = {colors[4]}/>
               <Text color = {colors[2]}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
               </Text>
            </Container>
         </div>
   }

     
   }