import {
  Box,
  Button,
  Container,
  Select,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const HeadTail = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  
  const handleChange = (e) => {
    setShow(false);
    let x = e.target.value;
    if (x !== "") {
      console.log(x);
      let state = data;
      if (state.length == 0) {
        state.push([x]);
        setData(state);
        //   return
      } else {
        let count = 0;

        for (let i = 0; i < state.length; i++) {
          if (i == 0 && state[0][state[0].length - 1] !== x) {
            state[0].push(x);
            setData(state);
            console.log("1st row");
            count++;
          } else {
            if (
              i !== state.length - 1 &&
              state[i][state[i].length - 1] == x &&
              state[i + 1][state[i + 1].length - 1] !== x
            ) {
              console.log("amit");
              state[i + 1].push(x); // [ [h,t][h,t][h]    ]
              setData(state);
              count++;
              return;
            }
          }
        }

        // console.log(count)
        if (count == 0) {
          //  let flag=0
          // console.log("test")

          state.push([x]);
          setData(state);
        }
      }

      console.log(state);
    }
  };

  const handleSubmit = () => {
    setShow(true);
  };

  //   useEffect(()=>{},[show])
  return (
    <Container>
      <Text color={"red.400"} textAlign={"center"} fontSize={"4xl"}>
        Head & Tail Page
      </Text>
      <Box>
        <Select placeholder="Select option" onChange={handleChange}>
          <option value="H">HEAD</option>
          <option value="T">TAIL</option>
        </Select>
      </Box>
      <Button mt={"1rem"} onClick={handleSubmit}>
        Submit
      </Button>
      {show &&
        data.map((row, i) => (
          <div key={i}>
            {row.map((col, j) => (
              <span style={{color:'red',fontSize: "3rem"}}  key={j}>{col + " "}</span>
            ))}
          </div>
        ))}
    </Container>
  );
};

export default HeadTail;
