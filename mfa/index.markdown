---
layout: page
title:  "Multi-Factor Authentication"
---

Multi-Factor Authentication adds an extra layer of protection on top of your username and password; helping to further secure your account, and with it, your watchlist and personal information. With MFA enabled, when you login to Stockflare, you will be prompted for your username and password (the first factor – what you know), then you will have to enter a valid MFA authentication token from your virtual MFA device (the second factor – what you have).

Once you have successfully logged in, you continue to use Stockflare normally.

You can enable MFA for your Stockflare account from the [User Settings](https://stockflare.com/settings) page, using any compatible smartphone or virtual MFA device.

__Stockflare will never charge for the usage of Multi-Factor Authentication.__

<ul class="questions block">
  <li><h4>FAQ</h4></li>
  <li><a href="#what-virtual-mfa-applications-are-supported-with-stockflare">What virtual MFA applications are supported with Stockflare?</a></li>
  <li><a href="#what-is-multi-factor-authentication">What is Multi-Factor Authentication (MFA)?</a></li>
  <li><a href="#how-does-mfa-work">How does MFA Work?</a></li>
  <li><a href="#is-there-a-fee-associated-with-using-mfa">Is there a fee associated with using MFA?</a></li>
  <li><a href="#what-is-a-virtual-mfa-device">What is a virtual MFA device?</a></li>
  <li><a href="#does-stockflare-support-physical-mfa-devices">Does Stockflare support physical MFA devices?</a></li>
  <li><a href="#what-are-the-differences">What are the differences between a virtual MFA device and physical MFA devices?</a></li>
  <li><a href="#what-is-a-qr-code">What is a QR code?</a></li>
  <li><a href="#how-should-i-handle">How should I handle and distribute the seed material for virtual MFA devices?</a></li>
  <li><a href="#where-do-i-enable-mfa">Where do I enable MFA?</a></li>
  <li><a href="#what-information-will-i-need">What information will I need to activate my authentication device?</a></li>
  <li><a href="#if-i-enable-mfa">If I enable MFA for my Stockflare account, do I always need to use an authentication code to sign in?</a></li>
  <li><a href="#can-i-use-a-given-authentication">Can I use a given authentication code more than once?</a></li>
  <li><a href="#how-do-i-disable-mfa-for-my-stockflare-account">How do I disable MFA for my Stockflare account?</a></li>
  <li><a href="#i-accidentally-disabled-mfa">I accidentally disabled MFA, and now my virtual device is generating invalid codes?</a></li>
  <li><a href="#i-lost-my-virtual-mfa-device">I lost my Virtual MFA Device</a></li>
</ul>

---

<a class="faq" name="what-virtual-mfa-applications-are-supported-with-stockflare"></a>

### What virtual MFA applications are supported with Stockflare?
Applications that generate [TOTP](http://tools.ietf.org/html/rfc6238) compliant authentication codes, such as the Google Authenticator application can be used with Stockflare MFA. We support provisioning virtual MFA devices by scanning a QR code with the devices camera.

| Device        | Application |
|---------------|-------------|
| Android       | [Google Authenticator](https://support.google.com/accounts/answer/1066447?hl=en) |
| iPhone        | [Google Authenticator](http://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8) |
| Windows Phone | [Authenticator](http://www.windowsphone.com/en-us/store/app/authenticator/e7994dbc-2336-4950-91ba-ca22d653759b) |
| Blackberry    | [Google Authenticator](Google Authenticator) |

---

<a class="faq-anchor" name="what-is-multi-factor-authentication"></a>

---

### What is Multi-Factor Authentication (MFA)?

Multi-Factor Authentication (MFA) provides an extra level of security that you can apply to your Stockflare Account. You can enable MFA for your account from the User Settings page.

---

<a class="faq-anchor" name="how-does-mfa-work"></a>

### How does MFA Work?

Stockflare MFA uses a virtual authentication device that continually generates random, six-digit, single-use authentication codes. When logging into Stockflare with MFA enabled for your account, you enter your login information as normal, and then enter the current six-digit code by toggling on, the "I have an MFA Token" checkbox.

---

<a class="faq-anchor" name="is-there-a-fee-associated-with-using-mfa"></a>

### Is there a fee associated with using MFA?

No, never. This service is provided completely free of charge.

---

<a class="faq" name="what-is-a-virtual-mfa-device"></a>

### What is a virtual MFA device?
A virtual MFA device is an entry created in a [TOTP](http://tools.ietf.org/html/rfc6238) compatible software application that can generate six-digit authentication codes. The software application can run on any hardware device, such as a smartphone.

---

<a class="faq" name="does-stockflare-support-physical-mfa-devices"></a>

### Does Stockflare support physical MFA devices?
Unfortunately, Stockflare does not support any physical MFA devices at this time.

---

<a class="faq" name="what-are-the-differences"></a>

### What are the differences between a virtual MFA device and physical MFA devices?
Virtual MFA devices use the same protocols as the physical MFA devices. Virtual MFA devices are software based and can run on your existing devices such as smartphones. Most virtual MFA applications also allow you to enable more than one virtual MFA device which makes them more convenient than physical MFA devices.

---

<a class="faq" name="what-is-a-qr-code"></a>

### What is a QR code?
QR code is an abbreviation of Quick Response code and is a two-dimensional barcode that is readable by dedicated QR barcode readers and most camera telephones. The code consists of black modules arranged in square patterns on a white background. The QR code contains the required security configuration information to provision a virtual MFA device in your virtual MFA application.

---

<a class="faq" name="how-should-i-handle"></a>

### How should I handle and distribute the seed material for virtual MFA devices?
You should treat seed material like any other secret (for example your Stockflare password).

---

<a class="faq" name="where-do-i-enable-mfa"></a>

### Where do I enable MFA?
MFA can be enabled for any Stockflare account, from the [User Settings](https://stockflare.com/settings) page.

---

<a class="faq" name="what-information-will-i-need"></a>

### What information will I need to activate my authentication device?
When activating MFA for your account from the user settings page, you will only need a compatible virtual MFA device. Once you have captured the QR Code on the settings page, you will then need to provide two valid codes in sequence, to complete the activation of MFA for your account.

---

<a class="faq" name="if-i-enable-mfa"></a>

### If I enable MFA for my Stockflare account, do I always need to use an authentication code to sign in?
Yes. One, valid, six-digit code will need to be provided upon each login.

---

<a class="faq" name="can-i-use-a-given-authentication"></a>

### Can I use a given authentication code more than once?
No. For security reasons, each authentication code can be used only once.

---

<a class="faq" name="how-do-i-disable-mfa-for-my-stockflare-account"></a>

### How do I disable MFA for my Stockflare account?
MFA can be disabled, in the same manner it was enabled. From the [User Settings](https://stockflare.com/settings) page. You will need to enter two valid codes in sequence to disable MFA.

---

<a class="faq" name="i-accidentally-disabled-mfa"></a>

### I accidentally disabled MFA, and now my virtual device is generating invalid codes?
When you disable MFA on your account, for security purposes a new "secret" is generated. When re-enabling MFA, you will need to re-capture the QR Code. If you no longer have access to your account, please contact [info@stockflare.com](info@stockflare.com).

---

<a class="faq" name="i-lost-my-virtual-mfa-device"></a>

### I lost my Virtual MFA Device
If you have lost your device, or have lost access to any authentication codes, you need to reset MFA for your Stockflare account.

When MFA was first enabled, recovery codes were sent as an attachment to the email address associated with your Stockflare account. There are six, comma-separated recovery codes that you will need in order to reset MFA.

[You can reset MFA for your account here](https://stockflare.com/mfa/reset), follow the instructions and enter your recovery codes when prompted.

If you have lost your recovery codes, please email support@stockflare.com for further assistance.
