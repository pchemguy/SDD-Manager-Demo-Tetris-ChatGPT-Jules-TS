const fs = require('fs');
const path = require('path');

const devDir = path.join(__dirname, 'docs', 'dev');
const files = fs.readdirSync(devDir).filter(f => f.endsWith('.md')).map(f => path.join(devDir, f));

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');

    // To remove blank lines *inside* a list (between list items, at any indentation level),
    // we can look for a list item, followed by one or more blank lines, followed by another list item.
    let changed = true;
    while(changed) {
        let prev = content;
        content = content.replace(/^([ \t]*[-*] .*|[\t ]*\d+\. .*)\n\n+([ \t]*[-*] |[\t ]*\d+\. )/gm, '$1\n$2');
        changed = (prev !== content);
    }
    
    fs.writeFileSync(file, content, 'utf8');
}
console.log('Removed inner blank lines from lists with numbers and asterisks/dashes.');
