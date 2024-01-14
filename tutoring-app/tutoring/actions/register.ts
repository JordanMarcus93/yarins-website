"use server";

import * as z from "zod";
import bcrypt from "bcrypt";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const Register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalidated Field" };
  }

  // Encrpyting password
  const { email, password, name } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  // Confirm if user already exists
  const existingUser = await getUserByEmail(email);


  if (existingUser) {
    return { error: "This email already exists" };
  }

  // Create user with encrypted password
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // TODO: Send confirmation token email

  // Success message
  return { success: "User created!" };
};
