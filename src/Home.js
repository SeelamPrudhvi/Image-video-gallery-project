// import React, { useState } from "react";
// import Search from "./search.js";
// import axios from "axios";
// import Upload from "./upload.js";
// import { useNavigate } from "react-router-dom";
// const Home = () => {
//   const navigate = useNavigate();
//   const [imgname, setImgname] = useState("");
//   const [data, setData] = useState([]);
//   function changeHandler(event) {
//     setImgname(event.target.value);
//   }
//   function submitHandler(event) {
//     event.preventDefault();
//     console.log(imgname);
//   }
//   function valueHandler(event) {
//     setData(event.target.value);
//   }
//   return (
//     <div className="App">
//       <div>
//         <h3 className="left">Pixabay</h3>
//         <div className="authentication">
//           <button className="homelogin">login</button> &nbsp;&nbsp;&nbsp;
//           <button className="homesignup">SignUp</button> &nbsp;&nbsp;
//           <button className="homeupload" onClick={() => navigate(`/Upload`)}>
//             Upload
//           </button>{" "}
//           &nbsp;&nbsp;
//         </div>
//       </div>
//       <div className="header">
//         <h1>Stunning free Images & video Gallery</h1>
//         <br />
//         <h2 className="homeh2">
//           Over 2.3 million+ high quality stock images,videos shared by our
//           community
//         </h2>
//         <br />
//         <form onSubmit={submitHandler}>
//           <div className="d-flex justify-content-space-around m-10">
//             <select onChange={valueHandler}>
//               <option value="">Cateogaries</option>
//               <option value="Images">Images</option>
//               <option value="Videos">Videos</option>
//             </select>
//             &nbsp;&nbsp;
//             <input
//               className="homeinput"
//               type="text"
//               size={60}
//               value={imgname}
//               onChange={changeHandler}
//             />
//             &nbsp;&nbsp;
//             <button
//               className="homebutton"
//               onClick={() => imgname && navigate(`/search/${imgname}`)}
//             >
//               Search
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default Home;
import React, { useState, useRef } from "react";
import "./Home.css";
//import Sample from "./Sample";

import { useNavigate } from "react-router-dom";
const Home = () => {
  const [imgname, setImgname] = useState("");
  const [upload, setUpload] = useState("");

  // const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const ChangeHandler = (event) => {
    event.preventDefault();
    setImgname(event.target.value);

    // navigate("/Sample", { state: event.target.value });
  };
  const photoHandler = (event) => {};
  const videoHandler = (event) => {};

  const clickHandler = () => {
    navigate("/Sample", { state: imgname });
  };

  const uploadHandler = () => {
    inputRef.current.click();
  };

  const changeUpload = (event) => {
    setUpload(inputRef.current.files[0].name);
    console.log(event.target.files);

    // setUpload(event.target.files[0]);
    localStorage.setItem("inputValue", inputRef.current.value);
  };

  return (
    <div>
      <div className="bgimage">
        <div className="navtype ">
          <h2 className="brandname">PixelLab</h2>
          <div className="authentication">
            <button className="b1">Login</button> &nbsp;
            <button className="b2">SignUp </button> &nbsp;
            <button className="b3" onClick={uploadHandler}>
              <input
                type="file"
                ref={inputRef}
                style={{ display: "none" }}
                onChange={changeUpload}
              />
              Upload
            </button>
          </div>
        </div>
        <div id="para">
          <center>
            <h1>Best free stock photos, royalty free images & videos.</h1>
          </center>
          <h6>
            <center>
              Over 3.5 million+ high quality stock images, videos and music
              shared by our talented community.
            </center>
          </h6>

          <center>
            <form
            // onSubmit={submitHandler}
            >
              <select className="categories">
                <option>Categories</option>
                <option onClick={photoHandler}>Photos</option>
                <option onClick={videoHandler}>Videos</option>
              </select>
              <input
                type="text"
                size="80"
                id="inputText"
                placeholder="Search for free photos & videos"
                onChange={(event) => {
                  ChangeHandler(event);
                }}
              />
              <br />
              <br />
              <button
                id="b4"
                type="submit"
                value="search"
                onClick={clickHandler}
              >
                Search
              </button>
            </form>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Home;
