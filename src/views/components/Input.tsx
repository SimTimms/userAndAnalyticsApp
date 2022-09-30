import { styled } from '@mui/material/styles';
import { prototypeBorder } from '../../theme';

const Input = styled('input')(({ theme }) => ({
  border: prototypeBorder,
  padding: '3px 10px 3px 10px',
  marginTop: 10,
  borderRadius: 2,
  width: '100%',
  background: theme.palette.light.main,
  cursor: 'pointer',
  boxSizing: 'border-box',
}));

export default function StyledInput(props: {
  value: string | string[];
  onChange: (e: any) => void;
  name: string;
  placeholder: string;
  type?: string;
}) {
  const { value, onChange, name, placeholder, type } = props;
  return (
    <Input
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      type={type}
    />
  );
}
