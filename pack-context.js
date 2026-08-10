import fs from "fs";
import path from "path";

// Directories to extract
const TARGET_DIRS = ["src", "data"];
const OUTPUT_FILE = "project_context.txt";

// File extensions to treat as code/text (ignores images like hero.png)
const TEXT_EXTENSIONS = new Set([
  ".js",
  ".jsx",
  ".ts",
  ".tsx",
  ".css",
  ".scss",
  ".json",
  ".html",
  ".svg",
  ".md",
]);

const IGNORE_FILES = new Set([".DS_Store", "thumbs.db"]);

function buildTree(dirPath, prefix = "") {
  let tree = "";
  if (!fs.existsSync(dirPath)) return tree;

  const items = fs
    .readdirSync(dirPath)
    .filter((item) => !IGNORE_FILES.has(item))
    .sort();

  items.forEach((item, index) => {
    const isLast = index === items.length - 1;
    const connector = isLast ? "└── " : "├── ";
    const fullPath = path.join(dirPath, item);
    const isDir = fs.statSync(fullPath).isDirectory();

    tree += `${prefix}${connector}${item}\n`;

    if (isDir) {
      const extension = isLast ? "    " : "│   ";
      tree += buildTree(fullPath, prefix + extension);
    }
  });

  return tree;
}

function getLanguageTag(ext) {
  const map = {
    ".js": "javascript",
    ".jsx": "jsx",
    ".css": "css",
    ".json": "json",
    ".html": "html",
    ".svg": "xml",
    ".md": "markdown",
  };
  return map[ext] || "";
}

function getFiles(dirPath) {
  let results = [];
  if (!fs.existsSync(dirPath)) return results;

  const list = fs.readdirSync(dirPath);
  list.forEach((file) => {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(fullPath));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (TEXT_EXTENSIONS.has(ext) && !IGNORE_FILES.has(file)) {
        results.push(fullPath);
      }
    }
  });
  return results;
}

function packContext() {
  let output =
    "======================================================================\n";
  output += "PROJECT ARCHITECTURE TREE\n";
  output +=
    "======================================================================\n\n";

  TARGET_DIRS.forEach((dir) => {
    if (fs.existsSync(dir)) {
      output += `${dir}/\n`;
      output += buildTree(dir);
      output += "\n";
    }
  });

  let fileCount = 0;

  TARGET_DIRS.forEach((dir) => {
    const files = getFiles(dir);
    files.forEach((filePath) => {
      const relativePath = filePath.replace(/\\/g, "/");
      const ext = path.extname(filePath).toLowerCase();
      const lang = getLanguageTag(ext);

      try {
        const content = fs.readFileSync(filePath, "utf-8");
        output +=
          "======================================================================\n";
        output += `FILE: ${relativePath}\n`;
        output +=
          "======================================================================\n";
        output += `\`\`\`${lang}\n`;
        output += content.endsWith("\n") ? content : content + "\n";
        output += "```\n\n";
        fileCount++;
      } catch (err) {
        output += `/* Error reading file ${relativePath}: ${err.message} */\n\n`;
      }
    });
  });

  fs.writeFileSync(OUTPUT_FILE, output, "utf-8");
  console.log(`Done! Packed ${fileCount} files into ${OUTPUT_FILE}`);
}

packContext();
