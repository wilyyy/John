import Head from 'next/head'
import EventInfoCard from '@/Components/EventInfoCard'
import TaskCard from '@/Components/TaskCard'
import styled from 'styled-components';
import Nav from '@/Components/Nav'
import axios from 'axios';

const ExampleCont = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContMain = styled.div
`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const CalendarCont_1 = styled.div
`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding:50px;
`
const CalendarCont_2 = styled.div
`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding:50px;
`

export default function Forecast() {
    return (
      <ExampleCont>
        <Head>
              <title>3 Day Forecast - John</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <ContMain>
        <CalendarCont_1>
          <EventInfoCard 
            topborder="#3FC284 5px solid" 
            topbgcolor="#fff"
            h1_color = "#387C5C"
            h2top_color="#387C5C"
            h2_eventname="Binge Squid Game"
            location="Location w/ Map"
          />
          <EventInfoCard 
            topborder="#3FC284 5px solid" 
            topbgcolor="#fff"
            h1_day="30"
            toph2_day="Friday"
            h1_time="8:00pm"
            h1_color = "#387C5C"
            h2top_color="#387C5C"
            h2_eventname="BBQ"
            number_of_people="18+ People Involved"
          />
          <EventInfoCard 
            h1_day="1"
            toph2_day="Saturday"
            h1_time="9:30"
            h2_eventname="Get Drunk"
            number_of_people="2+ People Involved"
          />
          
        </CalendarCont_1>
        <CalendarCont_2>
          <EventInfoCard 
            h1_day="2"
            toph2_day="Sunday"
            h1_time="9:30"
            h2_eventname="Get Drunk"
            number_of_people="2+ People Involved"
          />
          <EventInfoCard 
            h1_day="3"
            toph2_day="Monday"
            h1_time="9:30"
            h2_eventname="Get Drunk"
            number_of_people="2+ People Involved"
          />
          <EventInfoCard 
            h1_day="4"
            toph2_day="Tueday"
            h1_time="9:30"
            h2_eventname="Get Drunk"
            number_of_people="2+ People Involved"
          />
        </CalendarCont_2>
        </ContMain>
      </ExampleCont>
    )

  }