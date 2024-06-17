import Link from "next/link"
import login from "../../../../public/login.svg"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image";
import google from "../../../../public/google-logo-search-new-svgrepo-com.svg";

import { signIn } from "../../auth"

export  default function SignupForm() {
  return (
  
    <div className="flex justify-center align-center h-screen">
    <Card className="mx-auto my-28 max-w-sm  border-2 border-yellow-400  bg-slate-900">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="first-name" placeholder="Kartik" required className="text-black"/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="last-name" placeholder="Saxena" required className="text-black"/>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="meri_mail@example.com"
              required
              className="text-black"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" className="text-black"/>
          </div>
          <Button  className="w-full  bg-yellow-500 text-black">
            Create an account
          </Button>
          <form
    action={async () => {
      "use server"
      await signIn("google")
    }}
  ><Button variant="outline" className="w-full flex flex-row gap-4 ">
  <Image src={google} alt="google" className="w-6 h-6"/>
  Sign Up with Google
</Button>

          </form>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/auths/sign-in" className="underline">
            Sign in
          </Link>
        </div>
      </CardContent>
    </Card>
    <div className="hidden bg-muted lg:block">
        <Image
          src={login}
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover opacity-80"
        />
      </div>
      </div>
      
  )
}
