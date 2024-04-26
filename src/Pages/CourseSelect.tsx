import { Button } from '@mui/material';

import ColumnButtonPage from '../Components/ColumnButtonPage';
import { ButtonListItem } from '../Components/StyledComponents';
import {
  AppPage,
  useAppPageContext,
} from '../Contexts/AppPageContext';
import { Course } from '../Utils/types';

export default function CourseSelect() {
  const { setAppPage } = useAppPageContext();

  const handleButtonClick = (course: Course) => {
    console.log(`${course.name} selected`);
    setAppPage(AppPage.RULESET_SELECT);
  };

  const pageTitle = 'Course Select';

  const courses: Course[] = [...Array(12).keys()].map((i) => ({ id: i, name: `Game ${i}` }));

  const handleNewCourseClick = () => {
    console.log('New Course selected');
    setAppPage(AppPage.RULESET_SELECT);
  };

  const courseButtons = courses.map((course) => (
    <ButtonListItem>
      <Button
        onClick={() => handleButtonClick(course)}
        aria-label={course.name}
        variant="contained"
        size="large"
      >
        {course.name}
      </Button>
    </ButtonListItem>
  ));

  const buttons = () => (
    <>
      {courseButtons}
      <ButtonListItem>
        <Button
          onClick={() => handleNewCourseClick()}
          aria-label="New Course"
          variant="outlined"
          size="large"
        >
          + New Course
        </Button>
      </ButtonListItem>
    </>
  );

  return (
    <ColumnButtonPage buttons={buttons()} pageTitle={pageTitle} />
  );
}
