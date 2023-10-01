// the route is /api/auth/login
import { NextRequest, NextResponse } from 'next/server';
import { loginFormSchema } from '@/app/lib/validations/loginValidation';

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

export async function GET(request: NextRequest) {
  return new NextResponse('this is a get request');
}
