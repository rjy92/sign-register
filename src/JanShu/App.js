import { Box, Image, Text } from "@chakra-ui/react";
import { Switch, Link, Route, useLocation } from 'react-router-dom';
import SignIn from './SignIn'
import SignUp from './SignUp'

export default function App () {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <Box bg="gray.100" h="100vh">
      <Image src="/assets/images/jianshu_logo.png" pos="absolute" top={10} left={10} />
      <Box w="820px" d="flex" mx="auto" mt={2} bgSize="40%" bgPos="4px 0" 
        alignItems="center"
        justifyContent="center"
        h="100vh"
       pos="relative" bgRepeat="no-repeat">
        <Box w="400px" p={5} bg="white" boxShadow="lg" borderRadius="lg"
         overflow="hidden">
          <Box d="flex" justifyContent="space-around">
            <Link to="/sign_in"><Text color={pathname !== '/sign_up' ? '#ea6f5a': "gray.900"} fontSize="2xl" fontWeight="lg">登录</Text></Link>
            <Link to="/sign_up"><Text color={pathname === '/sign_up' ? '#ea6f5a': "gray.900"} fontSize="2xl" fontWeight="lg">注册</Text></Link>
          </Box>
          <Box p={5}>
            <Switch>
              <Route path="/sign_in">
                <SignIn />
              </Route>
              <Route path="/sign_up">
                <SignUp />
              </Route>
              <Route path="/">
                <SignIn />
              </Route>
            </Switch>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}