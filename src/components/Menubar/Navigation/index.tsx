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
    href: '/',
    shouldMatchExactHref: true,
  },
  {
    label: 'Quem somos',
    href: '/quemsomos',
  },
  {
    label: 'Edições anteriores',
    href: '/edicoesanteriores',
  },
  {
    label: 'Parceria',
    href: '/parceria',
  },
  {
    label: 'Diretoria',
    href: '/diretoria',
  },
  {
    label: 'Colégios associados',
    href: '/colegiosassociados',
  },
  {
    label: 'Contato',
    href: '/contato',
  },
];

const Navigation = () => {
  const navItens = useMemo(() => {
    return NAVIGATION_ITENS;
  }, []);

  // const isActive = false;

  return (
    <NavigationContainer>
      {/* <NavigationContentMenu className="show"> */}
      {navItens.map(({ label, href, shouldMatchExactHref }) => (
        <ActiveLink
          key={label}
          href={href}
          shouldMatchExactHref={shouldMatchExactHref}
        >
          {label}
        </ActiveLink>
      ))}

      {/* <NavigationContentShowMenu className="icon-menu">
          <List size={24} />
        </NavigationContentShowMenu>
        <NavigationContentCloseMenu className="icon-close">
          <X size={24} />
        </NavigationContentCloseMenu> */}
      {/* </NavigationContentMenu> */}
    </NavigationContainer>
  );
};

export { Navigation };
