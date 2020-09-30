import React from 'react';
import styles from './nav.module.scss';
import { Link } from '../../atoms'

type Props = {
  pageLink: {
    pagemove: (path: string) => void;
    logout: () => void;
  };
};

const Nav: React.FC<Props> = ({
  pageLink
}) => {
  return (
		<nav className={styles.nav}>
      <ul className={styles.nav__items}>
        <li className={styles.nav__item}>
          <Link
            text={'ホーム'}
            path={'/'}
            pageLink={pageLink.pagemove} />
        </li>
        <li className={styles.nav__item}>
          <Link
            text={'TODOリスト'}
            path={'/todo'}
            pageLink={pageLink.pagemove}	/>
        </li>
        <li className={styles.nav__item}>
          <Link
            text={'TODO完了リスト'}
            path={'/complete'}
            pageLink={pageLink.pagemove} />
        </li>
        <li className={styles.nav__item}>
          <Link
            text={'ログアウト'}
            path={'/todo'}
            pageLink={pageLink.logout} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;