import {
  Box,
  styled,
} from '@mui/material';
import React from 'react';

import AppBar from '../Components/AppBar';
import Footer from '../Components/Footer';
import {
  AppPage,
  useAppPageContext,
} from '../Contexts/AppPageContext';
import CourseSelect from './CourseSelect';
import PathSelect from './PathSelect';
import RulesetSelect from './RulesetSelect';

const DebugConsole = styled(Box)({
  position: 'absolute',
  left: 0,
  top: 0,
  border: 'dashed 1px black',
  width: 200,
  height: '100vh',
});

const Wrapper = styled(Box)({
  width: 450,
  margin: '0 auto',
  border: 'dashed 1px black',
  minHeight: 750,
  height: '932px',
  borderRadius: 25,
  background: 'white',
  zIndex: '100',
});

export const appPages: { [key in AppPage]: JSX.Element } = {
  [AppPage.PATH_SELECT]: <PathSelect />,
  [AppPage.COURSE_SELECT]: <CourseSelect />,
  [AppPage.RULESET_SELECT]: <RulesetSelect />,
  [AppPage.PLAYER_INFO]: <></>,
  [AppPage.HOLE_INFO]: <></>,
};

export default function UxWrapper(): JSX.Element {
  const { appPage } = useAppPageContext();

  const currentPage = Object.keys(AppPage)[Object.values(AppPage)
    .indexOf(appPage)];

  return (
    <>
      <DebugConsole>
        ux wrapper
        current page:
        {' '}
        {currentPage}
        <Footer />
      </DebugConsole>
      <Wrapper>
        <AppBar />
        {appPages[appPage]}
      </Wrapper>
    </>
  );
}
