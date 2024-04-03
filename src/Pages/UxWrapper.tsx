import Footer from "../Components/Footer";
import {appPages, useAppPageContext} from "../Contexts/AppPageContext";
import {Box} from "@mui/material";


export default function UxWrapper(): JSX.Element {
    const {appPage} = useAppPageContext()

    return (
        <Box>
            ux wrapper
            current page: {appPage}
            {appPages[appPage]}
            <Footer />
        </Box>
    )
}