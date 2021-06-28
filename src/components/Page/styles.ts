import styled from 'styled-components';

interface PageContentProps {
  align: string;
  isFull: boolean;
}

export const PageContainer = styled.section`
  width: 95%;
  margin: auto;
`;

export const PageContent = styled.div<PageContentProps>`
  width: ${p => (p.isFull ? '96%' : '86%')};
  margin: auto;
  text-align: ${p => (p.align ? p.align : 'initial')};

  @media (min-width: 46rem) {
    width: ${p => (p.isFull ? '96%' : '70%')};
  }
`;
