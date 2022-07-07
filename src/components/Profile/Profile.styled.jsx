import styled from 'styled-components';

export const ProfileCard = styled.div`
  display: block;
  width: 360px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  overflow: hidden;
  border: 2px #70757a solid;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;
`;
export const Avatar = styled.img`
  width: 100px;
`;
export const UserName = styled.p`
  margin-top: 32px;
`;
export const Tag = styled.p`
  margin-top: 16px;
  color: #70757a;
`;
export const Location = styled.p`
  margin-top: 16px;
  color: #70757a;
`;
export const Stats = styled.ul`
  display: flex;
`;
export const StatsItem = styled.li`
  box-sizing: border-box;
  width: 120px;
  height: 120px;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-left: 1px #70757a solid;
  border-right: 1px #70757a solid;
  border-top: 2px #70757a solid;
  background-color: #d5d9dd;
`;
export const Label = styled.span`
  display: block;
  color: #70757a;
`;
export const Quantity = styled.span`
  display: block;
  font-weight: 700;
`;
