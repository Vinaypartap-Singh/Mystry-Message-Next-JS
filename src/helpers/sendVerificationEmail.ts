import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse> {
    try {

        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Mystry Messagae | Verification Code',
            react: VerificationEmail({ username, otp: verifyCode }),
        });




        return { success: true, message: "Verification Email Send Successfully" }
    } catch (error) {
        console.log("Error sending verification email", error)
        return { success: false, message: "Failed to Send verification email" }
    }
}