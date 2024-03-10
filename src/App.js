// import React from "react";
// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Image&videoGalleryProject/home.js";
// import Search from "./Image&videoGalleryProject/search.js";
// import Upload from "./Image&videoGalleryProject/upload.js";
// import Test from "./Test.js";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/search/:imgname" element={<Search />} />
//           <Route path="/upload" element={<Upload />} />
//         </Routes>
//       </BrowserRouter>
//       <Test />
//     </div>
//   );
// }

// export default App;
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
// import Search from "./Image&videoGalleryProject/Search.js";
// import Upload from "./Image&videoGalleryProject/Upload.js";
import Sample from "./Image&videoGalleryProject/Sample.js";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/search/:imgname" element={<Search />} /> */}
          {/* <Route path="/Upload" element={<Upload />} /> */}
          <Route path="/Sample" element={<Sample />} />
        </Routes>
      </BrowserRouter>
      {/* <Sample /> */}
    </div>
  );
};

export default App;
