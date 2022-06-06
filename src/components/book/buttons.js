import React from "react";

const Clean = ({ setPage1, page1, pure }) => {
  console.log("pure clean", pure);
  const [allCount, setAllCount] = React.useState(0);
  const [pureCount, setPureCount] = React.useState(0);
  const [activeCount, setActiveCount] = React.useState(0);
  const showALL = () => {
    // setPage1();
    // console.log("showALL");
    // console.log("page1", page1.length);
    setAllCount(page1.length);
  };

  const handleCompleted = () => {
    console.log("pure", pure);
    setPureCount(pure.length);
  };

  const handleActive = () => {
    setActiveCount(
      page1.length > pure.length
        ? page1.length - pure.length
        : pure.length - page1.length
    );
  };

  const clearHandler = () => {
    setPage1([]);
  };

  return (
    <div className="flex gap-4">
      <button onClick={showALL} className="uppercase">
        all:- {allCount}
      </button>
      <button className="uppercase" onClick={handleCompleted}>
        completed:- {pureCount}
      </button>
      <button onClick={handleActive} className="uppercase ">
        active:- {activeCount}
      </button>
      <button onClick={clearHandler} className="uppercase">
        clear all
      </button>
      <p>items available:</p>
    </div>
  );
};

export default Clean;
