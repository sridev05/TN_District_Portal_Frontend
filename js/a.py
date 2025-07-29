import re
import json

# Path to JS file
js_file_path = r"C:\Users\vishn\Documents\ui\TN_District_Portal_Frontend\js\da.js"

# Read content
with open(js_file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Extract workingImages block
working_images_match = re.search(r'const\s+workingImages\s*=\s*{(.*?)};', content, re.DOTALL)
if not working_images_match:
    raise ValueError("❌ Could not find workingImages object.")

raw_block = working_images_match.group(1)

# STEP 1: Normalize the malformed entries like "Chennai"; "link"
fixed_block = re.sub(r'"([^"]+)"\s*;\s*"([^"]+)"', r'"\1": "\2"', raw_block)

# STEP 2: Add braces back
fixed_block = "{" + fixed_block + "}"

# STEP 3: Try to parse as JSON
try:
    working_images = json.loads(fixed_block)
except json.JSONDecodeError as e:
    print("❌ JSON decode error:", e)
    print("🔍 Fixed snippet:\n", fixed_block[:500])
    exit(1)

# STEP 4: Replace image links in all district blocks
def replace_image_links(js_code, image_map):
    def replace_match(match):
        block = match.group(0)
        name_match = re.search(r'name_en:\s*"(.*?)"', block)
        if not name_match:
            return block
        district_name = name_match.group(1)
        if district_name in image_map:
            return re.sub(r'image:\s*"(.*?)"', f'image: "{image_map[district_name]}"', block)
        return block

    return re.sub(r'{\s*name_en:.*?schemes:\s*\[.*?\]\s*}', replace_match, js_code, flags=re.DOTALL)

# STEP 5: Apply replacement
updated_content = replace_image_links(content, working_images)

# Write result
output_path = js_file_path.replace("da.js", "d.js")
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(updated_content)

print(f"✅ Image links updated and saved to: {output_path}")
