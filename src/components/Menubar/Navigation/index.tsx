import { useMemo } from 'react';

import { ActiveLink } from '../ActiveLink';
import {
  NavigationContainer,
  NavigationContentCloseMenu,
  NavigationContentMenu,
  NavigationContentShowMenu,
} from './styles';

interface INavigationItens {
  label: string;
  href: string;
  shouldMatchExactHref?: boolean;
}

const NAVIGATION_ITENS: INavigationItens[] = [
  {
    label: 'Início',
    href: '/',
    shouldMatchExactHref: true,
  },
  {
    label: 'Sobre',
    href: '/sobre',
  },
  {
    label: 'Jogos',
    href: '/#',
  },
  // {
  //   label: 'Fotos',
  //   href: '/#',
  // },
  {
    label: 'Contato',
    href: '/contato',
  },
];

const Navigation = () => {
  const navItens = useMemo(() => {
    return NAVIGATION_ITENS;
  }, []);

  return (
    <NavigationContainer>
      <NavigationContentMenu className="show">
        {navItens.map(({ label, href, shouldMatchExactHref }) => (
          <ActiveLink
            key={label}
            href={href}
            shouldMatchExactHref={shouldMatchExactHref}
          >
            {label}
          </ActiveLink>
        ))}
      </NavigationContentMenu>
      <NavigationContentShowMenu>...</NavigationContentShowMenu>
      <NavigationContentCloseMenu>x</NavigationContentCloseMenu>
    </NavigationContainer>
  );
};

export { Navigation };
