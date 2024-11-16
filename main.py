import random
import string

def generate_password(length=12, use_uppercase=True, use_lowercase=True, use_digits=True, use_special_chars=True):
    # Create a pool of characters based on the user's choices
    char_pool = ''
    if use_uppercase:
        char_pool += string.ascii_uppercase
    if use_lowercase:
        char_pool += string.ascii_lowercase
    if use_digits:
        char_pool += string.digits
    if use_special_chars:
        char_pool += string.punctuation
    
    # Check if the character pool is empty
    if not char_pool:
        raise ValueError("At least one character type must be selected.")

    # Generate a random password
    password = ''.join(random.choice(char_pool) for _ in range(length))
    return password

# User input for password specifications
try:
    length = int(input("Enter the desired password length (minimum 1): "))
    if length < 1:
        raise ValueError("Password length must be at least 1.")

    use_uppercase = input("Include uppercase letters? (y/n): ").lower() == 'y'
    use_lowercase = input("Include lowercase letters? (y/n): ").lower() == 'y'
    use_digits = input("Include digits? (y/n): ").lower() == 'y'
    use_special_chars = input("Include special characters? (y/n): ").lower() == 'y'

    # Generate and display the password
    password = generate_password(length, use_uppercase, use_lowercase, use_digits, use_special_chars)
    print(f"Generated password: {password}")

except ValueError as e:
    print(f"Error: {e}")
