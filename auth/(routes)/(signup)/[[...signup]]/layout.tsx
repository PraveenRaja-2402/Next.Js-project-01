import { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import React from "react";

export const metadata: Metadata = {
  title: 'Sign up | ShortyURL',
  description: 'Incoder web',
}

const SignUpLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NextTopLoader color="000" showSpinner={false} /> 
      {children} 
    </>
  );
};

export default SignUpLayout;
