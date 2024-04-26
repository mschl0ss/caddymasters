import {
  ListItem,
  styled,
  Typography,
} from '@mui/material';

export const PageTitle = styled(Typography)({});

export const ButtonListItem = styled(ListItem)({
  width: '100%',
  '& .MuiButton-root': {
    width: '100%',
    padding: '1.5em',
    borderRadius: 20,
  },
});
