//import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
// TODO : domain provider i need to set from resend webswite after i get the domain for myself
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
export async function POST() {
    const {body} = await req.json();
    const {email, subject, message} = body;
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ['rohanbohra8@gmail.com'],
      subject: 'Hello world',
      react: (
        <>
        <h1>{subject}</h1>
            <p>
                Thankyou for contactig me.
            </p>
        <p>{message}</p>
        </>
      ),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}