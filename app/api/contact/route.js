import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
        require('dotenv').config()

        let body = await request.formData();
        let visitorname = body.get('visitorname');
        let email = body.get('email');
        let message = body.get('message');

        const transporter = nodemailer.createTransport({
          port: 465,
          host: "smtp.gmail.com",
          auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
          },
          secure: true,
        })
        const mailData = {
          from: email,
          to: 'misterjulius17@gmail.com',
          subject: `Message From ${visitorname}`,
          text: message + " | Sent from: " + email,
          html: `<div>${message}</div><p>Sent from:
          ${email}</p>`
        }
        transporter.sendMail(mailData, function (err, info) {
          if(err)
            console.log(err)
          else
            console.log(info)
        })
        return NextResponse.json({message: 'all good'})
      }
