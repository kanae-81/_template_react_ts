import React from 'react';
import Button from '../../atoms/Button/Button'
import styles from './buttons.module.scss';

type Props = {
  text: string;
  path: string;
  pageLink: (path: string) => void;
};

const ButtonContent: React.FC<Props> = ({
  text, path, pageLink
}) => {
  return (
    <div className={styles.buttonBox}>
      <Button
        text={text}
        path={path}
        pageLink={pageLink}
        />
    </div>
  );
};

export default ButtonContent;