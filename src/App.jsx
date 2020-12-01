import React, {useState} from "react";
// import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import styled from 'styled-components';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Routes from './routes'
import SideBar from "./components/Sidebar";

const Overlay = styled("div")`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 40;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  opacity: ${({ isOpen }) => (isOpen ? "0.5" : "0")};
  transition: opacity 0.5s ease;
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
`;

const AppWrapper = styled('div')`
  // background-color: crimson;
  // background-image: linear-gradient(to bottom, red , white  );
  // background-image: linear-gradient(to bottom, #112d32, #254e58, #88bdbc);
`;
 
export default function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <BrowserRouter>
      <SideBar onClick={() => setIsOpen(false)} isOpen={isOpen} />
      <AppWrapper className="App">
        <Header openSideBar={() => setIsOpen(true)} />
        {Routes}
        {/* <Footer /> */}
      </AppWrapper>
      <Overlay isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </BrowserRouter>
  );
}
