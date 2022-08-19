import styled from 'styled-components'
import selectImg from '../../assets/selectImg.svg'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1rem;
`
export const SelectBox = styled.select`
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  appearance: none;
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  background-color: #fff;
  background-image: url(${selectImg});
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  min-width: ${({ width }) => width + 'px' || 'auto'};
`
