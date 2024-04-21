import {Box, Button, List, ListItem, styled, SxProps} from "@mui/material";
import {AppPage, useAppPageContext} from "../Contexts/AppPageContext";
import PageTitle from "../Components/PageTitle";


const ButtonList = styled(List)({
    width: "80%",
    listStyleType: "none",
    display: "flex",
    flexDirection: "column"
});
const ButtonListItem = styled(ListItem)({
    width: '100%',
    "& .MuiButton-contained": {
        width: "100%"
    }
});

// const PageWrapper = styled(Box)({
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     margin: "10% 0"
// })

const PageWrapper = styled(Box)({
    display: 'grid',
    gridTemplateColumns: "1fr 4fr 1fr",
    gridTemplateRows: "repeat(10 1fr)",
})

export default function PathSelect() {

    const {setAppPage} = useAppPageContext();
    const handleButtonClick = (appPageLabel: AppPage) => {
        setAppPage(appPageLabel);
    }

    const sxProps: SxProps = {
        gridRowStart: "2",
        gridRowEnd: "4",
        gridColumnStart: "2",
        gridColumnEnd: "2"
    }

    return (
        <PageWrapper>
            <PageTitle sx={sxProps}/>
            <ButtonList>
                <ButtonListItem>
                    <Button
                        onClick={() => handleButtonClick(AppPage.COURSE_SELECT)}
                        aria-label="Start New Round"
                        variant="contained"
                        size={"large"}
                    >
                        Start New Round
                    </Button>
                </ButtonListItem>
                <ButtonListItem>
                    <Button
                        size={"large"}
                        onClick={() => handleButtonClick(AppPage.HOLE_INFO)}
                        aria-label="Join Round"
                        variant="contained"
                    >
                        Join Round
                    </Button>
                </ButtonListItem>
            </ButtonList>

        </PageWrapper>
    )
}