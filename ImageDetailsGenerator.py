# Get user input for the base URL, alt text, tags, and range
base_url = input("Enter the base URL (e.g. Hanoi): ")
alt_text = input("Enter the alt text: ")
tags = input("Enter the tags as a comma-separated list (e.g., tag1,tag2): ").split(",")
image_range_end = int(input("Enter the end of the range: "))

# Create a list of dictionaries for the image data
image_data = []

for i in range(1, image_range_end + 1):
    image_dict = {
        "image": f'"/{base_url}/{base_url}{i}.jpg"',
        "alt": f'"{alt_text}"',
        "tag": [tag.strip() for tag in tags],
    }
    image_data.append(image_dict)

# Generate the output string
output_string = ""
for image_dict in image_data:
    output_string += "{\n"
    for key, value in image_dict.items():
        output_string += f'    {key}: {value},\n'
    output_string += "},\n"

# Newline from the last entry
output_string = output_string.rstrip("\n")

# Print the final output
print(output_string)
