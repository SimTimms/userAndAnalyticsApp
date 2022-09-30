import { PageWrapperStyle } from './styles';

export function StyledPageWrapper(props: { children?: any }) {
  return <PageWrapperStyle>{props.children}</PageWrapperStyle>;
}
