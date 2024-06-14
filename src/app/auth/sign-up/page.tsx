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
export  default function SignupForm() {
  return (
    <div className="flex justify-center align-center h-screen">
    <Card className="mx-auto my-28 max-w-sm  border-2 border-yellow-400">
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
          <Button type="submit" className="w-full">
            Create an account
          </Button>
          <Button variant="outline" className="w-full">
            Sign up with GitHub
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="underline">
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
