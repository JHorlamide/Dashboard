import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Stack, Row, Text, Button, Img, Line } from "components";

const GlossaryPage = () => {
  const navigate = useNavigate();

  function handleNavigate11() {
    navigate("/viewcourses");
  }
  function handleNavigate12() {
    navigate("/facilitator");
  }
  function handleNavigate13() {
    navigate("/photovidoes");
  }
  function handleNavigate26() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <Column className="bg-white_A700 font-montserrat mx-[auto] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] w-[100%]">
        <Column className="items-center w-[100%]">
          <Stack className="lg:h-[334px] xl:h-[382px] 2xl:h-[430px] 3xl:h-[516px] w-[100%]">
            <Stack className="absolute bg-white_A700 lg:h-[137px] xl:h-[156px] 2xl:h-[176px] 3xl:h-[211px] inset-x-[0] mx-[auto] top-[0] w-[85%]">
              <header className="absolute top-[0] w-[100%]">
                <div className="overflow-x-auto w-[100%]">
                  <Stack className="xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] w-[100%]">
                    <div className="absolute bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] w-[100%]"></div>
                    <Row className="absolute h-[max-content] inset-y-[0] items-center my-[auto] right-[0] w-[75%]">
                      <Text className="cursor-pointer hover:font-semibold font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Home
                      </Text>
                      <Text className="cursor-pointer font-normal hover:font-semibold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Services
                      </Text>
                      <Text
                        className="common-pointer cursor-pointer font-normal hover:font-semibold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                        onClick={handleNavigate11}
                      >
                        Courses
                      </Text>
                      <Text
                        className="common-pointer cursor-pointer font-normal hover:font-semibold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                        onClick={handleNavigate12}
                      >
                        Become a facilitator
                      </Text>
                      <Text className="cursor-pointer font-normal hover:font-semibold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        About Us
                      </Text>
                      <Text
                        className="common-pointer cursor-pointer font-normal hover:font-semibold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                        onClick={handleNavigate13}
                      >
                        Gallery
                      </Text>
                      <Button className="font-semibold lg:ml-[57px] xl:ml-[65px] 2xl:ml-[74px] 3xl:ml-[88px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[15%]">
                        Get started
                      </Button>
                      <Button
                        className="font-semibold xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[10%]"
                        variant="OutlinePurple900"
                      >
                        Login
                      </Button>
                    </Row>
                  </Stack>
                </div>
              </header>
              <Img
                src="images/img_cimfonilogo04_2.png"
                className="absolute lg:h-[137px] xl:h-[156px] 2xl:h-[176px] 3xl:h-[211px] left-[0] w-[19%]"
                alt="CimfoniLogoFour"
              />
            </Stack>
            <Row className="absolute bg-white_A700 bottom-[0] items-center lg:p-[49px] xl:p-[56px] 2xl:p-[63px] 3xl:p-[75px] w-[100%]">
              <Column className="lg:ml-[43px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[40%]">
                <Text className="font-semibold leading-[normal] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-bluegray_900 text-center w-[86%]">
                  Glossary of design <br />& broadcast terms
                </Text>
                <Text className="font-medium lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-bluegray_900 w-[auto]">
                  Terms and Definations.
                </Text>
              </Column>
              <Img
                src="images/img_group_161X201.svg"
                className="lg:h-[126px] xl:h-[144px] 2xl:h-[162px] 3xl:h-[194px] w-[15%]"
                alt="Group"
              />
            </Row>
          </Stack>
          <Line className="bg-bluegray_300 h-[1px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] w-[83%]" />
        </Column>
        <Text className="font-medium lg:ml-[129px] xl:ml-[148px] 2xl:ml-[167px] 3xl:ml-[200px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] lg:text-[49px] xl:text-[56px] 2xl:text-[64px] 3xl:text-[76px] text-purple_900 w-[auto]">
          A
        </Text>
        <Text className="font-medium xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
          Advertising agency: Teams of creatives hired by clients to build
          marketing campaigns
        </Text>
        <Text className="font-medium xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
          Advertising agency: Teams of creatives hired by clients to build
          marketing campaigns
        </Text>
        <Text className="font-medium lg:ml-[134px] xl:ml-[153px] 2xl:ml-[173px] 3xl:ml-[207px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] lg:text-[49px] xl:text-[56px] 2xl:text-[64px] 3xl:text-[76px] text-purple_900 w-[auto]">
          B
        </Text>
        <Text className="font-medium xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
          Advertising agency: Teams of creatives hired by clients to build
          marketing campaigns
        </Text>
        <Text className="font-medium xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
          Advertising agency: Teams of creatives hired by clients to build
          marketing campaigns
        </Text>
        <Text className="font-medium lg:ml-[132px] xl:ml-[151px] 2xl:ml-[170px] 3xl:ml-[204px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] lg:text-[49px] xl:text-[56px] 2xl:text-[64px] 3xl:text-[76px] text-purple_900 w-[auto]">
          C
        </Text>
        <Text className="font-medium xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
          Advertising agency: Teams of creatives hired by clients to build
          marketing campaigns
        </Text>
        <Text className="font-medium xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
          Advertising agency: Teams of creatives hired by clients to build
          marketing campaigns
        </Text>
        <Text className="font-medium lg:ml-[132px] xl:ml-[151px] 2xl:ml-[170px] 3xl:ml-[204px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] lg:text-[49px] xl:text-[56px] 2xl:text-[64px] 3xl:text-[76px] text-purple_900 w-[auto]">
          D
        </Text>
        <Text className="font-medium xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
          Advertising agency: Teams of creatives hired by clients to build
          marketing campaigns
        </Text>
        <Text className="font-medium xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
          Advertising agency: Teams of creatives hired by clients to build
          marketing campaigns
        </Text>
        <Text className="font-medium lg:ml-[136px] xl:ml-[155px] 2xl:ml-[175px] 3xl:ml-[210px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] lg:text-[49px] xl:text-[56px] 2xl:text-[64px] 3xl:text-[76px] text-purple_900 w-[auto]">
          E
        </Text>
        <Text className="font-medium xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
          Advertising agency: Teams of creatives hired by clients to build
          marketing campaigns
        </Text>
        <Text className="font-medium xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
          Advertising agency: Teams of creatives hired by clients to build
          marketing campaigns
        </Text>
        <Text className="font-medium lg:ml-[136px] xl:ml-[156px] 2xl:ml-[176px] 3xl:ml-[211px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] lg:text-[49px] xl:text-[56px] 2xl:text-[64px] 3xl:text-[76px] text-purple_900 w-[auto]">
          F
        </Text>
        <Text className="font-medium xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
          Advertising agency: Teams of creatives hired by clients to build
          marketing campaigns
        </Text>
        <Text className="font-medium xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
          Advertising agency: Teams of creatives hired by clients to build
          marketing campaigns
        </Text>
        <Text className="font-medium lg:ml-[130px] xl:ml-[149px] 2xl:ml-[168px] 3xl:ml-[201px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] lg:text-[49px] xl:text-[56px] 2xl:text-[64px] 3xl:text-[76px] text-purple_900 w-[auto]">
          G
        </Text>
        <Text className="font-medium xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
          Advertising agency: Teams of creatives hired by clients to build
          marketing campaigns
        </Text>
        <Text className="font-medium xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
          Advertising agency: Teams of creatives hired by clients to build
          marketing campaigns
        </Text>
        <Text className="font-medium lg:ml-[132px] xl:ml-[151px] 2xl:ml-[170px] 3xl:ml-[204px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] lg:text-[49px] xl:text-[56px] 2xl:text-[64px] 3xl:text-[76px] text-purple_900 w-[auto]">
          H
        </Text>
        <Text className="font-medium xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
          Advertising agency: Teams of creatives hired by clients to build
          marketing campaigns
        </Text>
        <Text className="font-medium xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
          Advertising agency: Teams of creatives hired by clients to build
          marketing campaigns
        </Text>
        <Text className="font-medium lg:ml-[144px] xl:ml-[165px] 2xl:ml-[186px] 3xl:ml-[223px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] lg:text-[49px] xl:text-[56px] 2xl:text-[64px] 3xl:text-[76px] text-purple_900 w-[auto]">
          I
        </Text>
        <Text className="font-medium xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
          Advertising agency: Teams of creatives hired by clients to build
          marketing campaigns
        </Text>
        <Text className="font-medium xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_300 w-[auto]">
          Advertising agency: Teams of creatives hired by clients to build
          marketing campaigns
        </Text>
        <Column className="items-center lg:mt-[185px] xl:mt-[212px] 2xl:mt-[239px] 3xl:mt-[286px] w-[100%]">
          <footer className="bg-bluegray_900 w-[100%]">
            <Row className="lg:mb-[56px] xl:mb-[64px] 2xl:mb-[72px] 3xl:mb-[86px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] mx-[auto] w-[83%]">
              <Column className="lg:pr-[10px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[16px] lg:pt-[10px] xl:pt-[12px] 2xl:pt-[14px] 3xl:pt-[16px] w-[37%]">
                <Img
                  src="images/img_group.svg"
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                  alt="Group One"
                />
                <Column className="lg:mr-[125px] xl:mr-[143px] 2xl:mr-[161px] 3xl:mr-[193px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[63%]">
                  <Text className="font-normal not-italic lg:text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-white_A700 w-[auto]">
                    Cimfoni 2022. All copyright reserved
                  </Text>
                  <Row className="2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[52%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_51 w-[auto]">
                      Our privacy policies
                    </Text>
                    <Img
                      src="images/img_vector_gray_51.svg"
                      className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[3px] w-[6%]"
                      alt="Vector"
                    />
                  </Row>
                  <Text className="font-medium lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                    Contact Us
                  </Text>
                  <Row className="lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[53%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_51 w-[auto]">
                      Hello@cimfoni.com
                    </Text>
                    <Img
                      src="images/img_vector_gray_51.svg"
                      className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[3px] w-[6%]"
                      alt="Vector One"
                    />
                  </Row>
                  <Text className="font-medium lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                    Office
                  </Text>
                  <Row className="ml-[2px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[60%]">
                    <Img
                      src="images/img_location.svg"
                      className="lg:h-[11px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[17px] w-[7%]"
                      alt="location"
                    />
                    <Text className="font-normal lg:leading-[12px] xl:leading-[14px] 2xl:leading-[16px] 3xl:leading-[19px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[2px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_51 w-[86%]">
                      No: 14a surulere road,
                      <br />
                      lagos, Nigeria.
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="justify-end lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] w-[63%]">
                <Row className="justify-evenly pt-[2px] w-[100%]">
                  <Column className="mt-[1px] pb-[2px] pr-[2px] w-[36%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                      Explore
                    </Text>
                    <Row className="items-center lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[21%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_51 w-[auto]">
                        Home
                      </Text>
                      <Img
                        src="images/img_vector_gray_51.svg"
                        className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[16%]"
                        alt="Vector Two"
                      />
                    </Row>
                    <Row className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[28%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_51 w-[auto]">
                        About Us
                      </Text>
                      <Img
                        src="images/img_vector_gray_51.svg"
                        className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[4px] w-[12%]"
                        alt="Vector Three"
                      />
                    </Row>
                    <Row className="items-center lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[30%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_51 w-[auto]">
                        Resources
                      </Text>
                      <Img
                        src="images/img_vector_gray_51.svg"
                        className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[11%]"
                        alt="Vector Four"
                      />
                    </Row>
                    <Row className="lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[34%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_51 w-[auto]">
                        Community
                      </Text>
                      <Img
                        src="images/img_vector_gray_51.svg"
                        className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[3px] w-[10%]"
                        alt="Vector Five"
                      />
                    </Row>
                    <Row className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[26%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_51 w-[auto]">
                        Glossary
                      </Text>
                      <Img
                        src="images/img_vector_gray_51.svg"
                        className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[3px] w-[13%]"
                        alt="Vector Six"
                      />
                    </Row>
                    <Row className="items-center lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[19%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_51 w-[auto]">
                        News
                      </Text>
                      <Img
                        src="images/img_vector_gray_51.svg"
                        className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[18%]"
                        alt="Vector Seven"
                      />
                    </Row>
                  </Column>
                  <Column className="w-[45%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                      Learn
                    </Text>
                    <Row className="lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[48%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_51 w-[auto]">
                        Software Development
                      </Text>
                      <Img
                        src="images/img_vector_gray_51.svg"
                        className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[3px] w-[5%]"
                        alt="Vector Eight"
                      />
                    </Row>
                    <Row className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[34%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_51 w-[auto]">
                        Graphic Design
                      </Text>
                      <Img
                        src="images/img_vector_gray_51.svg"
                        className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[3px] w-[8%]"
                        alt="Vector Nine"
                      />
                    </Row>
                    <Row className="lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[42%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_51 w-[auto]">
                        Media Broadcasting
                      </Text>
                      <Img
                        src="images/img_vector_gray_51.svg"
                        className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[3px] w-[6%]"
                        alt="Vector Ten"
                      />
                    </Row>
                  </Column>
                  <Column className="mt-[1px] w-[19%]">
                    <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                      Legal
                    </Text>
                    <Row className="lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[89%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_51 w-[auto]">
                        Privacy & Cookies
                      </Text>
                      <Img
                        src="images/img_vector_gray_51.svg"
                        className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[3px] w-[7%]"
                        alt="Vector Eleven"
                      />
                    </Row>
                    <Row className="items-center justify-between lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[99%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_51 w-[auto]">
                        Terms & Conditions
                      </Text>
                      <Img
                        src="images/img_vector_gray_51.svg"
                        className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] w-[6%]"
                        alt="Vector Twelve"
                      />
                    </Row>
                    <Row className="lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[87%]">
                      <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_51 w-[auto]">
                        Legal Disclaimer
                      </Text>
                      <Img
                        src="images/img_vector_gray_51.svg"
                        className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[3px] w-[7%]"
                        alt="Vector Thirteen"
                      />
                    </Row>
                  </Column>
                </Row>
                <Text className="font-medium lg:mt-[51px] xl:mt-[58px] 2xl:mt-[66px] 3xl:mt-[79px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Follow Us
                </Text>
                <Row className="mr-[auto] lg:mt-[19px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] pl-[1px] pt-[1px] w-[48%]">
                  <Img
                    src="images/img_vector.svg"
                    className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] my-[1px] lg:w-[10px] xl:w-[11px] 2xl:w-[13px] 3xl:w-[15px]"
                    alt="Vector Fourteen"
                  />
                  <Text className="font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] my-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_51 w-[auto]">
                    Facebook
                  </Text>
                  <Img
                    src="images/img_twitter.svg"
                    className="common-pointer xl:h-[10px] 2xl:h-[12px] 3xl:h-[14px] lg:h-[9px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] mt-[1px] w-[4%]"
                    onClick={handleNavigate26}
                    alt="twitter"
                  />
                  <Text className="font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] my-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_51 w-[auto]">
                    Twitter
                  </Text>
                  <Img
                    src="images/img_camera.svg"
                    className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[13px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] my-[1px] lg:w-[10px] xl:w-[11px] 2xl:w-[13px] 3xl:w-[15px]"
                    alt="camera"
                  />
                  <Text className="font-normal lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] mt-[2px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_51 w-[auto]">
                    Instagram
                  </Text>
                  <Img
                    src="images/img_vector_12X12.svg"
                    className="lg:h-[10px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[1px] xl:w-[10px] 2xl:w-[12px] 3xl:w-[14px] lg:w-[9px]"
                    alt="Vector Fifteen"
                  />
                  <Text className="font-normal lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] my-[1px] not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_51 w-[auto]">
                    LinkedIn
                  </Text>
                </Row>
              </Column>
            </Row>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default GlossaryPage;
