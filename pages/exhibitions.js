const Exhibitions = () => {
  return (
    <div className="exhibitions-container">
      <div>
        <h1>Dom omladine Beograda</h1>
        <h3>27/5/2021</h3>
        <img src="/images/4.png" width="500" height="600" />
      </div>
      <div>
        <h1>SKC Beograd</h1>
        <h3>17/6/2021</h3>
        <img src="/images/2.jpg" width="500" height="600" />
      </div>
      <style JSX>{`
        .exhibitions-container {
            width: 100vw;
            height: 100vh;
            margin-top: 3rem;
            display: flex;
            justify-content: center;
        }

        .exhibitions-container div {
            text-align: center;
            flex-grow: 1;
        }

      `}</style>
    </div>
  );
};

export default Exhibitions;
