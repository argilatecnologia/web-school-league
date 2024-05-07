import { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import { ActiveLinkContent } from './styles';

interface IActiveLinkProps extends LinkProps {
  children: ReactNode;
  shouldMatchExactHref?: boolean;
}

const ActiveLink = ({
  children,
  shouldMatchExactHref = false,
  ...rest
}: IActiveLinkProps) => {
  const router = useRouter();

  let isActive = false;

  if (
    shouldMatchExactHref &&
    (router.asPath === rest.href || router.asPath === rest.as)
  ) {
    isActive = true;
  }

  if (
    (!shouldMatchExactHref && router.asPath.startsWith(String(rest.href))) ||
    router.asPath.startsWith(String(rest.as))
  ) {
    isActive = true;
  }

  return (
    <ActiveLinkContent active={isActive} {...rest}>
      {children}
    </ActiveLinkContent>
  );
};

export { ActiveLink };
