import { ContentStyle } from './styles';
export function StyledContent(props: { children?: any }) {
  const { children } = props;
  return <ContentStyle>{children}</ContentStyle>;
}
