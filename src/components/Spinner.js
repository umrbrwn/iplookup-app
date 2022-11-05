import ClipLoader from 'react-spinners/ClipLoader';

const currentColor = '#3b82f6';
const styles = {
    display: 'block',
    margin: '0 auto',
    borderColor: currentColor,
};

function Spinner({ loading }) {
    return (
        <ClipLoader color={currentColor} loading={loading} cssOverride={styles} size={50} aria-label="Loading Spinner" />
    );
}

export default Spinner;
