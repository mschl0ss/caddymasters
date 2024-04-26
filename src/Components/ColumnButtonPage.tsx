import {
  Box,
  List,
  styled,
} from '@mui/material';
import { ReactNode } from 'react';

const ButtonList = styled(List)({
  width: '80%',
  listStyleType: 'none',
  display: 'flex',
  flexDirection: 'column',
  padding: '0',
  height: '80%',
  overflow: 'scroll',
});

const PageWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '15%',
  rowGap: '24px',
  height: '100%',
});

export type ColumnButtonPageProps = {
  pageTitle?: string;
  buttons: ReactNode;
};

export default function ColumnButtonPage({ pageTitle, buttons }: ColumnButtonPageProps) {
  return (
    <PageWrapper>
      {pageTitle}
      <ButtonList>
        {buttons}
      </ButtonList>
    </PageWrapper>
  );
}
