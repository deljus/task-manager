import { auth } from '@/shared/lib/auth'
import { User } from '../model/types'

export async function getCurrentUserServer(): Promise<User | undefined> {
    const session = await auth();

    return session?.user
}