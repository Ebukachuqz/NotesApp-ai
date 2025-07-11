import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@radix-ui/react-label";
import React from "react";

export const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
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
          <div className="flex flex-col w-full h-full justify-center items-center gap-[26px] p-6">
            <div className="inline-flex flex-col items-center gap-1.5 relative flex-[0_0_auto]">
              {children}
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
