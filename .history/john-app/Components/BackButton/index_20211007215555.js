import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useRouter} from 'next/router';


const BackButtCont = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    padding-top: 25px;
    padding-left: 25px;
`;

const BackButton = ({
    backRoute = "/"
}) => {
    const router = useRouter();
    return <BackButtCont>
        <ArrowBackIosIcon className={styles.icon}/>
    </BackButtCont>
}

export default BackButton;