// import React, { FC, useRef } from "react"
import styled from "styled-components"
import { Icon } from "../icon/Icon"

// export interface IDropDownProps {
//   children?: React.ReactNode;
//   isOpen?: boolean;
// }
// export const DropDown: React.FC<IDropDownProps> = ({
//   children, 
//   isOpen,
// }) => {
//   const nodeRef = useRef(null);
//   return(
//     <div in={isOpen}>

//     </div>
//   )
// }

export function Dropdown() {

  return (
    <>
      <DropdownDefault>
        Theme<Icon iconId={'arrowDown'} width={'10'} height={'7'} viewBox={'0 0 10 7'} />
      </DropdownDefault>

      {/* <DropdownStyled>
        <DropdownDefault type='button'>
          Theme<Icon iconId={'arrowUp'} width={'10'} height={'7'} viewBox={'0 0 10 7'}/>
        </DropdownDefault>
        <SwitchConteiner>
          <Switch><Icon iconId={'sun'} width={'15'} height={'15'} viewBox={'0 0 60 60'}/>Light</Switch>
          <Switch><Icon iconId={'moon'} width={'15'} height={'15'} viewBox={'0 0 60 60'}/>Dark</Switch>
        </SwitchConteiner>
      </DropdownStyled> */}
    </>
  )
}
const DropdownStyled = styled.div`
display:flex;
flex-direction: column;
color: #abb2bf;
`
const DropdownDefault = styled.button`
  display:flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: #abb2bf;
  &:hover{
    color: #ffffff;
  }
`
const SwitchConteiner = styled.div`
  border: 1px solid  #abb2bf;
  padding: 0 5px 0px ;
`
const Switch = styled.div`
  display: flex;
  align-items: center;
  &:hover{
    color: #ffffff;
  }
`
