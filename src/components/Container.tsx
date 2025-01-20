import styled from "styled-components";

export const Container = styled.div`
  max-width: 1056px;
  width: 100%;
  min-height: 100%; //на всю высоту родителя
  padding: 0 15px;
  margin: 0 auto; //распологаем все по центру
  border: 1px solid red;
  /* background-color:#0000ff56; */
`
/* 
1366 - всё полотно
1026 ~ контент
170 ~ от полотна к контенту
1366 - (170*2) = 1026 размер контейнера + 15px + 15px с двух сторон pading для мобилки = 1056
 */