import { ReactNode } from 'react';
import { HeadingTypograph, TextTypograph } from './styles';

interface ITextProps {
  children: ReactNode;
  size: 'sm' | 'md' | 'lg';
  color:
    | 'white-25'
    | 'gray-100'
    | 'gray-200'
    | 'gray-300'
    | 'gray-400'
    | 'gray-500'
    | 'gray-600'
    | 'gray-700'
    | 'gray-800';
}

interface IHeadingProps {
  children: ReactNode;
  size: 'xs' | 'sm' | 'md' | 'lg' | '3xl' | '4xl';
  color:
    | 'gray-100'
    | 'gray-200'
    | 'gray-300'
    | 'gray-400'
    | 'gray-500'
    | 'gray-600'
    | 'gray-700'
    | 'gray-800';
}

const Text = ({ children, size, color }: ITextProps) => {
  return (
    <TextTypograph size={size} color={color}>
      {children}
    </TextTypograph>
  );
};

const Heading = ({ children, size, color }: IHeadingProps) => {
  return (
    <HeadingTypograph size={size} color={color}>
      {children}
    </HeadingTypograph>
  );
};

export { Text, Heading };
