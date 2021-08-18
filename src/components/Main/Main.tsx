import styled from "styled-components";
import { HeaderOne, SmallText, Text } from "../../assets/Typography";

import children from "./children.jpg";

const breakPointMaxMedium = "(max-width: 768px)";
// const breakPointMaxLarge = "(max-width: 968px)";

const Container = styled.section`
  background: #f2efe3;
  display: flex;
  flex-direction: row;
  @media ${breakPointMaxMedium} {
    flex-direction: column;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: left;
  /* justify-content: center; */
  padding: 2em;
  flex-direction: column;
  width: 50%;
  @media ${breakPointMaxMedium} {
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 80%;
    padding: 8em 2em;
  }
`;

const Image = styled.div`
  height: 100%;
  width: 50%;
  img {
    width: 100%;
  }
  @media ${breakPointMaxMedium} {
    width: 100%;
  }
`;

const Footer = styled.div`
  background-color: #fafafa;
  height: 15em;
  text-align: center;
  > * {
    padding-left: 15em;
    padding-right: 15em;
    padding-top: 4em;
  }
`;

export const Main = () => (
  <>
    <Container>
      <InnerContainer>
        <HeaderOne>Pay it forward</HeaderOne>
        <Text>
          We all know that those little one's grow fast and needs change. Why
          don't you give some away while receiving new things to suit their
          current needs? And maybe make some money in return?
        </Text>
      </InnerContainer>
      <Image>
        <img src={children} alt={"children"} />
      </Image>
    </Container>
    <Footer>
      <SmallText>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </SmallText>
    </Footer>
  </>
);
