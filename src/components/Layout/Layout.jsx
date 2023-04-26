import { Outlet } from "react-router-dom"
import { Container, Header, Link } from "./LayoutStyled";

export const Layout = () => {

    return ( <Container>
    
    <Header>
      
       <nav> 
                
        <Link to='/' >Home</Link>  
        <Link to='/tweets' >Tweets</Link> 
                
       </nav>
      
    </Header>

    <main> <Outlet /></main>
    
    </Container>);
}; 
