import React from "react";

import { useNavigate } from "react-router-dom";
import {
  Column,
  Stack,
  Row,
  Text,
  Button,
  Img,
  Input,
  SelectBox,
} from "components";

const StartaprojectPage = () => {
  const navigate = useNavigate();

  function handleNavigate3() {
    navigate("/facilitator");
  }
  function handleNavigate4() {
    navigate("/photovidoes");
  }
  function handleNavigate5() {
    navigate("/glossary");
  }
  function handleNavigate14() {
    navigate("/viewcourses");
  }
  function handleNavigate27() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <Column className="bg-white_A700 font-montserrat items-center mx-[auto] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] w-[100%]">
        <Stack className="lg:h-[1417px] xl:h-[1620px] 2xl:h-[1823px] 3xl:h-[2187px] w-[100%]">
          <Stack className="absolute bg-white_A700 lg:h-[137px] xl:h-[156px] 2xl:h-[176px] 3xl:h-[211px] inset-x-[0] mx-[auto] top-[0] w-[85%]">
            <div className="absolute overflow-x-auto top-[0] w-[100%]">
              <Stack className="xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] w-[100%]">
                <div className="absolute bg-white_A700 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[94px] w-[100%]"></div>
                <Row className="absolute h-[max-content] inset-y-[0] items-center my-[auto] right-[0] w-[75%]">
                  <Text className="font-semibold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    Home
                  </Text>
                  <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    Services
                  </Text>
                  <Text
                    className="common-pointer font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                    onClick={handleNavigate14}
                  >
                    Courses
                  </Text>
                  <Text
                    className="common-pointer font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                    onClick={handleNavigate3}
                  >
                    Become a facilitator
                  </Text>
                  <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                    About Us
                  </Text>
                  <Text
                    className="common-pointer font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                    onClick={handleNavigate4}
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
            <Img
              src="images/img_cimfonilogo04_3.png"
              className="absolute lg:h-[137px] xl:h-[156px] 2xl:h-[176px] 3xl:h-[211px] left-[0] w-[19%]"
              alt="CimfoniLogoFour"
            />
          </Stack>
          <Column className="absolute bg-white_A701 bottom-[0] items-center justify-end 3xl:p-[105px] lg:p-[68px] xl:p-[78px] 2xl:p-[88px] w-[100%]">
            <Text className="font-bold mt-[1px] lg:text-[46px] xl:text-[53px] 2xl:text-[60px] 3xl:text-[72px] text-bluegray_900 w-[auto]">
              Get in touch with us?
            </Text>
            <Column className="lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[67%]">
              <Text className="font-medium ml-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-bluegray_900 w-[auto]">
                Have an idea? Fill the details in the below form and we’ll get
                in touch with you at the earliest.
              </Text>
              <Text className="font-medium lg:ml-[115px] xl:ml-[131px] 2xl:ml-[148px] 3xl:ml-[177px] xl:mt-[104px] 2xl:mt-[118px] 3xl:mt-[141px] lg:mt-[91px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]">
                Lets translate your idea into reality
              </Text>
              <Text className="font-semibold lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                Personal Details
              </Text>
              <Row className="items-center justify-evenly lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[100%]">
                <Column className="w-[55%]">
                  <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    First Name
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                    wrapClassName="2xl:mt-[20px] 3xl:mt-[24px] lg:mt-[15px] w-[83%] xl:mt-[17px]"
                    name="InputLight"
                    placeholder="Thomas kenneth"
                    shape="RoundedBorder8"
                  ></Input>
                </Column>
                <Column className="w-[45%]">
                  <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                    Last Name
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                    wrapClassName="2xl:mt-[19px] 3xl:mt-[22px] lg:mt-[14px] w-[100%] xl:mt-[16px]"
                    name="InputLight One"
                    placeholder="Thomas kenneth"
                    shape="RoundedBorder8"
                  ></Input>
                </Column>
              </Row>
              <Text className="font-medium ml-[1px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                Email
              </Text>
              <Input
                className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                wrapClassName="2xl:mt-[20px] 3xl:mt-[24px] lg:mt-[15px] w-[100%] xl:mt-[17px]"
                type="email"
                name="email One"
                placeholder="Thomaskenneth@gmail.com"
                shape="RoundedBorder8"
                size="lg"
              ></Input>
              <Text className="font-medium ml-[1px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                Phone Number
              </Text>
              <Row className="items-center ml-[1px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[42%]">
                <SelectBox
                  className="font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-green_900 w-[23%]"
                  placeholderClassName="text-green_900"
                  name="InputLight Two"
                  placeholder="🇳🇬"
                  isSearchable={false}
                  isMulti={false}
                ></SelectBox>
                <Input
                  className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_900 text-gray_900 w-[100%]"
                  wrapClassName="2xl:ml-[8px] 3xl:ml-[9px] lg:ml-[6px] w-[75%] xl:ml-[7px]"
                  type="number"
                  name="InputLight Three"
                  placeholder="081033897568"
                  shape="RoundedBorder8"
                ></Input>
              </Row>
              <Text className="font-semibold lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 w-[auto]">
                Project Details
              </Text>
              <Text className="font-medium lg:leading-[18px] xl:leading-[21px] 2xl:leading-[24px] 3xl:leading-[28px] ml-[1px] lg:mt-[35px] xl:mt-[40px] 2xl:mt-[46px] 3xl:mt-[55px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[98%]">
                Tell us about your project. Give us a short brief so that we can
                understand what you are looking for and what your product is all
                about
              </Text>
              <Column className="bg-gray_50 border-2 border-gray_300 border-solid lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius8 w-[100%]">
                <Text className="font-normal lg:mb-[164px] xl:mb-[187px] 2xl:mb-[211px] 3xl:mb-[253px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_300 w-[auto]">
                  start typing
                </Text>
              </Column>
              <Text className="font-medium ml-[1px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                Share Links to project files you’d like to share, if any
              </Text>
              <Input
                className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
                wrapClassName="2xl:mt-[16px] 3xl:mt-[19px] lg:mt-[12px] w-[100%] xl:mt-[14px]"
                name="InputLight Four"
                placeholder="Enter link"
                shape="RoundedBorder8"
                size="md"
              ></Input>
              <Button className="font-semibold lg:mt-[49px] xl:mt-[56px] 2xl:mt-[64px] 3xl:mt-[76px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]">
                Submit Application
              </Button>
              <Row className="lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[83%]">
                <Img
                  src="images/img_checkmark.svg"
                  className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                  alt="checkmark"
                />
                <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] mt-[2px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_purple_500 w-[auto]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  sit gravida mus enim elit egestas
                </Text>
              </Row>
            </Column>
          </Column>
        </Stack>
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
                    onClick={handleNavigate5}
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
                  <Row className="justify-between lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[99%]">
                    <Text className="font-normal not-italic lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[15px] text-gray_51 w-[auto]">
                      Terms & Conditions
                    </Text>
                    <Img
                      src="images/img_vector_gray_51.svg"
                      className="xl:h-[4px] lg:h-[4px] 3xl:h-[5px] 2xl:h-[5px] mt-[4px] w-[6%]"
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
                  onClick={handleNavigate27}
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
    </>
  );
};

export default StartaprojectPage;
