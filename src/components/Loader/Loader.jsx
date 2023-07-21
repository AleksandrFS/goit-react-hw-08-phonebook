import { BallTriangle } from 'react-loader-spinner';
import { SpinnerLoad } from './Loader.styled';

export const Spinner = () => {
  return (
    <SpinnerLoad>
      <BallTriangle
        height={50}
        width={50}
        radius={5}
        color="#f7b603c5"
        ariaLabel="ball-triangle-loading"
        wrapperStyle=""
        visible={true}
      />
    </SpinnerLoad>
  );
};
