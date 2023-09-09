import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
        require('dotenv').config()

        let body = await request.formData();
        let email = body.get('email');

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
          subject: `Newsletter Request From ${email}`,
          text: "Hello PyCon Uganda, kindly add me: " + email,
          html: `<p>Hello PyCon Uganda, kindly add me: 
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
