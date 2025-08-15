import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
export async function POST(request) {
     const { name, email,phone, message } = await request.json();
    
console.log(name,email,phone,message);


    const transporter = nodemailer.createTransport({
        service: "gmail", // or 'smtp.yourprovider.com'
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });



    try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New message from ${name} `,
            text: `${message} Contact: ${phone} Email:${email}`,
        });

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
    }

   
}