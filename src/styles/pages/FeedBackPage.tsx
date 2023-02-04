import styled from "@emotion/styled";

export const FeedBackWrapper = styled.div`
  width: 100%;
  height: 300px;
`;

export const FeedBackTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  padding-top: 20px;
`;

export const FeedBackGetUserWrap = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
`;

export const FeedBackInput = styled.input`
  width: 170px;
  height: 33px;
  margin-right: 25px;
  border-radius: 5px;
  border: 1px solid grey;
  padding-left: 10px;
  &:focus {
    outline: none;
    border: 1.2px solid darkorange;
  }
`;

export const FeedBackGetInfoBtn = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: darkorange;
  color: white;
  cursor: pointer;
`;

export const FeedBackSection = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 14px;
  overflow-y: scroll;
  background-color: blue;
  margin-top: 15px;
`;

export const FeedBackInfo = styled.div`
  width: 285px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 0 15px;
  margin: 10px 0;
`;

export const FeedBackUserHeaderInfo = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

export const FeedBackMsg = styled.div`
  width: inherit;
  padding: 10px 0;
  box-sizing: border-box;
`;
