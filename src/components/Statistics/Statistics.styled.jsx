import styled from 'styled-components';

export const StatsCard = styled.section`
  margin-top: 40px;
  margin-right: auto;
  margin-left: auto;
  width: 600px;
  border-radius: 8px;
  overflow: hidden;
  border: 2px #70757a solid;
`;
export const Title = styled.h2`
  text-align: center;
`;
export const Stats = styled.ul`
  display: flex;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 32px 0;
  justify-content: space-around;
  align-items: center;
  width: ${props => 100 / props.quantity}%;
`;
export const Label = styled.span`
  color: #ffffff;
`;
export const Value = styled.span`
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
`;
