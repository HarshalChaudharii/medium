import z from 'zod'

export const signupInput = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(3)
})

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(3)
})

export const createBlogInput = z.object({
    title:z.string().optional(),
    content:z.string().optional()
})


export const updateBlogInput = z.object({
    title:z.string().optional(),
    content:z.string().optional(),
    id: z.string()
})


// type inference - this will use by frontend
export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;