import { LoadingSpinnerContainer, LoadingSpinnerContent } from './styles';

interface ILoadingSpinnerProps {
  size?: 'small' | 'medium' | 'big';
}

const LoadingSpinner = ({ size }: ILoadingSpinnerProps) => {
  return (
    <LoadingSpinnerContainer>
      <LoadingSpinnerContent size={size} />
    </LoadingSpinnerContainer>
  );
};

export { LoadingSpinner };
