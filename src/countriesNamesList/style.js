import styled from 'styled-components'

export const Li = styled.li`
padding: 1% 3%;
   display:flex;
   justify-content: space-between;
   border: 1px solid #f1f5f9; 
   background-color: #ffffff30;/
`

export const Para = styled.p`
    margin: 0px;
   color: ${props => (props.visited ? '#cbd5e1' : '#ffffff')};
   padding-right: ${props => (props.visited ? '1.4%' : '')};/
`

export const Button = styled.button`
   padding: 0.5% 2%; 
   font-size: 1vw;
   color: ${props => {
     if (props.isVisited === true) {
       return '#cbd5e1'
     }
     return '#ffffff'
   }};
   border:none; 
   background-color: ${props => {
     if (props.isVisited === true) {
       return 'transparent'
     }
     return '#3b82f6'
   }};
   border-radius: 4px;/
`
