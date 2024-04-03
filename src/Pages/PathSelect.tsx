import {ReactNode} from "react";
import {Box, Button, styled} from "@mui/material";
import {PageTitle} from "../Components/StyledComponents";
import {AppPage, useAppPageContext} from "../Contexts/AppPageContext";

const ButtonList = styled('ul')({});
const ButtonListItem = styled('li')({});
const PageButton = styled(Button)({});
export default function PathSelect() {

    const { setAppPage } = useAppPageContext();
    const handleButtonClick = (appPageLabel: AppPage) => {
        setAppPage(appPageLabel);
    }

    return (
        <Box>
            <PageTitle variant="h2">Welcome</PageTitle>
            <ButtonList>
                <ButtonListItem>
                    <Button
                        onClick={() => handleButtonClick(AppPage.COURSE_SELECT)}
                        aria-label="Start New Round"
                    >
                        Start New Round
                    </Button>
                    <Button
                        onClick={() => handleButtonClick(AppPage.HOLE_INFO)}
                        aria-label="Join Round"
                    >
                        Join Round
                    </Button>
                </ButtonListItem>
            </ButtonList>

        </Box>
    )
}