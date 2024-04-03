import {createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useMemo, useState} from "react";
import PathSelect from "../Pages/PathSelect";


export enum AppPage {
    PATH_SELECT,
    COURSE_SELECT,
    RULESET_SELECT,
    PLAYER_INFO,
    HOLE_INFO,
}


export const appPages: {[key in AppPage]: JSX.Element} = {
    [AppPage.PATH_SELECT]: <PathSelect />,
    [AppPage.COURSE_SELECT]: <></>,
    [AppPage.RULESET_SELECT]: <></>,
    [AppPage.PLAYER_INFO]: <></>,
    [AppPage.HOLE_INFO]: <></>
};

interface AppPageContext {
    appPage: AppPage,
    setAppPage: Dispatch<SetStateAction<AppPage>>
}

const missingContextValue = null;

const appPageContext = createContext<AppPageContext>(missingContextValue as unknown as AppPageContext);

export default function AppPageProvider({children}: {children: ReactNode}) {
    const [appPage, setAppPage] = useState<AppPage>(AppPage.PATH_SELECT);

    const contextValue = useMemo(() => ({
        appPage,
        setAppPage
    }), [appPage]);

    return(
        <appPageContext.Provider value={contextValue}>
            {children}
        </appPageContext.Provider>
    )
}

export const useAppPageContext = () => {
    const context = useContext(appPageContext);
    if(context === missingContextValue) {
        throw new Error("Missing appPageContext")
    }
    return context;
}