import {useRouteError} from "react-router-dom";

const FetchError = () => {
  const error = useRouteError()
  return (
  <div className='p-60 flex items-center flex-col'>
    <h1 className='text-9xl p-2 text-red-600'>Error!</h1>
    <p className='text-4xl p-6 text-gray-200'>{error?.message || 'You\'ve gone too far'}</p>
  </div>
  );
};

export default FetchError;