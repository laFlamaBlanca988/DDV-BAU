<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

// Check if form fields are set
if (isset($_POST['name'], $_POST['email'], $_POST['subject'], $_POST['message'])) {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.titan.email';
        $mail->SMTPAuth = true;
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;
        $mail->Username = 'info@ddv-bau.de';
        // $mail->Password = 'cncmill2023!';
        $mail->setFrom('info@ddv-bau.de');
        $mail->addAddress('info@ddv-bau.de');
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission: ' . $name;

        // Email body
        $emailMessage = "
            <html>
                <body>
                    <h5>$name</h5>
                    <p><b>Email:</b> $email</p>
                    <p><b>Subject:</b> $subject</p>
                    <p><b>Message:</b> $message</p>
                </body>
            </html>
        ";

        $mail->Body = $emailMessage;
        $mail->send();

        http_response_code(200);
        echo "<h5 style='color: #7dbf48;'>Your message has been successfully sent!</h5>";
    } catch (Exception $e) {
        http_response_code(500);
        echo "<h5 style='color: #bf4848;'>Your message could not be sent. Please try again later.</h5>";
    }
} else {
    http_response_code(400);
    echo "<h5 style='color: #e52f2f;'>Error! Invalid input. Please check your input and try again.</h5>";
}
?>
