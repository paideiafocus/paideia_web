import styled from 'styled-components';

interface TextTagProps {
  isCenter: boolean;
  color: string;
}

export const TextTag = styled.p`
  text-align: ${(p: TextTagProps) => p.isCenter && 'center'};
  color: ${(p: TextTagProps) => p.color};
`;
