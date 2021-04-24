const Works = () => {
  return (
    <>
      <div className="worksByYears">
        <span>2016 - 2017</span>
        <span>2017 - 2019</span>
        <span>2020 - </span>
      </div>
      <style jsx>{`
        .worksByYears {
          margin-top: 0.5rem;
        }
        .worksByYears span {
          margin-right: 1rem;
          padding: 0.5rem;
          cursor: pointer;

          text-shadow: 0 0 0 #fff;
        }
        .worksByYears:focus {
          outline: none;
        }
      `}</style>
    </>
  );
};

export default Works;
