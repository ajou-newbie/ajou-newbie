import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
import Loader from './Loader';
import styled from 'styled-components';
import ResultBackImg from '../../image/result_bg_gradiant.png';
import FixMImg from '../../image/result_fix_500x1080.png';
import Fix360x740 from '../../image/result_fix_360x740.png';
import Fix360x760 from '../../image/result_fix_360x760.png';
import Fix384x538 from '../../image/result_fix_384x538.png';
import Fix360x640 from '../../image/result_fix_360x640.png';
import Fix414x896 from '../../image/result_fix_414x739.png';
import Fix375x812 from '../../image/result_fix_375x812.png';
import Fix375x667 from '../../image/result_fix_375x667.png';
import Fix390x844 from '../../image/result_fix_390x844.png';
import Fix428x926 from '../../image/result_fix_428x926.png';
import Fix1280x800 from '../../image/result_fix_1280x800.png';
import Fix1024x768 from '../../image/result_fix_1024x768.png';
import Fix1112x834 from '../../image/result_fix_1112x834.png';
import Fix1194x834 from '../../image/result_fix_1194x834.png';
import Fix1366x1024 from '../../image/result_fix_1366x1024.png';
import Fix1366x768 from '../../image/result_fix_1366x768.png';
import Fix800x1280 from '../../image/result_fix_800x1280.png';
import Fix768x1024 from '../../image/result_fix_768x1024.png';
import Fix834x1112 from '../../image/result_fix_834x1112.png';
import Fix834x1194 from '../../image/result_fix_834x1194.png';
import Fix1024x1366 from '../../image/result_fix_1024x1366.png';
import Fix1920x1080 from '../../image/result_fix_1920x1080.png';
import GlobalFonts from "../fonts";
import ESTJ from '../../image/MBTI_ESTJ.png';
import INFP from '../../image/MBTI_INFP.png';
import INFJ from '../../image/MBTI_INFJ.png';
import url from '../../image/url_2x.png';

const ResultImage = styled.div`
    background-image: url(${ResultBackImg});
    width: 100%;
    height: 100%;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Fix = styled.div`
    position: fixed;
    background-image: url(${Fix1920x1080});
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    width:100%;
    height: 100%;
    left: 0px;
    bottom: 0px;
    opacity: 0.8;

    @media only screen and (max-width: 500px) {
        background-image: url(${FixMImg});
    }

    @media (device-width: 360px) and (device-height: 740px){ 
        background-image: url(${Fix360x740});
    }       

    @media (device-width: 360px) and (device-height: 760px){ 
        background-image: url(${Fix360x760});
    }  

    @media (device-width: 384px) and (device-height: 538px) { 
        background-image: url(${Fix384x538});
    }

    @media (device-width: 360px) and (device-height: 640px) { 
        background-image: url(${Fix360x640});
    }

    @media (device-width: 414px) { 
        background-image: url(${Fix414x896});
    }

    @media (device-width: 375px) and (device-height: 812px) { 
        background-image: url(${Fix375x812});
    }

    @media (device-width: 375px) and (device-height: 667px) { 
        background-image: url(${Fix375x667});
    }

    @media (device-width: 390px) {
        background-image: url(${Fix390x844});
    }

    @media (device-width: 428px) { 
        background-image: url(${Fix428x926});
    }

        
    @media (device-width: 414px) and (device-height: 896px) { 
        background-image: url(${Fix414x896});
    }

    @media (device-width: 1280px) and (device-height: 800px)  { 
        background-image: url(${Fix1280x800});
    }

    @media (device-width: 1024px) { 
        background-image: url(${Fix1024x768});
    }

    @media (device-width: 1112px) { 
        background-image: url(${Fix1112x834});
    }

    @media (device-width: 1194px) { 
        background-image: url(${Fix1194x834});
    }

    @media (device-width: 1366px) and (device-height:1024px) { 
        background-image: url(${Fix1366x1024});
    }

    @media (device-width: 1366px) and (device-height:768px) { 
        background-image: url(${Fix1366x768});
    }

    @media (device-width: 800px) and (device-height: 1280px) { 
        background-image: url(${Fix800x1280});
    }

    @media (device-width: 768px) and (device-height: 1024px) { 
        background-image: url(${Fix768x1024});
    }

    @media (device-width: 834px) and (device-height: 1112px) { 
        background-image: url(${Fix834x1112});
    }

    @media (device-width: 834px) and (device-height: 1194px) { 
        background-image: url(${Fix834x1194});
    }

    @media (device-width: 1024px) and (device-height: 1366px) { 
        background-image: url(${Fix1024x1366});
    }
`;

const ResultContainer = styled.div`
    width: 500px;
    text-align: center;
    justify-content: center;
    align-items: center;

    @media (min-width: 280px) and (max-width: 320px) {
        width: 270px;
    } 

    @media (min-width: 325px) and (max-width: 414px) {
        width: 350px;
    }
    
    @media (min-width: 428px) and (max-width: 500px) {
        width: 410px;
    }
`;

const Header = styled.div`
    font-family: 'BMeU';
    font-size: 35px;
    text-shadow: 1px 1px gray;
    color: white;
    margin: 30px 0px 30px 0px;

    @media (min-width: 280px) and (max-width: 320px) {
        font-size: 25px;
        margin: 20px 0px 20px 0px;
    }

    @media (min-width: 325px) and (max-width: 414px) {
        font-size: 30px;
    } 
`;

const MBTIResult = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 35px;
    margin: 0px 10px 20px auto;
    padding: 53px 29px 53px 29px;
    box-shadow: 4px 6px 0px -1px rgba(0,0,0,0.14);
`;

const ResultHeader = styled.div`
    font-family: 'DAONE';
    font-size: 20px;
    color: black;
    margin-bottom: 28px;

    @media (min-width: 280px) and (max-width: 320px) {
        font-size: 15px;
    }
`;

const ResultBlack = styled.div`
    font-family: 'Recipekorea';
    font-size: 35px;
    color: #343434;

    @media (min-width: 280px) and (max-width: 320px) {
        font-size: 17px;
    }

    @media (min-width: 325px) and (max-width: 500px) {
        font-size: 23px;
    } 
`;

const ResultName = styled.div`
    font-family: 'Recipekorea';
    font-size: 50px;
    color: #3369CF;

    @media (min-width: 280px) and (max-width: 320px) {
        font-size: 30px;
    }

    @media (min-width: 325px) and (max-width: 414px) {
        font-size: 40px;
    } 
`;

const ResultImg = styled.div`
    background-image: url(${ESTJ});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 300px;
    display: block;
    margin-bottom: 10px;

    @media (min-width: 280px) and (max-width: 320px) {
        height: 240px;
    }
`;

const Ulcontainer = styled.ul`
    /* margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px; */
    padding-inline-start: 40px;
    text-align: left;

    @media (min-width: 280px) and (max-width: 414px) {
        padding-inline-start: 10px;
    }
`;

const ResultText = styled.li`
    font-family: 'KoPub Dotum';
    font-size: 18px;
    color: #343434;
    word-wrap: break-word;
    word-break: keep-all;
    text-align: left;
    margin-bottom: 20px;

    @media (min-width: 280px) and (max-width: 320px) {
        font-size: 13px;
        margin-bottom: 15px;
    }
`;

const SimiAndDiff = styled.div`
    width: 100%;
    height: 300%;
    background-color: white;
    border-radius: 35px;
    margin: 0px 0px 20px auto;
    padding: 50px 50px 30px 50px;
    box-shadow: 4px 6px 0px -1px rgba(0,0,0,0.14);
    text-align: center;

    @media (min-width: 280px) and (max-width: 500px) {
        padding: 20px;
    }
`;

const SimiAndDiffText = styled.div`
    width: 50%;
    font-family: 'BMeU';
    font-size: 25px;
    color: #343434;
    word-wrap: break-word;
    word-break: keep-all;
    text-align: center;

    @media (min-width: 280px) and (max-width: 320px) {
        font-size: 16px;
    }

    @media (min-width: 325px) and (max-width: 414px) {
        font-size: 20px;
    }
`;

const SimiAndDiffName = styled.div`
    width: 50%;
    font-family: 'BMeU';
    font-size: 20px;
    color: #343434;

    @media (min-width: 280px) and (max-width: 320px) {
        font-size: 14px;
    }

    @media (min-width: 325px) and (max-width: 414px) {
        font-size: 18px;
    }
`;

const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;

    @media (min-width: 280px) and (max-width: 500px) {
        margin-bottom: 0px;
    }
`;

const Similar = styled.div`
    background-image: url(${INFP});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
    border-right: 1px solid #e5e5e5;

    @media (min-width: 280px) and (max-width: 320px) {
        width: 150px;
        height: 150px;
    }
`;

const Different = styled.div`
    background-image: url(${INFJ});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;

    @media (min-width: 280px) and (max-width: 320px) {
        width: 150px;
        height: 150px;
    }
`;

const Share = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: white;
    border-radius: 35px;
    margin: 0px 0px 20px 0px;
    box-shadow: 4px 6px 0px -1px rgba(0,0,0,0.14);
    transform: translate(0%, 0%);
    border: none;
    cursor: pointer;

    &:hover {
        border: 5px solid white;
        background-color: rgb(81,138,247);
        outline: none;
    }
  
    &:focus {
        outline:none;
    }

    @media (hover: none) and (pointer: coarse) {
        &:focus{
            background-color: white;
            color: #343434;
            outline: none;
        }

        &:active {
            border: 5px solid white;
            background-color: rgb(81,138,247);
            color: white;
            outline: none;
        }
    }

    @media (min-width: 280px) and (max-width: 320px) {
        height: 60px;
        border-radius: 25px;
    }

    @media (min-width: 325px) and (max-width: 414px) {
        height: 70px;
        border-radius: 25px;
    }
`;

const ShareText = styled.div`
    font-family: 'BMeU';
    font-size: 35px;
    color: #343434;
    text-align: center;

    @media (min-width: 280px) and (max-width: 320px) {
        font-size: 20px;
    }

    @media (min-width: 325px) and (max-width: 414px) {
        font-size: 30px;
    }
`;

const Url = styled.div`
    background-image: url(${url});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 50px;
    height: 35px;

    @media (min-width: 280px) and (max-width: 320px) {
        height: 25px;
    }

    @media (min-width: 325px) and (max-width: 414px) {
        height: 30px;
    }
`;

const GoToStartbtn = styled.button`
    border: none;
    border-radius: 35px;
    width: 100%;
    height: 100px;
    transform: translate(0%, 0%);
    margin-bottom: 100px;
    font-family: 'BMeU';
    font-size: 35px;
    color: #3369CF;
    background-color: white;
    cursor: pointer;
    box-shadow: 4px 6px 0px -1px rgba(0,0,0,0.14);

    &:hover {
        border: 5px solid white;
        background-color: rgb(81,138,247);
        color: white;
    }
    
    &:focus {
        outline: none;
    }

    @media (min-width: 280px) and (max-width: 320px) {
        font-size: 20px;
        height: 60px;
        margin-bottom: 50px;
        border-radius: 25px;
    }

    @media (min-width: 325px) and (max-width: 414px) {
        font-size: 30px;
        height: 70px;
        margin-bottom: 50px;
        border-radius: 25px;
    }
`;

function Result() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const location = useLocation();
    console.log(location.state);

    const fetchUsers = async () => {
        try {
            setError(null);
            setLoading(true);
        } catch (e) {
            setError(e);
        }
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    const Toast = () => {
        ToastsStore.success("링크 복사에 성공했어요!");
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    if (loading) return <Loader type="bubbles" color="white" ></Loader>
    if (error) return <div>에러가 발생했습니다.</div>

    const url = window.location.href;

    return(
      <ResultImage>
          <GlobalFonts/>
          <Fix/>
          <ResultContainer>
              <Header>슬기로운 대학생활</Header>
              <MBTIResult>
                  <ResultHeader>내가 즐기게 될 캠퍼스 라이프는?</ResultHeader>
                  <ResultBlack>이번 정거장은 A+,A+입니다.</ResultBlack>
                  <ResultName>A+행 버스기사</ResultName>
                  <ResultImg>
                  </ResultImg>
                  <Ulcontainer>
                      <ResultText>A+로 가는 급행 버스를 운행하는 베스트 드라이버!</ResultText>
                      <ResultText>당신은 자기관리에 철저하고 목표지향적이라 자신이 계획한 일은 모두 지키려고 노력하는 사람이에요.</ResultText>
                      <ResultText>이러한 특징은 자신뿐만 아니라 주변 사람들에게도 영향을 끼쳐 동기들을 자체 휴강의 위험으로부터 구해내고, 팀플에서 소극적인 사람들을 엄격하게 관리하여 팀플을 성공적으로 이끌 수 있어요.</ResultText>
                      <ResultText>자신이 맡은 일은 철저하게 수행하고 강한 추진력과 계획력 덕에 리더를 원하지는 않지만, 리더가 지녀야 할 자질을 모두 가지고 있는 당신!</ResultText>
                      <ResultText>당신과 함께라면 모두가 A+, 장학금을 원한다면 어서 탑승하세요~~</ResultText>
                  </Ulcontainer>                      
              </MBTIResult>
              <SimiAndDiff>
                  <FlexContainer>
                      <SimiAndDiffText>나랑 찰떡인 동기</SimiAndDiffText>
                      <SimiAndDiffText>잘 안맞는 동기</SimiAndDiffText>
                  </FlexContainer>
                  <FlexContainer>
                      <Similar/>
                      <Different/>
                  </FlexContainer>
                  <FlexContainer>
                      <SimiAndDiffName>에타 네임드</SimiAndDiffName>
                      <SimiAndDiffName>고학번 같은 새내기</SimiAndDiffName>
                  </FlexContainer>
              </SimiAndDiff>
              <CopyToClipboard text={url}>
              <Share onClick={() => Toast()}>  
                    <Url></Url>
                    <ShareText>테스트 공유하기</ShareText>
                    <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_CENTER} />
                </Share>
              </CopyToClipboard>
              <Link to = "/" >
                  <GoToStartbtn>테스트 다시하기</GoToStartbtn>
              </Link>
          </ResultContainer>
      </ResultImage>
    )
}

export default Result;
