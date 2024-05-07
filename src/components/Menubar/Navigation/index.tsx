import { useMemo } from 'react';

import { ActiveLink } from '../ActiveLink';
import { NavigationContainer } from './styles';

interface INavigationItens {
  label: string;
  href: string;
  shouldMatchExactHref?: boolean;
}

const NAVIGATION_ITENS: INavigationItens[] = [
  {
    label: 'Início',
    href: '/dashboard',
    shouldMatchExactHref: true,
  },
  {
    label: 'Quem Somos',
    href: '/#',
  },
  {
    label: 'Contato',
    href: '/#',
  },
];

const Navigation = () => {
  const navItens = useMemo(() => {
    return NAVIGATION_ITENS;
  }, []);

  return (
    <NavigationContainer>
      {navItens.map(({ label, href, shouldMatchExactHref }) => (
        <ActiveLink
          key={label}
          href={href}
          shouldMatchExactHref={shouldMatchExactHref}
        >
          {label}
        </ActiveLink>
      ))}
    </NavigationContainer>
  );
};

export { Navigation };
