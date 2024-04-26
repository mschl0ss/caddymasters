import { Button } from '@mui/material';

import ColumnButtonPage from '../Components/ColumnButtonPage';
import { ButtonListItem } from '../Components/StyledComponents';
import {
  AppPage,
  useAppPageContext,
} from '../Contexts/AppPageContext';

export default function PathSelect() {
  const { setAppPage } = useAppPageContext();

  const handleButtonClick = (appPage: AppPage) => setAppPage(appPage);

  const pageTitle = 'Start New Round';

  const buttons = (
    <>
      <ButtonListItem>
        <Button
          onClick={() => handleButtonClick(AppPage.COURSE_SELECT)}
          aria-label="Start New Round"
          variant="contained"
          size="large"
        >
          Start New Round
        </Button>
      </ButtonListItem>
      <ButtonListItem>
        <Button
          size="large"
          onClick={() => handleButtonClick(AppPage.HOLE_INFO)}
          aria-label="Join Round"
          variant="contained"
        >
          Join Round
        </Button>
      </ButtonListItem>
    </>
  );

  return (
    <ColumnButtonPage buttons={buttons} pageTitle={pageTitle} />
  );
}
