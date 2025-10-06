import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, interest, message }: ContactFormData = await req.json();

    console.log("Processing contact form submission:", { name, email, interest });

    // Send notification email to InnoFemme
    const notificationResponse = await resend.emails.send({
      from: "InnoFemme Contact Form <contact@innofemme.org>",
      to: ["info@innofemme.org"],
      replyTo: email,
      subject: `New Contact Form Submission: ${interest}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF6B6B;">New Contact Form Submission</h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Interest:</strong> ${interest}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #FF6B6B; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            This email was sent from the InnoFemme contact form at ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    if (notificationResponse.error) {
      console.error("Failed to send notification email:", notificationResponse.error);
      throw new Error(`Email delivery failed: ${notificationResponse.error.message}. Please verify your domain at resend.com/domains`);
    }

    console.log("Notification email sent successfully:", notificationResponse.data);

    // Send confirmation email to the user
    const confirmationResponse = await resend.emails.send({
      from: "InnoFemme <hello@innofemme.org>",
      to: [email],
      subject: "We received your message - InnoFemme",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #FF6B6B, #FFB088); padding: 40px 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0;">Thank You, ${name}!</h1>
          </div>
          
          <div style="padding: 30px 20px; background-color: #fff;">
            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              We have received your message and appreciate you reaching out to InnoFemme.
            </p>
            
            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              Our team will review your inquiry about <strong>${interest}</strong> and get back to you as soon as possible.
            </p>
            
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #666; font-size: 14px;">
                <strong>Your message:</strong>
              </p>
              <p style="color: #333; margin-top: 10px; white-space: pre-wrap;">${message}</p>
            </div>
            
            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              In the meantime, feel free to explore our programs and initiatives on our website.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://innofemme.org" style="background: linear-gradient(135deg, #FF6B6B, #FFB088); color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; display: inline-block; font-weight: bold;">
                Visit Our Website
              </a>
            </div>
          </div>
          
          <div style="background-color: #f9f9f9; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
            <p style="color: #666; font-size: 12px; margin: 0;">
              Centering African Women at the Heart of Innovation
            </p>
            <p style="color: #999; font-size: 11px; margin: 10px 0 0 0;">
              © ${new Date().getFullYear()} InnoFemme. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    if (confirmationResponse.error) {
      console.error("Failed to send confirmation email:", confirmationResponse.error);
      // Don't throw here - notification email is more important
    } else {
      console.log("Confirmation email sent successfully:", confirmationResponse.data);
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Email sent successfully" 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
