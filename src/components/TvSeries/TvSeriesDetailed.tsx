import { useNavigate } from 'react-router-dom';

const TvSeriesDetailed = () => {
  let navigate = useNavigate();

  const revertStateHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <button onClick={revertStateHandler}>Back</button>
      <div>Tv Series Detailes</div>
    </>
  );
};

export default TvSeriesDetailed;
