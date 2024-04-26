import { Button } from '@mui/material';

import ColumnButtonPage from '../Components/ColumnButtonPage';
import { ButtonListItem } from '../Components/StyledComponents';
import {
  AppPage,
  useAppPageContext,
} from '../Contexts/AppPageContext';
import { Course } from '../Utils/types';

export default function RulesetSelect() {
  const { setAppPage } = useAppPageContext();

  const handleButtonClick = (ruleset: string) => {
    console.log(`${ruleset} selected`);
    setAppPage(AppPage.PLAYER_INFO);
  };

  const pageTitle = 'Ruleset Select';

  const rulesets: string[] = [...Array(4).keys()].map((i) => `Game ${i}`);

  const buttons = rulesets.map((ruleset) => (
    <ButtonListItem>
      <Button
        onClick={() => handleButtonClick(ruleset)}
        aria-label={ruleset}
        variant="contained"
        size="large"
      >
        {ruleset}
      </Button>
    </ButtonListItem>
  ));

  return (
    <ColumnButtonPage buttons={buttons} pageTitle={pageTitle} />
  );
}
