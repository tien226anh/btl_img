import os
import io


def convert_crlf_to_lf(directory, file_extensions):
    for root, _, files in os.walk(directory):
        for file_name in files:
            file_path = os.path.join(root, file_name)
            if os.path.isfile(file_path):
                _, ext = os.path.splitext(file_path)
                if ext in file_extensions:
                    with io.open(file_path, "r", newline="", encoding="utf-8") as f:
                        content = f.read()
                    with io.open(file_path, "w", newline="\n", encoding="utf-8") as f:
                        f.write(content.replace("\r\n", "\n"))
                    print(f"Converted {file_path} to LF line endings.")


# Replace 'directory_path' with the path of the directory containing your files
directory_path = "./"
# Specify the file extensions you want to convert
extensions_to_convert = [
    ".py",
    ".txt",
    ".js",
    ".tsx",
    ".ts",
]  # Add or remove extensions as needed
convert_crlf_to_lf(directory_path, extensions_to_convert)
