import styled from 'styled-components';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useRouter} from 'next/router';
import styles from '@/styles/Home.module.css';



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
    return <BackButtCont onClick={()=>router.push(backRoute)}>
        <ArrowBackIosIcon className={styles.icon}/>
    </BackButtCont>
}

export default BackButton;