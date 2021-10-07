import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from '@/styles/Home.module.css'


const SocialMediaCont = styled.div`
    display: flex;
    width: 14rem;
    height: 3rem;
    justify-content: space-between;
`;

const SocialMediaIconCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 25rem;
    background-color: #141414;
`;


const SocialMediaIcon = ({
}) => {
    return <SocialMediaCont>
        <SocialMediaIconCont>
            <FacebookIcon className={styles.icon}/>
        </SocialMediaIconCont>
        <SocialMediaIconCont>
            <InstagramIcon className={styles.icon}/>
        </SocialMediaIconCont>
        <SocialMediaIconCont>
            <TwitterIcon className={styles.icon}/>
        </SocialMediaIconCont>
        <SocialMediaIconCont>
            <LinkedInIcon className={styles.icon}/>
        </SocialMediaIconCont>
    </SocialMediaCont>
}

export default SocialMediaIcon;

