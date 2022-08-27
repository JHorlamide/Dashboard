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

const FacilitatorPage = () => {
  const navigate = useNavigate();

  function handleNavigate9() {
    navigate("/viewcourses");
  }
  function handleNavigate10() {
    navigate("/photovidoes");
  }
  function handleNavigate19() {
    navigate("/glossary");
  }
  function handleNavigate25() {
    window.location.href = "https://twitter.com/login/";
  }

  return (
    <>
      <Column className="bg-white_A700 font-montserrat mx-[auto] lg:pb-[4px] xl:pb-[5px] 2xl:pb-[6px] 3xl:pb-[7px] w-[100%]">
        <Column className="items-center w-[100%]">
          <Stack className="lg:h-[410px] xl:h-[469px] 2xl:h-[528px] 3xl:h-[633px] w-[100%]">
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
                        onClick={handleNavigate9}
                      >
                        Courses
                      </Text>
                      <Text className="cursor-pointer font-normal hover:font-semibold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        Become a facilitator
                      </Text>
                      <Text className="cursor-pointer font-normal hover:font-semibold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                        About Us
                      </Text>
                      <Text
                        className="common-pointer cursor-pointer font-normal hover:font-semibold lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]"
                        onClick={handleNavigate10}
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
                src="images/img_cimfonilogo04_1.png"
                className="absolute lg:h-[137px] xl:h-[156px] 2xl:h-[176px] 3xl:h-[211px] left-[0] w-[19%]"
                alt="CimfoniLogoFour"
              />
            </Stack>
            <Column className="absolute bg-deep_purple_51 bottom-[0] items-center justify-end 3xl:p-[115px] lg:p-[74px] xl:p-[85px] 2xl:p-[96px] w-[100%]">
              <Text className="font-bold lg:leading-[62px] xl:leading-[71px] 2xl:leading-[80px] 3xl:leading-[96px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[46px] xl:text-[53px] 2xl:text-[60px] 3xl:text-[72px] text-center text-purple_900 w-[49%]">
                Join our team of
                <br />
                talented facilitators
              </Text>
              <Text className="font-medium lg:leading-[17px] xl:leading-[20px] 2xl:leading-[22px] 3xl:leading-[27px] lg:mt-[28px] xl:mt-[32px] 2xl:mt-[37px] 3xl:mt-[44px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center text-purple_900 w-[48%]">
                You have the knowledge and the expertise, we have the platform.{" "}
                <br />
                Join us upskill the next generation of tech talents.
              </Text>
            </Column>
          </Stack>
        </Column>
        <Text className="font-medium lg:ml-[268px] xl:ml-[306px] 2xl:ml-[345px] 3xl:ml-[414px] lg:mt-[30px] xl:mt-[34px] 2xl:mt-[39px] 3xl:mt-[46px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]">
          Fill out the form below
        </Text>
        <Column className="items-end lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] lg:px-[195px] xl:px-[223px] 2xl:px-[251px] 3xl:px-[301px] w-[100%]">
          <Row className="items-center justify-end w-[90%]">
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
        </Column>
        <Text className="font-medium lg:ml-[266px] xl:ml-[304px] 2xl:ml-[342px] 3xl:ml-[410px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
          Email
        </Text>
        <Column className="items-end lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:px-[194px] xl:px-[222px] 2xl:px-[250px] 3xl:px-[300px] w-[100%]">
          <Input
            className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_900 text-gray_900 w-[100%]"
            wrapClassName="w-[90%]"
            type="email"
            name="email One"
            placeholder="Thomaskenneth@gmail.com"
            shape="RoundedBorder8"
            size="lg"
          ></Input>
        </Column>
        <Text className="font-medium lg:ml-[266px] xl:ml-[304px] 2xl:ml-[342px] 3xl:ml-[410px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
          Linkln Profile
        </Text>
        <Column className="items-end lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:px-[193px] xl:px-[221px] 2xl:px-[249px] 3xl:px-[298px] w-[100%]">
          <Input
            className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-gray_900 text-gray_900 w-[100%]"
            wrapClassName="mr-[1px] w-[90%]"
            type="email"
            name="email Two"
            placeholder="Thomaskenneth@gmail.com"
            shape="RoundedBorder8"
            size="lg"
          ></Input>
          <Row className="items-center justify-end mr-[2px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[90%]">
            <Column className="w-[55%]">
              <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                Phone Number
              </Text>
              <Row className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] w-[77%]">
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
            </Column>
            <Column className="w-[45%]">
              <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                Area of specialization
              </Text>
              <SelectBox
                className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[100%]"
                placeholderClassName="text-gray_900"
                name="InputLight Four"
                placeholder="Media specialist"
                isSearchable={false}
                isMulti={false}
                indicator={
                  <Img
                    src="images/img_vector_bluegray_300.svg"
                    className="lg:w-[9px] lg:h-[5px] lg:mr-[17px] xl:w-[10px] xl:h-[6px] xl:mr-[19px] 2xl:w-[12px] 2xl:h-[7px] 2xl:mr-[22px] 3xl:w-[14px] 3xl:h-[8px] 3xl:mr-[26px]"
                    alt="Vector"
                  />
                }
                size="md"
              ></SelectBox>
            </Column>
          </Row>
          <Button className="font-semibold 3xl:mt-[105px] lg:mt-[68px] xl:mt-[78px] 2xl:mt-[88px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[90%]">
            Sign me up
          </Button>
          <Row className="justify-end lg:mr-[61px] xl:mr-[70px] 2xl:mr-[79px] 3xl:mr-[94px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[75%]">
            <Img
              src="images/img_checkmark.svg"
              className="lg:h-[14px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:w-[14px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
              alt="checkmark"
            />
            <Text className="font-medium lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] mt-[2px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-deep_purple_500 w-[auto]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis sit
              gravida mus enim elit egestas
            </Text>
          </Row>
        </Column>
        <Column className="items-center lg:mt-[182px] xl:mt-[209px] 2xl:mt-[235px] 3xl:mt-[282px] w-[100%]">
          <Column className="bg-bluegray_900 items-center justify-end lg:p-[49px] xl:p-[56px] 2xl:p-[64px] 3xl:p-[76px] w-[100%]">
            <Text className="font-semibold mt-[4px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-white_A700 w-[auto]">
              Join our community
            </Text>
            <Text className="font-medium lg:leading-[19px] xl:leading-[22px] 2xl:leading-[25px] 3xl:leading-[30px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center text-white_A700 w-[46%]">
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
                      onClick={handleNavigate19}
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
                    onClick={handleNavigate25}
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

export default FacilitatorPage;
