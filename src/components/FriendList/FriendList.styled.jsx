import styled from 'styled-components';

export const Friends = styled.ul`
  margin-top: 40px;
  width: 240px;
  margin-left: auto;
  margin-right: auto;
`;
export const Friend = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 8px;
  overflow: hidden;
  border: 2px #70757a solid;
  :not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const Status = styled.span`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;
export const Avatar = styled.img`
  margin-left: 16px;
  width: 60px;
`;
export const Name = styled.p`
  margin-left: 16px;
  font-size: 20px;
`;
