import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import type { Provider } from "next-auth/providers"
import { saltAndHashPassword } from "./utils/password"

const providers: Provider[] = [
  GitHub,
  Google,
  Credentials({
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
      email: {},
      password: {},
    },
    authorize: async (credentials) => {
      let user = null

      // logic to salt and hash password
      const pwHash = saltAndHashPassword(credentials.password)

      // logic to verify if user exists
      user = await getUserFromDb(credentials.email, pwHash)

      if (!user) {
        // No user found, so this is their first attempt to login
        // meaning this is also the place you could do registration
        throw new Error("User not found.")
      }

      // return user object with the their profile data
      return user
    },
  }),
]
 
export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider()
    return { id: providerData.id, name: providerData.name }
  } else {
    return { id: provider.id, name: provider.name }
  }
})
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  pages: {
    signIn: "/sign-in",
  },
})

function getUserFromDb(email: unknown, pwHash: any): any {
  throw new Error("Function not implemented.")
}
