import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { prototypeBorder } from 'theme';
import { useNavigate } from 'react-router-dom';

const DataPanel = styled('div')(({ theme }) => ({
  border: prototypeBorder,
  width: '100%',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  transition: 'all 0.1s ease-in-out',
  '&:hover': {
    opacity: 1,
    background: theme.palette.primary.main,
  },
}));

export default function StyledDataPanel(props: {
  setData?: any;
  navigateTo?: string;
  data: any[];
  loading?: boolean;
  error?: Error;
}) {
  const { setData, navigateTo, data, loading, error } = props;

  const [dataset, setDataset] = useState<any[]>([]);

  let navigate = useNavigate();
  useEffect(() => {
    setDataset(data);
  }, [data]);

  if (loading || error || !dataset) return null;

  return (
    <div style={{ width: '100%' }}>
      {dataset.map((dataItem, index) => {
        const itemKeys = Object.keys(dataItem);
        return (
          <DataPanel
            onClick={() => {
              setData && props.setData(dataItem);
              navigateTo && navigate(navigateTo);
            }}
            key={`dpanel_${index}`}
          >
            {itemKeys.map(
              (key) =>
                key !== '_id' && (
                  <Typography
                    variant="body1"
                    key={`typ_${key}`}
                  >{`${dataItem[key]}`}</Typography>
                )
            )}
          </DataPanel>
        );
      })}
    </div>
  );
}
