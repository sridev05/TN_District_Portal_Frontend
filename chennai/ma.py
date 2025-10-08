import os
import json

def get_structure(path, root):
    file_tree = {}
    for entry in os.listdir(path):
        full_path = os.path.join(path, entry)
        rel_path = os.path.relpath(full_path, root)
        if os.path.isdir(full_path):
            file_tree[entry] = get_structure(full_path, root)
        else:
            file_tree[entry] = rel_path.replace("\\", "/")
    return file_tree

root_dir = r"C:\Users\vishn\Documents\ui\TN_District_Portal_Frontend\chennai"
structure = get_structure(root_dir, root_dir)

print(json.dumps(structure, indent=4))
