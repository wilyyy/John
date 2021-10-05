import styled from 'styled-components';
import {useRouter} from 'next/router';
import React, {useState} from 'react';

const EventInfoCardCont = styled.div`
    display: flex;
`;

const EventInfoTop = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(195.27deg, #3FC284 8.37%, #59AB84 86.66%);
`;

const EventInfoBottom = styled.div``;

const EventInfoCard = () => {
    return <EventInfoCardCont>
        <EventInfoTop></EventInfoTop>
    </EventInfoCardCont>
}