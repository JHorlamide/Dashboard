import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Button, Img, Text, Input } from "components";

const DesktopThreePage = () => {
  const navigate = useNavigate();

  function handleNavigate6() {
    navigate("/viewcourses");
  }

  return (
    <>
      <Column className="bg-white_A700 font-montserrat mx-[auto] w-[100%]">
        <Row className="w-[91%]">
          <Column className="bg-cyan_50 3xl:p-[103px] lg:p-[66px] xl:p-[76px] 2xl:p-[86px] w-[55%]">
            <Button
              className="common-pointer font-semibold lg:ml-[29px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[16%]"
              onClick={handleNavigate6}
              variant="FillBluegray300"
            >
              Back
            </Button>
            <Img
              src="images/img_cimfonilogo01.png"
              className="lg:h-[48px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[64px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] w-[11%]"
              alt="CimfoniLogoOne"
            />
            <Text className="font-bold lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-purple_900 w-[auto]">
              Software Development
            </Text>
            <Text className="font-normal lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[19px] 3xl:mt-[22px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-purple_900 w-[auto]">
              NGN 250,000.00
            </Text>
            <Row className="items-center lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[55%]">
              <Text className="font-medium mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-purple_900 w-[auto]">
                Duration 10 weeks
              </Text>
              <Text className="font-medium lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-purple_900 w-[auto]">
                10 class mates
              </Text>
            </Row>
            <Row className="items-center lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[45px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[70px] w-[53%]">
              <Img
                src="images/img_checkmark_32X32.svg"
                className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                alt="checkmark"
              />
              <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-purple_900 w-[auto]">
                Certificate Course.
              </Text>
            </Row>
            <Row className="items-center lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] w-[59%]">
              <Img
                src="images/img_checkmark_32X32.svg"
                className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                alt="checkmark One"
              />
              <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-purple_900 w-[auto]">
                Master Collaboration.
              </Text>
            </Row>
            <Row className="items-center lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] w-[45%]">
              <Img
                src="images/img_checkmark_32X32.svg"
                className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                alt="checkmark Two"
              />
              <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-purple_900 w-[auto]">
                Build Portfolio.
              </Text>
            </Row>
            <Row className="items-center lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] w-[53%]">
              <Img
                src="images/img_checkmark_32X32.svg"
                className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                alt="checkmark Three"
              />
              <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] 2xl:ml-[28px] 3xl:ml-[33px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-purple_900 w-[auto]">
                Learn Git & Github.
              </Text>
            </Row>
            <Row className="justify-end lg:mb-[540px] xl:mb-[618px] 2xl:mb-[695px] 3xl:mb-[834px] ml-[auto] lg:mt-[56px] xl:mt-[64px] 2xl:mt-[72px] 3xl:mt-[86px] w-[93%]">
              <Img
                src="images/img_checkmark_32X32.svg"
                className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] lg:w-[24px] xl:w-[28px] 2xl:w-[32px] 3xl:w-[38px]"
                alt="checkmark Four"
              />
              <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] mt-[4px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-purple_900 w-[auto]">
                Free Cimfoni Tshirt after registration
              </Text>
            </Row>
          </Column>
          <Column className="xl:ml-[101px] 2xl:ml-[114px] 3xl:ml-[136px] lg:ml-[88px] lg:mt-[203px] xl:mt-[232px] 2xl:mt-[261px] 3xl:mt-[313px] w-[37%]">
            <Img
              src="images/img_cimfonilogo01.png"
              className="lg:h-[48px] xl:h-[55px] 2xl:h-[62px] 3xl:h-[74px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[12%]"
              alt="CimfoniLogoOne One"
            />
            <Column className="lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[64%]">
              <Text className="font-bold lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-purple_900 w-[auto]">
                Join the class now
              </Text>
              <Text className="font-medium ml-[1px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-purple_900 w-[auto]">
                Enter your details below.
              </Text>
            </Column>
            <Column className="lg:mt-[59px] xl:mt-[68px] 2xl:mt-[77px] 3xl:mt-[92px] w-[100%]">
              <Text className="font-medium lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-purple_900 w-[auto]">
                Full name
              </Text>
              <Input
                className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
                wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[11px] w-[100%] xl:mt-[13px]"
                name="Component"
                placeholder="Nzenwa Chidozie"
              ></Input>
              <Text className="font-medium lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-purple_900 w-[auto]">
                Email address
              </Text>
              <Input
                className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
                wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[11px] w-[100%] xl:mt-[13px]"
                type="email"
                name="email"
                placeholder="dozie900@gmail.com"
              ></Input>
              <Text className="font-medium lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-purple_900 w-[auto]">
                Phone number
              </Text>
              <Input
                className="font-normal not-italic p-[0] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] placeholder:text-bluegray_300 text-bluegray_300 w-[100%]"
                wrapClassName="2xl:mt-[15px] 3xl:mt-[18px] lg:mt-[11px] w-[100%] xl:mt-[13px]"
                type="number"
                name="Component One"
                placeholder="081033457768"
              ></Input>
              <Button className="font-semibold lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]">
                Proceed to payment
              </Button>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default DesktopThreePage;
