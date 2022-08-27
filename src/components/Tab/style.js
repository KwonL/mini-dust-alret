import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  border-top: 1px solid #e8e8e8;
  box-shadow: 0 0 6px 4px rgb(0 0 0 / 4%);
  border-radius: 10px 10px 0 0;
  z-index: 5000;
  display: flex;
  flex-wrap: wrap;
  padding: 0.5rem 2rem;
  cursor: pointer;
  background: #fff;
`

export const TabItem = styled.div`
  flex: 1 0 0%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  font-size: 1.2rem;
  border-bottom: 2px solid transparent;
  border-color: ${({ active }) => (active ? '#03c75a' : 'transparent')};
`
export const Text = styled.span`
  font-size: 0.8rem;
  font-family: 'GmarketSansTTFMedium';
`
