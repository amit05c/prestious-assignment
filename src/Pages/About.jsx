import { Container, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  // if(count==0){

  //   let lastRow= state[state.length-1]
  //   if(lastRow[lastRow.length-1]==x){
  //       console.log("here")
  //       state.push([x])
  //       setData(state)
  //   }else{

  //     state[0].push(x)
  //     setData(state)
  //   }

  return (
    <Container>
      <Text color={"red.400"} textAlign={"center"} fontSize={"4xl"}>About Page</Text>
      <Text color={"black"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam velit accusamus atque quae cumque ea neque? Ipsa, dicta voluptatum, delectus nesciunt sint enim deleniti ratione cupiditate veniam exercitationem dolorem. Officia voluptatum recusandae consequatur fugit non. Perspiciatis ea reiciendis praesentium. Repudiandae repellendus vero similique modi est, corporis omnis vel fuga reprehenderit.</Text>
      
      
      </Container>
  )
}

export default About