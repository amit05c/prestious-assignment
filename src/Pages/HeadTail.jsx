import { Box, Button, Container, Select, Show, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const HeadTail = () => {
  const [data, setData] = useState([]);
  const [show,setShow]= useState(false)
  const handleChange = (e) => {
    setShow(false)
    let x = e.target.value;
    if(x!==""){
        console.log(x)
        let state = data;
        if (state.length == 0) {
          state.push([x]);
          setData(state);
        //   return
        }else{
         
            let lastRow= state[state.length-1]
            if(lastRow[lastRow.length-1]==x){
                console.log("here")
                state.push([x])
                setData(state)
            }else{
                   let count=0
                for(let i=0; i<state.length; i++){
                    if(state[i][state[i].length-1]==x && state[i+1][state[i+1].length-1]!==x){
                        console.log("amit")
                        state[i+1].push(x)
                        setData(state)
                        count++
                        break;
                    }
                    // else{
                    //     console.log("rup")
                    //     state[i].push(x)
                    //     break;
                    // }
                   }
                     if(count==0){

                            state[0].push(x)
                            setData(state)
                     }
                        // break;
            }


          
        }
        console.log(state);
    }
    

  };


  const handleSubmit= ()=>{
    setShow(true)
  }

//   useEffect(()=>{},[show])
  return (
    <Container>
      <Box>
        <Select placeholder="Select option" onChange={handleChange}>
          <option value="H">HEAD</option>
          <option value="T">TAIL</option>
        </Select>
      </Box>
   <Button onClick={handleSubmit}>Submit</Button>
      {show && data.map((row, i) => (
          <div key={i}>
            {row.map((col, j) => (
              <span key={j}>{col+" "}</span>
            ))}
          </div>
        ))}
    </Container>
  );
};

export default HeadTail;
