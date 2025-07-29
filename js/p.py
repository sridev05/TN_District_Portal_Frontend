import re

# Path to your JS file
file_path = r"C:\Users\vishn\Documents\ui\TN_District_Portal_Frontend\js\d.js"

# Read the file content
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Regex pattern to match all name_en entries
pattern = r'name_en\s*:\s*"([^"]+)"'

# Find all district names
district_names = re.findall(pattern, content)

# Print the names
print("Total Districts Found:", len(district_names))
for i, name in enumerate(district_names, start=1):
    print(f"{i}. {name}")
