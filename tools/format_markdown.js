const fs = require('fs');
const path = require('path');

function formatMarkdown(file) {
    let content = fs.readFileSync(file, 'utf8');

    // Remove blank lines inside lists
    let lines = content.split('\n');
    let newLines = [];
    let inList = false;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        let isListItem = /^[ \t]*[-*] /.test(line);
        let isBlank = line.trim() === '';

        if (isListItem) {
            inList = true;
            newLines.push(line);
        } else if (isBlank && inList) {
            // Check if the next non-blank line is a list item
            let nextNonBlankIsList = false;
            for (let j = i + 1; j < lines.length; j++) {
                if (lines[j].trim() !== '') {
                    if (/^[ \t]*[-*] /.test(lines[j])) {
                        nextNonBlankIsList = true;
                    }
                    break;
                }
            }

            if (nextNonBlankIsList) {
                // Skip the blank line
            } else {
                inList = false;
                newLines.push(line);
            }
        } else {
            if (!isBlank) inList = false;
            newLines.push(line);
        }
    }
    
    // Fix extra spaces after list markers
    newLines = newLines.map(line => line.replace(/^([ \t]*[-*])\s+/g, '$1 '));
    
    // Fix indentation to 4 spaces
    newLines = newLines.map(line => {
      const match = line.match(/^([ \t]+)([-*] .*)/);
      if (match) {
          const leadingSpace = match[1];
          let depth = Math.round(leadingSpace.length / 4);
          if(depth === 0) depth = 1; 
          
          if(leadingSpace.includes('\t')) {
             depth = leadingSpace.length; 
          }
          return ' '.repeat(depth * 4) + match[2];
      }
      return line;
    });

    content = newLines.join('\n');
    
    // Ensure blank line before lists
    content = content.replace(/([^\n])\n([ \t]*[-*] )/g, '$1\n\n$2');
    
    // Ensure blank line after headings
    content = content.replace(/^(#+ .*)\n([^\n])/gm, '$1\n\n$2');
    
    // Exact single trailing newline
    content = content.trimEnd() + '\n';

    fs.writeFileSync(file, content, 'utf8');
}

const devDir = path.join(__dirname, '..', 'docs', 'dev');
if (fs.existsSync(devDir)) {
    const files = fs.readdirSync(devDir).filter(f => f.endsWith('.md')).map(f => path.join(devDir, f));
    for (const file of files) {
        formatMarkdown(file);
    }
    console.log('Formatted markdown files in docs/dev.');
} else {
    console.log('docs/dev directory not found.');
}
