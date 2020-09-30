import React from 'react';
import styles from './button.module.scss';

type Props = {
  text: string;
  path: string;
  pageLink: (path: string) => void;
};

const Button: React.FC<Props> = ({
  text, path, pageLink
}) => {
  return (
    <button className={styles.button}
      type="button"
      onClick={() => pageLink(path)}>
        {text}
    </button>
  );
};

export default Button;