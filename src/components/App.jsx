// import { GlobalStyle } from "./GlobalStyle";
import Home from "pages/Home";
import Tweets from "pages/Tweets";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import NotFound from "pages/NotFound";


export const App = () => {

  return (

    <div>

      <Routes>

          <Route  path="/" element={<Layout/>}>
         <Route index element={<Home/> } />
        <Route path="tweets" element={ <Tweets/> } />
        <Route path="*" element={<NotFound />} />

        </Route>
        
      </Routes>
      
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
