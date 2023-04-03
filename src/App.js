import { Container } from "react-bootstrap";
import Layout from "./Layout/Layout";
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Projects from "./components/projects/Projects";
import Contect from "./components/contect/Contect";

function App() {
  return (
    <BrowserRouter >
      <Layout>
        <Container style={{minHeight:'85vh', padding:'30px'}}>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/contect" element={<Contect/>}></Route>
          </Routes>
        </Container>
    </Layout>
    </BrowserRouter>
   
  );
}

export default App;
