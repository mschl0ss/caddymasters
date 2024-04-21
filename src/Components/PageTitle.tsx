import {Box, styled, SxProps, Typography} from "@mui/material";
import SportsGolfIcon from '@mui/icons-material/SportsGolf';

const font = {
    fontFamily: "Arial",
    fontWeight: "bold",
    letterSpacing: "1.25px"
};
const TitleWrapper = styled(Box)({
    display: 'grid',
    gridTemplateColumns: "repeat(5, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    width: "40%",
    fontSize: "3em"
})

const TopRowText = styled(Typography)({
    gridColumnStart: "1",
    gridColumnEnd: "4",
    ...font,
})

const TopRowIcon = styled(SportsGolfIcon)({
    gridColumnStart: "4",
    gridColumnEnd: "6"
})

const BottomRowText = styled(Typography)({
    gridColumnStart: "1",
    gridColumnEnd: "6",
    gridRowStart: "2",
    ...font,
})

export default ({sx}: { sx: SxProps }) => {
    return (
        <TitleWrapper sx={sx}>
            <TopRowText variant="h4">Caddy</TopRowText>
            <TopRowIcon fontSize="inherit"/>
            <BottomRowText variant="h4">Masters</BottomRowText>
        </TitleWrapper>
    )
}