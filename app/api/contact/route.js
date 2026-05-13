import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    console.log('Contact Form Submission:', {
      to: 'hello@killingtongetaway.com',
      from: email,
      name,
      subject,
      message,
    });

    // NOTE: This is a placeholder for your email service integration.
    // To send actual emails, you would integrate an API like Resend, SendGrid, or AWS SES here.
    
    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ success: false, error: 'Failed to send message' }, { status: 500 });
  }
}
