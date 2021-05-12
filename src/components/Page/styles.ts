import styled from 'styled-components';

interface PageContentProps {
  align: string;
}

export const PageContainer = styled.section`
  width: 95%;
  margin: auto;
`;

export const PageContent = styled.div`
  width: 86%;
  margin: auto;
  text-align: ${(p: PageContentProps) => (p.align ? p.align : 'initial')};

  @media (min-width: 46rem) {
    width: 60%;
  }
`;
