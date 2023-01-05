import { LoadingOutlined } from "@ant-design/icons";
import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.SpinnerContainer}>
      <LoadingOutlined style={{ fontSize: '2rem' }} spin={true} />
    </div>
  );
};

export default Spinner;