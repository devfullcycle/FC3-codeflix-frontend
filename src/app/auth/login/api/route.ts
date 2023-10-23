// the route is /api/auth/login
import { loginFormSchema } from '@/app/lib/validations/LoginValidation';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = loginFormSchema.parse(await request.json());
    console.log('email: ' + email, 'password: ' + password);
    return new NextResponse('It works');
  } catch (err: any) {
    console.log(err.message);
    // Return error message as response json
    return new NextResponse(err.message, { status: 400 });
  }
}
