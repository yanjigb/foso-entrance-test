import { z } from 'zod'

export const requiredStringSchema = z.string().trim().min(1, 'required')
