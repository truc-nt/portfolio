<?php
use PHPMailer\PHPMailer\PHPMailer;
require_once __DIR__ . '/../vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        $myEmailAddress = getenv('EMAIL_ADDRESS');
        $myEmailPassword = getenv('EMAIL_PASSWORD');
        $workEmailAddress = getenv('WORK_EMAIL_ADDRESS');

        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = $myEmailAddress;
        $mail->Password = $myEmailPassword;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->addReplyTo($email, $name);
        $mail->addAddress($workEmailAddress);

        $mail->isHTML(true);
        $mail->Subject = empty($subject) ? 'Message from portfolio' : $subject;
        $mail->Body    = $message;

        $mail->send();
        echo json_encode(['success' => true]);
    } catch (Throwable $t) {
        echo json_encode(['success' => false, 'error' => $t->getMessage()]);
    }
}