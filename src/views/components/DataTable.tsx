import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { prototypeBorder } from 'theme';
import { useNavigate } from 'react-router-dom';
import { dictionary } from 'data/dictionary';
import CircularProgress from '@mui/material/CircularProgress';

const DataTable = styled('table', {
  shouldForwardProp: (prop) => prop !== 'isOdd',
})<{ isOdd?: boolean }>(({ isOdd }) => ({
  border: prototypeBorder,
  width: '100%',
  textAlign: 'left',
  cursor: 'pointer',
}));

const DataTR = styled('tr', { shouldForwardProp: (prop) => prop !== 'isOdd' })<{
  isOdd?: boolean;
}>(({ isOdd, theme }) => ({
  border: prototypeBorder,
  background: isOdd ? theme.palette.light.main : 'rgb(255,255,255,0.85)',
  width: '100%',
  textAlign: 'left',
  cursor: 'pointer',
  transition: 'all 50ms ease-in-out',
  color: theme.palette.dark.main,
  '&:hover': {
    background: theme.palette.primary.main,
    color: theme.palette.dark.main,
  },
}));

export default function StyledDataTable(props: {
  setData?: any;
  navigateTo?: string;
  data: any[];
  loading?: boolean;
  error?: Error;
}) {
  //TODO: fade transition once loaded so it's not so jarring
  const { setData, navigateTo, data, loading, error } = props;

  const [dataset, setDataset] = useState<any[]>([]);
  let navigate = useNavigate();
  useEffect(() => {
    setDataset(data);
  }, [data]);

  const isOdd = (num: number) => num % 2;
  if (!dataset || loading)
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 40,
          background: '#444',
        }}
      >
        <CircularProgress color="primary" />
      </div>
    );
  return (
    <div style={{ width: '100%', height: '100%', overflow: 'auto' }}>
      <DataTable cellSpacing={0}>
        <thead>
          <tr
            style={{
              background: 'rgba(255,255,255,0.1)',
            }}
          >
            {dataset.length > 0 ? (
              Object.keys(dataset[0]).map((key, index) => (
                <th key={`thead_${index}`}>
                  <Typography
                    variant="body1"
                    style={{
                      width: '100%',
                      padding: 10,
                      paddingLeft: 0,
                      boxSizing: 'border-box',
                      fontSize: '0.8rem',
                    }}
                  >{`${dictionary[key] || key}`}</Typography>
                </th>
              ))
            ) : (
              <th>
                {' '}
                <Typography
                  variant="body1"
                  style={{
                    width: '100%',
                    padding: 10,
                    boxSizing: 'border-box',
                    paddingLeft: 0,
                    fontSize: '0.8rem',
                    textAlign: 'center',
                  }}
                >
                  No Data
                </Typography>
              </th>
            )}
          </tr>
        </thead>
        {dataset.length > 0 && (
          <tbody>
            {dataset.map((dataItem, index) => {
              const itemKeys = Object.keys(dataItem);
              return (
                <DataTR
                  onClick={() => {
                    setData && props.setData(dataItem);
                    navigateTo && navigate(navigateTo);
                  }}
                  isOdd={isOdd(index) > 0}
                  key={`dpanelitem_${index}`}
                >
                  {itemKeys.map((key, index) => (
                    <td key={`td${index}`}>
                      <Typography
                        variant="body1"
                        style={{
                          width: '100%',
                          fontSize: '0.8rem',
                          color: 'inherit',
                        }}
                      >{`${dataItem[key]}`}</Typography>
                    </td>
                  ))}
                </DataTR>
              );
            })}
          </tbody>
        )}
      </DataTable>
    </div>
  );
}
