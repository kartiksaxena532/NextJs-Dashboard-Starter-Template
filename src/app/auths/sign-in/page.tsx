"use client"
import React from "react"
import Link from "next/link"
import login2 from "../../../../public/login2.svg"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { redirect } from "next/navigation"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import google from "../../../../public/google-logo-search-new-svgrepo-com.svg";
import { AuthError } from "next-auth"
import Image from "next/image";
interface LoginParams {
  authUrlParams: {
    connection_id: string;
  };
}
export default function LoginForm() {
  return (

    <div className="flex justify-center align-center h-screen">
    <Card className="mx-auto my-auto border-2 border-yellow-400 bg-slate-900">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        
        <div className="grid gap-4">
          <div className="grid gap-2">
         <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              type="email"
              placeholder="my@gmail.com"
              required
        className="text-black"
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password" className="text-black">Password</Label>
              
            </div>
            <Input name="password" type="password" placeholder="Min 8 characters*" required className="text-black"/>
          </div>
          <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot password?
              </Link>
          <Link href="/dashboard">
          <Button type="submit" className="w-full bg-yellow-500 text-black" onClick={() =>
      login({
        authUrlParams: {
            connection_id: "conn_e5f80aa5258e4685bf629b38003ee954",
            login_hint: "dave@kinde.com"
         }
      })
    }>
            Login
          </Button>
          </Link>

          <div className="flex flex-col gap-2">
        <Button variant="outline" className="w-full flex flex-row gap-4" type="submit"
       onClick={() =>
        login({
          authUrlParams: {
            connection_id: "conn_0190416530462c181140f05d71c2c9ab",
          }
        }) }>
            <Image src={google} alt="google" className="w-6 h-6"/>
            Login with Google 
          </Button>
     
    </div>

        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account yet?{" "}
          <Link href="/auths/sign-up" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
    <div className="hidden bg-muted lg:block">
        <Image
          src={login2}
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover opacity-80"
        />
      </div>
    </div>
    
    

  )
}
