"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "@/components/common/header";
// import { SocialButton } from "@/components/common/social-button"
// import { BackButton } from "@/components/common/back-button"

interface FormWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const FormWrapper = ({
  children,
  headerLabel,
  // backButtonLabel,
  // backButtonHref,
  showSocial,
}: FormWrapperProps) => {
  return (
    <Card className="w-full h-full shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && <CardFooter>{/* <SocialButton /> */}</CardFooter>}
      <CardFooter>
        {/* <BackButton
          label={backButtonLabel}
          href={backButtonHref}
        /> */}
      </CardFooter>
    </Card>
  );
};
