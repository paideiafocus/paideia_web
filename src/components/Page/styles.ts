import styled from 'styled-components';

interface PageContentProps {
  align: string;
  isFull: boolean;
  isMain: boolean;
}

export const PageContainer = styled.section`
  width: 95%;
  margin: auto;
`;

interface IWidthProps {
  isFull: boolean;
  isMain: boolean;
}

const pageWidth = ({ isFull, isMain }: IWidthProps) => {
  if (isFull) return '98%';
  if (isMain) return '70%';
  return '70%';
};

export const PageContent = styled.div<PageContentProps>`
  width: ${p => (p.isFull ? '96%' : '86%')};
  margin: auto;
  text-align: ${p => (p.align ? p.align : 'initial')};

  @media (min-width: 46rem) {
    width: ${p => pageWidth(p)};
  }
`;
