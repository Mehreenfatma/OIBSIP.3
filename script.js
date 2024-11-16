function generatePassword() {
    const length = parseInt(document.getElementById("length").value);
    const useUppercase = document.getElementById("uppercase").checked;
    const useLowercase = document.getElementById("lowercase").checked;
    const useDigits = document.getElementById("digits").checked;
    const useSpecialChars = document.getElementById("special").checked;

    let charPool = '';
    if (useUppercase) charPool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLowercase) charPool += 'abcdefghijklmnopqrstuvwxyz';
    if (useDigits) charPool += '0123456789';
    if (useSpecialChars) charPool += '!@#$%^&*()_+[]{}|;:,.<>?';

    // Check if at least one character type is selected
    if (charPool === '') {
        document.getElementById("result").innerText = "Please select at least one character type.";
        return;
    }

    // Generate random password
    let password = '';
    for (let i = 0; i < length; i++) {
        password += charPool.charAt(Math.floor(Math.random() * charPool.length));
    }

    document.getElementById("result").innerText = `Generated Password: ${password}`;
}

// Function to copy the password to the clipboard
function copyToClipboard() {
    const passwordText = document.getElementById("result").innerText.replace('Generated Password: ', '');
    navigator.clipboard.writeText(passwordText)
        .then(() => {
            alert("Password copied to clipboard!");
        })
        .catch(err => {
            alert("Failed to copy password: ", err);
        });
}
