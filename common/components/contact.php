<?php
function email(){


    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)||empty($name)||!$message||!preg_match('/^[a-zA-Z\s]+$/', $name)) {
        return "red";
    }

    $to = "info@nowotch.net";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\n\n$message";

    if (mail($to, $subject, $body)) {
      return "green";
    } else {
      return "yellow";
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
$color=email();


}
/*
// Get the browser's accepted languages
$accepted_languages = $_SERVER['HTTP_ACCEPT_LANGUAGE'];

// Split the accepted languages into an array
$accepted_languages_array = explode(',', $accepted_languages);

// Get the first language from the array (usually the preferred language)
$browser_language = strtolower(substr($accepted_languages_array[0], 0, 2));

// Output the detected browser language
echo "Browser language: " . $browser_language;*/

?>

<div class="contact" id="contact">
              <img src="<?php echo img_path; ?>balll.png" class="ball" alt="">
              <img src="<?php echo img_path; ?>Mask Group 3.png" class="contact-corner-shadow" alt="">
             
                  <div class="contact-glass-box">
                    <div class="contact-colum1">
                      <h1>contactez-nous</h1>
                      <p>Votre satisfaction est notre priorité, alors n'hésitez pas à nous contacter 
                        pour tout ce dont vous avez besoin. Nous sommes impatients de vous entendre ! </p>
    
                    </div>
                    <div class="contact-colum2">
                      <form action=""
                      method="POST">
                        <input class="reveal contact-r <?php echo $color; ?>" type="text" id="name" name="name" placeholder="Votre nom :" >
                        <input class="reveal contact-r <?php echo $color; ?>" type="email" id="email" name="email" placeholder="Votre email  :" >
                        <textarea class="reveal contact-r <?php echo $color; ?>" rows="6" placeholder="Laissez-nous un message  :" id="message" name="message" ></textarea>
                        <button class="btn reveal contact-r <?php echo $color; ?>" type="submit">submit</button>
                    </form>
                    </div>
                  </div>
                </div>