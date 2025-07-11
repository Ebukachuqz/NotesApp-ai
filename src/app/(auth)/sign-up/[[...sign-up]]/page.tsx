import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignedOut, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="relative w-fit -mt-16 bg-[linear-gradient(90deg,rgba(91,91,214,1)_0%,rgba(170,153,236,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-typography-6-bold font-[number:var(--typography-6-bold-font-weight)] text-transparent text-[length:var(--typography-6-bold-font-size)] tracking-[var(--typography-6-bold-letter-spacing)] leading-[var(--typography-6-bold-line-height)] whitespace-nowrap [font-style:var(--typography-6-bold-font-style)]">
        <h2 className="text-3xl font-bold">Create your Curro account</h2>
      </div>

      <div className="relative w-[330px] font-typography-2-regular font-[number:var(--typography-2-regular-font-weight)] text-[#646464] text-[length:var(--typography-2-regular-font-size)] text-center tracking-[var(--typography-2-regular-letter-spacing)] leading-[var(--typography-2-regular-line-height)] [font-style:var(--typography-2-regular-font-style)]">
        Let&apos;s get you started, provide your information required below.
      </div>
      {/* </div > */}

      <div className="flex flex-col items-center gap-7 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <Label className="text-[#646464] text-xs tracking-[0.04px] leading-4">
              First Name
            </Label>

            <Input className="flex items-center gap-2 px-3 py-2 bg-[#fcfcfc] rounded-md border border-solid border-[#d9d9d9] text-xs" />
          </div>
          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <Label className="text-[#646464] text-xs tracking-[0.04px] leading-4">
              Last Name
            </Label>

            <Input className="flex items-center gap-2 px-3 py-2 bg-[#fcfcfc] rounded-md border border-solid border-[#d9d9d9] text-xs" />
          </div>
          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <Label className="text-[#646464] text-xs tracking-[0.04px] leading-4">
              Email address
            </Label>

            <Input className="flex items-center gap-2 px-3 py-2 bg-[#fcfcfc] rounded-md border border-solid border-[#d9d9d9] text-xs" />
          </div>
          <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
            <Label className="text-[#646464] text-xs tracking-[0.04px] leading-4">
              User Type
            </Label>

            <Input className="flex items-center gap-2 px-3 py-2 bg-[#fcfcfc] rounded-md border border-solid border-[#d9d9d9] text-xs" />
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <SignedOut>
            <SignUpButton>
              <Button className="w-full bg-[#5b5bd6] hover:bg-[#4a4ac5] text-sm font-medium">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>

          <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
            <span className="relative w-fit mt-[-1.00px] font-typography-1-regular font-[number:var(--typography-1-regular-font-weight)] text-[#646464] text-[length:var(--typography-1-regular-font-size)] tracking-[var(--typography-1-regular-letter-spacing)] leading-[var(--typography-1-regular-line-height)] whitespace-nowrap [font-style:var(--typography-1-regular-font-style)]">
              Already have an account?
            </span>

            <Link
              href={"/sign-in"}
              className="font-bold p-0 h-auto font-typography-1-medium text-[#202020] text-[length:var(--typography-1-medium-font-size)] tracking-[var(--typography-1-medium-letter-spacing)] leading-[var(--typography-1-medium-line-height)] [font-style:var(--typography-1-medium-font-style)]"
            >
              Login here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
