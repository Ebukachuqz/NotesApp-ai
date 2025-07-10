import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React from "react";

export const AuthLayout = () => {
  const footerLinks = [
    { text: "Privacy & Terms", href: "#" },
    { text: "Contact us", href: "#" },
    { text: "Support", href: "#" },
  ];

  return (
    <div className="flex h-screen w-full">
      <div className="bg-[#f9f9fb] overflow-hidden flex flow-row w-full h-lvh relative">
        {/* Right side - Login form */}
        <div className="absolute w-1/2 h-[900px] top-0 left-1/2 bg-white">
          <div className="flex flex-col w-[380px] items-center gap-[26px] p-6 absolute top-[258px] left-[169px]">
            <div className="inline-flex flex-col items-center gap-1.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] bg-[linear-gradient(90deg,rgba(91,91,214,1)_0%,rgba(170,153,236,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-typography-6-bold font-[number:var(--typography-6-bold-font-weight)] text-transparent text-[length:var(--typography-6-bold-font-size)] tracking-[var(--typography-6-bold-letter-spacing)] leading-[var(--typography-6-bold-line-height)] whitespace-nowrap [font-style:var(--typography-6-bold-font-style)]">
                <h2 className="text-3xl font-bold">Sign in to your account</h2>
              </div>

              <div className="relative w-[330px] font-typography-2-regular font-[number:var(--typography-2-regular-font-weight)] text-[#646464] text-[length:var(--typography-2-regular-font-size)] text-center tracking-[var(--typography-2-regular-letter-spacing)] leading-[var(--typography-2-regular-line-height)] [font-style:var(--typography-2-regular-font-style)]">
                Enter your email below to access your personalized user
                dashboard
              </div>
            </div>

            <div className="flex flex-col items-center gap-7 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <Label className="text-[#646464] text-xs tracking-[0.04px] leading-4">
                    Email address
                  </Label>

                  <Input
                    className="flex items-center gap-2 px-3 py-2 bg-[#fcfcfc] rounded-md border border-solid border-[#d9d9d9] text-xs"
                    defaultValue="Dangelo.Robel@yahoo.com"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <Button className="w-full bg-[#5b5bd6] hover:bg-[#4a4ac5] text-sm font-medium">
                  Sign in
                </Button>

                <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-typography-1-regular font-[number:var(--typography-1-regular-font-weight)] text-[#646464] text-[length:var(--typography-1-regular-font-size)] tracking-[var(--typography-1-regular-letter-spacing)] leading-[var(--typography-1-regular-line-height)] whitespace-nowrap [font-style:var(--typography-1-regular-font-style)]">
                    New here?
                  </span>

                  <Button
                    variant="link"
                    className="p-0 h-auto font-typography-1-medium font-[number:var(--typography-1-medium-font-weight)] text-[#202020] text-[length:var(--typography-1-medium-font-size)] tracking-[var(--typography-1-medium-letter-spacing)] leading-[var(--typography-1-medium-line-height)] [font-style:var(--typography-1-medium-font-style)]"
                  >
                    Create an account
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex items-start gap-6 absolute top-[846px] left-[237px]">
            {footerLinks.map((link, index) => (
              <Button
                key={index}
                variant="link"
                className="p-0 h-auto font-typography-1-regular font-[number:var(--typography-1-regular-font-weight)] text-[#838383] text-[length:var(--typography-1-regular-font-size)] tracking-[var(--typography-1-regular-letter-spacing)] leading-[var(--typography-1-regular-line-height)] [font-style:var(--typography-1-regular-font-style)]"
              >
                {link.text}
              </Button>
            ))}
          </div>
        </div>

        {/* Left side - Branding and illustration */}
        <div className="absolute w-1/2 h-full top-0 left-0 bg-[#e6e7ff] overflow-hidden">
          <div className="absolute w-[439px] h-[254px] top-[130px] left-[132px]">
            <div className="inline-flex flex-col items-start gap-[29px] absolute top-[97px] left-2">
              <h1 className="relative font-bold text-4xl">
                Smarter <span className="text-[#5b5bd6]">Investment</span>{" "}
                Decisions
              </h1>

              <p className="relative w-[405px] font-typography-3-regular font-[number:var(--typography-3-regular-font-weight)] text-[#646464] text-[length:var(--typography-3-regular-font-size)] tracking-[var(--typography-3-regular-letter-spacing)] leading-[var(--typography-3-regular-line-height)] [font-style:var(--typography-3-regular-font-style)]">
                Automate, Innovate, and Elevate Your Investment Game&#34;
              </p>
            </div>

            <div className="inline-flex items-center gap-[8.96px] absolute top-0 left-0">
              <div className="relative w-[53.79px] h-[53.79px]">
                <div className="relative w-[54px] h-[54px]">
                  <div className="absolute w-[41px] h-[41px] top-1.5 left-1.5 rotate-[-22deg]">
                    <div className="top-0 left-3.5 absolute w-3.5 h-3.5 bg-[#e8e8e8] rounded-[6.89px]" />
                    <div className="top-3.5 left-0 absolute w-3.5 h-3.5 bg-[#e8e8e8] rounded-[6.89px]" />
                    <div className="top-3.5 left-7 absolute w-3.5 h-3.5 bg-[#e8e8e8] rounded-[6.89px]" />
                    <div className="top-7 left-3.5 absolute w-3.5 h-3.5 bg-[#e8e8e8] rounded-[6.89px]" />
                  </div>

                  <div className="absolute w-[41px] h-[41px] top-1.5 left-1.5 rotate-[-11.50deg]">
                    <div className="bg-[#cecece] absolute w-3.5 h-3.5 top-0 left-3.5 rounded-[6.89px]" />
                    <div className="bg-[#cecece] absolute w-3.5 h-3.5 top-3.5 left-0 rounded-[6.89px]" />
                    <div className="bg-[#cecece] absolute w-3.5 h-3.5 top-3.5 left-7 rounded-[6.89px]" />
                    <div className="bg-[#cecece] absolute w-3.5 h-3.5 top-7 left-3.5 rounded-[6.89px]" />
                  </div>

                  <div className="absolute w-[41px] h-[41px] top-1.5 left-1.5">
                    <div className="bg-[#202020] absolute w-3.5 h-3.5 top-0 left-3.5 rounded-[6.89px]" />
                    <div className="bg-[#202020] absolute w-3.5 h-3.5 top-3.5 left-0 rounded-[6.89px]" />
                    <div className="bg-[#202020] absolute w-3.5 h-3.5 top-3.5 left-7 rounded-[6.89px]" />
                    <div className="bg-[#202020] absolute w-3.5 h-3.5 top-7 left-3.5 rounded-[6.89px]" />
                  </div>
                </div>
              </div>

              <div className="relative w-fit [font-family:'Geist',Helvetica] font-medium text-[#202020] text-[30.7px] tracking-[0] leading-[35.9px] whitespace-nowrap">
                Cuuro
              </div>
            </div>
          </div>

          <img
            className="absolute w-full h-full top-[300px] left-[134px] object-contain"
            alt="Investment dashboard interface"
            src="/app-interface.png"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
