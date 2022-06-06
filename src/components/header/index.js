import React, { useState } from "react";
import Form1 from "../book/forms";
import Book from "../book";
import Clean from "../book/buttons";
// import NameForm from "../book/formik.js";

const Phase1 = () => {
  // input value stores
  const [feed1, setFeed1] = useState("");
  // array creation for list
  const [page1, setPage1] = useState([]);

  const [pure, setPure] = useState([]);

  console.log("pure index", pure);

  return (
    <div className="container border-4 w-11/12 mx-auto">
      <h1>to do app list</h1>
      <header>
        <Form1
          feed1={feed1}
          setFeed1={setFeed1}
          page1={page1}
          setPage1={setPage1}
        />
        {/* <NameForm feed1={feed1} setFeed1={setFeed1} page1={page1} setPage1={setPage1} /> */}
      </header>
      <main>
        <Book
          feed1={feed1}
          page1={page1}
          setPage1={setPage1}
          pure={pure}
          setPure={setPure}
        />
      </main>
      <footer className="m-4">
        <Clean setPage1={setPage1} page1={page1} pure={pure && pure} />
      </footer>

      {/* ++++++++++++++++++++++++++ using context provider +++++++++++++++++++++++ */}
    </div>
  );
};


// const Phase2=()=>{
//   return(
//     <div>
//       <
//     </div>
//   )
// }








export default Phase1;
