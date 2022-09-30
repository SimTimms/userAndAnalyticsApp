import { RowStyle } from './styles';

export function StyledRow(props: { children?: any }) {
  const { children } = props;
  return <RowStyle>{children}</RowStyle>;
}
