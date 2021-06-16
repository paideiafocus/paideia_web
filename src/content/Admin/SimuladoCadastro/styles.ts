import styled from 'styled-components';

interface IGroupField {
  center?: boolean;
}

export const GroupField = styled.div<IGroupField>`
  margin-bottom: 2rem;
  text-align: ${p => (p.center ? 'center' : 'initial')};

  div {
    width: 100%;
  }
`;

export const Table = styled.table`
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;

  th {
    font-size: 1.2rem;
  }

  th,
  td {
    padding: 0.75rem;
    vertical-align: middle;
    border-top: 1px solid #dee2e6;
  }
`;
