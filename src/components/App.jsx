import { GlobalStyle } from "./GlobalStyle";
import Home from "pages/Home";
import Tweets from "pages/Tweets";
import { NavLink, Route, Routes } from "react-router-dom";


export const App = () => {
  return (

    <div>
      <nav>

      <span> <NavLink to='/' >Home</NavLink>  </span>
      <span> <NavLink to='/tweets' >Tweets</NavLink> </span>
        
      </nav>

      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/tweets" element={ <Tweets/> } />
       

      </Routes>
      
      <GlobalStyle />
    </div>

  )
}






//============================================
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
