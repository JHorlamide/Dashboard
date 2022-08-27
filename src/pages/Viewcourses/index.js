import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Stack, Row, Text, Button, Img, List, Input } from "components";

const ViewcoursesPage = () => {
  const navigate = useNavigate();

  function handleNavigate1() {
    navigate("/glossary");
  }
  function handleNavigate2() {
    navigate("/desktopthree");
  }
  function handleNavigate7() {
    navigate("/facilitator");
  }
  function handleNavigate8() {
    navigate("/photovidoes");
  }
  function handleNavigate28() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <Column className="bg-white_A700 font-montserrat mx-[auto] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] w-[100%]">
        <Column className="items-center w-[100%]">
          <Stack className="lg:h-[483px] xl:h-[552px] 2xl:h-[621px] 3xl:h-[745px] w-[100%]">
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
                      <Text className="cursor-pointer font-normal hover:font-semibold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Courses
                      </Text>
                      <Text
                        className="common-pointer cursor-pointer font-normal hover:font-semibold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                        onClick={handleNavigate7}
                      >
                        Become a facilitator
                      </Text>
                      <Text className="cursor-pointer font-normal hover:font-semibold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        About Us
                      </Text>
                      <Text
                        className="common-pointer cursor-pointer font-normal hover:font-semibold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                        onClick={handleNavigate8}
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
                src="images/img_cimfonilogo04_4.png"
                className="absolute lg:h-[137px] xl:h-[156px] 2xl:h-[176px] 3xl:h-[211px] left-[0] w-[19%]"
                alt="CimfoniLogoFour"
              />
            </Stack>
            <Column className="absolute bg-cyan_50 bottom-[0] items-center justify-end 2xl:p-[103px] 3xl:p-[123px] lg:p-[80px] xl:p-[91px] w-[100%]">
              <Text className="font-bold lg:leading-[62px] xl:leading-[71px] 2xl:leading-[80px] 3xl:leading-[96px] lg:mt-[46px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] lg:text-[46px] xl:text-[53px] 2xl:text-[60px] 3xl:text-[72px] text-center text-purple_900 w-[57%]">
                Build a carreer by <br />
                learning from the best
              </Text>
              <Text className="font-medium lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-purple_900 w-[85%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                sit gravida mus enim elit egestas ut. Nulla faucibus <br />
                rutrum phasellus iaculis. Donec tristique volutpat id lectus
                nibh. Lorem commodo, sit elit suspendisse leo, phasellus <br />
                molestie.
              </Text>
            </Column>
          </Stack>
          <Text className="font-semibold lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-purple_900 w-[auto]">
            All you need to know about our courses
          </Text>
        </Column>
        <List
          className="gap-[0] min-h-[auto] xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] lg:ml-[92px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] w-[78%]"
          orientation="vertical"
        >
          <Row className="items-center justify-between lg:my-[52px] xl:my-[60px] 2xl:my-[67px] 3xl:my-[81px] w-[100%]">
            <Img
              src="images/img_rectangle8.png"
              className="lg:h-[467px] xl:h-[534px] 2xl:h-[601px] 3xl:h-[721px] rounded-radius16 w-[52%]"
              alt="RectangleEight"
            />
            <Column className="w-[39%]">
              <Text className="font-bold ml-[1px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-purple_900 w-[auto]">
                Software Development
              </Text>
              <Text className="font-medium ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-purple_900 w-[auto]">
                Duration 10 weeks
              </Text>
              <Text className="font-medium ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-purple_900 w-[auto]">
                90% completion rate
              </Text>
              <Text className="font-medium ml-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-purple_900 w-[auto]">
                10 class mates
              </Text>
              <Row className="items-center ml-[1px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[76%]">
                <Text className="bg-light_blue_300 font-medium px-[4px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[75px]">
                  Javascript
                </Text>
                <Text className="bg-light_blue_300 font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] px-[4px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[60px]">
                  React.js
                </Text>
                <Text className="bg-light_blue_300 font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] px-[4px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[83px]">
                  Mongo dbs
                </Text>
                <Text className="bg-light_blue_300 font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] px-[4px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[88px]">
                  HTML & CSS
                </Text>
              </Row>
              <Text className="font-medium lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-purple_900 w-[86%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                sit gravida mus enim elit egestas ut. Nulla faucibus <br />
                rutrum phasellus iaculis. Donec tristique volutpat id lectus
                nibh. Lorem commodo, sit elit suspendisse leo, phasellus <br />
                molestie.
              </Text>
              <Button
                className="2xl:mt-[38px] 3xl:mt-[45px] flex items-center justify-center lg:mt-[29px] ml-[1px] text-center w-[39%] xl:mt-[33px]"
                onClick={handleNavigate2}
                rightIcon={
                  <Img
                    src="images/img_arrowright_white_A700.svg"
                    className="text-center lg:w-[14px] lg:ml-[8px] xl:w-[16px] xl:ml-[9px] 2xl:w-[18px] 2xl:ml-[11px] 3xl:w-[21px] 3xl:ml-[13px]"
                    alt="arrow_right"
                  />
                }
              >
                <div className="common-pointer bg-transparent font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  Enroll Now
                </div>
              </Button>
            </Column>
          </Row>
          <Row className="items-center justify-evenly lg:my-[52px] xl:my-[60px] 2xl:my-[67px] 3xl:my-[81px] w-[100%]">
            <Column className="w-[48%]">
              <Text className="font-bold ml-[1px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-purple_900 w-[auto]">
                Graphics Design
              </Text>
              <Text className="font-medium ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-purple_900 w-[auto]">
                Duration 10 weeks
              </Text>
              <Text className="font-medium ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-purple_900 w-[auto]">
                90% completion rate
              </Text>
              <Text className="font-medium ml-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-purple_900 w-[auto]">
                10 class mates
              </Text>
              <Row className="items-center ml-[1px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[62%]">
                <Text className="bg-light_blue_300 font-medium px-[4px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[75px]">
                  Javascript
                </Text>
                <Text className="bg-light_blue_300 font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] px-[4px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[60px]">
                  React.js
                </Text>
                <Text className="bg-light_blue_300 font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] px-[4px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[83px]">
                  Mongo dbs
                </Text>
                <Text className="bg-light_blue_300 font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] px-[4px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[88px]">
                  HTML & CSS
                </Text>
              </Row>
              <Text className="font-medium lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-purple_900 w-[70%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                sit gravida mus enim elit egestas ut. Nulla faucibus <br />
                rutrum phasellus iaculis. Donec tristique volutpat id lectus
                nibh. Lorem commodo, sit elit suspendisse leo, phasellus <br />
                molestie.
              </Text>
              <Button
                className="2xl:mt-[38px] 3xl:mt-[45px] flex items-center justify-center lg:mt-[29px] ml-[1px] text-center w-[32%] xl:mt-[33px]"
                rightIcon={
                  <Img
                    src="images/img_arrowright_white_A700.svg"
                    className="text-center lg:w-[14px] lg:ml-[8px] xl:w-[16px] xl:ml-[9px] 2xl:w-[18px] 2xl:ml-[11px] 3xl:w-[21px] 3xl:ml-[13px]"
                    alt="arrow_right"
                  />
                }
              >
                <div className="bg-transparent font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  Enroll Now
                </div>
              </Button>
            </Column>
            <div className="bg-bluegray_100 lg:h-[467px] xl:h-[534px] 2xl:h-[601px] 3xl:h-[721px] rounded-radius16 w-[52%]"></div>
          </Row>
          <Row className="items-center justify-between lg:my-[52px] xl:my-[60px] 2xl:my-[67px] 3xl:my-[81px] w-[100%]">
            <div className="bg-bluegray_100 lg:h-[467px] xl:h-[534px] 2xl:h-[601px] 3xl:h-[721px] rounded-radius16 w-[52%]"></div>
            <Column className="w-[39%]">
              <Text className="font-bold ml-[1px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-purple_900 w-[auto]">
                Software Development
              </Text>
              <Text className="font-medium ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-purple_900 w-[auto]">
                Duration 10 weeks
              </Text>
              <Text className="font-medium ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-purple_900 w-[auto]">
                90% completion rate
              </Text>
              <Text className="font-medium ml-[1px] lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-purple_900 w-[auto]">
                10 class mates
              </Text>
              <Row className="items-center ml-[1px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] w-[76%]">
                <Text className="bg-light_blue_300 font-medium px-[4px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[75px]">
                  Javascript
                </Text>
                <Text className="bg-light_blue_300 font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] px-[4px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[60px]">
                  React.js
                </Text>
                <Text className="bg-light_blue_300 font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] px-[4px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[83px]">
                  Mongo dbs
                </Text>
                <Text className="bg-light_blue_300 font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] px-[4px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[9px] rounded-radius4 lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-bluegray_900 w-[88px]">
                  HTML & CSS
                </Text>
              </Row>
              <Text className="font-medium lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-purple_900 w-[86%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                sit gravida mus enim elit egestas ut. Nulla faucibus <br />
                rutrum phasellus iaculis. Donec tristique volutpat id lectus
                nibh. Lorem commodo, sit elit suspendisse leo, phasellus <br />
                molestie.
              </Text>
              <Button
                className="2xl:mt-[38px] 3xl:mt-[45px] flex items-center justify-center lg:mt-[29px] ml-[1px] text-center w-[39%] xl:mt-[33px]"
                rightIcon={
                  <Img
                    src="images/img_arrowright_white_A700.svg"
                    className="text-center lg:w-[14px] lg:ml-[8px] xl:w-[16px] xl:ml-[9px] 2xl:w-[18px] 2xl:ml-[11px] 3xl:w-[21px] 3xl:ml-[13px]"
                    alt="arrow_right"
                  />
                }
              >
                <div className="bg-transparent font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px]">
                  Enroll Now
                </div>
              </Button>
            </Column>
          </Row>
        </List>
        <Column className="items-center lg:mt-[139px] xl:mt-[159px] 2xl:mt-[179px] 3xl:mt-[214px] w-[100%]">
          <Column className="bg-bluegray_900 items-center justify-end lg:p-[49px] xl:p-[56px] 2xl:p-[64px] 3xl:p-[76px] w-[100%]">
            <Text className="font-semibold mt-[4px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-white_A700 w-[auto]">
              Join our community
            </Text>
            <Text className="font-normal lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center text-white_A700 w-[45%]">
              Become a part of our community. Get the latest news from <br />
              our front desk sent to your inbox weekly.
            </Text>
            <Row className="items-center justify-center lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[49%]">
              <Input
                className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
                wrapClassName="w-[75%]"
                type="email"
                name="Component"
                placeholder="Enter an email address..."
                shape="CustomBorderTL12"
              ></Input>
              <Button
                className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[25%]"
                shape="CustomBorderLR12"
                variant="FillLightblue300"
              >
                Send Invite
              </Button>
            </Row>
          </Column>
          <Column className="bg-light_blue_300 items-center justify-end lg:p-[49px] xl:p-[56px] 2xl:p-[64px] 3xl:p-[76px] w-[100%]">
            <Text className="font-semibold mt-[3px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-bluegray_900 w-[auto]">
              Our Student Feedbacks
            </Text>
            <Text className="font-normal lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] not-italic lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
              Dont take our words for it. Hear what others have to say
            </Text>
            <List
              className="lg:gap-[18px] xl:gap-[21px] 2xl:gap-[24px] 3xl:gap-[28px] grid grid-cols-3 min-h-[auto] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] w-[95%]"
              orientation="horizontal"
            >
              <Column className="bg-gray_101 items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius4 w-[100%]">
                <Row className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] 2xl:pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] w-[96%]">
                  <Column className="w-[68%]">
                    <Img
                      src="images/img_ellipse6.png"
                      className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius50 lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                      alt="EllipseSix"
                    />
                    <Text className="font-semibold lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                      Chidi Ogbonna
                    </Text>
                  </Column>
                  <Img
                    src="images/img_stars.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[1px] w-[32%]"
                    alt="stars"
                  />
                </Row>
                <Text className="font-normal lg:leading-[15px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_300 w-[98%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vulputate gravida ornare quam massa nec. A, ullamcorper risus
                  diam lacinia viverra placerat odio tempor. Sed vitae facilisi
                  amet, erat. Dui dapibus etiam cras placerat elementum dolor.
                </Text>
              </Column>
              <Column className="bg-gray_101 items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius4 w-[100%]">
                <Row className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] 2xl:pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] w-[96%]">
                  <Column className="w-[68%]">
                    <Img
                      src="images/img_ellipse6.png"
                      className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius50 lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                      alt="EllipseSix One"
                    />
                    <Text className="font-semibold lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                      Chidi Ogbonna
                    </Text>
                  </Column>
                  <Img
                    src="images/img_stars.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[1px] w-[32%]"
                    alt="stars One"
                  />
                </Row>
                <Text className="font-normal lg:leading-[15px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_300 w-[98%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vulputate gravida ornare quam massa nec. A, ullamcorper risus
                  diam lacinia viverra placerat odio tempor. Sed vitae facilisi
                  amet, erat. Dui dapibus etiam cras placerat elementum dolor.
                </Text>
              </Column>
              <Column className="bg-gray_101 items-center lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius4 w-[100%]">
                <Row className="lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] 2xl:pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] w-[96%]">
                  <Column className="w-[68%]">
                    <Img
                      src="images/img_ellipse6.png"
                      className="lg:h-[63px] xl:h-[72px] 2xl:h-[81px] 3xl:h-[97px] rounded-radius50 lg:w-[62px] xl:w-[71px] 2xl:w-[80px] 3xl:w-[96px]"
                      alt="EllipseSix Two"
                    />
                    <Text className="font-semibold lg:mt-[17px] xl:mt-[19px] 2xl:mt-[22px] 3xl:mt-[26px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                      Chidi Ogbonna
                    </Text>
                  </Column>
                  <Img
                    src="images/img_stars.svg"
                    className="lg:h-[12px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] mt-[1px] w-[32%]"
                    alt="stars Two"
                  />
                </Row>
                <Text className="font-normal lg:leading-[15px] xl:leading-[17px] 2xl:leading-[20px] 3xl:leading-[24px] xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] not-italic lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-bluegray_300 w-[98%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vulputate gravida ornare quam massa nec. A, ullamcorper risus
                  diam lacinia viverra placerat odio tempor. Sed vitae facilisi
                  amet, erat. Dui dapibus etiam cras placerat elementum dolor.
                </Text>
              </Column>
            </List>
          </Column>
          <Column className="bg-cyan_50 items-center lg:p-[47px] xl:p-[54px] 2xl:p-[61px] 3xl:p-[73px] w-[100%]">
            <Text className="font-semibold lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
              Frequently Asked Questions
            </Text>
            <Column className="items-center lg:mb-[32px] xl:mb-[37px] 2xl:mb-[42px] 3xl:mb-[50px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[52%]">
              <Input
                className="font-medium p-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
                wrapClassName="flex w-[100%]"
                name="FAQHOLDER"
                placeholder="asking questions"
                suffix={
                  <Img
                    src="images/img_plus.svg"
                    className="lg:w-[9px] lg:h-[10px] lg:ml-[27px] lg:mr-[7px] xl:w-[10px] xl:h-[11px] xl:ml-[31px] xl:mr-[8px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[35px] 2xl:mr-[10px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[42px] 3xl:mr-[12px] my-[auto]"
                    alt="plus"
                  />
                }
                size="xl"
                variant="OutlineGray301"
              ></Input>
              <Input
                className="font-medium p-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
                wrapClassName="2xl:mt-[24px] 3xl:mt-[28px] flex lg:mt-[18px] w-[100%] xl:mt-[21px]"
                name="FAQHOLDER One"
                placeholder="asking questions"
                suffix={
                  <Img
                    src="images/img_plus.svg"
                    className="lg:w-[9px] lg:h-[10px] lg:ml-[27px] lg:mr-[7px] xl:w-[10px] xl:h-[11px] xl:ml-[31px] xl:mr-[8px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[35px] 2xl:mr-[10px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[42px] 3xl:mr-[12px] my-[auto]"
                    alt="plus"
                  />
                }
                size="xl"
                variant="OutlineGray301"
              ></Input>
              <Input
                className="font-medium p-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
                wrapClassName="2xl:mt-[24px] 3xl:mt-[28px] flex lg:mt-[18px] w-[100%] xl:mt-[21px]"
                name="FAQHOLDER Two"
                placeholder="asking questions"
                suffix={
                  <Img
                    src="images/img_plus.svg"
                    className="lg:w-[9px] lg:h-[10px] lg:ml-[27px] lg:mr-[7px] xl:w-[10px] xl:h-[11px] xl:ml-[31px] xl:mr-[8px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[35px] 2xl:mr-[10px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[42px] 3xl:mr-[12px] my-[auto]"
                    alt="plus"
                  />
                }
                size="xl"
                variant="OutlineGray301"
              ></Input>
              <Input
                className="font-medium p-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
                wrapClassName="2xl:mt-[24px] 3xl:mt-[28px] flex lg:mt-[18px] w-[100%] xl:mt-[21px]"
                name="FAQHOLDER Three"
                placeholder="asking questions"
                suffix={
                  <Img
                    src="images/img_plus.svg"
                    className="lg:w-[9px] lg:h-[10px] lg:ml-[27px] lg:mr-[7px] xl:w-[10px] xl:h-[11px] xl:ml-[31px] xl:mr-[8px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[35px] 2xl:mr-[10px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[42px] 3xl:mr-[12px] my-[auto]"
                    alt="plus"
                  />
                }
                size="xl"
                variant="OutlineGray301"
              ></Input>
              <Input
                className="font-medium p-[0] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] placeholder:text-bluegray_900 text-bluegray_900 w-[100%]"
                wrapClassName="2xl:mt-[24px] 3xl:mt-[28px] flex lg:mt-[18px] w-[100%] xl:mt-[21px]"
                name="FAQHOLDER Four"
                placeholder="asking questions"
                suffix={
                  <Img
                    src="images/img_plus.svg"
                    className="lg:w-[9px] lg:h-[10px] lg:ml-[27px] lg:mr-[7px] xl:w-[10px] xl:h-[11px] xl:ml-[31px] xl:mr-[8px] 2xl:w-[12px] 2xl:h-[13px] 2xl:ml-[35px] 2xl:mr-[10px] 3xl:w-[14px] 3xl:h-[15px] 3xl:ml-[42px] 3xl:mr-[12px] my-[auto]"
                    alt="plus"
                  />
                }
                size="xl"
                variant="OutlineGray301"
              ></Input>
            </Column>
          </Column>
          <footer className="bg-bluegray_900 w-[100%]">
            <Row className="lg:mb-[56px] xl:mb-[64px] 2xl:mb-[72px] 3xl:mb-[86px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] mx-[auto] w-[83%]">
              <Column className="lg:pr-[10px] xl:pr-[12px] 2xl:pr-[14px] 3xl:pr-[16px] lg:pt-[10px] xl:pt-[12px] 2xl:pt-[14px] 3xl:pt-[16px] w-[37%]">
                <Img
                  src="images/img_group.svg"
                  className="lg:h-[33px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:w-[32px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                  alt="Group"
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
                    <Row
                      className="common-pointer lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[26%]"
                      onClick={handleNavigate1}
                    >
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
                    onClick={handleNavigate28}
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

export default ViewcoursesPage;
