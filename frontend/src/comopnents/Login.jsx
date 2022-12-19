import React, { useState } from "react";
import axios from "axios";
import GoogleLogin from "react-google-login";
import {
  Heading,
  HStack,
  Image,
  VStack,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  // Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setdata] = useState({
    firstname: "",
    password: "",
    email: "",
  });
  function onChnageHandler(e) {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  }
  function submitHandler() {
    axios
      .post("https://messhobackend-production.up.railway.app/signup", {
        firstname: data.firstname,
        password: data.password,
        email: data.email,
      })
      .then((r) => {
        localStorage.setItem("data", JSON.stringify(r.data));
      });
  }

  const saveUser = async({email,password,name})=>{
    console.log(email,password,name)
    axios
    .post("https://messhobackend-production.up.railway.app/signup", {
      firstname: name,
      password: password,
      email: email ,
    })
    .then((r) => {
      console.log(r.data)
    });
}

  const navigate = useNavigate()
  const responseGoogle = (response) => {
    // console.log(response);
    // console.log(response.accessToken);
    if(response.accessToken){
        const email =response.profileObj.email;
        const name = response.profileObj.name
        const pass = response.Ca
        saveUser({email,name,pass})
        localStorage.setItem("token",response.accessToken );
        navigate(-1)
    }

   

  
  };
  return (
    <>
      <HStack w={"100%"} spacing={"2rem"} h={"100%"} mt="10rem">
        <div style={{ width: "70%", height: "100%" }}>
          <Heading fontSize={"4xl"}>Welcome to the world of Bewakoof!</Heading>

          <Image
            fit={"contain"}
            m="auto"
            src="https://images.bewakoof.com/web/group-19-1617704502.png"
            alt="welcome"
          />
        </div>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              name="email"
              onChange={(e) => onChnageHandler(e)}
              placeholder="Email"
            />
          </FormControl>
          <FormControl id="UserName">
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              name="username"
              onChange={(e) => onChnageHandler(e)}
              placeholder="Username"
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              onChange={(e) => onChnageHandler(e)}
              placeholder="Password"
            />
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.400"}>Forgot password?</Link>
            </Stack>
            <Button
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
            >
              Sign in
            </Button>
            <button
              style={{
                backgroundColor: "white",
                color: " #6B6B6B",
                padding: "5px 40px 5px 30px",
                textAlign: "center",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                fontWeight: "600",
                fontSize: "16px",
                border: "1px solid black",
                borderRadius: "5px",
                margin: "2px",
              }}
            //   onClick={signInWithGoogle}
            >
                   <GoogleLogin
                clientId="138552057700-esoue5q74o0ijrd22c5uvo3h1p435vm3.apps.googleusercontent.com"
                // buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />
            </button>
            {/* <Google/> */}
          </Stack>
        </Stack>
      </HStack>
    </>
  );
};

export default Login;