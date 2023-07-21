import { BallTriangle } from 'react-loader-spinner';
import { Loader } from './loader.styled';

export const Spinner = () => {
  return (
    <Loader>
      <BallTriangle
        height={50}
        width={50}
        radius={5}
        color="#f7b603c5"
        ariaLabel="ball-triangle-loading"
        wrapperStyle=""
        visible={true}
      />
    </Loader>
  );
};
