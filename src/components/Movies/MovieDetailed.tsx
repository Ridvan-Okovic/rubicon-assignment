import { useNavigate } from 'react-router-dom';

const MovieDetailed = () => {
  let navigate = useNavigate();

  const revertStateHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <button onClick={revertStateHandler}>Back</button>
      <div>Movie Detailes</div>
    </>
  );
};

export default MovieDetailed;
