import Footer from "../Components/Footer";
import {AppPage, appPages, useAppPageContext} from "../Contexts/AppPageContext";
import {Box, styled} from "@mui/material";

const DebugConsole = styled(Box)({
    position: 'absolute',
    left: 0,
    top: 0,
    border: 'dashed 1px black',
    width: 200,
    height: "100vh",
    zIndex: "-1"
})
const Wrapper = styled(Box)({
    width: 450,
    margin: '0 auto',
    border: 'dashed 1px black',
    minHeight: 750,
    height: "95vh",
    borderRadius: 25,
    background: "white"
})


export default function UxWrapper(): JSX.Element {
    const {appPage} = useAppPageContext()

    const currentPage = Object.keys(AppPage)[Object.values(AppPage).indexOf(appPage)];

    return (
        <>
            <DebugConsole>
                ux wrapper
                current page: {currentPage}
                <Footer/>
            </DebugConsole>
            <Wrapper>
                {appPages[appPage]}
            </Wrapper>
        </>
    )
}