import React from 'react';
import styles from './link.module.scss';

type Props = {
  text: string;
  path: string;
  pageLink: (path: string) => void;
};

const Link: React.FC<Props> = ({
  text, path, pageLink
}) => {
  return (
    <button className={styles.link}
      type="button"
      onClick={() => pageLink(path)}>
      {text}
    </button>
  );
};

export default Link;